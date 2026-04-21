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
  especialidadeId: z.string().min(1, "Especialidade é obrigatória"),
  registro: z.string().optional(),
  telefone: z.string().optional(),
  email: z.string().email("E-mail inválido").optional().or(z.literal("")),
  ativo: z.boolean(),
})

type FormData = z.infer<typeof schema>

interface Especialidade {
  id: string
  nome: string
}

interface Props {
  especialidades: Especialidade[]
  initialData?: {
    id: string
    nome: string
    especialidadeId: string
    registro: string | null
    telefone: string | null
    email: string | null
    ativo: boolean
  }
}

export function ProfissionalForm({ especialidades, initialData }: Props) {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      nome: initialData?.nome ?? "",
      especialidadeId: initialData?.especialidadeId ?? "",
      registro: initialData?.registro ?? "",
      telefone: initialData?.telefone ?? "",
      email: initialData?.email ?? "",
      ativo: initialData?.ativo ?? true,
    },
  })

  async function onSubmit(data: FormData) {
    const url = initialData ? `/api/profissionais/${initialData.id}` : "/api/profissionais"
    const method = initialData ? "PUT" : "POST"

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })

    if (!res.ok) {
      toast.error("Erro ao salvar profissional.")
      return
    }

    toast.success(initialData ? "Profissional atualizado!" : "Profissional cadastrado!")
    router.push("/profissionais")
    router.refresh()
  }

  return (
    <Card>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <Input
          label="Nome completo"
          placeholder="Dr(a). Nome Sobrenome"
          error={errors.nome?.message}
          {...register("nome")}
        />

        <Select
          label="Especialidade"
          placeholder="Selecione uma especialidade"
          error={errors.especialidadeId?.message}
          options={especialidades.map((e) => ({ value: e.id, label: e.nome }))}
          {...register("especialidadeId")}
        />

        <Input
          label="Registro profissional (CRP, CRM, CREFITO...)"
          placeholder="Ex: CRP 06/12345"
          {...register("registro")}
        />

        <div className="grid grid-cols-2 gap-4">
          <Input
            label="Telefone"
            placeholder="(11) 99999-9999"
            {...register("telefone")}
          />
          <Input
            label="E-mail"
            type="email"
            placeholder="prof@clinica.com"
            error={errors.email?.message}
            {...register("email")}
          />
        </div>

        <div className="flex items-center gap-2">
          <input type="checkbox" id="ativo" {...register("ativo")} className="w-4 h-4 cursor-pointer" />
          <label htmlFor="ativo" className="text-sm" style={{ color: "var(--text-primary)" }}>
            Profissional ativo
          </label>
        </div>

        <div className="flex gap-3 pt-2">
          <Button type="submit" loading={isSubmitting}>
            {initialData ? "Salvar alterações" : "Cadastrar profissional"}
          </Button>
          <Button type="button" variant="secondary" onClick={() => router.back()}>
            Cancelar
          </Button>
        </div>
      </form>
    </Card>
  )
}
