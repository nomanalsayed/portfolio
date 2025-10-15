'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useRef, useState, useEffect } from 'react'
import { ImageIcon } from 'lucide-react'
import { useIntersectionObserver } from '@/lib/hooks'

interface ProjectCardProps {
  badge: string
  title: string
  description: string
  image: string
  stats: Array<{ label: string; value: string }>
  link: string
  bgColor?: string
}

export default function ProjectCard({
  badge,
  title,
  description,
  image,
  stats,
  link,
  bgColor = 'bg-[#d4e8d4]',
}: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const isVisible = useIntersectionObserver(cardRef, { threshold: 0.2 })
  const [visibleStats, setVisibleStats] = useState<number[]>([])

  useEffect(() => {
    if (isVisible) {
      const timers = stats.map((_, index) =>
        setTimeout(() => {
          setVisibleStats(prev => [...prev, index])
        }, index * 150),
      )
      return () => timers.forEach(clearTimeout)
    }
  }, [isVisible, stats])

  return (
    <div
      ref={cardRef}
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div
        className={`${bgColor} rounded-3xl p-6 md:p-10 transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
      >
        <span className="inline-block px-3 py-1 bg-white dark:bg-white/90 rounded-full text-gray-900 text-xs font-medium mb-6">
          {badge}
        </span>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-6 items-start">
          {/* Left: Title, Description, CTA */}
          <div className="space-y-5">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight text-balance">{title}</h2>

            <p className="text-gray-700 text-base leading-relaxed">{description}</p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`space-y-1 transition-all duration-500 ${
                    visibleStats.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{
                    transitionDelay: `${index * 100}ms`,
                  }}
                >
                  <div className="text-xs text-gray-600">{stat.label}</div>
                  <div className="text-2xl md:text-3xl font-bold text-gray-900">{stat.value}</div>
                </div>
              ))}
            </div>

            <Link
              href={link}
              className="inline-flex items-center gap-2 text-gray-900 text-sm font-medium hover:gap-3 transition-all duration-300 group"
              aria-label={`View case study for ${title}`}
            >
              Explore case study
              <svg 
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Right: Image only */}
          <div className="space-y-5">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-teal-100 dark:from-blue-900/20 dark:to-teal-900/20 p-4 group">
              <Image src={image || '/placeholder.svg'} alt={title} fill className="object-contain p-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
