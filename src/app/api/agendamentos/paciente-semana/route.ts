import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { auth } from "@/lib/auth"
import type { DiaSemana } from "@/generated/prisma"

const DIA_TO_JS: Record<string, number> = {
  SEGUNDA: 1, TERCA: 2, QUARTA: 3, QUINTA: 4, SEXTA: 5, SABADO: 6,
}

type Disciplina = {
  especialidadeId: string
  profissionalId: string
  diaSemana: DiaSemana
  horaInicio: string
}

export async function POST(req: Request) {
  const session = await auth()
  if (!session) return NextResponse.json({ error: "Não autorizado" }, { status: 401 })

  const body = await req.json()
  const { pacienteId, dataInicio, totalSemanas, disciplinas } = body as {
    pacienteId: string
    dataInicio: string
    totalSemanas: number
    disciplinas: Disciplina[]
  }

  if (!pacienteId || !dataInicio || !totalSemanas || !disciplinas?.length) {
    return NextResponse.json({ error: "Dados incompletos." }, { status: 400 })
  }

  // Parse dataInicio as local date (YYYY-MM-DD)
  const [y, m, d] = dataInicio.split("-").map(Number)
  const startDate = new Date(y, m - 1, d)
  const startDay = startDate.getDay() // 0=Sun … 6=Sat

  // For each discipline, look up the session duration
  const horariosBusca = await Promise.all(
    disciplinas.map((disc) =>
      prisma.horarioAtendimento.findFirst({
        where: { profissionalId: disc.profissionalId, diaSemana: disc.diaSemana, horaInicio: disc.horaInicio },
        select: { duracaoSessao: true },
      })
    )
  )

  const operations = disciplinas.flatMap((disc, idx) => {
    const duracao = horariosBusca[idx]?.duracaoSessao ?? 60
    const [hora, minuto] = disc.horaInicio.split(":").map(Number)
    const targetDay = DIA_TO_JS[disc.diaSemana]
    // offset to reach the correct weekday on or after startDate
    const offset = (targetDay - startDay + 7) % 7
    const recorrenciaId = crypto.randomUUID()

    return Array.from({ length: totalSemanas }, (_, i) => {
      const inicio = new Date(y, m - 1, d + offset + i * 7, hora, minuto, 0)
      const fim = new Date(inicio.getTime() + duracao * 60_000)
      return prisma.agendamento.create({
        data: {
          tipo: "INDIVIDUAL",
          especialidadeId: disc.especialidadeId,
          profissionalId: disc.profissionalId,
          dataHoraInicio: inicio,
          dataHoraFim: fim,
          numeroSessoes: 1,
          status: "AGENDADO",
          origem: "MANUAL",
          recorrenciaId,
          pacientes: { create: [{ pacienteId }] },
        },
      })
    })
  })

  const criados = await prisma.$transaction(operations)

  return NextResponse.json(
    { criados: criados.length, disciplinas: disciplinas.length },
    { status: 201 }
  )
}
