import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-background">
      <div className="max-w-[1024px] mx-auto px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-muted-foreground text-sm">© Noman Al Sayed 2025</div>

          <nav className="flex items-center gap-8">
            <Link
              href="https://linkedin.com"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
            >
              LinkedIn
            </Link>
            <Link href="#resume" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
              Resume
            </Link>
            <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
