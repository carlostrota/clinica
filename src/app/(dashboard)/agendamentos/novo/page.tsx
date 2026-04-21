import { prisma } from "@/lib/prisma"
import { AgendamentoNovoForm } from "@/components/forms/agendamento-novo-form"

export default async function NovoAgendamentoPage() {
  const [profissionais, especialidades, pacientes] = await Promise.all([
    prisma.profissional.findMany({ where: { ativo: true }, orderBy: { nome: "asc" }, select: { id: true, nome: true, especialidadeId: true } }),
    prisma.especialidade.findMany({ where: { ativo: true }, orderBy: { nome: "asc" }, select: { id: true, nome: true } }),
    prisma.paciente.findMany({ where: { ativo: true }, orderBy: { nome: "asc" }, select: { id: true, nome: true, perfil: true } }),
  ])

  return (
    <div className="flex flex-col gap-6 max-w-2xl">
      <div>
        <h1 className="text-2xl font-bold" style={{ color: "var(--text-primary)" }}>
          Novo agendamento
        </h1>
        <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>
          As sessões são recorrentes — escolha o dia, horário e quantas semanas agendar.
        </p>
      </div>
      <AgendamentoNovoForm profissionais={profissionais} especialidades={especialidades} pacientes={pacientes} />
    </div>
  )
}
