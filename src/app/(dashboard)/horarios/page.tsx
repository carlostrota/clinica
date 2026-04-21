import { prisma } from "@/lib/prisma"
import Link from "next/link"
import { Plus, Pencil, Clock } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DIAS_SEMANA } from "@/lib/utils"
import { DeletarDiaButton } from "@/components/deletar-dia-button"

export default async function HorariosPage() {
  const profissionais = await prisma.profissional.findMany({
    where: { ativo: true },
    orderBy: { nome: "asc" },
    include: {
      especialidade: { select: { nome: true, cor: true } },
      horarios: { where: { ativo: true }, orderBy: [{ diaSemana: "asc" }, { horaInicio: "asc" }] },
    },
  })

  const diasOrdem = ["SEGUNDA", "TERCA", "QUARTA", "QUINTA", "SEXTA", "SABADO"]

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold" style={{ color: "var(--text-primary)" }}>
            Horários de atendimento
          </h1>
          <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>
            Configure os dias e horários disponíveis de cada profissional.
          </p>
        </div>
        <Link href="/horarios/novo">
          <Button>
            <Plus size={16} />
            Novo horário
          </Button>
        </Link>
      </div>

      <div className="flex flex-col gap-4">
        {profissionais.map((prof) => (
          <Card key={prof.id}>
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center text-white font-semibold text-sm shrink-0"
                style={{ background: prof.especialidade.cor ?? "var(--accent)" }}
              >
                {prof.nome.charAt(0)}
              </div>
              <div>
                <p className="font-semibold" style={{ color: "var(--text-primary)" }}>{prof.nome}</p>
                <p className="text-xs" style={{ color: "var(--text-muted)" }}>{prof.especialidade.nome}</p>
              </div>
            </div>

            {prof.horarios.length === 0 ? (
              <p className="text-sm py-2" style={{ color: "var(--text-muted)" }}>
                Nenhum horário configurado.{" "}
                <Link href={`/horarios/novo?profissionalId=${prof.id}`} style={{ color: "var(--accent)" }}>
                  Adicionar horário
                </Link>
              </p>
            ) : (
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {diasOrdem
                  .map((dia) => prof.horarios.filter((h) => h.diaSemana === dia))
                  .filter((group) => group.length > 0)
                  .map((group) => (
                    <div
                      key={group[0].diaSemana}
                      className="rounded-lg p-3"
                      style={{ background: "var(--bg-base)" }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-xs font-semibold" style={{ color: "var(--text-secondary)" }}>
                          {DIAS_SEMANA[group[0].diaSemana]}
                        </p>
                        <DeletarDiaButton
                          profissionalId={prof.id}
                          diaSemana={group[0].diaSemana}
                          label={DIAS_SEMANA[group[0].diaSemana]}
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        {group.map((h) => (
                          <div key={h.id} className="flex items-center justify-between gap-2">
                            <div className="flex items-center gap-1.5">
                              <Clock size={12} style={{ color: "var(--text-muted)" }} />
                              <span className="text-xs" style={{ color: "var(--text-primary)" }}>
                                {h.horaInicio}
                              </span>
                              <span className="text-xs" style={{ color: "var(--text-muted)" }}>
                                · {h.duracaoSessao}min
                              </span>
                            </div>
                            <Link href={`/horarios/${h.id}`}>
                              <Pencil size={12} style={{ color: "var(--text-muted)" }} />
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  )
}
