'use client'

import { useEffect, useRef, useState } from 'react'
import { useIntersectionObserver } from '@/lib/hooks'
import { Box } from 'lucide-react'

const skills = [
  'Product Design',
  'Information System Design',
  'User Research',
  'User Interface Design',
  'User Experience Design',
  'Front End Development',
  'Workshop Facilitator',
  'Framer Development',
  'User Testing',
  'Holistic Approach',
  'Design Strategy',
  'Interaction Design',
  'Leadership',
]

const tools = ['Figma', 'Framer', 'Adobe XD', 'Sketch', 'Principle', 'After Effects']

export default function SkillsTools() {
  const sectionRef = useRef<HTMLElement>(null)
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.2 })
  const [visibleSkills, setVisibleSkills] = useState<number[]>([])
  const [visibleTools, setVisibleTools] = useState<number[]>([])

  useEffect(() => {
    if (isVisible) {
      const skillTimers = skills.map((_, index) =>
        setTimeout(() => {
          setVisibleSkills(prev => [...prev, index])
        }, index * 50),
      )
      const toolTimers = tools.map((_, index) =>
        setTimeout(() => {
          setVisibleTools(prev => [...prev, index])
        }, skills.length * 50 + index * 80),
      )
      return () => {
        skillTimers.forEach(clearTimeout)
        toolTimers.forEach(clearTimeout)
      }
    }
  }, [isVisible])

  return (
    <section ref={sectionRef} className="max-w-[1024px] mx-auto px-8 py-24">
      <div className="grid lg:grid-cols-2 gap-16">
        {/* Skills */}
        <div>
          <h2 className="text-5xl font-bold text-foreground mb-8">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span
                key={index}
                className={`px-4 py-2 bg-card/50 border border-gray-200 dark:border-gray-800 rounded-full text-muted-foreground text-sm transition-all duration-500 hover:scale-110 hover:bg-card hover:shadow-md ${
                  visibleSkills.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div>
          <h2 className="text-5xl font-bold text-foreground mb-8">Tools</h2>
          <div className="flex flex-wrap gap-4">
            {tools.map((tool, index) => (
              <div
                key={index}
                className={`flex items-center gap-3 px-4 py-2 bg-card/50 border border-gray-200 dark:border-gray-800 rounded-full text-muted-foreground text-sm transition-all duration-500 hover:scale-110 hover:bg-card hover:shadow-md ${
                  visibleTools.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${skills.length * 50 + index * 80}ms` }}
              >
                <Box size={20} />
                <span>{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
