import { prisma } from "@/lib/prisma"
import { notFound } from "next/navigation"
import { HorarioForm } from "@/components/forms/horario-form"

export default async function EditarHorarioPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const [horario, profissionais] = await Promise.all([
    prisma.horarioAtendimento.findUnique({ where: { id } }),
    prisma.profissional.findMany({ where: { ativo: true }, orderBy: { nome: "asc" }, select: { id: true, nome: true } }),
  ])

  if (!horario) notFound()

  return (
    <div className="flex flex-col gap-6 max-w-lg">
      <div>
        <h1 className="text-2xl font-bold" style={{ color: "var(--text-primary)" }}>
          Editar horário
        </h1>
      </div>
      <HorarioForm
        profissionais={profissionais}
        initialData={{ ...horario, diaSemana: horario.diaSemana as "SEGUNDA" | "TERCA" | "QUARTA" | "QUINTA" | "SEXTA" | "SABADO" }}
      />
    </div>
  )
}
