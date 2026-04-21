import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { auth } from "@/lib/auth"
import bcrypt from "bcryptjs"

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await auth()
  if (!session || session.user.papel !== "ADMIN") {
    return NextResponse.json({ error: "Sem permissão" }, { status: 403 })
  }

  const { id } = await params
  const body = await req.json()
  const { senha, ...data } = body

  const updateData: Record<string, unknown> = { ...data }
  if (senha) {
    updateData.senha = await bcrypt.hash(senha, 12)
  }

  const user = await prisma.user.update({ where: { id }, data: updateData })
  return NextResponse.json(user)
}
