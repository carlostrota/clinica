"use client"

import { useState, useEffect, useRef, useMemo } from "react"
import { useForm, type Resolver } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import { AlertTriangle, CheckCircle } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Users, User } from "lucide-react"
import { DIAS_SEMANA } from "@/lib/utils"

const JS_TO_DIA: Record<number, string> = {
  1: "SEGUNDA",
  2: "TERCA",
  3: "QUARTA",
  4: "QUINTA",
  5: "SEXTA",
  6: "SABADO",
}

const schema = z.object({
  tipo: z.enum(["INDIVIDUAL", "GRUPO"]),
  profissionalId: z.string().min(1, "Profissional é obrigatório"),
  especialidadeId: z.string().min(1, "Especialidade é obrigatória"),
  dataHoraInicio: z.string().min(1, "Data e hora são obrigatórios"),
  dataHoraFim: z.string().min(1, "Hora de fim é obrigatória"),
  numeroSessoes: z.coerce.number().min(1).max(20),
  status: z.enum(["AGENDADO", "CONFIRMADO", "REALIZADO", "CANCELADO", "FALTOU"]),
  observacoes: z.string().optional(),
  origem: z.enum(["MANUAL", "AUTOMATICO"]),
  pacienteIds: z.array(z.string()).min(1, "Selecione ao menos um paciente"),
})

type FormData = z.output<typeof schema>

interface Profissional { id: string; nome: string; especialidadeId: string }
interface Especialidade { id: string; nome: string }
interface Paciente { id: string; nome: string; telefone: string; perfil: string | null }
interface Horario { id: string; diaSemana: string; horaInicio: string; duracaoSessao: number }

interface Props {
  profissionais: Profissional[]
  especialidades: Especialidade[]
  pacientes: Paciente[]
  initialData?: Partial<FormData> & { id?: string; recorrenciaId?: string }
}

export function AgendamentoForm({ profissionais, especialidades, pacientes, initialData }: Props) {
  const router = useRouter()
  const [buscaPaciente, setBuscaPaciente] = useState("")
  const [tipo, setTipo] = useState<"INDIVIDUAL" | "GRUPO">(initialData?.tipo ?? "INDIVIDUAL")
  const [horariosProf, setHorariosProf] = useState<Horario[]>([])
  const mountedRef = useRef(false)
  const [deletandoSessao, setDeletandoSessao] = useState(false)
  const [deletandoSerie, setDeletandoSerie] = useState(false)

  async function apagarSessao() {
    if (!initialData?.id) return
    setDeletandoSessao(true)
    const res = await fetch(`/api/agendamentos/${initialData.id}`, { method: "DELETE" })
    setDeletandoSessao(false)
    if (!res.ok) { toast.error("Erro ao apagar sessão."); return }
    toast.success("Sessão apagada.")
    router.push("/agendamentos")
    router.refresh()
  }

  async function apagarSerie() {
    if (!initialData?.recorrenciaId) return
    setDeletandoSerie(true)
    const res = await fetch(`/api/agendamentos/recorrencia/${initialData.recorrenciaId}`, { method: "DELETE" })
    setDeletandoSerie(false)
    if (!res.ok) { toast.error("Erro ao apagar série."); return }
    const { apagados } = await res.json()
    toast.success(`${apagados} sessão${apagados !== 1 ? "ões" : ""} apagada${apagados !== 1 ? "s" : ""}.`)
    router.push("/agendamentos")
    router.refresh()
  }

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
      origem: "MANUAL",
      numeroSessoes: 1,
      pacienteIds: [],
      ...initialData,
    },
  })

  const selectedPacienteIds = watch("pacienteIds") ?? []
  const dataHoraInicio = watch("dataHoraInicio")
  const especialidadeId = watch("especialidadeId")
  const profissionalId = watch("profissionalId")

  // Filter professionals by selected specialty
  const profissionaisFiltrados = especialidadeId
    ? profissionais.filter((p) => p.especialidadeId === especialidadeId)
    : []

  // Clear profissional when specialty changes (skip on first mount to preserve edit values)
  useEffect(() => {
    if (!mountedRef.current) { mountedRef.current = true; return }
    setValue("profissionalId", "")
    setHorariosProf([])
  }, [especialidadeId, setValue])

  // Fetch horários when professional changes
  useEffect(() => {
    if (!profissionalId) { setHorariosProf([]); return }
    fetch(`/api/horarios?profissionalId=${profissionalId}`)
      .then((r) => r.json())
      .then(setHorariosProf)
      .catch(() => setHorariosProf([]))
  }, [profissionalId])

  useEffect(() => {
    setValue("tipo", tipo)
  }, [tipo, setValue])

  // Schedule compatibility check
  const compatibilidade = useMemo(() => {
    if (!profissionalId || !dataHoraInicio) return null

    const dt = new Date(dataHoraInicio)
    if (isNaN(dt.getTime())) return null

    const diaSemana = JS_TO_DIA[dt.getDay()]
    if (!diaSemana) return { ok: false, msg: "Domingo não é um dia de atendimento configurado." }

    const hora = `${String(dt.getHours()).padStart(2, "0")}:${String(dt.getMinutes()).padStart(2, "0")}`

    if (horariosProf.length === 0) return null // still loading or no horários fetched

    const match = horariosProf.find((h) => h.diaSemana === diaSemana && h.horaInicio === hora)
    if (match) return { ok: true, msg: `Horário compatível — ${DIAS_SEMANA[diaSemana]}, sessão de ${match.duracaoSessao} min.` }

    const horariosDoDia = horariosProf.filter((h) => h.diaSemana === diaSemana)
    if (horariosDoDia.length === 0) {
      return { ok: false, msg: `Este profissional não atende na ${DIAS_SEMANA[diaSemana]}.` }
    }

    return {
      ok: false,
      msg: `${hora} não está na agenda. Horários disponíveis na ${DIAS_SEMANA[diaSemana]}: ${horariosDoDia.map((h) => h.horaInicio).join(", ")}.`,
    }
  }, [profissionalId, dataHoraInicio, horariosProf])

  function togglePaciente(id: string) {
    const current = selectedPacienteIds
    if (tipo === "INDIVIDUAL") {
      setValue("pacienteIds", [id])
    } else {
      if (current.includes(id)) {
        setValue("pacienteIds", current.filter((p) => p !== id))
      } else {
        setValue("pacienteIds", [...current, id])
      }
    }
  }

  const pacientesFiltrados = pacientes.filter((p) =>
    buscaPaciente
      ? p.nome.toLowerCase().includes(buscaPaciente.toLowerCase()) ||
        (p.perfil ?? "").toLowerCase().includes(buscaPaciente.toLowerCase())
      : true
  )

  async function onSubmit(data: FormData) {
    const url = initialData?.id ? `/api/agendamentos/${initialData.id}` : "/api/agendamentos"
    const method = initialData?.id ? "PUT" : "POST"

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...data,
        dataHoraInicio: new Date(data.dataHoraInicio).toISOString(),
        dataHoraFim: new Date(data.dataHoraFim).toISOString(),
      }),
    })

    if (!res.ok) {
      toast.error("Erro ao salvar agendamento.")
      return
    }

    toast.success(initialData?.id ? "Agendamento atualizado!" : "Agendamento criado!")
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
            <div className="flex flex-col gap-1">
              <Select
                label="Profissional"
                placeholder={!especialidadeId ? "Selecione a especialidade primeiro" : profissionaisFiltrados.length === 0 ? "Nenhum profissional disponível" : "Selecione"}
                error={errors.profissionalId?.message}
                options={profissionaisFiltrados.map((p) => ({ value: p.id, label: p.nome }))}
                {...register("profissionalId")}
              />
              {especialidadeId && profissionaisFiltrados.length === 0 && (
                <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                  Nenhum profissional cadastrado para esta especialidade.
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <Input
                label="Data e hora de início"
                type="datetime-local"
                error={errors.dataHoraInicio?.message}
                {...register("dataHoraInicio")}
              />
              {/* Schedule compatibility feedback */}
              {compatibilidade && (
                <div
                  className="flex items-start gap-1.5 text-xs px-2 py-1.5 rounded-lg"
                  style={{
                    background: compatibilidade.ok ? "oklch(0.97 0.05 145)" : "oklch(0.97 0.05 20)",
                    color: compatibilidade.ok ? "oklch(0.4 0.15 145)" : "oklch(0.45 0.18 20)",
                  }}
                >
                  {compatibilidade.ok
                    ? <CheckCircle size={13} className="shrink-0 mt-0.5" />
                    : <AlertTriangle size={13} className="shrink-0 mt-0.5" />
                  }
                  {compatibilidade.msg}
                </div>
              )}
            </div>
            <Input
              label="Data e hora de fim"
              type="datetime-local"
              error={errors.dataHoraFim?.message}
              {...register("dataHoraFim")}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Input
              label="Nº de sessões consecutivas"
              type="number"
              min={1}
              max={20}
              {...register("numeroSessoes")}
            />
            <Select
              label="Status"
              options={[
                { value: "AGENDADO", label: "Agendado" },
                { value: "CONFIRMADO", label: "Confirmado" },
                { value: "REALIZADO", label: "Realizado" },
                { value: "CANCELADO", label: "Cancelado" },
                { value: "FALTOU", label: "Faltou" },
              ]}
              {...register("status")}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
              Observações
            </label>
            <textarea
              rows={2}
              className="rounded-lg px-3 py-2 text-sm outline-none resize-none"
              style={{ background: "var(--bg-base)", border: "1px solid var(--card-border)", color: "var(--text-primary)" }}
              {...register("observacoes")}
            />
          </div>
        </div>
      </Card>

      {/* Seleção de pacientes */}
      <Card>
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-sm" style={{ color: "var(--text-primary)" }}>
              {tipo === "INDIVIDUAL" ? "Paciente" : "Pacientes do grupo"}
              {selectedPacienteIds.length > 0 && (
                <span className="ml-2 font-normal" style={{ color: "var(--text-muted)" }}>
                  ({selectedPacienteIds.length} selecionado{selectedPacienteIds.length !== 1 ? "s" : ""})
                </span>
              )}
            </h3>
            {tipo === "GRUPO" && (
              <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                Filtre por perfil para encontrar pacientes compatíveis
              </p>
            )}
          </div>

          {errors.pacienteIds && (
            <p className="text-xs" style={{ color: "var(--error)" }}>{errors.pacienteIds.message}</p>
          )}

          <input
            value={buscaPaciente}
            onChange={(e) => setBuscaPaciente(e.target.value)}
            placeholder={tipo === "GRUPO" ? "Buscar por nome ou perfil..." : "Buscar paciente..."}
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
                    <p className="text-sm font-medium truncate" style={{ color: "var(--text-primary)" }}>
                      {pac.nome}
                    </p>
                    {pac.perfil && (
                      <p className="text-xs truncate" style={{ color: "var(--text-muted)" }}>
                        {pac.perfil}
                      </p>
                    )}
                  </div>
                </button>
              )
            })}
            {pacientesFiltrados.length === 0 && (
              <p className="text-sm py-2 text-center" style={{ color: "var(--text-muted)" }}>
                Nenhum paciente encontrado.
              </p>
            )}
          </div>
        </div>
      </Card>

      <div className="flex gap-3">
        <Button type="submit" loading={isSubmitting}>
          {initialData?.id ? "Salvar alterações" : "Criar agendamento"}
        </Button>
        <Button type="button" variant="secondary" onClick={() => router.back()}>
          Cancelar
        </Button>
      </div>

      {initialData?.id && (
        <div
          className="flex flex-col gap-2 pt-4 border-t"
          style={{ borderColor: "var(--card-border)" }}
        >
          <p className="text-xs font-medium" style={{ color: "var(--text-muted)" }}>Apagar agendamento</p>
          <div className="flex gap-2 flex-wrap">
            <Button
              type="button"
              variant="secondary"
              loading={deletandoSessao}
              onClick={apagarSessao}
              className="text-sm"
              style={{ color: "#ef4444", borderColor: "#ef4444" }}
            >
              Apagar esta sessão
            </Button>
            {initialData.recorrenciaId && (
              <Button
                type="button"
                variant="secondary"
                loading={deletandoSerie}
                onClick={apagarSerie}
                className="text-sm"
                style={{ color: "#ef4444", borderColor: "#ef4444" }}
              >
                Apagar toda a série
              </Button>
            )}
          </div>
        </div>
      )}
    </form>
  )
}
