import { prisma } from "@/lib/prisma"
import { notFound } from "next/navigation"
import { AgendamentoForm } from "@/components/forms/agendamento-form"

export default async function EditarAgendamentoPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const [agendamento, profissionais, especialidades, pacientes] = await Promise.all([
    prisma.agendamento.findUnique({
      where: { id },
      include: { pacientes: true },
    }),
    prisma.profissional.findMany({ where: { ativo: true }, orderBy: { nome: "asc" }, select: { id: true, nome: true, especialidadeId: true } }),
    prisma.especialidade.findMany({ where: { ativo: true }, orderBy: { nome: "asc" }, select: { id: true, nome: true } }),
    prisma.paciente.findMany({ where: { ativo: true }, orderBy: { nome: "asc" }, select: { id: true, nome: true, telefone: true, perfil: true } }),
  ])

  if (!agendamento) notFound()

  function toLocalDateTimeString(date: Date) {
    const d = new Date(date)
    d.setMinutes(d.getMinutes() - d.getTimezoneOffset())
    return d.toISOString().slice(0, 16)
  }

  const initialData = {
    id: agendamento.id,
    tipo: agendamento.tipo as "INDIVIDUAL" | "GRUPO",
    profissionalId: agendamento.profissionalId,
    especialidadeId: agendamento.especialidadeId,
    dataHoraInicio: toLocalDateTimeString(agendamento.dataHoraInicio),
    dataHoraFim: toLocalDateTimeString(agendamento.dataHoraFim),
    numeroSessoes: agendamento.numeroSessoes,
    status: agendamento.status as "AGENDADO" | "CONFIRMADO" | "REALIZADO" | "CANCELADO" | "FALTOU",
    observacoes: agendamento.observacoes ?? "",
    origem: agendamento.origem as "MANUAL" | "AUTOMATICO",
    pacienteIds: agendamento.pacientes.map((p) => p.pacienteId),
    recorrenciaId: agendamento.recorrenciaId ?? undefined,
  }

  return (
    <div className="flex flex-col gap-6 max-w-2xl">
      <div>
        <h1 className="text-2xl font-bold" style={{ color: "var(--text-primary)" }}>
          Editar agendamento
        </h1>
        <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>
          Todos os campos podem ser alterados manualmente.
        </p>
      </div>
      <AgendamentoForm
        profissionais={profissionais}
        especialidades={especialidades}
        pacientes={pacientes}
        initialData={initialData}
      />
    </div>
  )
}
