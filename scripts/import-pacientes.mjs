import { readFileSync } from "fs"
import { config } from "dotenv"
import XLSX from "xlsx"
import { PrismaClient } from "../src/generated/prisma/index.js"
import { PrismaPg } from "@prisma/adapter-pg"

// Load .env
config({ path: new URL("../.env", import.meta.url).pathname.replace(/^\/([A-Z]:)/, "$1") })

const connectionString = process.env.DATABASE_URL
if (!connectionString) throw new Error("DATABASE_URL não encontrado no .env")

const adapter = new PrismaPg({ connectionString })
const prisma = new PrismaClient({ adapter })

const wb = XLSX.readFile("C:/Users/cal_t/Downloads/pacientes_atendidos.xlsx")
const ws = wb.Sheets[wb.SheetNames[0]]
const rows = XLSX.utils.sheet_to_json(ws)

let criados = 0
let duplicados = 0
let erros = 0

for (const row of rows) {
  const nome = row["Nome"]?.toString().trim()
  const telefone = row["Telefone"]?.toString().trim()
  const cpf = row["CPF"]?.toString().trim() || undefined

  if (!nome || !telefone) {
    console.log(`⚠ Linha ignorada (dados incompletos): ${JSON.stringify(row)}`)
    erros++
    continue
  }

  const existente = await prisma.paciente.findFirst({
    where: { OR: [{ nome }, ...(cpf ? [{ cpf }] : [])] },
  })

  if (existente) {
    console.log(`↩ Duplicado ignorado: ${nome}`)
    duplicados++
    continue
  }

  await prisma.paciente.create({
    data: { nome, telefone, cpf },
  })

  console.log(`✓ Criado: ${nome}`)
  criados++
}

console.log(`\nResumo: ${criados} criados, ${duplicados} duplicados ignorados, ${erros} erros`)
await prisma.$disconnect()
