import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { auth } from "@/lib/auth"

function timeToMinutes(time: string): number {
  const [h, m] = time.split(":").map(Number)
  return h * 60 + m
}

function minutesToTime(minutes: number): string {
  const h = Math.floor(minutes / 60)
  const m = minutes % 60
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`
}

function calcularSlots(inicio: number, fim: number, duracao: number, intervalo: number): number[] {
  const slots: number[] = []
  const slotInterval = duracao + intervalo
  if (duracao > fim - inicio) return slots
  const n = Math.floor((fim - inicio - duracao) / slotInterval) + 1
  for (let i = 0; i < n; i++) slots.push(inicio + i * slotInterval)
  return slots
}

export async function POST(req: Request) {
  const session = await auth()
  if (!session) return NextResponse.json({ error: "Não autorizado" }, { status: 401 })

  const { profissionalId, diasSemana, duracaoSessao, intervaloSessoes, horaInicio, inicioAlmoco, fimAlmoco, horaFim } = await req.json()

  const slotsManha = calcularSlots(timeToMinutes(horaInicio), timeToMinutes(inicioAlmoco), duracaoSessao, intervaloSessoes)
  const slotsTarde = calcularSlots(timeToMinutes(fimAlmoco), timeToMinutes(horaFim), duracaoSessao, intervaloSessoes)
  const slotsHorarios = [...slotsManha, ...slotsTarde]

  if (slotsHorarios.length === 0) {
    return NextResponse.json({ error: "Nenhum horário calculado com os parâmetros informados." }, { status: 400 })
  }

  let totalCriados = 0
  let totalIgnorados = 0

  for (const diaSemana of diasSemana) {
    const existentes = await prisma.horarioAtendimento.findMany({
      where: { profissionalId, diaSemana },
      select: { horaInicio: true },
    })
    const existentesSet = new Set(existentes.map((h) => h.horaInicio))
    const novosSlots = slotsHorarios.filter((s) => !existentesSet.has(minutesToTime(s)))

    const created = await prisma.$transaction(
      novosSlots.map((slot) =>
        prisma.horarioAtendimento.create({
          data: {
            profissionalId,
            diaSemana,
            horaInicio: minutesToTime(slot),
            duracaoSessao,
            intervaloSessoes,
            ativo: true,
          },
        })
      )
    )

    totalCriados += created.length
    totalIgnorados += slotsHorarios.length - novosSlots.length
  }

  return NextResponse.json({ criados: totalCriados, ignorados: totalIgnorados }, { status: 201 })
}
