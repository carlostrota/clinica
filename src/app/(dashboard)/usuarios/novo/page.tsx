import { prisma } from "@/lib/prisma"
import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"
import { UsuarioForm } from "@/components/forms/usuario-form"

export default async function NovoUsuarioPage() {
  const session = await auth()
  if (session?.user.papel !== "ADMIN") redirect("/dashboard")

  const profissionais = await prisma.profissional.findMany({
    where: { ativo: true, user: null },
    orderBy: { nome: "asc" },
    select: { id: true, nome: true },
  })

  return (
    <div className="flex flex-col gap-6 max-w-lg">
      <div>
        <h1 className="text-2xl font-bold" style={{ color: "var(--text-primary)" }}>
          Novo usuário
        </h1>
      </div>
      <UsuarioForm profissionais={profissionais} />
    </div>
  )
}
