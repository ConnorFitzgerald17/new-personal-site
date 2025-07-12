"use client"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { MoonIcon, SunIcon } from "lucide-react"

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  const otherTheme = resolvedTheme === "dark" ? "light" : "dark"

  return (
    <button
      aria-label={`Switch to ${otherTheme} theme`}
      onClick={() => setTheme(otherTheme)}
      className="fixed bottom-6 right-6 z-50 rounded-full border border-border bg-card/80 backdrop-blur p-2 shadow-sm hover:bg-muted transition-colors"
    >
      {resolvedTheme === "dark" ? (
        <SunIcon className="h-5 w-5" />
      ) : (
        <MoonIcon className="h-5 w-5" />
      )}
    </button>
  )
}
