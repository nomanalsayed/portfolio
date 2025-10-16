import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function ScheduleMeetingButton() {
  return (
    <Link
      href="#contact"
      className="inline-flex items-center gap-3 px-3 py-2 rounded-full bg-[var(--btn-bg)] text-[var(--btn-text)] border border-gray-200 dark:border-gray-800 hover:opacity-90 transition-all duration-300 hover:scale-105 hover:shadow-xl"
    >
      <div className="w-10 h-10 rounded-full overflow-hidden">
        <Image
          src="/noman-al-sayed.jpeg"
          alt="Noman Al Sayed"
          width={40}
          height={40}
          className="object-cover"
        />
      </div>
      <div className="flex flex-col items-start">
        <span className="font-bold text-[var(--btn-text)]">Schedule Free Meeting</span>
        <span className="text-[var(--btn-text)]/70 text-sm">with Filip, our designer</span>
      </div>
      <div className="w-10 h-10 rounded-full bg-[var(--btn-text)] flex items-center justify-center">
        <ArrowRight className="text-[var(--btn-bg)]" size={20} />
      </div>
    </Link>
  )
}
