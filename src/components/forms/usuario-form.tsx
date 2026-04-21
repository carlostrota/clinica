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
  email: z.string().email("E-mail inválido"),
  papel: z.enum(["ADMIN", "RECEPCIONISTA", "TERAPEUTA"]),
  senha: z.string().min(6, "Senha deve ter ao menos 6 caracteres").optional().or(z.literal("")),
  profissionalId: z.string().optional(),
  ativo: z.boolean(),
})

type FormData = z.infer<typeof schema>

interface Profissional { id: string; nome: string }

interface Props {
  profissionais: Profissional[]
  initialData?: Partial<FormData> & { id?: string }
}

export function UsuarioForm({ profissionais, initialData }: Props) {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      nome: "",
      email: "",
      papel: "RECEPCIONISTA",
      senha: "",
      ativo: true,
      ...initialData,
    },
  })

  const papel = watch("papel")

  async function onSubmit(data: FormData) {
    const url = initialData?.id ? `/api/usuarios/${initialData.id}` : "/api/usuarios"
    const method = initialData?.id ? "PUT" : "POST"

    const payload = { ...data }
    if (!payload.senha) delete payload.senha
    if (payload.papel !== "TERAPEUTA") delete payload.profissionalId

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })

    if (!res.ok) {
      const err = await res.json().catch(() => ({}))
      toast.error(err.error ?? "Erro ao salvar usuário.")
      return
    }

    toast.success(initialData?.id ? "Usuário atualizado!" : "Usuário criado!")
    router.push("/usuarios")
    router.refresh()
  }

  return (
    <Card>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <Input label="Nome completo" error={errors.nome?.message} {...register("nome")} />
        <Input label="E-mail" type="email" error={errors.email?.message} {...register("email")} />
        <Input
          label={initialData?.id ? "Nova senha (deixe em branco para não alterar)" : "Senha"}
          type="password"
          placeholder="••••••••"
          error={errors.senha?.message}
          {...register("senha")}
        />
        <Select
          label="Papel"
          options={[
            { value: "ADMIN", label: "Administrador" },
            { value: "RECEPCIONISTA", label: "Recepcionista" },
            { value: "TERAPEUTA", label: "Terapeuta" },
          ]}
          {...register("papel")}
        />
        {papel === "TERAPEUTA" && (
          <Select
            label="Vincular ao profissional"
            placeholder="Selecione o profissional"
            options={profissionais.map((p) => ({ value: p.id, label: p.nome }))}
            {...register("profissionalId")}
          />
        )}
        <div className="flex items-center gap-2">
          <input type="checkbox" id="ativo" {...register("ativo")} className="w-4 h-4 cursor-pointer" />
          <label htmlFor="ativo" className="text-sm" style={{ color: "var(--text-primary)" }}>Usuário ativo</label>
        </div>
        <div className="flex gap-3 pt-2">
          <Button type="submit" loading={isSubmitting}>
            {initialData?.id ? "Salvar alterações" : "Criar usuário"}
          </Button>
          <Button type="button" variant="secondary" onClick={() => router.back()}>
            Cancelar
          </Button>
        </div>
      </form>
    </Card>
  )
}
