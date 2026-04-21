import { prisma } from "@/lib/prisma"
import { auth } from "@/lib/auth"
import { redirect, notFound } from "next/navigation"
import { UsuarioForm } from "@/components/forms/usuario-form"

export default async function EditarUsuarioPage({ params }: { params: Promise<{ id: string }> }) {
  const session = await auth()
  if (session?.user.papel !== "ADMIN") redirect("/dashboard")

  const { id } = await params
  const [usuario, profissionais] = await Promise.all([
    prisma.user.findUnique({ where: { id } }),
    prisma.profissional.findMany({
      where: { ativo: true, OR: [{ user: { is: null } }, { user: { is: { id } } }] },
      orderBy: { nome: "asc" },
      select: { id: true, nome: true },
    }),
  ])

  if (!usuario) notFound()

  return (
    <div className="flex flex-col gap-6 max-w-lg">
      <div>
        <h1 className="text-2xl font-bold" style={{ color: "var(--text-primary)" }}>
          Editar usuário
        </h1>
        <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>{usuario.nome}</p>
      </div>
      <UsuarioForm
        profissionais={profissionais}
        initialData={{
          id: usuario.id,
          nome: usuario.nome,
          email: usuario.email,
          papel: usuario.papel as "ADMIN" | "RECEPCIONISTA" | "TERAPEUTA",
          profissionalId: usuario.profissionalId ?? undefined,
          ativo: usuario.ativo,
        }}
      />
    </div>
  )
}
