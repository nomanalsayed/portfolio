'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowRight, User } from 'lucide-react'
import Image from 'next/image'
import ScheduleMeetingButton from './ScheduleMeetingButton'

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry?.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={heroRef} className="relative pt-32 pb-32 overflow-hidden">
      {/* Dot pattern background */}
      <div 
        className="absolute inset-0 opacity-[0.15] dark:opacity-[0.08]" 
        style={{
          backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}
      />
      
      <div className="max-w-[900px] mx-auto px-8 relative z-10">
        {/* Profile Photo */}
        <div
          className={`flex justify-center mb-5 transition-all duration-1000 delay-100 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
        >
          <div className="relative">
            <div className="w-28 h-28 rounded-full overflow-hidden bg-muted ring-4 ring-background">
              <Image
                src="/noman-al-sayed.jpeg"
                alt="Noman Al Sayed"
                width={112}
                height={112}
                className="object-cover"
              />
            </div>
            {/* Open to Job Badge with Blinking Dot */}
            <div className="mt-4 bg-background border border-border px-3 py-1 rounded-full flex items-center gap-1.5 mx-auto w-fit">
              <div className="relative">
                <div className="absolute w-3 h-3 rounded-full bg-green-500 animate-ping opacity-75"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-xs font-medium text-foreground">Open to Job</span>
            </div>
          </div>
        </div>

        <h1
          className={`text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8 leading-[1.1] text-center text-balance transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Transforming Ideas Into
          <br />
          Digital Excellence
        </h1>

        <p
          className={`text-base md:text-lg text-muted-foreground text-center leading-relaxed mb-10 max-w-2xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Award-winning Product Designer & Framer Expert with 16+ years crafting exceptional digital experiences for SaaS, fintech, and AI-driven startups.
        </p>

        <div
          className={`flex justify-center transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <ScheduleMeetingButton />
        </div>
      </div>
    </section>
  )
}
