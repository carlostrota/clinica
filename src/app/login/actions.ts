"use server"

import { signIn } from "@/lib/auth"
import { AuthError } from "next-auth"

export async function loginAction(email: string, password: string): Promise<string | null> {
  try {
    await signIn("credentials", { email, password, redirectTo: "/dashboard" })
    return null
  } catch (error) {
    if (error instanceof AuthError) {
      return "E-mail ou senha inválidos."
    }
    throw error
  }
}
