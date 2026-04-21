import { prisma } from "@/lib/prisma"
import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"
import Link from "next/link"
import { Plus, Pencil } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default async function UsuariosPage() {
  const session = await auth()
  if (session?.user.papel !== "ADMIN") redirect("/dashboard")

  const usuarios = await prisma.user.findMany({
    orderBy: { nome: "asc" },
    include: { profissional: { select: { nome: true } } },
  })

  const papelLabels: Record<string, string> = {
    ADMIN: "Administrador",
    RECEPCIONISTA: "Recepcionista",
    TERAPEUTA: "Terapeuta",
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold" style={{ color: "var(--text-primary)" }}>
            Usuários
          </h1>
          <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>
            {usuarios.length} usuário{usuarios.length !== 1 ? "s" : ""} cadastrado{usuarios.length !== 1 ? "s" : ""}
          </p>
        </div>
        <Link href="/usuarios/novo">
          <Button>
            <Plus size={16} />
            Novo usuário
          </Button>
        </Link>
      </div>

      <div className="flex flex-col gap-2">
        {usuarios.map((user) => (
          <Card key={user.id} className="flex items-center gap-4 py-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm shrink-0"
              style={{ background: "var(--bg-blob)", color: "var(--text-secondary)" }}
            >
              {user.nome.charAt(0)}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium" style={{ color: "var(--text-primary)" }}>{user.nome}</p>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs" style={{ color: "var(--text-muted)" }}>{user.email}</span>
                {user.profissional && (
                  <span className="text-xs" style={{ color: "var(--text-muted)" }}>
                    · {user.profissional.nome}
                  </span>
                )}
              </div>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <Badge variant={user.papel === "ADMIN" ? "warning" : user.papel === "TERAPEUTA" ? "success" : "default"}>
                {papelLabels[user.papel]}
              </Badge>
              <Badge variant={user.ativo ? "success" : "error"}>
                {user.ativo ? "Ativo" : "Inativo"}
              </Badge>
            </div>
            <Link href={`/usuarios/${user.id}`}>
              <button className="p-2 rounded-lg hover:opacity-70 transition-opacity">
                <Pencil size={16} style={{ color: "var(--text-muted)" }} />
              </button>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  )
}
