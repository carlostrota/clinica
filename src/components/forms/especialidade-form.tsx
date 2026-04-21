"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const schema = z.object({
  nome: z.string().min(2, "Nome é obrigatório"),
  tipo: z.enum(["CLINICA", "TERAPEUTICA"]),
  descricao: z.string().optional(),
  cor: z.string().optional(),
  ativo: z.boolean(),
})

type FormData = z.infer<typeof schema>

interface Props {
  initialData?: {
    id: string
    nome: string
    tipo: "CLINICA" | "TERAPEUTICA"
    descricao: string | null
    cor: string | null
    ativo: boolean
  }
}

export function EspecialidadeForm({ initialData }: Props) {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      nome: initialData?.nome ?? "",
      tipo: initialData?.tipo ?? "TERAPEUTICA",
      descricao: initialData?.descricao ?? "",
      cor: initialData?.cor ?? "#7C3AED",
      ativo: initialData?.ativo ?? true,
    },
  })

  async function onSubmit(data: FormData) {
    const url = initialData ? `/api/especialidades/${initialData.id}` : "/api/especialidades"
    const method = initialData ? "PUT" : "POST"

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })

    if (!res.ok) {
      toast.error("Erro ao salvar especialidade.")
      return
    }

    toast.success(initialData ? "Especialidade atualizada!" : "Especialidade criada!")
    router.push("/especialidades")
    router.refresh()
  }

  return (
    <Card>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <Input
          label="Nome"
          placeholder="Ex: Psicologia"
          error={errors.nome?.message}
          {...register("nome")}
        />

        <Select
          label="Tipo"
          error={errors.tipo?.message}
          options={[
            { value: "TERAPEUTICA", label: "Terapêutica" },
            { value: "CLINICA", label: "Clínica" },
          ]}
          {...register("tipo")}
        />

        <Input
          label="Descrição (opcional)"
          placeholder="Descreva a especialidade..."
          {...register("descricao")}
        />

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
            Cor (calendário)
          </label>
          <input
            type="color"
            className="h-10 w-20 cursor-pointer rounded-lg border"
            style={{ borderColor: "var(--card-border)" }}
            {...register("cor")}
          />
        </div>

        <div className="flex items-center gap-2">
          <input type="checkbox" id="ativo" {...register("ativo")} className="w-4 h-4 cursor-pointer" />
          <label htmlFor="ativo" className="text-sm" style={{ color: "var(--text-primary)" }}>
            Ativa
          </label>
        </div>

        <div className="flex gap-3 pt-2">
          <Button type="submit" loading={isSubmitting}>
            {initialData ? "Salvar alterações" : "Cadastrar especialidade"}
          </Button>
          <Button type="button" variant="secondary" onClick={() => router.back()}>
            Cancelar
          </Button>
        </div>
      </form>
    </Card>
  )
}
