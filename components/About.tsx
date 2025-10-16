'use client'

import { useRef } from 'react'
import { useIntersectionObserver } from '@/lib/hooks'

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.2 })

  return (
    <section id="about" ref={sectionRef} className="max-w-[1024px] mx-auto px-8 py-32">
      <div
        className={`text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Badge */}
        <div className="inline-flex items-center justify-center mb-8">
          <div className="px-4 py-2 border border-gray-200 dark:border-gray-800 rounded-full text-sm text-foreground">
            Hi, I am Noman Al Sayed
          </div>
        </div>

        {/* Main Headline */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-12 leading-tight max-w-4xl mx-auto">
          I help SaaS startups build websites that feel trustworthy, look professional, and drive real business results their team can be proud of
        </h2>

        {/* Stats */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <div className="px-5 py-2.5 border border-gray-200 dark:border-gray-800 rounded-full text-sm text-foreground">
            50+ Projects completed
          </div>
          <div className="px-5 py-2.5 border border-gray-200 dark:border-gray-800 rounded-full text-sm text-foreground">
            16+ Years of Experience
          </div>
          <div className="px-5 py-2.5 border border-gray-200 dark:border-gray-800 rounded-full text-sm text-foreground">
            Trusted by founders
          </div>
        </div>
      </div>
    </section>
  )
}
