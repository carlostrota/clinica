import { prisma } from "@/lib/prisma"
import { notFound } from "next/navigation"
import { EspecialidadeForm } from "@/components/forms/especialidade-form"

export default async function EditarEspecialidadePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const especialidade = await prisma.especialidade.findUnique({ where: { id } })
  if (!especialidade) notFound()

  return (
    <div className="flex flex-col gap-6 max-w-xl">
      <div>
        <h1 className="text-2xl font-bold" style={{ color: "var(--text-primary)" }}>
          Editar especialidade
        </h1>
        <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>
          {especialidade.nome}
        </p>
      </div>
      <EspecialidadeForm initialData={especialidade} />
    </div>
  )
}
