import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { auth } from "@/lib/auth"
import bcrypt from "bcryptjs"

export async function POST(req: Request) {
  const session = await auth()
  if (!session || session.user.papel !== "ADMIN") {
    return NextResponse.json({ error: "Sem permissão" }, { status: 403 })
  }

  const body = await req.json()
  const { senha, ...data } = body

  if (!senha) return NextResponse.json({ error: "Senha é obrigatória" }, { status: 400 })

  const exists = await prisma.user.findUnique({ where: { email: data.email } })
  if (exists) return NextResponse.json({ error: "E-mail já cadastrado" }, { status: 400 })

  const senhaHash = await bcrypt.hash(senha, 12)
  const user = await prisma.user.create({ data: { ...data, senha: senhaHash } })
  return NextResponse.json(user, { status: 201 })
}
