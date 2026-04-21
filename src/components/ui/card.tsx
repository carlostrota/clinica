import { cn } from "@/lib/utils"

interface CardProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

export function Card({ children, className, style }: CardProps) {
  return (
    <div
      className={cn("rounded-xl p-6", className)}
      style={{
        background: "var(--card)",
        border: "1px solid var(--card-border)",
        boxShadow: "0 1px 3px oklch(0 0 0 / 0.06), 0 1px 2px oklch(0 0 0 / 0.04)",
        ...style,
      }}
    >
      {children}
    </div>
  )
}

export function CardHeader({ children, className }: CardProps) {
  return <div className={cn("mb-4", className)}>{children}</div>
}

export function CardTitle({ children, className }: CardProps) {
  return (
    <h2
      className={cn("text-lg font-semibold", className)}
      style={{ color: "var(--text-primary)" }}
    >
      {children}
    </h2>
  )
}
