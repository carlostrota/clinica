"use client"

import { useForm, type Resolver } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { DIAS_SEMANA } from "@/lib/utils"

const schema = z.object({
  profissionalId: z.string().min(1, "Profissional é obrigatório"),
  diaSemana: z.enum(["SEGUNDA", "TERCA", "QUARTA", "QUINTA", "SEXTA", "SABADO"]),
  horaInicio: z.string().min(1, "Horário de início é obrigatório"),
  duracaoSessao: z.coerce.number().min(15, "Mínimo 15 minutos").max(480, "Máximo 8 horas"),
  intervaloSessoes: z.coerce.number().min(0),
  ativo: z.boolean(),
})

type FormData = z.output<typeof schema>

interface Profissional { id: string; nome: string }

interface Props {
  profissionais: Profissional[]
  initialProfissionalId?: string
  initialData?: FormData & { id: string }
}

export function HorarioForm({ profissionais, initialProfissionalId, initialData }: Props) {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema) as Resolver<FormData>,
    defaultValues: {
      profissionalId: initialData?.profissionalId ?? initialProfissionalId ?? "",
      diaSemana: initialData?.diaSemana ?? "SEGUNDA",
      horaInicio: initialData?.horaInicio ?? "08:00",
      duracaoSessao: initialData?.duracaoSessao ?? 60,
      intervaloSessoes: initialData?.intervaloSessoes ?? 0,
      ativo: initialData?.ativo ?? true,
    },
  })

  async function onSubmit(data: FormData) {
    const url = initialData ? `/api/horarios/${initialData.id}` : "/api/horarios"
    const method = initialData ? "PUT" : "POST"

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })

    if (!res.ok) {
      toast.error("Erro ao salvar horário.")
      return
    }

    toast.success(initialData ? "Horário atualizado!" : "Horário cadastrado!")
    router.push("/horarios")
    router.refresh()
  }

  const diasOptions = Object.entries(DIAS_SEMANA).map(([value, label]) => ({ value, label }))
  const duracaoOptions = [
    { value: "30", label: "30 minutos" },
    { value: "40", label: "40 minutos" },
    { value: "45", label: "45 minutos" },
    { value: "60", label: "1 hora" },
    { value: "90", label: "1h30" },
    { value: "120", label: "2 horas" },
  ]

  return (
    <Card>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <Select
          label="Profissional"
          placeholder="Selecione o profissional"
          error={errors.profissionalId?.message}
          options={profissionais.map((p) => ({ value: p.id, label: p.nome }))}
          {...register("profissionalId")}
        />

        <Select
          label="Dia da semana"
          error={errors.diaSemana?.message}
          options={diasOptions}
          {...register("diaSemana")}
        />

        <div className="grid grid-cols-2 gap-4">
          <Input
            label="Horário de início"
            type="time"
            error={errors.horaInicio?.message}
            {...register("horaInicio")}
          />
          <Select
            label="Duração da sessão"
            error={errors.duracaoSessao?.message}
            options={duracaoOptions}
            {...register("duracaoSessao")}
          />
        </div>

        <Input
          label="Intervalo entre sessões (minutos)"
          type="number"
          min={0}
          max={60}
          placeholder="0"
          {...register("intervaloSessoes")}
        />

        <div className="flex items-center gap-2">
          <input type="checkbox" id="ativo" {...register("ativo")} className="w-4 h-4 cursor-pointer" />
          <label htmlFor="ativo" className="text-sm" style={{ color: "var(--text-primary)" }}>Horário ativo</label>
        </div>

        <div className="flex gap-3 pt-2">
          <Button type="submit" loading={isSubmitting}>
            {initialData ? "Salvar alterações" : "Cadastrar horário"}
          </Button>
          <Button type="button" variant="secondary" onClick={() => router.back()}>
            Cancelar
          </Button>
        </div>
      </form>
    </Card>
  )
}
