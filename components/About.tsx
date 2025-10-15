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
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
            Crafting Digital Experiences That Drive Results
          </h2>
          <div className="space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
            <p>
              With 16 years of experience in the design industry, I bring a unique blend of expertise in UI/UX design, 
              front-end development, business analysis, and product management. My approach goes beyond aesthetics—I 
              orchestrate successful projects from inception to completion, ensuring every detail aligns with business goals.
            </p>
            <p>
              My multidisciplinary background enables me to see the complete picture, seamlessly integrating branding, 
              design, marketing, and strategic thinking into cohesive solutions. I've helped startups scale, enterprises 
              innovate, and teams build products that users love.
            </p>
            <div className="pt-4 flex flex-wrap gap-3">
              <div className="px-4 py-2 bg-muted/50 rounded-full text-sm font-medium">16+ Years Experience</div>
              <div className="px-4 py-2 bg-muted/50 rounded-full text-sm font-medium">50+ Projects Delivered</div>
              <div className="px-4 py-2 bg-muted/50 rounded-full text-sm font-medium">Framer Certified</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
