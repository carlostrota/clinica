import type { Metadata } from "next"
import "./globals.css"
import { Toaster } from "sonner"

export const metadata: Metadata = {
  title: "Clínica Multidisciplinar",
  description: "Sistema de gestão para clínica multidisciplinar",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="h-full">
      <body className="min-h-full" style={{ backgroundColor: "var(--bg-base)", color: "var(--text-primary)" }}>
        {children}
        <Toaster richColors position="top-right" />
      </body>
    </html>
  )
}
