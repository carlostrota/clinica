import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { auth } from "@/lib/auth"

export async function GET(req: Request) {
  const session = await auth()
  if (!session) return NextResponse.json({ error: "Não autorizado" }, { status: 401 })

  const { searchParams } = new URL(req.url)
  const profissionalId = searchParams.get("profissionalId")

  const horarios = await prisma.horarioAtendimento.findMany({
    where: {
      ativo: true,
      ...(profissionalId ? { profissionalId } : {}),
    },
    orderBy: [{ diaSemana: "asc" }, { horaInicio: "asc" }],
  })
  return NextResponse.json(horarios)
}

export async function POST(req: Request) {
  const session = await auth()
  if (!session) return NextResponse.json({ error: "Não autorizado" }, { status: 401 })

  const body = await req.json()
  const horario = await prisma.horarioAtendimento.create({ data: body })
  return NextResponse.json(horario, { status: 201 })
}
