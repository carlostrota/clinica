import { cn } from "@/lib/utils"

interface BadgeProps {
  children: React.ReactNode
  variant?: "success" | "warning" | "error" | "default"
  className?: string
}

const styles: Record<string, React.CSSProperties> = {
  success: { background: "var(--success-bg)", color: "var(--success)" },
  warning: { background: "var(--warning-bg)", color: "var(--warning)" },
  error: { background: "var(--error-bg)", color: "var(--error)" },
  default: { background: "var(--card-border)", color: "var(--text-secondary)" },
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn("inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium", className)}
      style={styles[variant]}
    >
      {children}
    </span>
  )
}
