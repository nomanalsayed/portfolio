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
  weight: ["300", "400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: "Noman Al Sayed - Product Designer & Framer Expert",
  description:
    "Award-winning Product Designer & Framer Expert with 16+ years crafting exceptional digital experiences for SaaS, fintech, and AI-driven startups. Specializing in UI/UX design, design systems, and product strategy.",
  keywords: ["Product Designer", "Framer Expert", "UI/UX Design", "SaaS Design", "Fintech Design", "Design Systems", "Product Strategy"],
  authors: [{ name: "Noman Al Sayed" }],
  creator: "Noman Al Sayed",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Noman Al Sayed - Product Designer & Framer Expert",
    description: "Award-winning Product Designer with 16+ years of experience in SaaS, fintech, and AI startups.",
    siteName: "Noman Al Sayed Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Noman Al Sayed - Product Designer & Framer Expert",
    description: "Award-winning Product Designer with 16+ years of experience in SaaS, fintech, and AI startups.",
  },
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
