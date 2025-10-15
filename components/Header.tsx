'use client'

import Link from 'next/link'
import { ThemeToggle } from './theme-toggle'
import { useState, useEffect } from 'react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <div className="fixed top-6 right-8 z-50">
        <ThemeToggle />
      </div>

      <header
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
          isScrolled ? 'top-4' : ''
        }`}
      >
        <nav
          className={`flex items-center gap-1 bg-card/80 backdrop-blur-xl rounded-full px-3 py-2 border border-border/50 transition-all duration-300 ${
            isScrolled ? 'shadow-xl' : 'shadow-lg'
          }`}
        >
          <Link
            href="#home"
            className="text-foreground hover:bg-muted/50 transition-all duration-200 text-xs font-medium px-4 py-1.5 rounded-full"
          >
            Home
          </Link>
          <Link
            href="#about"
            className="text-foreground hover:bg-muted/50 transition-all duration-200 text-xs font-medium px-4 py-1.5 rounded-full"
          >
            About
          </Link>
          <Link
            href="#contact"
            className="text-foreground hover:bg-muted/50 transition-all duration-200 text-xs font-medium px-4 py-1.5 rounded-full"
          >
            Contact
          </Link>
          <Link
            href="#login"
            className="text-foreground hover:bg-muted/50 transition-all duration-200 text-xs font-medium px-4 py-1.5 rounded-full"
          >
            Login
          </Link>
        </nav>
      </header>
    </>
  )
}