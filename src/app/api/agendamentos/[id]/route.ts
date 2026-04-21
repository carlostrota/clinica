import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { auth } from "@/lib/auth"

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await auth()
  if (!session) return NextResponse.json({ error: "Não autorizado" }, { status: 401 })

  const { id } = await params
  const body = await req.json()
  const { pacienteIds, ...data } = body

  const agendamento = await prisma.agendamento.update({
    where: { id },
    data: {
      ...data,
      origem: "MANUAL",
      pacientes: pacienteIds !== undefined
        ? {
            deleteMany: {},
            create: pacienteIds.map((pId: string) => ({ pacienteId: pId })),
          }
        : undefined,
    },
  })
  return NextResponse.json(agendamento)
}

export async function DELETE(_: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await auth()
  if (!session) return NextResponse.json({ error: "Não autorizado" }, { status: 401 })

  const { id } = await params
  await prisma.agendamento.delete({ where: { id } })
  return NextResponse.json({ ok: true })
}
