import { prisma } from "@/lib/prisma"
import { AgendamentoPacienteForm } from "@/components/forms/agendamento-paciente-form"

export default async function AgendamentoPacientePage() {
  const [profissionais, pacientes] = await Promise.all([
    prisma.profissional.findMany({
      where: { ativo: true },
      orderBy: { nome: "asc" },
      select: { id: true, nome: true, especialidadeId: true },
    }),
    prisma.paciente.findMany({
      where: { ativo: true },
      orderBy: { nome: "asc" },
      select: { id: true, nome: true, perfil: true },
    }),
  ])

  return (
    <div className="flex flex-col gap-6 max-w-2xl">
      <div>
        <h1 className="text-2xl font-bold" style={{ color: "var(--text-primary)" }}>
          Agendar semana do paciente
        </h1>
        <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>
          Selecione o paciente, configure cada disciplina e o agendamento se repete semanalmente.
        </p>
      </div>
      <AgendamentoPacienteForm profissionais={profissionais} pacientes={pacientes} />
    </div>
  )
}
