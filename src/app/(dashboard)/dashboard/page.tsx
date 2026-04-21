import { prisma } from "@/lib/prisma"
import { auth } from "@/lib/auth"
import { Card } from "@/components/ui/card"
import { Users, CalendarDays, UserRound, Stethoscope } from "lucide-react"
import { formatDate } from "@/lib/utils"

export default async function DashboardPage() {
  const session = await auth()

  const [totalPacientes, totalProfissionais, totalEspecialidades, agendamentosHoje] =
    await Promise.all([
      prisma.paciente.count({ where: { ativo: true } }),
      prisma.profissional.count({ where: { ativo: true } }),
      prisma.especialidade.count({ where: { ativo: true } }),
      prisma.agendamento.findMany({
        where: {
          dataHoraInicio: {
            gte: new Date(new Date().setHours(0, 0, 0, 0)),
            lt: new Date(new Date().setHours(23, 59, 59, 999)),
          },
        },
        include: {
          profissional: true,
          especialidade: true,
          pacientes: { include: { paciente: { select: { nome: true } } } },
        },
        orderBy: { dataHoraInicio: "asc" },
      }),
    ])

  const stats = [
    { label: "Pacientes ativos", value: totalPacientes, icon: Users, color: "oklch(0.55 0.15 250)" },
    { label: "Profissionais", value: totalProfissionais, icon: UserRound, color: "oklch(0.55 0.15 145)" },
    { label: "Especialidades", value: totalEspecialidades, icon: Stethoscope, color: "oklch(0.65 0.17 55)" },
    { label: "Agendamentos hoje", value: agendamentosHoje.length, icon: CalendarDays, color: "var(--accent)" },
  ]

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold" style={{ color: "var(--text-primary)" }}>
          Olá, {session?.user.name?.split(" ")[0]} 👋
        </h1>
        <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>
          {new Date().toLocaleDateString("pt-BR", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.label} className="flex items-center gap-4">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: `${stat.color}20`, color: stat.color }}
              >
                <Icon size={20} />
              </div>
              <div>
                <p className="text-2xl font-bold" style={{ color: "var(--text-primary)" }}>
                  {stat.value}
                </p>
                <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                  {stat.label}
                </p>
              </div>
            </Card>
          )
        })}
      </div>

      {/* Agendamentos hoje */}
      <Card>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-semibold" style={{ color: "var(--text-primary)" }}>
            Agenda de hoje
          </h2>
          <a
            href="/agendamentos"
            className="text-sm font-medium"
            style={{ color: "var(--accent)" }}
          >
            Ver todos →
          </a>
        </div>

        {agendamentosHoje.length === 0 ? (
          <p className="text-sm py-4 text-center" style={{ color: "var(--text-muted)" }}>
            Nenhum agendamento para hoje.
          </p>
        ) : (
          <div className="flex flex-col divide-y" style={{ borderColor: "var(--card-border)" }}>
            {agendamentosHoje.map((ag) => {
              const hora = new Date(ag.dataHoraInicio).toLocaleTimeString("pt-BR", {
                hour: "2-digit",
                minute: "2-digit",
              })
              const nomes = ag.pacientes.map((p) => p.paciente.nome).join(", ")
              return (
                <div key={ag.id} className="flex items-center gap-4 py-3">
                  <div
                    className="w-14 text-center rounded-lg py-1 text-sm font-semibold shrink-0"
                    style={{ background: "var(--warning-bg)", color: "var(--warning)" }}
                  >
                    {hora}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate" style={{ color: "var(--text-primary)" }}>
                      {nomes || "Sem paciente"}
                    </p>
                    <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                      {ag.especialidade.nome} · {ag.profissional.nome}
                    </p>
                  </div>
                  <span
                    className="text-xs px-2 py-0.5 rounded-full font-medium"
                    style={{
                      background: ag.tipo === "GRUPO" ? "oklch(0.94 0.04 280)" : "var(--success-bg)",
                      color: ag.tipo === "GRUPO" ? "oklch(0.45 0.12 280)" : "var(--success)",
                    }}
                  >
                    {ag.tipo === "GRUPO" ? "Grupo" : "Individual"}
                  </span>
                </div>
              )
            })}
          </div>
        )}
      </Card>
    </div>
  )
}
