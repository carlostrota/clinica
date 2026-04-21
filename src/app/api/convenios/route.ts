import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { auth } from "@/lib/auth"

export async function GET() {
  const session = await auth()
  if (!session) return NextResponse.json({ error: "Não autorizado" }, { status: 401 })

  const convenios = await prisma.convenio.findMany({
    orderBy: { nome: "asc" },
  })
  return NextResponse.json(convenios)
}

export async function POST(req: Request) {
  const session = await auth()
  if (!session) return NextResponse.json({ error: "Não autorizado" }, { status: 401 })
  if (session.user.papel !== "ADMIN") return NextResponse.json({ error: "Sem permissão" }, { status: 403 })

  const body = await req.json()
  const convenio = await prisma.convenio.create({ data: body })
  return NextResponse.json(convenio, { status: 201 })
}
