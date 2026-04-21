import { PrismaClient, Papel, TipoEspecialidade } from "../src/generated/prisma"
import bcrypt from "bcryptjs"

const prisma = new PrismaClient()

async function main() {
  const senhaHash = await bcrypt.hash("admin123", 12)

  await prisma.user.upsert({
    where: { email: "admin@clinica.com" },
    update: {},
    create: {
      nome: "Administrador",
      email: "admin@clinica.com",
      senha: senhaHash,
      papel: Papel.ADMIN,
    },
  })

  const especialidades = [
    { nome: "Psicologia", tipo: TipoEspecialidade.TERAPEUTICA, descricao: "Atendimento psicológico individual e em grupo", cor: "#7C3AED" },
    { nome: "Fonoaudiologia", tipo: TipoEspecialidade.TERAPEUTICA, descricao: "Avaliação e tratamento de distúrbios da comunicação", cor: "#0891B2" },
    { nome: "Terapia Ocupacional", tipo: TipoEspecialidade.TERAPEUTICA, descricao: "Desenvolvimento de habilidades funcionais", cor: "#059669" },
    { nome: "Neurologia", tipo: TipoEspecialidade.CLINICA, descricao: "Avaliação e tratamento neurológico", cor: "#DC2626" },
    { nome: "Psiquiatria", tipo: TipoEspecialidade.CLINICA, descricao: "Diagnóstico e tratamento de transtornos mentais", cor: "#9333EA" },
    { nome: "Nutrição", tipo: TipoEspecialidade.CLINICA, descricao: "Orientação nutricional e dietética", cor: "#D97706" },
  ]

  for (const esp of especialidades) {
    await prisma.especialidade.upsert({
      where: { id: esp.nome },
      update: {},
      create: esp,
    }).catch(() => prisma.especialidade.create({ data: esp }))
  }

  console.log("Seed concluído! Admin: admin@clinica.com / admin123")
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
