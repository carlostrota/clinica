import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { auth } from "@/lib/auth"

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await auth()
  if (!session) return NextResponse.json({ error: "Não autorizado" }, { status: 401 })

  const { id } = await params
  const body = await req.json()
  const { especialidadeIds, ...data } = body

  const paciente = await prisma.paciente.update({
    where: { id },
    data: {
      ...data,
      dataNasc: data.dataNasc ? new Date(data.dataNasc) : undefined,
      especialidades: especialidadeIds !== undefined
        ? {
            deleteMany: {},
            create: especialidadeIds.map((espId: string) => ({ especialidadeId: espId })),
          }
        : undefined,
    },
  })
  return NextResponse.json(paciente)
}

export async function DELETE(_: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await auth()
  if (!session) return NextResponse.json({ error: "Não autorizado" }, { status: 401 })
  if (session.user.papel !== "ADMIN") return NextResponse.json({ error: "Sem permissão" }, { status: 403 })

  const { id } = await params
  await prisma.paciente.delete({ where: { id } })
  return NextResponse.json({ ok: true })
}
