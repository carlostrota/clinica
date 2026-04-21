import { prisma } from "@/lib/prisma"
import Link from "next/link"
import { Plus, Pencil } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default async function EspecialidadesPage() {
  const especialidades = await prisma.especialidade.findMany({
    orderBy: { nome: "asc" },
    include: { _count: { select: { profissionais: true } } },
  })

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold" style={{ color: "var(--text-primary)" }}>
            Especialidades
          </h1>
          <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>
            {especialidades.length} especialidade{especialidades.length !== 1 ? "s" : ""} cadastrada{especialidades.length !== 1 ? "s" : ""}
          </p>
        </div>
        <Link href="/especialidades/novo">
          <Button>
            <Plus size={16} />
            Nova especialidade
          </Button>
        </Link>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {especialidades.map((esp) => (
          <Card key={esp.id} className="flex flex-col gap-3">
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-2 min-w-0">
                {esp.cor && (
                  <div
                    className="w-3 h-3 rounded-full shrink-0"
                    style={{ background: esp.cor }}
                  />
                )}
                <h3 className="font-semibold text-base truncate" style={{ color: "var(--text-primary)" }}>
                  {esp.nome}
                </h3>
              </div>
              <Link href={`/especialidades/${esp.id}`}>
                <button className="p-1.5 rounded-lg hover:opacity-70 transition-opacity">
                  <Pencil size={14} style={{ color: "var(--text-muted)" }} />
                </button>
              </Link>
            </div>

            <div className="flex items-center gap-2">
              <Badge variant={esp.tipo === "CLINICA" ? "default" : "success"}>
                {esp.tipo === "CLINICA" ? "Clínica" : "Terapêutica"}
              </Badge>
              <Badge variant={esp.ativo ? "success" : "error"}>
                {esp.ativo ? "Ativa" : "Inativa"}
              </Badge>
            </div>

            {esp.descricao && (
              <p className="text-xs line-clamp-2" style={{ color: "var(--text-muted)" }}>
                {esp.descricao}
              </p>
            )}

            <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
              {esp._count.profissionais} profissional{esp._count.profissionais !== 1 ? "is" : ""} vinculado{esp._count.profissionais !== 1 ? "s" : ""}
            </p>
          </Card>
        ))}
      </div>

      {especialidades.length === 0 && (
        <Card className="py-12 text-center">
          <p style={{ color: "var(--text-muted)" }}>Nenhuma especialidade cadastrada.</p>
          <Link href="/especialidades/novo">
            <Button className="mt-4">Cadastrar primeira especialidade</Button>
          </Link>
        </Card>
      )}
    </div>
  )
}
