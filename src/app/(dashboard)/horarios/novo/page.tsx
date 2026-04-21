import { prisma } from "@/lib/prisma"
import { HorarioNovoTabs } from "@/components/horario-novo-tabs"

export default async function NovoHorarioPage({ searchParams }: { searchParams: Promise<{ profissionalId?: string }> }) {
  const { profissionalId } = await searchParams
  const profissionais = await prisma.profissional.findMany({
    where: { ativo: true },
    orderBy: { nome: "asc" },
    select: { id: true, nome: true },
  })

  return (
    <div className="flex flex-col gap-6 max-w-lg">
      <div>
        <h1 className="text-2xl font-bold" style={{ color: "var(--text-primary)" }}>
          Novo horário de atendimento
        </h1>
      </div>
      <HorarioNovoTabs profissionais={profissionais} initialProfissionalId={profissionalId} />
    </div>
  )
}
