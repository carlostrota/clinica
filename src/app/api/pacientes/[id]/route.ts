import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { auth } from "@/lib/auth"

export async function GET(_: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await auth()
  if (!session) return NextResponse.json({ error: "Não autorizado" }, { status: 401 })

  const { id } = await params
  const paciente = await prisma.paciente.findUnique({
    where: { id },
    select: {
      id: true,
      nome: true,
      especialidades: {
        include: {
          especialidade: { select: { id: true, nome: true, cor: true } },
        },
      },
    },
  })

  if (!paciente) return NextResponse.json({ error: "Não encontrado" }, { status: 404 })
  return NextResponse.json(paciente)
}

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await auth()
  if (!session) return NextResponse.json({ error: "Não autorizado" }, { status: 401 })

  const { id } = await params
  const body = await req.json()
  const { especialidadeIds, ...data } = body

  // Normalize optional FK fields — empty string fails FK constraint in PG
  data.convenioId = data.convenioId || null
  data.dataNasc = data.dataNasc ? new Date(data.dataNasc) : null

  // Use a transaction instead of nested write to avoid Prisma 7 issues
  // with deleteMany + create on explicit join tables
  await prisma.$transaction([
    prisma.pacienteEspecialidade.deleteMany({ where: { pacienteId: id } }),
    prisma.paciente.update({ where: { id }, data }),
    ...(especialidadeIds?.length
      ? (especialidadeIds as string[]).map((espId) =>
          prisma.pacienteEspecialidade.create({ data: { pacienteId: id, especialidadeId: espId } })
        )
      : []),
  ])

  return NextResponse.json({ ok: true })
}

export async function DELETE(_: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await auth()
  if (!session) return NextResponse.json({ error: "Não autorizado" }, { status: 401 })
  if (session.user.papel !== "ADMIN") return NextResponse.json({ error: "Sem permissão" }, { status: 403 })

  const { id } = await params
  await prisma.paciente.delete({ where: { id } })
  return NextResponse.json({ ok: true })
}
