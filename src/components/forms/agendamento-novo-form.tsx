"use client"

import { useState, useEffect, useMemo } from "react"
import { useForm, type Resolver } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import { Clock, CalendarDays, Users, User } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { DIAS_SEMANA } from "@/lib/utils"

const DIAS_ORDER = ["SEGUNDA", "TERCA", "QUARTA", "QUINTA", "SEXTA", "SABADO"] as const
const DIA_TO_JS: Record<string, number> = {
  SEGUNDA: 1, TERCA: 2, QUARTA: 3, QUINTA: 4, SEXTA: 5, SABADO: 6,
}
const JS_TO_DIA_LABEL: Record<number, string> = {
  0: "domingo", 1: "segunda-feira", 2: "terça-feira", 3: "quarta-feira",
  4: "quinta-feira", 5: "sexta-feira", 6: "sábado",
}

const schema = z.object({
  tipo: z.enum(["INDIVIDUAL", "GRUPO"]),
  especialidadeId: z.string().min(1, "Especialidade é obrigatória"),
  profissionalId: z.string().min(1, "Profissional é obrigatório"),
  diaSemana: z.string().min(1, "Selecione o dia"),
  horaInicio: z.string().min(1, "Selecione o horário"),
  dataInicio: z.string().min(1, "Data de início é obrigatória"),
  totalSessoes: z.coerce.number().min(1, "Mínimo 1 sessão").max(52, "Máximo 52 sessões"),
  status: z.enum(["AGENDADO", "CONFIRMADO", "REALIZADO", "CANCELADO", "FALTOU"]),
  observacoes: z.string().optional(),
  pacienteIds: z.array(z.string()).min(1, "Selecione ao menos um paciente"),
})

type FormData = z.output<typeof schema>

interface Profissional { id: string; nome: string; especialidadeId: string }
interface Especialidade { id: string; nome: string }
interface Paciente { id: string; nome: string; perfil: string | null }
interface Horario { id: string; diaSemana: string; horaInicio: string; duracaoSessao: number }

interface Props {
  profissionais: Profissional[]
  especialidades: Especialidade[]
  pacientes: Paciente[]
}

export function AgendamentoNovoForm({ profissionais, especialidades, pacientes }: Props) {
  const router = useRouter()
  const [tipo, setTipo] = useState<"INDIVIDUAL" | "GRUPO">("INDIVIDUAL")
  const [horariosProf, setHorariosProf] = useState<Horario[]>([])
  const [buscaPaciente, setBuscaPaciente] = useState("")

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema) as Resolver<FormData>,
    defaultValues: {
      tipo: "INDIVIDUAL",
      status: "AGENDADO",
      totalSessoes: 10,
      pacienteIds: [],
      diasSemana: [],
    } as Partial<FormData>,
  })

  const especialidadeId = watch("especialidadeId")
  const profissionalId = watch("profissionalId")
  const diaSemana = watch("diaSemana")
  const horaInicio = watch("horaInicio")
  const dataInicio = watch("dataInicio")
  const totalSessoes = watch("totalSessoes")
  const selectedPacienteIds = watch("pacienteIds") ?? []

  // Filter professionals by specialty
  const profissionaisFiltrados = especialidadeId
    ? profissionais.filter((p) => p.especialidadeId === especialidadeId)
    : []

  // Clear prof/dia/hora when specialty changes
  useEffect(() => {
    setValue("profissionalId", "")
    setValue("diaSemana", "")
    setValue("horaInicio", "")
    setHorariosProf([])
  }, [especialidadeId, setValue])

  // Fetch horários when professional changes
  useEffect(() => {
    if (!profissionalId) { setHorariosProf([]); return }
    fetch(`/api/horarios?profissionalId=${profissionalId}`)
      .then((r) => r.json())
      .then(setHorariosProf)
      .catch(() => setHorariosProf([]))
    setValue("diaSemana", "")
    setValue("horaInicio", "")
  }, [profissionalId, setValue])

  // Clear time slot when day changes
  useEffect(() => {
    setValue("horaInicio", "")
  }, [diaSemana, setValue])

  useEffect(() => { setValue("tipo", tipo) }, [tipo, setValue])

  // Days that the professional has configured
  const diasDisponiveis = useMemo(() => {
    const dias = new Set(horariosProf.map((h) => h.diaSemana))
    return DIAS_ORDER.filter((d) => dias.has(d))
  }, [horariosProf])

  // Time slots for selected day
  const slotsDisponiveis = useMemo(() => {
    if (!diaSemana) return []
    return horariosProf
      .filter((h) => h.diaSemana === diaSemana)
      .sort((a, b) => a.horaInicio.localeCompare(b.horaInicio))
  }, [horariosProf, diaSemana])

  // Duration from selected slot
  const duracaoSessao = useMemo(() => {
    if (!horaInicio || !diaSemana) return null
    return horariosProf.find((h) => h.diaSemana === diaSemana && h.horaInicio === horaInicio)?.duracaoSessao ?? null
  }, [horariosProf, diaSemana, horaInicio])

  // Validate dataInicio weekday and calculate preview dates
  const { datasPreview, dataInicioErro } = useMemo(() => {
    if (!dataInicio || !diaSemana || !totalSessoes) return { datasPreview: [], dataInicioErro: null }

    const [y, m, d] = dataInicio.split("-").map(Number)
    const dt = new Date(y, m - 1, d)
    const targetJs = DIA_TO_JS[diaSemana]
    const actualJs = dt.getDay()

    if (actualJs !== targetJs) {
      return {
        datasPreview: [],
        dataInicioErro: `Esta data é uma ${JS_TO_DIA_LABEL[actualJs]}. Selecione uma ${DIAS_SEMANA[diaSemana].toLowerCase()}.`,
      }
    }

    const datas = Array.from({ length: Number(totalSessoes) }, (_, i) => {
      const d2 = new Date(dt)
      d2.setDate(d2.getDate() + i * 7)
      return d2
    })
    return { datasPreview: datas, dataInicioErro: null }
  }, [dataInicio, diaSemana, totalSessoes])

  function togglePaciente(id: string) {
    if (tipo === "INDIVIDUAL") {
      setValue("pacienteIds", [id])
    } else {
      setValue("pacienteIds",
        selectedPacienteIds.includes(id)
          ? selectedPacienteIds.filter((p) => p !== id)
          : [...selectedPacienteIds, id]
      )
    }
  }

  const pacientesFiltrados = pacientes.filter((p) =>
    buscaPaciente
      ? p.nome.toLowerCase().includes(buscaPaciente.toLowerCase()) ||
        (p.perfil ?? "").toLowerCase().includes(buscaPaciente.toLowerCase())
      : true
  )

  async function onSubmit(data: FormData) {
    if (dataInicioErro) { toast.error(dataInicioErro); return }

    const res = await fetch("/api/agendamentos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })

    if (!res.ok) {
      const err = await res.json().catch(() => ({}))
      toast.error(err.error ?? "Erro ao criar agendamento.")
      return
    }

    const { criados } = await res.json()
    toast.success(`${criados} sessão${criados !== 1 ? "ões" : ""} agendada${criados !== 1 ? "s" : ""}!`)
    router.push("/agendamentos")
    router.refresh()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      {/* Tipo */}
      <div className="flex gap-3">
        {(["INDIVIDUAL", "GRUPO"] as const).map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => { setTipo(t); setValue("pacienteIds", []) }}
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border-2 transition-all font-medium text-sm"
            style={{
              background: tipo === t ? "var(--accent)" : "var(--card)",
              color: tipo === t ? "var(--accent-fg)" : "var(--text-secondary)",
              borderColor: tipo === t ? "var(--accent)" : "var(--card-border)",
            }}
          >
            {t === "INDIVIDUAL" ? <User size={16} /> : <Users size={16} />}
            {t === "INDIVIDUAL" ? "Individual" : "Grupo"}
          </button>
        ))}
      </div>

      {/* Especialidade e Profissional */}
      <Card>
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4">
            <Select
              label="Especialidade"
              placeholder="Selecione"
              error={errors.especialidadeId?.message}
              options={especialidades.map((e) => ({ value: e.id, label: e.nome }))}
              {...register("especialidadeId")}
            />
            <Select
              label="Profissional"
              placeholder={!especialidadeId ? "Selecione a especialidade" : "Selecione"}
              error={errors.profissionalId?.message}
              options={profissionaisFiltrados.map((p) => ({ value: p.id, label: p.nome }))}
              {...register("profissionalId")}
            />
          </div>

          {/* Dias disponíveis */}
          {profissionalId && (
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                Dia da semana
              </label>
              {diasDisponiveis.length === 0 ? (
                <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                  Este profissional não tem horários configurados.
                </p>
              ) : (
                <div className="flex gap-2 flex-wrap">
                  {diasDisponiveis.map((dia) => (
                    <button
                      key={dia}
                      type="button"
                      onClick={() => setValue("diaSemana", dia, { shouldValidate: true })}
                      className="px-3 py-1.5 rounded-lg text-sm font-medium transition-all border"
                      style={{
                        background: diaSemana === dia ? "var(--accent)" : "transparent",
                        color: diaSemana === dia ? "var(--accent-fg)" : "var(--text-secondary)",
                        borderColor: diaSemana === dia ? "var(--accent)" : "var(--card-border)",
                      }}
                    >
                      {DIAS_SEMANA[dia]}
                    </button>
                  ))}
                </div>
              )}
              {errors.diaSemana && (
                <p className="text-xs" style={{ color: "#ef4444" }}>{errors.diaSemana.message}</p>
              )}
            </div>
          )}

          {/* Slots de horário */}
          {diaSemana && slotsDisponiveis.length > 0 && (
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                Horário
              </label>
              <div className="flex gap-2 flex-wrap">
                {slotsDisponiveis.map((h) => (
                  <button
                    key={h.id}
                    type="button"
                    onClick={() => setValue("horaInicio", h.horaInicio, { shouldValidate: true })}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all border"
                    style={{
                      background: horaInicio === h.horaInicio ? "var(--accent)" : "transparent",
                      color: horaInicio === h.horaInicio ? "var(--accent-fg)" : "var(--text-secondary)",
                      borderColor: horaInicio === h.horaInicio ? "var(--accent)" : "var(--card-border)",
                    }}
                  >
                    <Clock size={13} />
                    {h.horaInicio}
                    <span className="text-xs opacity-70">({h.duracaoSessao}min)</span>
                  </button>
                ))}
              </div>
              {errors.horaInicio && (
                <p className="text-xs" style={{ color: "#ef4444" }}>{errors.horaInicio.message}</p>
              )}
            </div>
          )}
        </div>
      </Card>

      {/* Recorrência */}
      {horaInicio && (
        <Card>
          <p className="text-sm font-semibold mb-3" style={{ color: "var(--text-primary)" }}>
            Recorrência semanal
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <Input
                label={`Data da 1ª sessão (${DIAS_SEMANA[diaSemana]?.toLowerCase() ?? ""})`}
                type="date"
                error={dataInicioErro ?? errors.dataInicio?.message}
                {...register("dataInicio")}
              />
            </div>
            <Input
              label="Total de sessões (semanas)"
              type="number"
              min={1}
              max={52}
              error={errors.totalSessoes?.message}
              {...register("totalSessoes")}
            />
          </div>

          {/* Preview das datas */}
          {datasPreview.length > 0 && (
            <div className="mt-4 flex flex-col gap-2">
              <p className="text-xs font-medium" style={{ color: "var(--text-muted)" }}>
                <CalendarDays size={12} className="inline mr-1" />
                {datasPreview.length} sessão{datasPreview.length !== 1 ? "ões" : ""} · {horaInicio}
                {duracaoSessao && ` · ${duracaoSessao} min cada`}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {datasPreview.slice(0, 12).map((d, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 rounded-md"
                    style={{ background: "var(--bg-base)", color: "var(--text-secondary)" }}
                  >
                    {d.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit" })}
                  </span>
                ))}
                {datasPreview.length > 12 && (
                  <span className="text-xs px-2 py-1" style={{ color: "var(--text-muted)" }}>
                    +{datasPreview.length - 12} mais
                  </span>
                )}
              </div>
            </div>
          )}
        </Card>
      )}

      {/* Status e observações */}
      <Card>
        <div className="flex flex-col gap-4">
          <Select
            label="Status inicial"
            options={[
              { value: "AGENDADO", label: "Agendado" },
              { value: "CONFIRMADO", label: "Confirmado" },
            ]}
            {...register("status")}
          />
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>Observações</label>
            <textarea
              rows={2}
              className="rounded-lg px-3 py-2 text-sm outline-none resize-none"
              style={{ background: "var(--bg-base)", border: "1px solid var(--card-border)", color: "var(--text-primary)" }}
              {...register("observacoes")}
            />
          </div>
        </div>
      </Card>

      {/* Pacientes */}
      <Card>
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-sm" style={{ color: "var(--text-primary)" }}>
            {tipo === "INDIVIDUAL" ? "Paciente" : "Pacientes do grupo"}
            {selectedPacienteIds.length > 0 && (
              <span className="ml-2 font-normal" style={{ color: "var(--text-muted)" }}>
                ({selectedPacienteIds.length} selecionado{selectedPacienteIds.length !== 1 ? "s" : ""})
              </span>
            )}
          </h3>
          {errors.pacienteIds && (
            <p className="text-xs" style={{ color: "#ef4444" }}>{errors.pacienteIds.message}</p>
          )}
          <input
            value={buscaPaciente}
            onChange={(e) => setBuscaPaciente(e.target.value)}
            placeholder="Buscar paciente..."
            className="px-3 py-2 rounded-lg text-sm outline-none"
            style={{ background: "var(--bg-base)", border: "1px solid var(--card-border)", color: "var(--text-primary)" }}
          />
          <div className="flex flex-col gap-1 max-h-48 overflow-y-auto">
            {pacientesFiltrados.map((pac) => {
              const selected = selectedPacienteIds.includes(pac.id)
              return (
                <button
                  key={pac.id}
                  type="button"
                  onClick={() => togglePaciente(pac.id)}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-all"
                  style={{
                    background: selected ? "oklch(0.97 0.03 55)" : "transparent",
                    border: selected ? "1px solid var(--accent)" : "1px solid transparent",
                  }}
                >
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold shrink-0"
                    style={{
                      background: selected ? "var(--accent)" : "var(--bg-blob)",
                      color: selected ? "var(--accent-fg)" : "var(--text-secondary)",
                    }}
                  >
                    {pac.nome.charAt(0)}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium truncate" style={{ color: "var(--text-primary)" }}>{pac.nome}</p>
                    {pac.perfil && (
                      <p className="text-xs truncate" style={{ color: "var(--text-muted)" }}>{pac.perfil}</p>
                    )}
                  </div>
                </button>
              )
            })}
            {pacientesFiltrados.length === 0 && (
              <p className="text-sm py-2 text-center" style={{ color: "var(--text-muted)" }}>Nenhum paciente encontrado.</p>
            )}
          </div>
        </div>
      </Card>

      <div className="flex gap-3">
        <Button
          type="submit"
          loading={isSubmitting}
          disabled={datasPreview.length === 0 || !!dataInicioErro}
        >
          Agendar {datasPreview.length > 0 ? `${datasPreview.length} sessão${datasPreview.length !== 1 ? "ões" : ""}` : ""}
        </Button>
        <Button type="button" variant="secondary" onClick={() => router.back()}>
          Cancelar
        </Button>
      </div>
    </form>
  )
}
