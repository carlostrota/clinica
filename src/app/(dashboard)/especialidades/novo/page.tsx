import { EspecialidadeForm } from "@/components/forms/especialidade-form"

export default function NovaEspecialidadePage() {
  return (
    <div className="flex flex-col gap-6 max-w-xl">
      <div>
        <h1 className="text-2xl font-bold" style={{ color: "var(--text-primary)" }}>
          Nova especialidade
        </h1>
        <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>
          Preencha os dados da especialidade clínica ou terapêutica.
        </p>
      </div>
      <EspecialidadeForm />
    </div>
  )
}
