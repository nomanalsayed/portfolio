import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
<<<<<<< HEAD
=======
  weight: ["300", "400", "500", "600", "700", "800"],
>>>>>>> f2e65fe0 (Initial commit)
})

export const metadata: Metadata = {
  title: "Goran Babarogic - Product Designer & Framer Developer",
  description:
    "Framer Expert & Lead Product Designer with 16 years of experience in SaaS, fintech, AI and tech startups.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="font-sans">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Suspense fallback={null}>{children}</Suspense>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
