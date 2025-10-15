import Link from "next/link"

export default function Footer() {
  return (
<<<<<<< HEAD
    <footer className="border-t border-border bg-background">
=======
    <footer className="bg-background">
>>>>>>> f2e65fe0 (Initial commit)
      <div className="max-w-[1024px] mx-auto px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-muted-foreground text-sm">© Goran Babarogic 2025</div>

          <nav className="flex items-center gap-6">
            <Link
              href="https://linkedin.com"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              LinkedIn
            </Link>
            <Link href="#resume" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Resume
            </Link>
            <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
