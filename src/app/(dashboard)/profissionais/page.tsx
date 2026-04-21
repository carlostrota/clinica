import { prisma } from "@/lib/prisma"
import Link from "next/link"
import { Plus, Pencil } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default async function ProfissionaisPage() {
  const profissionais = await prisma.profissional.findMany({
    orderBy: { nome: "asc" },
    include: {
      especialidade: { select: { nome: true, cor: true } },
      _count: { select: { agendamentos: true } },
    },
  })

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold" style={{ color: "var(--text-primary)" }}>
            Profissionais
          </h1>
          <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>
            {profissionais.length} profissional{profissionais.length !== 1 ? "is" : ""} cadastrado{profissionais.length !== 1 ? "s" : ""}
          </p>
        </div>
        <Link href="/profissionais/novo">
          <Button>
            <Plus size={16} />
            Novo profissional
          </Button>
        </Link>
      </div>

      <div className="flex flex-col gap-3">
        {profissionais.map((prof) => (
          <Card key={prof.id} className="flex items-center gap-4 py-4">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold text-sm shrink-0"
              style={{ background: prof.especialidade.cor ?? "var(--accent)" }}
            >
              {prof.nome.charAt(0)}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <p className="font-medium" style={{ color: "var(--text-primary)" }}>
                  {prof.nome}
                </p>
                {prof.registro && (
                  <span className="text-xs" style={{ color: "var(--text-muted)" }}>
                    {prof.registro}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2 mt-1 flex-wrap">
                <Badge variant="default">{prof.especialidade.nome}</Badge>
                <Badge variant={prof.ativo ? "success" : "error"}>
                  {prof.ativo ? "Ativo" : "Inativo"}
                </Badge>
                <span className="text-xs" style={{ color: "var(--text-muted)" }}>
                  {prof._count.agendamentos} agendamento{prof._count.agendamentos !== 1 ? "s" : ""}
                </span>
              </div>
            </div>
            <Link href={`/profissionais/${prof.id}`}>
              <button className="p-2 rounded-lg hover:opacity-70 transition-opacity">
                <Pencil size={16} style={{ color: "var(--text-muted)" }} />
              </button>
            </Link>
          </Card>
        ))}
      </div>

      {profissionais.length === 0 && (
        <Card className="py-12 text-center">
          <p style={{ color: "var(--text-muted)" }}>Nenhum profissional cadastrado.</p>
          <Link href="/profissionais/novo">
            <Button className="mt-4">Cadastrar primeiro profissional</Button>
          </Link>
        </Card>
      )}
    </div>
  )
}
