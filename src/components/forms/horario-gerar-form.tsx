"use client"

import { useForm, type Resolver } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import { Clock } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { DIAS_SEMANA } from "@/lib/utils"

const DIAS_ORDER = ["SEGUNDA", "TERCA", "QUARTA", "QUINTA", "SEXTA", "SABADO"] as const
type DiaSemana = typeof DIAS_ORDER[number]

const DIAS_ABREV: Record<DiaSemana, string> = {
  SEGUNDA: "Seg",
  TERCA: "Ter",
  QUARTA: "Qua",
  QUINTA: "Qui",
  SEXTA: "Sex",
  SABADO: "Sáb",
}

const schema = z.object({
  profissionalId: z.string().min(1, "Profissional é obrigatório"),
  diasSemana: z.array(z.enum(DIAS_ORDER)).min(1, "Selecione ao menos um dia"),
  duracaoSessao: z.coerce.number().min(15).max(480),
  intervaloSessoes: z.coerce.number().min(0),
  horaInicio: z.string().min(1, "Obrigatório"),
  inicioAlmoco: z.string().min(1, "Obrigatório"),
  fimAlmoco: z.string().min(1, "Obrigatório"),
  horaFim: z.string().min(1, "Obrigatório"),
})

type FormData = z.output<typeof schema>

interface Profissional { id: string; nome: string }

interface Props {
  profissionais: Profissional[]
  initialProfissionalId?: string
}

function timeToMinutes(time: string): number {
  const [h, m] = time.split(":").map(Number)
  return h * 60 + m
}

function minutesToTime(minutes: number): string {
  const h = Math.floor(minutes / 60)
  const m = minutes % 60
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`
}

function calcularSlots(inicio: number, fim: number, duracao: number, intervalo: number): string[] {
  const slots: string[] = []
  const slotInterval = duracao + intervalo
  if (duracao > fim - inicio) return slots
  const n = Math.floor((fim - inicio - duracao) / slotInterval) + 1
  for (let i = 0; i < n; i++) slots.push(minutesToTime(inicio + i * slotInterval))
  return slots
}

export function HorarioGerarForm({ profissionais, initialProfissionalId }: Props) {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema) as Resolver<FormData>,
    defaultValues: {
      profissionalId: initialProfissionalId ?? "",
      diasSemana: ["SEGUNDA"],
      duracaoSessao: 60,
      intervaloSessoes: 0,
      horaInicio: "08:00",
      inicioAlmoco: "12:00",
      fimAlmoco: "13:00",
      horaFim: "18:00",
    },
  })

  const values = watch()
  const selectedDias = values.diasSemana ?? []

  function toggleDia(dia: DiaSemana) {
    if (selectedDias.includes(dia)) {
      setValue("diasSemana", selectedDias.filter((d) => d !== dia), { shouldValidate: true })
    } else {
      setValue("diasSemana", [...selectedDias, dia], { shouldValidate: true })
    }
  }

  const preview = (() => {
    try {
      const { horaInicio, inicioAlmoco, fimAlmoco, horaFim, duracaoSessao, intervaloSessoes } = values
      if (!horaInicio || !inicioAlmoco || !fimAlmoco || !horaFim || !duracaoSessao) return null

      const manha = calcularSlots(
        timeToMinutes(horaInicio),
        timeToMinutes(inicioAlmoco),
        Number(duracaoSessao),
        Number(intervaloSessoes)
      )
      const tarde = calcularSlots(
        timeToMinutes(fimAlmoco),
        timeToMinutes(horaFim),
        Number(duracaoSessao),
        Number(intervaloSessoes)
      )
      const porDia = manha.length + tarde.length
      return { manha, tarde, porDia, total: porDia * selectedDias.length }
    } catch {
      return null
    }
  })()

  async function onSubmit(data: FormData) {
    const res = await fetch("/api/horarios/gerar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })

    if (!res.ok) {
      const err = await res.json().catch(() => ({}))
      toast.error(err.error ?? "Erro ao gerar horários.")
      return
    }

    const { criados, ignorados } = await res.json()
    toast.success(
      ignorados > 0
        ? `${criados} horário${criados !== 1 ? "s" : ""} gerado${criados !== 1 ? "s" : ""}. ${ignorados} já existia${ignorados !== 1 ? "m" : ""} e foi${ignorados !== 1 ? "ram" : ""} ignorado${ignorados !== 1 ? "s" : ""}.`
        : `${criados} horário${criados !== 1 ? "s" : ""} gerado${criados !== 1 ? "s" : ""} com sucesso!`
    )
    router.push("/horarios")
    router.refresh()
  }

  const duracaoOptions = [
    { value: "30", label: "30 minutos" },
    { value: "40", label: "40 minutos" },
    { value: "45", label: "45 minutos" },
    { value: "60", label: "1 hora" },
    { value: "90", label: "1h30" },
    { value: "120", label: "2 horas" },
  ]

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <Card>
        <div className="flex flex-col gap-4">
          <Select
            label="Profissional"
            placeholder="Selecione o profissional"
            error={errors.profissionalId?.message}
            options={profissionais.map((p) => ({ value: p.id, label: p.nome }))}
            {...register("profissionalId")}
          />

          {/* Multi-day selector */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
              Dias da semana
            </label>
            <div className="flex gap-2 flex-wrap">
              {DIAS_ORDER.map((dia) => {
                const selected = selectedDias.includes(dia)
                return (
                  <button
                    key={dia}
                    type="button"
                    onClick={() => toggleDia(dia)}
                    className="px-3 py-1.5 rounded-lg text-sm font-medium transition-all border"
                    style={{
                      background: selected ? "var(--accent)" : "transparent",
                      color: selected ? "var(--accent-fg)" : "var(--text-secondary)",
                      borderColor: selected ? "var(--accent)" : "var(--card-border)",
                    }}
                  >
                    {DIAS_ABREV[dia]}
                  </button>
                )
              })}
            </div>
            {errors.diasSemana && (
              <p className="text-xs" style={{ color: "#ef4444" }}>{errors.diasSemana.message}</p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Select
              label="Duração da sessão"
              error={errors.duracaoSessao?.message}
              options={duracaoOptions}
              {...register("duracaoSessao")}
            />
            <Input
              label="Intervalo entre sessões (min)"
              type="number"
              min={0}
              max={60}
              placeholder="0"
              {...register("intervaloSessoes")}
            />
          </div>
        </div>
      </Card>

      <Card>
        <p className="text-sm font-semibold mb-3" style={{ color: "var(--text-primary)" }}>
          Horários do dia
        </p>
        <div className="grid grid-cols-2 gap-4">
          <Input label="Início da manhã" type="time" error={errors.horaInicio?.message} {...register("horaInicio")} />
          <Input label="Início do almoço" type="time" error={errors.inicioAlmoco?.message} {...register("inicioAlmoco")} />
          <Input label="Fim do almoço" type="time" error={errors.fimAlmoco?.message} {...register("fimAlmoco")} />
          <Input label="Fim da tarde" type="time" error={errors.horaFim?.message} {...register("horaFim")} />
        </div>
      </Card>

      {/* Preview */}
      {preview && preview.porDia > 0 && (
        <Card>
          <p className="text-sm font-semibold mb-3" style={{ color: "var(--text-primary)" }}>
            Preview — {preview.porDia} atendimento{preview.porDia !== 1 ? "s" : ""} por dia
            {selectedDias.length > 1 && (
              <span style={{ color: "var(--text-muted)", fontWeight: 400 }}>
                {" "}· {preview.total} no total ({selectedDias.length} dias)
              </span>
            )}
          </p>
          <div className="flex flex-col gap-3">
            {preview.manha.length > 0 && (
              <div>
                <p className="text-xs font-medium mb-2" style={{ color: "var(--text-muted)" }}>
                  Manhã ({preview.manha.length} atendimento{preview.manha.length !== 1 ? "s" : ""})
                </p>
                <div className="flex flex-wrap gap-2">
                  {preview.manha.map((slot) => (
                    <div
                      key={slot}
                      className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium"
                      style={{ background: "var(--bg-base)", color: "var(--text-primary)" }}
                    >
                      <Clock size={11} style={{ color: "var(--accent)" }} />
                      {slot}
                    </div>
                  ))}
                </div>
              </div>
            )}
            {preview.tarde.length > 0 && (
              <div>
                <p className="text-xs font-medium mb-2" style={{ color: "var(--text-muted)" }}>
                  Tarde ({preview.tarde.length} atendimento{preview.tarde.length !== 1 ? "s" : ""})
                </p>
                <div className="flex flex-wrap gap-2">
                  {preview.tarde.map((slot) => (
                    <div
                      key={slot}
                      className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium"
                      style={{ background: "var(--bg-base)", color: "var(--text-primary)" }}
                    >
                      <Clock size={11} style={{ color: "var(--accent)" }} />
                      {slot}
                    </div>
                  ))}
                </div>
              </div>
            )}
            {selectedDias.length > 1 && (
              <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                Aplicado em: {selectedDias.map((d) => DIAS_SEMANA[d]).join(", ")}
              </p>
            )}
          </div>
        </Card>
      )}

      {preview && preview.porDia === 0 && (
        <div
          className="rounded-xl px-4 py-3 text-sm"
          style={{ background: "var(--bg-base)", color: "var(--text-muted)" }}
        >
          Nenhum horário calculado com os parâmetros informados. Verifique os horários e a duração da sessão.
        </div>
      )}

      <div className="flex gap-3">
        <Button type="submit" loading={isSubmitting} disabled={!preview || preview.total === 0 || selectedDias.length === 0}>
          Gerar {preview && preview.total > 0 ? `${preview.total} horário${preview.total !== 1 ? "s" : ""}` : "horários"}
        </Button>
        <Button type="button" variant="secondary" onClick={() => router.back()}>
          Cancelar
        </Button>
      </div>
    </form>
  )
}
