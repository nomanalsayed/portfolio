'use client'

import { useEffect, useRef, useState } from 'react'
import { User, ArrowRight } from 'lucide-react'
import ScheduleMeetingButton from './ScheduleMeetingButton'

export default function FooterCTA() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden max-w-[1024px] mx-auto px-8">
      <div className="text-center relative z-10">
        <h2
          className={`text-6xl font-bold text-foreground mb-6 text-balance transition-all duration-1000 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
        >
          Interested in
          <br />
          working together?
        </h2>
        <p
          className={`text-xl text-muted-foreground mb-12 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Let's bring your vision to life.
        </p>

        <div
          className={`transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <ScheduleMeetingButton />
        </div>
      </div>
    </section>
  )
}