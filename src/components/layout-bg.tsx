export function LayoutBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden>
      <div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full blur-3xl opacity-60"
        style={{ background: "var(--bg-blob)" }}
      />
      <div
        className="absolute top-1/2 -left-24 w-72 h-72 rounded-full blur-3xl opacity-40"
        style={{ background: "var(--bg-blob)" }}
      />
      <div
        className="absolute bottom-0 right-1/3 w-64 h-64 rounded-full blur-3xl opacity-30"
        style={{ background: "oklch(0.85 0.08 280)" }}
      />
    </div>
  )
}
