import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { auth } from "@/lib/auth"

export async function GET() {
  const session = await auth()
  if (!session) return NextResponse.json({ error: "Não autorizado" }, { status: 401 })

  const especialidades = await prisma.especialidade.findMany({
    where: { ativo: true },
    orderBy: { nome: "asc" },
  })
  return NextResponse.json(especialidades)
}

export async function POST(req: Request) {
  const session = await auth()
  if (!session) return NextResponse.json({ error: "Não autorizado" }, { status: 401 })
  if (session.user.papel !== "ADMIN") return NextResponse.json({ error: "Sem permissão" }, { status: 403 })

  const body = await req.json()
  const especialidade = await prisma.especialidade.create({ data: body })
  return NextResponse.json(especialidade, { status: 201 })
}
