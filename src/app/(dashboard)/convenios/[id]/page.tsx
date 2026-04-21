import { prisma } from "@/lib/prisma"
import { notFound } from "next/navigation"
import { ConvenioForm } from "@/components/forms/convenio-form"

export default async function EditarConvenioPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const convenio = await prisma.convenio.findUnique({ where: { id } })
  if (!convenio) notFound()

  return (
    <div className="flex flex-col gap-6 max-w-xl">
      <div>
        <h1 className="text-2xl font-bold" style={{ color: "var(--text-primary)" }}>
          Editar convênio
        </h1>
        <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>
          {convenio.nome}
        </p>
      </div>
      <ConvenioForm initialData={convenio} />
    </div>
  )
}
