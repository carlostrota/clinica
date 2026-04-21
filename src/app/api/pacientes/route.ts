import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { auth } from "@/lib/auth"

export async function GET(req: Request) {
  const session = await auth()
  if (!session) return NextResponse.json({ error: "Não autorizado" }, { status: 401 })

  const { searchParams } = new URL(req.url)
  const busca = searchParams.get("busca")

  const pacientes = await prisma.paciente.findMany({
    where: busca
      ? { OR: [{ nome: { contains: busca, mode: "insensitive" } }, { cpf: { contains: busca } }] }
      : undefined,
    orderBy: { nome: "asc" },
    select: { id: true, nome: true, telefone: true, cpf: true, perfil: true },
  })
  return NextResponse.json(pacientes)
}

export async function POST(req: Request) {
  const session = await auth()
  if (!session) return NextResponse.json({ error: "Não autorizado" }, { status: 401 })

  const body = await req.json()
  const { especialidadeIds, ...data } = body

  const paciente = await prisma.paciente.create({
    data: {
      ...data,
      dataNasc: data.dataNasc ? new Date(data.dataNasc) : undefined,
      especialidades: especialidadeIds?.length
        ? { create: especialidadeIds.map((id: string) => ({ especialidadeId: id })) }
        : undefined,
    },
  })
  return NextResponse.json(paciente, { status: 201 })
}
