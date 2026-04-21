import { config } from "dotenv"
import { PrismaClient } from "../src/generated/prisma/index.js"
import { PrismaPg } from "@prisma/adapter-pg"
import bcrypt from "bcryptjs"

config({ path: new URL("../.env", import.meta.url).pathname.replace(/^\/([A-Z]:)/, "$1") })

const connectionString = process.env.DATABASE_URL
if (!connectionString) throw new Error("DATABASE_URL não encontrado no .env")

const adapter = new PrismaPg({ connectionString })
const prisma = new PrismaClient({ adapter })

const EMAIL = "admin@clinica.com"
const SENHA = "admin123"

async function main() {
  const senhaHash = await bcrypt.hash(SENHA, 12)

  const user = await prisma.user.upsert({
    where: { email: EMAIL },
    update: { senha: senhaHash, ativo: true },
    create: {
      nome: "Administrador",
      email: EMAIL,
      senha: senhaHash,
      papel: "ADMIN",
      ativo: true,
    },
  })

  console.log(`✅ Usuário admin criado/atualizado:`)
  console.log(`   ID: ${user.id}`)
  console.log(`   Email: ${user.email}`)
  console.log(`   Ativo: ${user.ativo}`)
  console.log(`   Senha: ${SENHA}`)
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
