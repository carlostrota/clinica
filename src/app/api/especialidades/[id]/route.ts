import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { auth } from "@/lib/auth"

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await auth()
  if (!session) return NextResponse.json({ error: "Não autorizado" }, { status: 401 })
  if (session.user.papel !== "ADMIN") return NextResponse.json({ error: "Sem permissão" }, { status: 403 })

  const { id } = await params
  const body = await req.json()
  const especialidade = await prisma.especialidade.update({ where: { id }, data: body })
  return NextResponse.json(especialidade)
}

export async function DELETE(_: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await auth()
  if (!session) return NextResponse.json({ error: "Não autorizado" }, { status: 401 })
  if (session.user.papel !== "ADMIN") return NextResponse.json({ error: "Sem permissão" }, { status: 403 })

  const { id } = await params
  await prisma.especialidade.delete({ where: { id } })
  return NextResponse.json({ ok: true })
}
