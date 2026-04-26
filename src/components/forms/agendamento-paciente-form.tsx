"use client"

import { useState, useMemo } from "react"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import { Clock, ChevronRight, X, Loader2, AlertCircle, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { DIAS_SEMANA } from "@/lib/utils"

const DIAS_ORDER = ["SEGUNDA", "TERCA", "QUARTA", "QUINTA", "SEXTA", "SABADO"] as const

type Horario = { id: string; diaSemana: string; horaInicio: string; duracaoSessao: number }
type PacienteResumo = { id: string; nome: string; perfil: string | null }
type Profissional = { id: string; nome: string; especialidadeId: string }

type DiscConfig = {
  key: string
  especialidadeId: string
  nome: string
  cor: string | null
  profissionalId: string
  diaSemana: string
  horaInicio: string
  horarios: Horario[]
  loadingHorarios: boolean
}

type PacienteDetalhado = {
  id: string
  nome: string
  especialidades: { especialidadeId: string; especialidade: { id: string; nome: string; cor: string | null } }[]
}

interface Props {
  profissionais: Profissional[]
  pacientes: PacienteResumo[]
}

export function AgendamentoPacienteForm({ profissionais, pacientes }: Props) {
  const router = useRouter()

  // Fase 1 — seleção de paciente
  const [busca, setBusca] = useState("")
  const [paciente, setPaciente] = useState<PacienteDetalhado | null>(null)
  const [loadingPaciente, setLoadingPaciente] = useState(false)

  // Fase 2 — configuração de disciplinas
  const [discs, setDiscs] = useState<DiscConfig[]>([])
  const [dataInicio, setDataInicio] = useState("")
  const [totalSemanas, setTotalSemanas] = useState(52)
  const [submitting, setSubmitting] = useState(false)

  const pacientesFiltrados = useMemo(() =>
    pacientes.filter((p) =>
      p.nome.toLowerCase().includes(busca.toLowerCase())
    ), [pacientes, busca])

  async function selecionarPaciente(id: string) {
    setLoadingPaciente(true)
    try {
      const res = await fetch(`/api/pacientes/${id}`)
      if (!res.ok) throw new Error()
      const data: PacienteDetalhado = await res.json()
      setPaciente(data)
      setDiscs(
        data.especialidades.map((e) => ({
          key: crypto.randomUUID(),
          especialidadeId: e.especialidadeId,
          nome: e.especialidade.nome,
          cor: e.especialidade.cor,
          profissionalId: "",
          diaSemana: "",
          horaInicio: "",
          horarios: [],
          loadingHorarios: false,
        }))
      )
    } catch {
      toast.error("Erro ao carregar o paciente.")
    } finally {
      setLoadingPaciente(false)
    }
  }

  function voltarSelecao() {
    setPaciente(null)
    setDiscs([])
    setBusca("")
  }

  async function setProfissional(key: string, profissionalId: string) {
    setDiscs((prev) =>
      prev.map((d) =>
        d.key === key
          ? { ...d, profissionalId, diaSemana: "", horaInicio: "", horarios: [], loadingHorarios: !!profissionalId }
          : d
      )
    )
    if (!profissionalId) return

    try {
      const res = await fetch(`/api/horarios?profissionalId=${profissionalId}`)
      const horarios: Horario[] = await res.json()
      setDiscs((prev) =>
        prev.map((d) => (d.key === key ? { ...d, horarios, loadingHorarios: false } : d))
      )
    } catch {
      setDiscs((prev) =>
        prev.map((d) => (d.key === key ? { ...d, loadingHorarios: false } : d))
      )
    }
  }

  function setDia(key: string, diaSemana: string) {
    setDiscs((prev) =>
      prev.map((d) => (d.key === key ? { ...d, diaSemana, horaInicio: "" } : d))
    )
  }

  function setHora(key: string, horaInicio: string) {
    setDiscs((prev) =>
      prev.map((d) => (d.key === key ? { ...d, horaInicio } : d))
    )
  }

  function addDiscSlot(afterKey: string, especialidadeId: string, nome: string, cor: string | null) {
    const novo: DiscConfig = {
      key: crypto.randomUUID(),
      especialidadeId,
      nome,
      cor,
      profissionalId: "",
      diaSemana: "",
      horaInicio: "",
      horarios: [],
      loadingHorarios: false,
    }
    setDiscs((prev) => {
      const idx = prev.findIndex((d) => d.key === afterKey)
      const next = [...prev]
      next.splice(idx + 1, 0, novo)
      return next
    })
  }

  function removeDisc(key: string) {
    setDiscs((prev) => prev.filter((d) => d.key !== key))
  }

  const disciplinasConfiguradas = discs.filter(
    (d) => d.profissionalId && d.diaSemana && d.horaInicio
  )
  const totalSessoes = disciplinasConfiguradas.length * totalSemanas

  async function onSubmit() {
    if (!paciente) return
    if (!disciplinasConfiguradas.length) {
      toast.error("Configure ao menos uma disciplina com profissional, dia e horário.")
      return
    }
    if (!dataInicio) {
      toast.error("Selecione a data de início das sessões.")
      return
    }

    setSubmitting(true)
    try {
      const res = await fetch("/api/agendamentos/paciente-semana", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          pacienteId: paciente.id,
          dataInicio,
          totalSemanas,
          disciplinas: disciplinasConfiguradas.map((d) => ({
            especialidadeId: d.especialidadeId,
            profissionalId: d.profissionalId,
            diaSemana: d.diaSemana,
            horaInicio: d.horaInicio,
          })),
        }),
      })

      if (!res.ok) {
        const err = await res.json().catch(() => ({}))
        toast.error(err.error ?? "Erro ao criar agendamentos.")
        return
      }

      const { criados, disciplinas: nd } = await res.json()
      toast.success(
        `${criados} sessões criadas em ${nd} disciplina${nd !== 1 ? "s" : ""} para ${paciente.nome}!`
      )
      router.push("/agendamentos")
      router.refresh()
    } finally {
      setSubmitting(false)
    }
  }

  // ── Fase 1: seleção de paciente ─────────────────────────────────────────
  if (!paciente) {
    return (
      <div className="flex flex-col gap-4">
        <input
          autoFocus
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          placeholder="Buscar paciente por nome..."
          className="px-4 py-3 rounded-xl text-sm outline-none w-full"
          style={{
            background: "var(--card)",
            border: "1px solid var(--card-border)",
            color: "var(--text-primary)",
          }}
        />

        {loadingPaciente && (
          <div className="flex justify-center py-8">
            <Loader2 size={24} className="animate-spin" style={{ color: "var(--text-muted)" }} />
          </div>
        )}

        <div className="flex flex-col gap-1 max-h-[60vh] overflow-y-auto">
          {pacientesFiltrados.map((p) => (
            <button
              key={p.id}
              onClick={() => selecionarPaciente(p.id)}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all hover:opacity-80"
              style={{ background: "var(--card)", border: "1px solid var(--card-border)" }}
            >
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
                style={{ background: "oklch(0.92 0.03 280)", color: "oklch(0.45 0.12 280)" }}
              >
                {p.nome.charAt(0)}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm truncate" style={{ color: "var(--text-primary)" }}>
                  {p.nome}
                </p>
                {p.perfil && (
                  <p className="text-xs truncate" style={{ color: "var(--text-muted)" }}>
                    {p.perfil}
                  </p>
                )}
              </div>
              <ChevronRight size={16} style={{ color: "var(--text-muted)" }} />
            </button>
          ))}

          {pacientesFiltrados.length === 0 && (
            <p className="text-center py-6 text-sm" style={{ color: "var(--text-muted)" }}>
              Nenhum paciente encontrado.
            </p>
          )}
        </div>
      </div>
    )
  }

  // ── Fase 2: configuração de disciplinas ──────────────────────────────────
  return (
    <div className="flex flex-col gap-5">
      {/* Paciente selecionado */}
      <div
        className="flex items-center gap-3 px-4 py-3 rounded-xl"
        style={{ background: "oklch(0.96 0.03 280)", border: "1px solid oklch(0.88 0.06 280)" }}
      >
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
          style={{ background: "oklch(0.45 0.12 280)", color: "white" }}
        >
          {paciente.nome.charAt(0)}
        </div>
        <p className="font-semibold flex-1" style={{ color: "oklch(0.35 0.12 280)" }}>
          {paciente.nome}
        </p>
        <button
          onClick={voltarSelecao}
          className="text-xs flex items-center gap-1"
          style={{ color: "var(--text-muted)" }}
        >
          <X size={14} /> Trocar
        </button>
      </div>

      {/* Sem disciplinas */}
      {discs.length === 0 && (
        <Card className="flex items-center gap-3 py-4">
          <AlertCircle size={18} style={{ color: "oklch(0.65 0.17 55)" }} />
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>
            Este paciente não tem disciplinas cadastradas.{" "}
            <a href={`/pacientes/${paciente.id}`} className="underline" style={{ color: "var(--accent)" }}>
              Adicionar no cadastro
            </a>
          </p>
        </Card>
      )}

      {/* Cards de disciplina */}
      {discs.map((disc) => {
        const cor = disc.cor ?? "oklch(0.65 0.17 55)"
        const profsDisc = profissionais.filter((p) => p.especialidadeId === disc.especialidadeId)
        const diasDisponiveis = DIAS_ORDER.filter((d) =>
          disc.horarios.some((h) => h.diaSemana === d)
        )
        const slotsHorario = disc.horarios
          .filter((h) => h.diaSemana === disc.diaSemana)
          .sort((a, b) => a.horaInicio.localeCompare(b.horaInicio))

        const configurado = !!(disc.profissionalId && disc.diaSemana && disc.horaInicio)

        // Índice deste slot entre todos os slots da mesma especialidade (para label)
        const slotsDestaEsp = discs.filter((d) => d.especialidadeId === disc.especialidadeId)
        const slotIdx = slotsDestaEsp.findIndex((d) => d.key === disc.key)
        const temMultiplos = slotsDestaEsp.length > 1

        return (
          <Card key={disc.key} className="flex flex-col gap-4">
            {/* Cabeçalho da disciplina */}
            <div className="flex items-center gap-2">
              <div className="w-1 h-5 rounded-full shrink-0" style={{ background: cor }} />
              <p className="font-semibold text-sm" style={{ color: "var(--text-primary)" }}>
                {disc.nome}
              </p>
              {temMultiplos && (
                <span
                  className="text-xs px-1.5 py-0.5 rounded font-medium"
                  style={{ background: cor + "18", color: cor }}
                >
                  {slotIdx + 1}ª sessão
                </span>
              )}
              {configurado && (
                <span
                  className="text-xs px-2 py-0.5 rounded-full font-medium"
                  style={{ background: "oklch(0.94 0.08 145)", color: "oklch(0.40 0.15 145)" }}
                >
                  ✓
                </span>
              )}
              <button
                type="button"
                onClick={() => removeDisc(disc.key)}
                title="Remover este horário"
                className="ml-auto flex items-center justify-center w-6 h-6 rounded-md hover:opacity-70 transition-opacity"
                style={{ color: "var(--text-muted)", border: "1px solid var(--card-border)" }}
              >
                <X size={12} />
              </button>
            </div>

            {/* Profissional */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium" style={{ color: "var(--text-muted)" }}>
                Profissional
              </label>
              {profsDisc.length === 0 ? (
                <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                  Nenhum profissional ativo nesta especialidade.
                </p>
              ) : (
                <select
                  value={disc.profissionalId}
                  onChange={(e) => setProfissional(disc.key, e.target.value)}
                  className="px-3 py-2 rounded-lg text-sm outline-none cursor-pointer"
                  style={{
                    background: "var(--bg)",
                    border: "1px solid var(--card-border)",
                    color: "var(--text-primary)",
                  }}
                >
                  <option value="">Selecione</option>
                  {profsDisc.map((p) => (
                    <option key={p.id} value={p.id}>{p.nome}</option>
                  ))}
                </select>
              )}
            </div>

            {/* Carregando horários */}
            {disc.loadingHorarios && (
              <div className="flex items-center gap-2 text-xs" style={{ color: "var(--text-muted)" }}>
                <Loader2 size={13} className="animate-spin" />
                Buscando horários...
              </div>
            )}

            {/* Dias disponíveis */}
            {!disc.loadingHorarios && disc.profissionalId && (
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium" style={{ color: "var(--text-muted)" }}>
                  Dia da semana
                </label>
                {diasDisponiveis.length === 0 ? (
                  <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                    Profissional sem horários configurados.
                  </p>
                ) : (
                  <div className="flex gap-2 flex-wrap">
                    {diasDisponiveis.map((dia) => (
                      <button
                        key={dia}
                        type="button"
                        onClick={() => setDia(disc.key, dia)}
                        className="px-3 py-1.5 rounded-lg text-xs font-medium transition-all border"
                        style={{
                          background: disc.diaSemana === dia ? cor : "transparent",
                          color: disc.diaSemana === dia ? "white" : "var(--text-secondary)",
                          borderColor: disc.diaSemana === dia ? cor : "var(--card-border)",
                        }}
                      >
                        {DIAS_SEMANA[dia]}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Horários do dia */}
            {!disc.loadingHorarios && disc.diaSemana && slotsHorario.length > 0 && (
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium" style={{ color: "var(--text-muted)" }}>
                  Horário
                </label>
                <div className="flex gap-2 flex-wrap">
                  {slotsHorario.map((h) => (
                    <button
                      key={h.id}
                      type="button"
                      onClick={() => setHora(disc.key, h.horaInicio)}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all border"
                      style={{
                        background: disc.horaInicio === h.horaInicio ? cor : "transparent",
                        color: disc.horaInicio === h.horaInicio ? "white" : "var(--text-secondary)",
                        borderColor: disc.horaInicio === h.horaInicio ? cor : "var(--card-border)",
                      }}
                    >
                      <Clock size={11} />
                      {h.horaInicio}
                      <span className="opacity-70">({h.duracaoSessao}min)</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Adicionar outro horário desta especialidade */}
            <button
              type="button"
              onClick={() => addDiscSlot(disc.key, disc.especialidadeId, disc.nome, disc.cor)}
              className="flex items-center gap-1.5 text-xs pt-1 border-t w-fit hover:opacity-70 transition-opacity"
              style={{ color: cor, borderColor: "var(--card-border)" }}
            >
              <Plus size={12} />
              Mais um horário de {disc.nome}
            </button>
          </Card>
        )
      })}

      {/* Período */}
      {discs.length > 0 && (
        <Card>
          <p className="text-sm font-semibold mb-4" style={{ color: "var(--text-primary)" }}>
            Período das sessões
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium" style={{ color: "var(--text-muted)" }}>
                Início (qualquer dia da semana)
              </label>
              <input
                type="date"
                value={dataInicio}
                onChange={(e) => setDataInicio(e.target.value)}
                className="px-3 py-2 rounded-lg text-sm outline-none"
                style={{
                  background: "var(--bg)",
                  border: "1px solid var(--card-border)",
                  color: "var(--text-primary)",
                }}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium" style={{ color: "var(--text-muted)" }}>
                Repetir por (semanas)
              </label>
              <input
                type="number"
                min={1}
                max={104}
                value={totalSemanas}
                onChange={(e) => setTotalSemanas(Number(e.target.value))}
                className="px-3 py-2 rounded-lg text-sm outline-none"
                style={{
                  background: "var(--bg)",
                  border: "1px solid var(--card-border)",
                  color: "var(--text-primary)",
                }}
              />
            </div>
          </div>

          {/* Resumo */}
          {disciplinasConfiguradas.length > 0 && dataInicio && (
            <div className="mt-4 flex flex-col gap-1">
              {disciplinasConfiguradas.map((d) => {
                const cor = d.cor ?? "oklch(0.65 0.17 55)"
                const prof = profissionais.find((p) => p.id === d.profissionalId)
                return (
                  <div key={d.key} className="flex items-center gap-2 text-xs" style={{ color: "var(--text-muted)" }}>
                    <div className="w-2 h-2 rounded-full shrink-0" style={{ background: cor }} />
                    <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>{d.nome}</span>
                    · {prof?.nome} · {DIAS_SEMANA[d.diaSemana]} · {d.horaInicio}
                    · <span>{totalSemanas} sessões</span>
                  </div>
                )
              })}
              <p className="text-xs mt-2 font-medium" style={{ color: "var(--accent)" }}>
                Total: {totalSessoes} sessões criadas ({disciplinasConfiguradas.length} disciplina
                {disciplinasConfiguradas.length !== 1 ? "s" : ""} × {totalSemanas} semanas)
              </p>
            </div>
          )}
        </Card>
      )}

      {/* Ações */}
      {discs.length > 0 && (
        <div className="flex gap-3">
          <Button
            onClick={onSubmit}
            loading={submitting}
            disabled={disciplinasConfiguradas.length === 0 || !dataInicio || submitting}
          >
            {submitting
              ? "Criando sessões..."
              : disciplinasConfiguradas.length === 0
              ? "Configure ao menos uma disciplina"
              : `Agendar ${totalSessoes} sessão${totalSessoes !== 1 ? "ões" : ""}`}
          </Button>
          <Button type="button" variant="secondary" onClick={() => router.back()}>
            Cancelar
          </Button>
        </div>
      )}
    </div>
  )
}
