import { ConvenioForm } from "@/components/forms/convenio-form"

export default function NovoConvenioPage() {
  return (
    <div className="flex flex-col gap-6 max-w-xl">
      <div>
        <h1 className="text-2xl font-bold" style={{ color: "var(--text-primary)" }}>
          Novo convênio
        </h1>
        <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>
          Preencha os dados do plano ou convênio de saúde.
        </p>
      </div>
      <ConvenioForm />
    </div>
  )
}
