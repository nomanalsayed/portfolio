<<<<<<< HEAD
import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background">
      <div className="max-w-[1024px] mx-auto px-8 py-6">
        <nav className="flex items-center justify-center gap-8 bg-card rounded-full px-8 py-3 border border-border">
          <Link
            href="#home"
            className="text-foreground hover:text-muted-foreground transition-colors text-sm font-medium"
=======
"use client"

import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"
import { useState, useEffect } from "react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  return (
    <>
      <div className="fixed top-6 right-8 z-50">
        <ThemeToggle />
      </div>

      <header className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${isScrolled ? 'top-4' : ''}`}>
        <nav className={`flex items-center gap-1 bg-card/80 backdrop-blur-xl rounded-full px-3 py-2 border border-border/50 transition-all duration-300 ${isScrolled ? 'shadow-xl' : 'shadow-lg'}`}>
          <Link
            href="#home"
            className="text-foreground hover:bg-muted/50 transition-all duration-200 text-xs font-medium px-4 py-1.5 rounded-full"
>>>>>>> f2e65fe0 (Initial commit)
          >
            Home
          </Link>
          <Link
            href="#about"
<<<<<<< HEAD
            className="text-foreground hover:text-muted-foreground transition-colors text-sm font-medium"
=======
            className="text-foreground hover:bg-muted/50 transition-all duration-200 text-xs font-medium px-4 py-1.5 rounded-full"
>>>>>>> f2e65fe0 (Initial commit)
          >
            About
          </Link>
          <Link
            href="#contact"
<<<<<<< HEAD
            className="text-foreground hover:text-muted-foreground transition-colors text-sm font-medium"
=======
            className="text-foreground hover:bg-muted/50 transition-all duration-200 text-xs font-medium px-4 py-1.5 rounded-full"
>>>>>>> f2e65fe0 (Initial commit)
          >
            Contact
          </Link>
          <Link
            href="#login"
<<<<<<< HEAD
            className="text-foreground hover:text-muted-foreground transition-colors text-sm font-medium"
          >
            Login
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
=======
            className="text-foreground hover:bg-muted/50 transition-all duration-200 text-xs font-medium px-4 py-1.5 rounded-full"
          >
            Login
          </Link>
        </nav>
      </header>
    </>
>>>>>>> f2e65fe0 (Initial commit)
  )
}
