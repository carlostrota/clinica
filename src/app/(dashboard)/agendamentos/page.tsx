import { prisma } from "@/lib/prisma"
import Link from "next/link"
import { Plus, ChevronLeft, ChevronRight, LayoutList, CalendarDays, UserRound } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { STATUS_AGENDAMENTO } from "@/lib/utils"
import { CalendarioAgendamentos } from "@/components/calendario-agendamentos"

interface Props {
  searchParams: Promise<{
    data?: string
    profissionalId?: string
    status?: string
    modo?: string
  }>
}

function isoDate(d: Date) {
  return d.toISOString().split("T")[0]
}

export default async function AgendamentosPage({ searchParams }: Props) {
  const { data, profissionalId, status, modo } = await searchParams

  const modoAtual = modo === "lista" ? "lista" : "calendario"

  // Início da semana — usa a data passada ou hoje
  const dataInicio = data ? new Date(data + "T00:00:00") : new Date(new Date().setHours(0, 0, 0, 0))
  const dataFim = new Date(dataInicio)
  dataFim.setDate(dataFim.getDate() + 6)
  dataFim.setHours(23, 59, 59, 999)

  // Semana anterior / próxima para navegação
  const semanaAnterior = new Date(dataInicio)
  semanaAnterior.setDate(semanaAnterior.getDate() - 7)

  const proximaSemana = new Date(dataInicio)
  proximaSemana.setDate(proximaSemana.getDate() + 7)

  // Array dos 7 dias da semana
  const dias: Date[] = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(dataInicio)
    d.setDate(d.getDate() + i)
    return d
  })

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
    prisma.profissional.findMany({
      where: { ativo: true },
      orderBy: { nome: "asc" },
      select: { id: true, nome: true, especialidade: { select: { nome: true, cor: true } } },
    }),
  ])

  // Label do período exibido
  const labelPeriodo =
    dataInicio.toLocaleDateString("pt-BR", { day: "2-digit", month: "short" }) +
    " – " +
    dataFim.toLocaleDateString("pt-BR", { day: "2-digit", month: "short", year: "numeric" })

  const statusOptions = [
    { value: "", label: "Todos os status" },
    { value: "AGENDADO", label: "Agendado" },
    { value: "CONFIRMADO", label: "Confirmado" },
    { value: "REALIZADO", label: "Realizado" },
    { value: "CANCELADO", label: "Cancelado" },
    { value: "FALTOU", label: "Faltou" },
  ]

  // Monta query string preservando filtros ao trocar modo/semana
  function qs(overrides: Record<string, string | undefined>) {
    const params: Record<string, string> = {}
    if (profissionalId) params.profissionalId = profissionalId
    if (status) params.status = status
    params.data = isoDate(dataInicio)
    params.modo = modoAtual
    Object.assign(params, overrides)
    return "?" + new URLSearchParams(
      Object.fromEntries(Object.entries(params).filter(([, v]) => v !== undefined && v !== ""))
    ).toString()
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Cabeçalho */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold" style={{ color: "var(--text-primary)" }}>
            Agendamentos
          </h1>
          <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>
            {agendamentos.length} agendamento{agendamentos.length !== 1 ? "s" : ""} · {labelPeriodo}
          </p>
        </div>
        <div className="flex gap-2">
          <Link href="/agendamentos/paciente">
            <Button variant="secondary">
              <UserRound size={16} />
              Por paciente
            </Button>
          </Link>
          <Link href="/agendamentos/novo">
            <Button>
              <Plus size={16} />
              Novo agendamento
            </Button>
          </Link>
        </div>
      </div>

      {/* Filtros + navegação de semana + toggle de modo */}
      <div className="flex flex-wrap items-center gap-3">
        {/* Navegação de semana */}
        <div className="flex items-center gap-1">
          <Link href={qs({ data: isoDate(semanaAnterior) })}>
            <Button variant="secondary" size="sm" className="px-2">
              <ChevronLeft size={16} />
            </Button>
          </Link>
          <form method="GET" className="contents">
            {profissionalId && <input type="hidden" name="profissionalId" value={profissionalId} />}
            {status && <input type="hidden" name="status" value={status} />}
            <input type="hidden" name="modo" value={modoAtual} />
            <input
              type="date"
              name="data"
              defaultValue={isoDate(dataInicio)}
              className="px-3 py-2 rounded-lg text-sm outline-none"
              style={{ background: "var(--card)", border: "1px solid var(--card-border)", color: "var(--text-primary)" }}
            />
          </form>
          <Link href={qs({ data: isoDate(proximaSemana) })}>
            <Button variant="secondary" size="sm" className="px-2">
              <ChevronRight size={16} />
            </Button>
          </Link>
        </div>

        {/* Filtros */}
        <form method="GET" className="flex flex-wrap gap-2">
          <input type="hidden" name="data" value={isoDate(dataInicio)} />
          <input type="hidden" name="modo" value={modoAtual} />
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

        {/* Toggle lista / calendário */}
        <div
          className="flex rounded-lg overflow-hidden ml-auto"
          style={{ border: "1px solid var(--card-border)" }}
        >
          <Link href={qs({ modo: "calendario" })}>
            <button
              className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium transition-colors"
              style={{
                background: modoAtual === "calendario" ? "var(--accent)" : "var(--card)",
                color: modoAtual === "calendario" ? "white" : "var(--text-muted)",
              }}
            >
              <CalendarDays size={14} />
              Calendário
            </button>
          </Link>
          <Link href={qs({ modo: "lista" })}>
            <button
              className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium transition-colors"
              style={{
                background: modoAtual === "lista" ? "var(--accent)" : "var(--card)",
                color: modoAtual === "lista" ? "white" : "var(--text-muted)",
                borderLeft: "1px solid var(--card-border)",
              }}
            >
              <LayoutList size={14} />
              Lista
            </button>
          </Link>
        </div>
      </div>

      {/* Visualização */}
      {modoAtual === "calendario" ? (
        <CalendarioAgendamentos
          agendamentos={agendamentos}
          profissionais={profissionais}
          dias={dias}
        />
      ) : (
        <>
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
        </>
      )}
    </div>
  )
}
