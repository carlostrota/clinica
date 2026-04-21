"use client"

import { useState } from "react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { LayoutBackground } from "@/components/layout-bg"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError("")

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    })

    if (result?.error) {
      setError("E-mail ou senha inválidos.")
      setLoading(false)
    } else {
      router.push("/dashboard")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <LayoutBackground />
      <div
        className="w-full max-w-sm rounded-2xl p-8"
        style={{
          background: "var(--card)",
          border: "1px solid var(--card-border)",
          boxShadow: "0 8px 32px oklch(0.18 0.02 260 / 0.08)",
        }}
      >
        {/* Logo */}
        <div className="flex flex-col items-center gap-3 mb-8">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center text-white text-xl font-bold"
            style={{ background: "var(--accent)" }}
          >
            C
          </div>
          <div className="text-center">
            <h1 className="text-xl font-bold" style={{ color: "var(--text-primary)" }}>
              Clínica Multidisciplinar
            </h1>
            <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>
              Acesse sua conta
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Input
            label="E-mail"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="seu@email.com"
            required
          />
          <Input
            label="Senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            required
          />

          {error && (
            <p className="text-sm text-center" style={{ color: "var(--error)" }}>
              {error}
            </p>
          )}

          <Button type="submit" loading={loading} size="lg" className="w-full mt-2">
            Entrar
          </Button>
        </form>
      </div>
    </div>
  )
}
