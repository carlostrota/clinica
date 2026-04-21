import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date | string | null | undefined): string {
  if (!date) return ""
  return new Date(date).toLocaleDateString("pt-BR")
}

export function formatDateTime(date: Date | string | null | undefined): string {
  if (!date) return ""
  return new Date(date).toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })
}

export const DIAS_SEMANA: Record<string, string> = {
  SEGUNDA: "Segunda-feira",
  TERCA: "Terça-feira",
  QUARTA: "Quarta-feira",
  QUINTA: "Quinta-feira",
  SEXTA: "Sexta-feira",
  SABADO: "Sábado",
}

export const STATUS_AGENDAMENTO: Record<string, { label: string; color: string }> = {
  AGENDADO: { label: "Agendado", color: "oklch(0.65 0.17 55)" },
  CONFIRMADO: { label: "Confirmado", color: "oklch(0.55 0.15 145)" },
  REALIZADO: { label: "Realizado", color: "oklch(0.45 0.12 145)" },
  CANCELADO: { label: "Cancelado", color: "oklch(0.50 0.18 25)" },
  FALTOU: { label: "Faltou", color: "oklch(0.50 0.18 25)" },
}
