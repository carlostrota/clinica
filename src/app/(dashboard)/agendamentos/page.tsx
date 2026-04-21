import { prisma } from "@/lib/prisma"
import Link from "next/link"
import { Plus } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { STATUS_AGENDAMENTO, formatDateTime } from "@/lib/utils"

interface Props {
  searchParams: Promise<{
    data?: string
    profissionalId?: string
    status?: string
  }>
}

export default async function AgendamentosPage({ searchParams }: Props) {
  const { data, profissionalId, status } = await searchParams

  const dataInicio = data ? new Date(data + "T00:00:00") : new Date(new Date().setHours(0, 0, 0, 0))
  const dataFim = new Date(dataInicio)
  dataFim.setDate(dataFim.getDate() + 6)
  dataFim.setHours(23, 59, 59, 999)

  const [agendamentos, profissionais] = await Promise.all([
    prisma.agendamento.findMany({
      where: {
        dataHoraInicio: { gte: dataInicio, lte: dataFim },
        ...(profissionalId ? { profissionalId } : {}),
        ...(status ? { status: status as "AGENDADO" | "CONFIRMADO" | "REALIZADO" | "CANCELADO" | "FALTOU" } : {}),
      },
      orderBy: { dataHoraInicio: "asc" },
      include: {
        profissional: { select: { nome: true, especialidade: { select: { cor: true } } } },
        especialidade: { select: { nome: true } },
        pacientes: { include: { paciente: { select: { nome: true } } } },
      },
    }),
    prisma.profissional.findMany({ where: { ativo: true }, orderBy: { nome: "asc" }, select: { id: true, nome: true } }),
  ])

  const statusOptions = [
    { value: "", label: "Todos os status" },
    { value: "AGENDADO", label: "Agendado" },
    { value: "CONFIRMADO", label: "Confirmado" },
    { value: "REALIZADO", label: "Realizado" },
    { value: "CANCELADO", label: "Cancelado" },
    { value: "FALTOU", label: "Faltou" },
  ]

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold" style={{ color: "var(--text-primary)" }}>
            Agendamentos
          </h1>
          <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>
            {agendamentos.length} agendamento{agendamentos.length !== 1 ? "s" : ""} encontrado{agendamentos.length !== 1 ? "s" : ""}
          </p>
        </div>
        <Link href="/agendamentos/novo">
          <Button>
            <Plus size={16} />
            Novo agendamento
          </Button>
        </Link>
      </div>

      {/* Filtros */}
      <form method="GET" className="flex flex-wrap gap-3">
        <input
          type="date"
          name="data"
          defaultValue={data ?? dataInicio.toISOString().split("T")[0]}
          className="px-3 py-2 rounded-lg text-sm outline-none"
          style={{ background: "var(--card)", border: "1px solid var(--card-border)", color: "var(--text-primary)" }}
        />
        <select
          name="profissionalId"
          defaultValue={profissionalId ?? ""}
          className="px-3 py-2 rounded-lg text-sm outline-none cursor-pointer"
          style={{ background: "var(--card)", border: "1px solid var(--card-border)", color: "var(--text-primary)" }}
        >
          <option value="">Todos os profissionais</option>
          {profissionais.map((p) => (
            <option key={p.id} value={p.id}>{p.nome}</option>
          ))}
        </select>
        <select
          name="status"
          defaultValue={status ?? ""}
          className="px-3 py-2 rounded-lg text-sm outline-none cursor-pointer"
          style={{ background: "var(--card)", border: "1px solid var(--card-border)", color: "var(--text-primary)" }}
        >
          {statusOptions.map((o) => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
        <Button type="submit" variant="secondary" size="sm">Filtrar</Button>
      </form>

      {/* Lista */}
      <div className="flex flex-col gap-2">
        {agendamentos.map((ag) => {
          const statusInfo = STATUS_AGENDAMENTO[ag.status]
          const nomes = ag.pacientes.map((p) => p.paciente.nome).join(", ")

          return (
            <Link key={ag.id} href={`/agendamentos/${ag.id}`}>
              <Card className="flex items-center gap-4 py-3 cursor-pointer hover:opacity-90 transition-opacity">
                <div
                  className="w-1 self-stretch rounded-full shrink-0"
                  style={{ background: ag.profissional.especialidade.cor ?? "var(--accent)" }}
                />
                <div className="flex flex-col gap-0.5 w-24 shrink-0">
                  <p className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
                    {new Date(ag.dataHoraInicio).toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })}
                  </p>
                  <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                    {new Date(ag.dataHoraInicio).toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit" })}
                  </p>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate" style={{ color: "var(--text-primary)" }}>
                    {nomes || "Sem paciente"}
                  </p>
                  <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                    {ag.especialidade.nome} · {ag.profissional.nome}
                    {ag.numeroSessoes > 1 && ` · ${ag.numeroSessoes} sessões consecutivas`}
                  </p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  {ag.tipo === "GRUPO" && <Badge variant="default">Grupo</Badge>}
                  {ag.recorrenciaId && <Badge variant="default">Recorrente</Badge>}
                  <span
                    className="text-xs px-2 py-1 rounded-full font-medium"
                    style={{ background: statusInfo.color + "20", color: statusInfo.color }}
                  >
                    {statusInfo.label}
                  </span>
                  {ag.origem === "AUTOMATICO" && (
                    <span className="text-xs" style={{ color: "var(--text-muted)" }}>Auto</span>
                  )}
                </div>
              </Card>
            </Link>
          )
        })}
      </div>

      {agendamentos.length === 0 && (
        <Card className="py-12 text-center">
          <p style={{ color: "var(--text-muted)" }}>Nenhum agendamento encontrado para o período selecionado.</p>
          <Link href="/agendamentos/novo">
            <Button className="mt-4">Criar agendamento</Button>
          </Link>
        </Card>
      )}
    </div>
  )
}
