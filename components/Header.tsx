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
        role="banner"
      >
        <nav
          className={`flex items-center gap-1 bg-background/80 backdrop-blur-xl rounded-full px-2 py-2 border border-gray-200 dark:border-gray-800 transition-all duration-300 ${
            isScrolled ? 'shadow-lg' : 'shadow-md'
          }`}
          role="navigation"
          aria-label="Main navigation"
        >
          <Link
            href="#work"
            className="text-foreground hover:bg-muted/80 transition-all duration-200 text-sm font-medium px-4 py-2 rounded-full"
            aria-label="Navigate to featured work section"
          >
            Work
          </Link>
          <Link
            href="#about"
            className="text-foreground hover:bg-muted/80 transition-all duration-200 text-sm font-medium px-4 py-2 rounded-full"
            aria-label="Navigate to about section"
          >
            About
          </Link>
          <Link
            href="#experience"
            className="text-foreground hover:bg-muted/80 transition-all duration-200 text-sm font-medium px-4 py-2 rounded-full"
            aria-label="Navigate to experience section"
          >
            Experience
          </Link>
          <Link
            href="#contact"
            className="text-foreground bg-foreground/5 hover:bg-muted/80 transition-all duration-200 text-sm font-medium px-4 py-2 rounded-full"
            aria-label="Navigate to contact section"
          >
            Contact
          </Link>
        </nav>
      </header>
    </>
  )
}
