import { prisma } from "@/lib/prisma"
import { notFound } from "next/navigation"
import { PacienteForm } from "@/components/forms/paciente-form"

export default async function EditarPacientePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const [paciente, especialidades, convenios] = await Promise.all([
    prisma.paciente.findUnique({
      where: { id },
      include: { especialidades: true },
    }),
    prisma.especialidade.findMany({ where: { ativo: true }, orderBy: { nome: "asc" }, select: { id: true, nome: true } }),
    prisma.convenio.findMany({ where: { ativo: true }, orderBy: { nome: "asc" }, select: { id: true, nome: true } }),
  ])

  if (!paciente) notFound()

  const initialData = {
    id: paciente.id,
    nome: paciente.nome,
    telefone: paciente.telefone,
    dataNasc: paciente.dataNasc?.toISOString().split("T")[0],
    cpf: paciente.cpf ?? undefined,
    telefone2: paciente.telefone2 ?? undefined,
    email: paciente.email ?? undefined,
    cep: paciente.cep ?? undefined,
    logradouro: paciente.logradouro ?? undefined,
    numero: paciente.numero ?? undefined,
    complemento: paciente.complemento ?? undefined,
    bairro: paciente.bairro ?? undefined,
    cidade: paciente.cidade ?? undefined,
    estado: paciente.estado ?? undefined,
    diagnostico: paciente.diagnostico ?? undefined,
    observacoes: paciente.observacoes ?? undefined,
    perfil: paciente.perfil ?? undefined,
    nomeResponsavel: paciente.nomeResponsavel ?? undefined,
    telefoneResponsavel: paciente.telefoneResponsavel ?? undefined,
    relacaoResponsavel: paciente.relacaoResponsavel ?? undefined,
    ativo: paciente.ativo,
    convenioId: paciente.convenioId ?? undefined,
    especialidadeIds: paciente.especialidades.map((e) => e.especialidadeId),
  }

  return (
    <div className="flex flex-col gap-6 max-w-2xl">
      <div>
        <h1 className="text-2xl font-bold" style={{ color: "var(--text-primary)" }}>
          Editar paciente
        </h1>
        <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>
          {paciente.nome}
        </p>
      </div>
      <PacienteForm especialidades={especialidades} convenios={convenios} initialData={initialData} />
    </div>
  )
}
