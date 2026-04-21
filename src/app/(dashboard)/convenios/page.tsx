import { prisma } from "@/lib/prisma"
import Link from "next/link"
import { Plus, Pencil } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default async function ConveniosPage() {
  const convenios = await prisma.convenio.findMany({
    orderBy: { nome: "asc" },
    include: { _count: { select: { pacientes: true } } },
  })

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold" style={{ color: "var(--text-primary)" }}>
            Convênios
          </h1>
          <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>
            {convenios.length} convênio{convenios.length !== 1 ? "s" : ""} cadastrado{convenios.length !== 1 ? "s" : ""}
          </p>
        </div>
        <Link href="/convenios/novo">
          <Button>
            <Plus size={16} />
            Novo convênio
          </Button>
        </Link>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {convenios.map((conv) => (
          <Card key={conv.id} className="flex flex-col gap-3">
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-semibold text-base truncate" style={{ color: "var(--text-primary)" }}>
                {conv.nome}
              </h3>
              <Link href={`/convenios/${conv.id}`}>
                <button className="p-1.5 rounded-lg hover:opacity-70 transition-opacity">
                  <Pencil size={14} style={{ color: "var(--text-muted)" }} />
                </button>
              </Link>
            </div>

            <Badge variant={conv.ativo ? "success" : "error"}>
              {conv.ativo ? "Ativo" : "Inativo"}
            </Badge>

            {conv.descricao && (
              <p className="text-xs line-clamp-2" style={{ color: "var(--text-muted)" }}>
                {conv.descricao}
              </p>
            )}

            <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
              {conv._count.pacientes} paciente{conv._count.pacientes !== 1 ? "s" : ""} vinculado{conv._count.pacientes !== 1 ? "s" : ""}
            </p>
          </Card>
        ))}
      </div>

      {convenios.length === 0 && (
        <Card className="py-12 text-center">
          <p style={{ color: "var(--text-muted)" }}>Nenhum convênio cadastrado.</p>
          <Link href="/convenios/novo">
            <Button className="mt-4">Cadastrar primeiro convênio</Button>
          </Link>
        </Card>
      )}
    </div>
  )
}
