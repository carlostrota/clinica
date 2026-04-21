import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET() {
  try {
    const userCount = await prisma.user.count()
    const users = await prisma.user.findMany({
      select: { email: true, ativo: true, papel: true },
    })
    return NextResponse.json({
      ok: true,
      database: "conectado",
      totalUsuarios: userCount,
      usuarios: users,
    })
  } catch (error) {
    return NextResponse.json({
      ok: false,
      database: "erro",
      erro: String(error),
    }, { status: 500 })
  }
}
