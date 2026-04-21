import { prisma } from "@/lib/prisma"
import Link from "next/link"
import { Plus, Search, Pencil } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { formatDate } from "@/lib/utils"

interface Props {
  searchParams: Promise<{ busca?: string }>
}

export default async function PacientesPage({ searchParams }: Props) {
  const { busca } = await searchParams

  const pacientes = await prisma.paciente.findMany({
    where: busca
      ? {
          OR: [
            { nome: { contains: busca, mode: "insensitive" } },
            { cpf: { contains: busca } },
            { telefone: { contains: busca } },
          ],
        }
      : undefined,
    orderBy: { nome: "asc" },
    include: {
      especialidades: { include: { especialidade: { select: { nome: true } } } },
    },
  })

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold" style={{ color: "var(--text-primary)" }}>
            Pacientes
          </h1>
          <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>
            {pacientes.length} paciente{pacientes.length !== 1 ? "s" : ""}
            {busca ? ` para "${busca}"` : ""}
          </p>
        </div>
        <Link href="/pacientes/novo">
          <Button>
            <Plus size={16} />
            Novo paciente
          </Button>
        </Link>
      </div>

      {/* Search */}
      <form method="GET" className="relative max-w-sm">
        <Search
          size={16}
          className="absolute left-3 top-1/2 -translate-y-1/2"
          style={{ color: "var(--text-muted)" }}
        />
        <input
          name="busca"
          defaultValue={busca}
          placeholder="Buscar por nome, CPF ou telefone..."
          className="w-full pl-9 pr-4 py-2 rounded-lg text-sm outline-none"
          style={{
            background: "var(--card)",
            border: "1px solid var(--card-border)",
            color: "var(--text-primary)",
          }}
        />
      </form>

      <div className="flex flex-col gap-2">
        {pacientes.map((pac) => (
          <Card key={pac.id} className="flex items-center gap-4 py-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm shrink-0"
              style={{ background: "var(--bg-blob)", color: "var(--text-secondary)" }}
            >
              {pac.nome.charAt(0)}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <p className="font-medium" style={{ color: "var(--text-primary)" }}>
                  {pac.nome}
                </p>
                <Badge variant={pac.ativo ? "success" : "error"}>
                  {pac.ativo ? "Ativo" : "Inativo"}
                </Badge>
              </div>
              <div className="flex items-center gap-3 mt-1 flex-wrap">
                {pac.dataNasc && (
                  <span className="text-xs" style={{ color: "var(--text-muted)" }}>
                    {formatDate(pac.dataNasc)}
                  </span>
                )}
                {pac.telefone && (
                  <span className="text-xs" style={{ color: "var(--text-muted)" }}>
                    {pac.telefone}
                  </span>
                )}
                {pac.especialidades.map((pe) => (
                  <Badge key={pe.especialidadeId} variant="default">
                    {pe.especialidade.nome}
                  </Badge>
                ))}
              </div>
            </div>
            <Link href={`/pacientes/${pac.id}`}>
              <button className="p-2 rounded-lg hover:opacity-70 transition-opacity">
                <Pencil size={16} style={{ color: "var(--text-muted)" }} />
              </button>
            </Link>
          </Card>
        ))}
      </div>

      {pacientes.length === 0 && (
        <Card className="py-12 text-center">
          <p style={{ color: "var(--text-muted)" }}>
            {busca ? "Nenhum paciente encontrado." : "Nenhum paciente cadastrado."}
          </p>
          {!busca && (
            <Link href="/pacientes/novo">
              <Button className="mt-4">Cadastrar primeiro paciente</Button>
            </Link>
          )}
        </Card>
      )}
    </div>
  )
}
