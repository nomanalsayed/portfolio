'use client'

import { useEffect, useRef, useState } from 'react'
import { useIntersectionObserver } from '@/lib/hooks'

const testimonials = [
  {
    company: 'PerkUp',
    quote: 'He consistently exceeds our expectations',
  },
  {
    company: 'FLYR',
    quote: 'Lead design department successfully and built us a scalable design system',
  },
  {
    company: 'Comet',
    quote: 'Contribute in valuable & meaningful ways to our platform',
  },
]

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.2 })
  const [visibleItems, setVisibleItems] = useState<number[]>([])

  useEffect(() => {
    if (isVisible) {
      const timers = testimonials.map((_, index) =>
        setTimeout(() => {
          setVisibleItems(prev => [...prev, index])
        }, index * 200),
      )
      return () => timers.forEach(clearTimeout)
    }
  }, [isVisible])

  return (
    <section id="about" ref={sectionRef} className="max-w-[1024px] mx-auto px-8 py-24">
      <div className="grid lg:grid-cols-2 gap-16">
        {/* Testimonials */}
        <div className="space-y-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-card/50 border border-border rounded-3xl p-8 transition-all duration-700 hover:scale-105 hover:shadow-xl ${
                visibleItems.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="text-sm font-bold text-foreground mb-4">{testimonial.company}</div>
              <p className="text-2xl text-muted-foreground leading-relaxed">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>

        {/* About Text */}
        <div
          className={`transition-all duration-1000 ${
            visibleItems.length > 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-5xl font-bold text-foreground mb-8">About</h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Goran is a versatile product designer with 16 years of experience in the design industry, offering a
              unique blend of skills and expertise. With a strong foundation in UI/UX design, front-end development,
              business analysis, and product management, Goran excels at orchestrating successful projects from
              inception to completion.
            </p>
            <p>
              His multidisciplinary approach enables Goran to see the bigger picture, encompassing branding, design,
              marketing, and copywriting aspects within his problem-solving repertoire.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}