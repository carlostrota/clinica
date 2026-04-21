"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const schema = z.object({
  nome: z.string().min(2, "Nome é obrigatório"),
  descricao: z.string().optional(),
  ativo: z.boolean(),
})

type FormData = z.infer<typeof schema>

interface Props {
  initialData?: {
    id: string
    nome: string
    descricao: string | null
    ativo: boolean
  }
}

export function ConvenioForm({ initialData }: Props) {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      nome: initialData?.nome ?? "",
      descricao: initialData?.descricao ?? "",
      ativo: initialData?.ativo ?? true,
    },
  })

  async function onSubmit(data: FormData) {
    const url = initialData ? `/api/convenios/${initialData.id}` : "/api/convenios"
    const method = initialData ? "PUT" : "POST"

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })

    if (!res.ok) {
      toast.error("Erro ao salvar convênio.")
      return
    }

    toast.success(initialData ? "Convênio atualizado!" : "Convênio cadastrado!")
    router.push("/convenios")
    router.refresh()
  }

  return (
    <Card>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <Input
          label="Nome *"
          placeholder="Ex: Unimed, Bradesco Saúde..."
          error={errors.nome?.message}
          {...register("nome")}
        />

        <Input
          label="Descrição (opcional)"
          placeholder="Observações sobre o convênio..."
          {...register("descricao")}
        />

        <div className="flex items-center gap-2">
          <input type="checkbox" id="ativo" {...register("ativo")} className="w-4 h-4 cursor-pointer" />
          <label htmlFor="ativo" className="text-sm" style={{ color: "var(--text-primary)" }}>
            Ativo
          </label>
        </div>

        <div className="flex gap-3 pt-2">
          <Button type="submit" loading={isSubmitting}>
            {initialData ? "Salvar alterações" : "Cadastrar convênio"}
          </Button>
          <Button type="button" variant="secondary" onClick={() => router.back()}>
            Cancelar
          </Button>
        </div>
      </form>
    </Card>
  )
}
