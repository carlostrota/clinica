"use client"

import { useState } from "react"
import { HorarioForm } from "@/components/forms/horario-form"
import { HorarioGerarForm } from "@/components/forms/horario-gerar-form"

interface Profissional { id: string; nome: string }

interface Props {
  profissionais: Profissional[]
  initialProfissionalId?: string
}

export function HorarioNovoTabs({ profissionais, initialProfissionalId }: Props) {
  const [modo, setModo] = useState<"individual" | "automatico">("individual")

  return (
    <div className="flex flex-col gap-4">
      <div
        className="flex gap-1 p-1 rounded-xl"
        style={{ background: "var(--card)", border: "1px solid var(--card-border)" }}
      >
        <button
          type="button"
          onClick={() => setModo("individual")}
          className="flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-all"
          style={{
            background: modo === "individual" ? "var(--accent)" : "transparent",
            color: modo === "individual" ? "var(--accent-fg)" : "var(--text-secondary)",
          }}
        >
          Individual
        </button>
        <button
          type="button"
          onClick={() => setModo("automatico")}
          className="flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-all"
          style={{
            background: modo === "automatico" ? "var(--accent)" : "transparent",
            color: modo === "automatico" ? "var(--accent-fg)" : "var(--text-secondary)",
          }}
        >
          Geração automática
        </button>
      </div>

      {modo === "individual" ? (
        <HorarioForm profissionais={profissionais} initialProfissionalId={initialProfissionalId} />
      ) : (
        <HorarioGerarForm profissionais={profissionais} initialProfissionalId={initialProfissionalId} />
      )}
    </div>
  )
}
