import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { auth } from "@/lib/auth"

export async function GET() {
  const session = await auth()
  if (!session) return NextResponse.json({ error: "Não autorizado" }, { status: 401 })

  const profissionais = await prisma.profissional.findMany({
    where: { ativo: true },
    orderBy: { nome: "asc" },
    include: { especialidade: { select: { nome: true } } },
  })
  return NextResponse.json(profissionais)
}

export async function POST(req: Request) {
  const session = await auth()
  if (!session) return NextResponse.json({ error: "Não autorizado" }, { status: 401 })
  if (!["ADMIN", "RECEPCIONISTA"].includes(session.user.papel)) {
    return NextResponse.json({ error: "Sem permissão" }, { status: 403 })
  }

  const body = await req.json()
  const profissional = await prisma.profissional.create({ data: body })
  return NextResponse.json(profissional, { status: 201 })
}
