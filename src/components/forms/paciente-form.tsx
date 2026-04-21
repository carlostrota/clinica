"use client"

import { useState } from "react"
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
  dataNasc: z.string().optional(),
  cpf: z.string().optional(),
  telefone: z.string().min(1, "Telefone é obrigatório"),
  telefone2: z.string().optional(),
  email: z.string().email("E-mail inválido").optional().or(z.literal("")),
  convenioId: z.string().optional(),
  cep: z.string().optional(),
  logradouro: z.string().optional(),
  numero: z.string().optional(),
  complemento: z.string().optional(),
  bairro: z.string().optional(),
  cidade: z.string().optional(),
  estado: z.string().optional(),
  diagnostico: z.string().optional(),
  observacoes: z.string().optional(),
  perfil: z.string().optional(),
  nomeResponsavel: z.string().optional(),
  telefoneResponsavel: z.string().optional(),
  relacaoResponsavel: z.string().optional(),
  ativo: z.boolean(),
  especialidadeIds: z.array(z.string()),
})

type FormData = z.infer<typeof schema>

const tabs = ["Dados pessoais", "Endereço", "Perfil clínico", "Responsável"] as const
type Tab = typeof tabs[number]

interface Especialidade { id: string; nome: string }
interface Convenio { id: string; nome: string }

interface Props {
  especialidades: Especialidade[]
  convenios: Convenio[]
  initialData?: Partial<FormData> & { id?: string }
}

export function PacienteForm({ especialidades, convenios, initialData }: Props) {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<Tab>("Dados pessoais")

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      nome: "",
      telefone: "",
      ativo: true,
      especialidadeIds: [],
      convenioId: "",
      ...initialData,
    },
  })

  const selectedEspecialidades = watch("especialidadeIds") ?? []

  function toggleEspecialidade(id: string) {
    const current = selectedEspecialidades
    if (current.includes(id)) {
      setValue("especialidadeIds", current.filter((e) => e !== id))
    } else {
      setValue("especialidadeIds", [...current, id])
    }
  }

  async function onSubmit(data: FormData) {
    const url = initialData?.id ? `/api/pacientes/${initialData.id}` : "/api/pacientes"
    const method = initialData?.id ? "PUT" : "POST"

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })

    if (!res.ok) {
      toast.error("Erro ao salvar paciente.")
      return
    }

    toast.success(initialData?.id ? "Paciente atualizado!" : "Paciente cadastrado!")
    router.push("/pacientes")
    router.refresh()
  }

  return (
    <div className="flex flex-col gap-4">
      {/* Tabs */}
      <div className="flex gap-1 p-1 rounded-xl" style={{ background: "var(--card)", border: "1px solid var(--card-border)" }}>
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className="flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-all"
            style={{
              background: activeTab === tab ? "var(--accent)" : "transparent",
              color: activeTab === tab ? "var(--accent-fg)" : "var(--text-secondary)",
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      <Card>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          {/* Dados pessoais */}
          {activeTab === "Dados pessoais" && (
            <>
              <Input label="Nome completo *" error={errors.nome?.message} {...register("nome")} />
              <div className="grid grid-cols-2 gap-4">
                <Input label="Data de nascimento" type="date" {...register("dataNasc")} />
                <Input label="CPF" placeholder="000.000.000-00" {...register("cpf")} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Input label="Telefone *" placeholder="(11) 99999-9999" error={errors.telefone?.message} {...register("telefone")} />
                <Input label="Telefone 2" placeholder="(11) 99999-9999" {...register("telefone2")} />
              </div>
              <Input label="E-mail" type="email" error={errors.email?.message} {...register("email")} />
              <Select
                label="Convênio"
                placeholder="Particular / Sem convênio"
                options={convenios.map((c) => ({ value: c.id, label: c.nome }))}
                {...register("convenioId")}
              />
              <div className="flex items-center gap-2">
                <input type="checkbox" id="ativo" {...register("ativo")} className="w-4 h-4 cursor-pointer" />
                <label htmlFor="ativo" className="text-sm" style={{ color: "var(--text-primary)" }}>Paciente ativo</label>
              </div>
            </>
          )}

          {/* Endereço */}
          {activeTab === "Endereço" && (
            <>
              <div className="grid grid-cols-3 gap-4">
                <Input label="CEP" placeholder="00000-000" {...register("cep")} />
                <div className="col-span-2">
                  <Input label="Logradouro" placeholder="Rua, Avenida..." {...register("logradouro")} />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <Input label="Número" placeholder="123" {...register("numero")} />
                <div className="col-span-2">
                  <Input label="Complemento" placeholder="Apto, Bloco..." {...register("complemento")} />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2">
                  <Input label="Bairro" {...register("bairro")} />
                </div>
                <Input label="Cidade" {...register("cidade")} />
              </div>
              <Select
                label="Estado"
                placeholder="Selecione"
                options={["AC","AL","AP","AM","BA","CE","DF","ES","GO","MA","MT","MS","MG","PA","PB","PR","PE","PI","RJ","RN","RS","RO","RR","SC","SP","SE","TO"].map((e) => ({ value: e, label: e }))}
                {...register("estado")}
              />
            </>
          )}

          {/* Perfil clínico */}
          {activeTab === "Perfil clínico" && (
            <>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                  Especialidades em acompanhamento
                </label>
                <div className="flex flex-wrap gap-2 mt-1">
                  {especialidades.map((esp) => {
                    const selected = selectedEspecialidades.includes(esp.id)
                    return (
                      <button
                        key={esp.id}
                        type="button"
                        onClick={() => toggleEspecialidade(esp.id)}
                        className="px-3 py-1.5 rounded-full text-sm font-medium transition-all border"
                        style={{
                          background: selected ? "var(--accent)" : "transparent",
                          color: selected ? "var(--accent-fg)" : "var(--text-secondary)",
                          borderColor: selected ? "var(--accent)" : "var(--card-border)",
                        }}
                      >
                        {esp.nome}
                      </button>
                    )
                  })}
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                  Diagnóstico
                </label>
                <textarea
                  rows={3}
                  placeholder="CID, descrição do diagnóstico..."
                  className="rounded-lg px-3 py-2 text-sm outline-none resize-none"
                  style={{ background: "var(--card)", border: "1px solid var(--card-border)", color: "var(--text-primary)" }}
                  {...register("diagnostico")}
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                  Perfil (para agrupamento)
                </label>
                <Input
                  placeholder="Ex: autismo, tdah, ansiedade"
                  {...register("perfil")}
                />
                <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                  Tags separadas por vírgula — usadas para sugerir grupos de pacientes compatíveis.
                </p>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                  Observações clínicas
                </label>
                <textarea
                  rows={4}
                  placeholder="Histórico, alergias, contraindicações..."
                  className="rounded-lg px-3 py-2 text-sm outline-none resize-none"
                  style={{ background: "var(--card)", border: "1px solid var(--card-border)", color: "var(--text-primary)" }}
                  {...register("observacoes")}
                />
              </div>
            </>
          )}

          {/* Responsável */}
          {activeTab === "Responsável" && (
            <>
              <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                Preencha caso o paciente seja menor de idade ou necessite de representante legal.
              </p>
              <Input label="Nome do responsável" placeholder="Nome completo" {...register("nomeResponsavel")} />
              <div className="grid grid-cols-2 gap-4">
                <Input label="Telefone" placeholder="(11) 99999-9999" {...register("telefoneResponsavel")} />
                <Select
                  label="Relação"
                  placeholder="Selecione"
                  options={[
                    { value: "mae", label: "Mãe" },
                    { value: "pai", label: "Pai" },
                    { value: "conjuge", label: "Cônjuge" },
                    { value: "filho", label: "Filho(a)" },
                    { value: "tutor", label: "Tutor(a)" },
                    { value: "outro", label: "Outro" },
                  ]}
                  {...register("relacaoResponsavel")}
                />
              </div>
            </>
          )}

          <div className="flex gap-3 pt-2 border-t" style={{ borderColor: "var(--card-border)" }}>
            <Button type="submit" loading={isSubmitting}>
              {initialData?.id ? "Salvar alterações" : "Cadastrar paciente"}
            </Button>
            <Button type="button" variant="secondary" onClick={() => router.back()}>
              Cancelar
            </Button>
          </div>
        </form>
      </Card>
    </div>
  )
}
