import { prisma } from "@/lib/prisma"
import { notFound } from "next/navigation"
import { ProfissionalForm } from "@/components/forms/profissional-form"

export default async function EditarProfissionalPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const [profissional, especialidades] = await Promise.all([
    prisma.profissional.findUnique({ where: { id } }),
    prisma.especialidade.findMany({ where: { ativo: true }, orderBy: { nome: "asc" }, select: { id: true, nome: true } }),
  ])

  if (!profissional) notFound()

  return (
    <div className="flex flex-col gap-6 max-w-xl">
      <div>
        <h1 className="text-2xl font-bold" style={{ color: "var(--text-primary)" }}>
          Editar profissional
        </h1>
        <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>
          {profissional.nome}
        </p>
      </div>
      <ProfissionalForm especialidades={especialidades} initialData={profissional} />
    </div>
  )
}
