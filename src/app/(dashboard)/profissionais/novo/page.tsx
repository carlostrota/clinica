import { prisma } from "@/lib/prisma"
import { ProfissionalForm } from "@/components/forms/profissional-form"

export default async function NovoProfissionalPage() {
  const especialidades = await prisma.especialidade.findMany({
    where: { ativo: true },
    orderBy: { nome: "asc" },
    select: { id: true, nome: true },
  })

  return (
    <div className="flex flex-col gap-6 max-w-xl">
      <div>
        <h1 className="text-2xl font-bold" style={{ color: "var(--text-primary)" }}>
          Novo profissional
        </h1>
        <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>
          Cadastre um terapeuta ou profissional clínico.
        </p>
      </div>
      <ProfissionalForm especialidades={especialidades} />
    </div>
  )
}
