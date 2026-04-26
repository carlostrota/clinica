import Link from "next/link"
import { STATUS_AGENDAMENTO } from "@/lib/utils"

type Agendamento = {
  id: string
  dataHoraInicio: Date
  dataHoraFim: Date
  status: string
  tipo: string
  profissionalId: string
  profissional: { nome: string; especialidade: { cor: string | null } }
  especialidade: { nome: string }
  pacientes: { paciente: { nome: string } }[]
}

type Profissional = {
  id: string
  nome: string
  especialidade: { nome: string; cor: string | null }
}

type Props = {
  agendamentos: Agendamento[]
  profissionais: Profissional[]
  dias: Date[]
}

function isMesmodia(d1: Date, d2: Date) {
  return (
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate()
  )
}

function AgendamentoCelula({ ag }: { ag: Agendamento }) {
  const cor = ag.profissional.especialidade.cor ?? "oklch(0.65 0.17 55)"
  const statusInfo = STATUS_AGENDAMENTO[ag.status]
  const hora = new Date(ag.dataHoraInicio).toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  })
  const nomes = ag.pacientes.map((p) => p.paciente.nome).join(", ") || "Sem paciente"

  return (
    <Link href={`/agendamentos/${ag.id}`}>
      <div
        className="text-xs p-1.5 rounded-md mb-1 last:mb-0 hover:opacity-75 transition-opacity cursor-pointer"
        style={{
          background: cor + "18",
          borderLeft: `3px solid ${cor}`,
        }}
      >
        <div className="flex items-center gap-1 mb-0.5">
          <span className="font-bold" style={{ color: cor }}>
            {hora}
          </span>
          <span
            className="w-1.5 h-1.5 rounded-full shrink-0 ml-auto"
            style={{ background: statusInfo.color }}
            title={statusInfo.label}
          />
        </div>
        <p className="truncate" style={{ color: "var(--text-primary)", maxWidth: "10rem" }}>
          {nomes}
        </p>
        {ag.tipo === "GRUPO" && (
          <p className="text-[10px] mt-0.5" style={{ color: "var(--text-muted)" }}>
            Grupo
          </p>
        )}
      </div>
    </Link>
  )
}

export function CalendarioAgendamentos({ agendamentos, profissionais, dias }: Props) {
  const hoje = new Date()

  // Filtra só os profissionais que têm ao menos um agendamento na semana
  const profissionalIdsComAgendamento = new Set(agendamentos.map((a) => a.profissionalId))
  const profsCom = profissionais.filter((p) => profissionalIdsComAgendamento.has(p.id))

  if (profsCom.length === 0) {
    return (
      <div
        className="py-12 text-center rounded-xl"
        style={{ background: "var(--card)", border: "1px solid var(--card-border)" }}
      >
        <p style={{ color: "var(--text-muted)" }}>Nenhum agendamento para o período selecionado.</p>
      </div>
    )
  }

  return (
    <div className="overflow-x-auto rounded-xl" style={{ border: "1px solid var(--card-border)" }}>
      <table className="w-full border-collapse text-sm" style={{ minWidth: "700px" }}>
        {/* Cabeçalho — dias da semana */}
        <thead>
          <tr style={{ background: "var(--card)" }}>
            <th
              className="text-left px-4 py-3 font-semibold sticky left-0 z-10"
              style={{
                background: "var(--card)",
                color: "var(--text-muted)",
                borderBottom: "1px solid var(--card-border)",
                borderRight: "1px solid var(--card-border)",
                minWidth: "160px",
              }}
            >
              Profissional
            </th>
            {dias.map((dia) => {
              const ehHoje = isMesmodia(dia, hoje)
              const diaSemana = dia.toLocaleDateString("pt-BR", { weekday: "short" })
              const diaNum = dia.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit" })
              return (
                <th
                  key={dia.toISOString()}
                  className="text-center px-2 py-3 font-semibold"
                  style={{
                    borderBottom: "1px solid var(--card-border)",
                    borderRight: "1px solid var(--card-border)",
                    color: ehHoje ? "var(--accent)" : "var(--text-muted)",
                    background: ehHoje ? "oklch(0.97 0.03 55)" : "var(--card)",
                    minWidth: "130px",
                  }}
                >
                  <span className="block capitalize">{diaSemana}</span>
                  <span
                    className="text-xs font-normal"
                    style={{ color: ehHoje ? "var(--accent)" : "var(--text-muted)" }}
                  >
                    {diaNum}
                  </span>
                </th>
              )
            })}
          </tr>
        </thead>

        {/* Linhas — profissionais */}
        <tbody>
          {profsCom.map((prof, idx) => {
            const cor = prof.especialidade.cor ?? "oklch(0.65 0.17 55)"
            const isLast = idx === profsCom.length - 1

            return (
              <tr key={prof.id} style={{ background: idx % 2 === 0 ? "var(--bg)" : "var(--card)" }}>
                {/* Coluna profissional — sticky */}
                <td
                  className="px-4 py-3 sticky left-0 z-10"
                  style={{
                    background: idx % 2 === 0 ? "var(--bg)" : "var(--card)",
                    borderRight: "1px solid var(--card-border)",
                    borderBottom: isLast ? "none" : "1px solid var(--card-border)",
                    verticalAlign: "top",
                  }}
                >
                  <div className="flex items-start gap-2">
                    <div
                      className="w-0.5 self-stretch rounded-full mt-0.5 shrink-0"
                      style={{ background: cor, minHeight: "32px" }}
                    />
                    <div>
                      <p className="font-semibold leading-tight" style={{ color: "var(--text-primary)" }}>
                        {prof.nome}
                      </p>
                      <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>
                        {prof.especialidade.nome}
                      </p>
                    </div>
                  </div>
                </td>

                {/* Células dos dias */}
                {dias.map((dia) => {
                  const ags = agendamentos
                    .filter(
                      (ag) =>
                        ag.profissionalId === prof.id &&
                        isMesmodia(new Date(ag.dataHoraInicio), dia)
                    )
                    .sort(
                      (a, b) =>
                        new Date(a.dataHoraInicio).getTime() - new Date(b.dataHoraInicio).getTime()
                    )

                  const ehHoje = isMesmodia(dia, hoje)

                  return (
                    <td
                      key={dia.toISOString()}
                      className="px-2 py-2 align-top"
                      style={{
                        borderRight: "1px solid var(--card-border)",
                        borderBottom: isLast ? "none" : "1px solid var(--card-border)",
                        background: ehHoje
                          ? idx % 2 === 0
                            ? "oklch(0.97 0.02 55)"
                            : "oklch(0.96 0.02 55)"
                          : undefined,
                        minHeight: "60px",
                      }}
                    >
                      {ags.length === 0 ? (
                        <span className="text-xs" style={{ color: "var(--card-border)" }}>
                          —
                        </span>
                      ) : (
                        ags.map((ag) => <AgendamentoCelula key={ag.id} ag={ag} />)
                      )}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
