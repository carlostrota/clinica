import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { auth } from "@/lib/auth"
import { DiaSemana } from "@/generated/prisma"

export async function DELETE(req: Request) {
  const session = await auth()
  if (!session) return NextResponse.json({ error: "Não autorizado" }, { status: 401 })

  const { searchParams } = new URL(req.url)
  const profissionalId = searchParams.get("profissionalId")
  const diaSemana = searchParams.get("diaSemana")

  if (!profissionalId || !diaSemana) {
    return NextResponse.json({ error: "profissionalId e diaSemana são obrigatórios" }, { status: 400 })
  }

  const { count } = await prisma.horarioAtendimento.deleteMany({
    where: { profissionalId, diaSemana: diaSemana as DiaSemana },
  })

  return NextResponse.json({ apagados: count })
}
