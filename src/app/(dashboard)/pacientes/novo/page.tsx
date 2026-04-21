import { prisma } from "@/lib/prisma"
import { PacienteForm } from "@/components/forms/paciente-form"

export default async function NovoPacientePage() {
  const [especialidades, convenios] = await Promise.all([
    prisma.especialidade.findMany({
      where: { ativo: true },
      orderBy: { nome: "asc" },
      select: { id: true, nome: true },
    }),
    prisma.convenio.findMany({
      where: { ativo: true },
      orderBy: { nome: "asc" },
      select: { id: true, nome: true },
    }),
  ])

  return (
    <div className="flex flex-col gap-6 max-w-2xl">
      <div>
        <h1 className="text-2xl font-bold" style={{ color: "var(--text-primary)" }}>
          Novo paciente
        </h1>
        <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>
          Preencha os dados do paciente. Os campos marcados com * são obrigatórios.
        </p>
      </div>
      <PacienteForm especialidades={especialidades} convenios={convenios} />
    </div>
  )
}
