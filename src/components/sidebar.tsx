"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Users,
  Stethoscope,
  UserRound,
  Clock,
  CalendarDays,
  Settings,
  LogOut,
  Shield,
} from "lucide-react"
import { signOut } from "next-auth/react"

interface SidebarProps {
  userName: string
  userRole: string
}

const navItems = [
  { href: "/dashboard", icon: LayoutDashboard, label: "Dashboard", roles: ["ADMIN", "RECEPCIONISTA", "TERAPEUTA"] },
  { href: "/pacientes", icon: Users, label: "Pacientes", roles: ["ADMIN", "RECEPCIONISTA", "TERAPEUTA"] },
  { href: "/especialidades", icon: Stethoscope, label: "Especialidades", roles: ["ADMIN", "RECEPCIONISTA", "TERAPEUTA"] },
  { href: "/profissionais", icon: UserRound, label: "Profissionais", roles: ["ADMIN", "RECEPCIONISTA", "TERAPEUTA"] },
  { href: "/horarios", icon: Clock, label: "Horários", roles: ["ADMIN", "RECEPCIONISTA", "TERAPEUTA"] },
  { href: "/convenios", icon: Shield, label: "Convênios", roles: ["ADMIN", "RECEPCIONISTA"] },
  { href: "/agendamentos", icon: CalendarDays, label: "Agendamentos", roles: ["ADMIN", "RECEPCIONISTA", "TERAPEUTA"] },
  { href: "/usuarios", icon: Settings, label: "Usuários", roles: ["ADMIN"] },
]

const roleLabels: Record<string, string> = {
  ADMIN: "Administrador",
  RECEPCIONISTA: "Recepcionista",
  TERAPEUTA: "Terapeuta",
}

export function Sidebar({ userName, userRole }: SidebarProps) {
  const pathname = usePathname()

  const visibleItems = navItems.filter((item) => item.roles.includes(userRole))

  const initials = userName
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase()

  return (
    <aside
      className="flex flex-col h-screen sticky top-0 shrink-0"
      style={{
        width: "var(--sidebar-w)",
        background: "var(--card)",
        borderRight: "1px solid var(--card-border)",
      }}
    >
      {/* Logo */}
      <div className="px-5 py-5 border-b" style={{ borderColor: "var(--card-border)" }}>
        <div className="flex items-center gap-2">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold"
            style={{ background: "var(--accent)" }}
          >
            C
          </div>
          <span className="font-semibold text-base" style={{ color: "var(--text-primary)" }}>
            Clínica
          </span>
        </div>
      </div>

      {/* User info */}
      <div className="px-4 py-4 border-b" style={{ borderColor: "var(--card-border)" }}>
        <div className="flex flex-col items-center gap-2">
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center text-white text-lg font-semibold"
            style={{ background: "var(--bg-blob)" }}
          >
            <span style={{ color: "var(--text-secondary)" }}>{initials}</span>
          </div>
          <div className="text-center">
            <p className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
              {userName}
            </p>
            <p className="text-xs" style={{ color: "var(--text-muted)" }}>
              {roleLabels[userRole] ?? userRole}
            </p>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 overflow-y-auto">
        <ul className="flex flex-col gap-0.5">
          {visibleItems.map((item) => {
            const active = pathname === item.href || pathname.startsWith(item.href + "/")
            const Icon = item.icon
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all"
                  style={{
                    background: active ? "oklch(0.97 0.03 55)" : "transparent",
                    color: active ? "var(--accent)" : "var(--text-secondary)",
                  }}
                >
                  <Icon size={18} />
                  {item.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* Sign out */}
      <div className="px-3 py-4 border-t" style={{ borderColor: "var(--card-border)" }}>
        <button
          onClick={() => signOut({ callbackUrl: "/login" })}
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium w-full transition-all hover:opacity-80"
          style={{ color: "var(--text-secondary)" }}
        >
          <LogOut size={18} />
          Sair
        </button>
      </div>
    </aside>
  )
}
