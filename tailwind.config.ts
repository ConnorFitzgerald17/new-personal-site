import type { Config } from "tailwindcss"
import defaultTheme from "tailwindcss/defaultTheme"
import typography from "@tailwindcss/typography"

const config: Config = {
  content: [
    "./src/**/*.{ts,tsx,js,jsx,md,mdx}",
    // Safe-list shadcn/ui component paths
    "./node_modules/@shadcn/ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...defaultTheme.fontFamily.sans],
        mono: ["var(--font-geist-mono)", ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [typography],
}

export default config
