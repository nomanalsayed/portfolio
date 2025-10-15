'use client'

import { useEffect, useRef, useState } from 'react'
import { useIntersectionObserver } from '@/lib/hooks'

const experiences = [
  {
    role: 'Product Designer',
    type: 'Part Time',
    company: 'Colgate-Palmolive',
    period: 'Oct 2024-Present',
  },
  {
    role: 'Product Design Consultant',
    type: 'Contract',
    company: 'Samsung Food',
    period: 'Aug 2024-Present',
  },
  {
    role: 'Senior Product Designer',
    type: 'Full Time',
    company: 'FLYR Hospitality',
    period: 'May 2024-Nov 2024',
  },
  {
    role: 'Senior Product Designer',
    type: 'Full Time',
    company: 'Comet ML',
    period: 'Oct 2023-Feb 2024',
  },
  {
    role: 'Lead Product Designer',
    type: 'Full Time',
    company: 'OmniSafe',
    period: 'Mar 2022-Oct 2023',
  },
  {
    role: 'Design Lead & Product Designer',
    type: 'Full Time',
    company: 'Geonode',
    period: 'Apr 2021 - May 2023',
  },
  {
    role: 'Lead UX/UI Designer',
    type: 'Full Time',
    company: 'Truely',
    period: 'Jan 2019-Mar 2021',
  },
  {
    role: 'Design Director',
    type: 'Self-employed',
    company: 'Nicey Studio',
    period: 'Jun 2016 Present',
  },
  {
    role: 'Co-Founder',
    type: '',
    company: 'Brandingmag',
    period: 'Jan 2011 - Jun 2015',
  },
]

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null)
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.2 })
  const [visibleItems, setVisibleItems] = useState<number[]>([])

  useEffect(() => {
    if (isVisible) {
      const timers = experiences.map((_, index) =>
        setTimeout(() => {
          setVisibleItems(prev => [...prev, index])
        }, index * 150),
      )
      return () => timers.forEach(clearTimeout)
    }
  }, [isVisible])

  return (
    <section id="experience" ref={sectionRef} className="relative max-w-[1024px] mx-auto px-8 py-24 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.08]"
        style={{
          backgroundImage: 'url("/dots.svg")',
          backgroundSize: '96px 96px',
          backgroundRepeat: 'repeat',
        }}
      />

      <div className="relative z-10">
        <h2 className="text-4xl font-bold text-foreground mb-16">Experience</h2>

        <div className="space-y-0 border-t border-border">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`border-b border-border py-8 transition-all duration-700 ${
                visibleItems.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-foreground">{exp.role}</h3>
                  <div className="flex items-center gap-3 text-muted-foreground text-sm">
                    <span>{exp.company}</span>
                    {exp.type && (
                      <>
                        <span className="w-1 h-1 bg-border rounded-full" />
                        <span>{exp.type}</span>
                      </>
                    )}
                  </div>
                </div>
                <div className="flex flex-col md:items-end gap-1">
                  <span className="text-sm text-muted-foreground">{exp.period}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
