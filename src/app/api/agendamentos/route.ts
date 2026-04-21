import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { auth } from "@/lib/auth"

const DIA_TO_JS: Record<string, number> = {
  SEGUNDA: 1, TERCA: 2, QUARTA: 3, QUINTA: 4, SEXTA: 5, SABADO: 6,
}

export async function GET(req: Request) {
  const session = await auth()
  if (!session) return NextResponse.json({ error: "Não autorizado" }, { status: 401 })

  const { searchParams } = new URL(req.url)
  const profissionalId = searchParams.get("profissionalId")
  const data = searchParams.get("data")

  const dataInicio = data ? new Date(data) : new Date(new Date().setHours(0, 0, 0, 0))

  const agendamentos = await prisma.agendamento.findMany({
    where: {
      dataHoraInicio: { gte: dataInicio },
      ...(profissionalId ? { profissionalId } : {}),
    },
    orderBy: { dataHoraInicio: "asc" },
    include: {
      profissional: { select: { nome: true } },
      especialidade: { select: { nome: true } },
      pacientes: { include: { paciente: { select: { nome: true } } } },
    },
  })
  return NextResponse.json(agendamentos)
}

export async function POST(req: Request) {
  const session = await auth()
  if (!session) return NextResponse.json({ error: "Não autorizado" }, { status: 401 })

  const body = await req.json()
  const {
    pacienteIds,
    tipo,
    especialidadeId,
    profissionalId,
    diaSemana,
    horaInicio,
    dataInicio,
    totalSessoes,
    status,
    observacoes,
  } = body

  // Look up the horário to get session duration
  const horario = await prisma.horarioAtendimento.findFirst({
    where: { profissionalId, diaSemana, horaInicio },
  })
  const duracaoMinutos = horario?.duracaoSessao ?? 60

  // Parse start date (YYYY-MM-DD) and time (HH:MM) as local datetime
  const [year, month, day] = dataInicio.split("-").map(Number)
  const [hora, minuto] = horaInicio.split(":").map(Number)

  // Validate weekday
  const startDate = new Date(year, month - 1, day)
  if (startDate.getDay() !== DIA_TO_JS[diaSemana]) {
    return NextResponse.json({ error: "A data de início não corresponde ao dia da semana selecionado." }, { status: 400 })
  }

  const recorrenciaId = crypto.randomUUID()

  const created = await prisma.$transaction(
    Array.from({ length: totalSessoes }, (_, i) => {
      const inicio = new Date(year, month - 1, day + i * 7, hora, minuto, 0)
      const fim = new Date(inicio.getTime() + duracaoMinutos * 60_000)

      return prisma.agendamento.create({
        data: {
          tipo,
          especialidadeId,
          profissionalId,
          dataHoraInicio: inicio,
          dataHoraFim: fim,
          numeroSessoes: 1,
          status,
          observacoes,
          origem: "MANUAL",
          recorrenciaId,
          pacientes: {
            create: pacienteIds.map((id: string) => ({ pacienteId: id })),
          },
        },
      })
    })
  )

  return NextResponse.json({ criados: created.length, recorrenciaId }, { status: 201 })
}
