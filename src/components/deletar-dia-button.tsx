"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import { Trash2 } from "lucide-react"

interface Props {
  profissionalId: string
  diaSemana: string
  label: string
}

export function DeletarDiaButton({ profissionalId, diaSemana, label }: Props) {
  const router = useRouter()
  const [confirmando, setConfirmando] = useState(false)
  const [loading, setLoading] = useState(false)

  async function apagar() {
    setLoading(true)
    const res = await fetch(
      `/api/horarios/dia?profissionalId=${profissionalId}&diaSemana=${diaSemana}`,
      { method: "DELETE" }
    )
    setLoading(false)
    setConfirmando(false)

    if (!res.ok) {
      toast.error("Erro ao apagar horários.")
      return
    }

    const { apagados } = await res.json()
    toast.success(`${apagados} horário${apagados !== 1 ? "s" : ""} de ${label} apagado${apagados !== 1 ? "s" : ""}.`)
    router.refresh()
  }

  if (confirmando) {
    return (
      <div className="flex items-center gap-1.5">
        <span className="text-xs" style={{ color: "var(--text-muted)" }}>Apagar tudo?</span>
        <button
          onClick={apagar}
          disabled={loading}
          className="text-xs font-medium px-2 py-0.5 rounded transition-opacity hover:opacity-80"
          style={{ background: "#ef4444", color: "#fff" }}
        >
          {loading ? "..." : "Sim"}
        </button>
        <button
          onClick={() => setConfirmando(false)}
          className="text-xs font-medium px-2 py-0.5 rounded transition-opacity hover:opacity-80"
          style={{ background: "var(--card-border)", color: "var(--text-secondary)" }}
        >
          Não
        </button>
      </div>
    )
  }

  return (
    <button
      onClick={() => setConfirmando(true)}
      className="p-1.5 rounded-lg hover:opacity-70 transition-opacity"
      title={`Apagar todos os horários de ${label}`}
    >
      <Trash2 size={12} style={{ color: "var(--text-muted)" }} />
    </button>
  )
}
