<<<<<<< HEAD
import Link from "next/link"
import Image from "next/image"
=======
"use client"

import Link from "next/link"

import { useRef, useState, useEffect } from "react"
import { ImageIcon } from "lucide-react"
import { useIntersectionObserver } from "@/lib/hooks"
>>>>>>> f2e65fe0 (Initial commit)

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
  bgColor = "bg-[#d4e8d4]",
}: ProjectCardProps) {
<<<<<<< HEAD
  return (
    <div className="sticky top-24">
      <div className={`${bgColor} dark:bg-card rounded-[32px] p-8 md:p-12`}>
        {/* Badge */}
        <span className="inline-block px-4 py-1.5 bg-white dark:bg-background rounded-full text-foreground text-sm font-medium mb-8">
=======
  const cardRef = useRef<HTMLDivElement>(null)
  const isVisible = useIntersectionObserver(cardRef, { threshold: 0.2 })
  const [visibleStats, setVisibleStats] = useState<number[]>([])

  useEffect(() => {
    if (isVisible) {
      const timers = stats.map((_, index) =>
        setTimeout(() => {
          setVisibleStats((prev) => [...prev, index])
        }, index * 150)
      )
      return () => timers.forEach(clearTimeout)
    }
  }, [isVisible, stats])

  return (
    <div
      ref={cardRef}
      className={`transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div
        className={`${bgColor} dark:bg-card rounded-3xl p-6 md:p-10 hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl`}
      >
        <span className="inline-block px-3 py-1 bg-white dark:bg-background rounded-full text-foreground text-xs font-medium mb-6">
>>>>>>> f2e65fe0 (Initial commit)
          {badge}
        </span>

        {/* Content Grid */}
<<<<<<< HEAD
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left: Title, Description, CTA */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight text-balance">{title}</h2>

            <p className="text-foreground/70 dark:text-muted-foreground text-base leading-relaxed">{description}</p>

            <Link
              href={link}
              className="inline-flex items-center gap-2 px-6 py-3 bg-foreground dark:bg-background text-background dark:text-foreground rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
=======
        <div className="grid md:grid-cols-2 gap-6 items-start">
          {/* Left: Title, Description, CTA */}
          <div className="space-y-5">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground leading-tight text-balance">{title}</h2>

            <p className="text-foreground/70 dark:text-muted-foreground text-sm leading-relaxed">{description}</p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`space-y-1 transition-all duration-500 hover:scale-105 ${
                    visibleStats.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{
                    transitionDelay: `${index * 100}ms`,
                  }}
                >
                  <div className="text-xs text-foreground/60 dark:text-muted-foreground">{stat.label}</div>
                  <div className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</div>
                </div>
              ))}
            </div>

            <Link
              href={link}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-foreground dark:bg-background text-background dark:text-foreground rounded-full text-xs font-medium hover:opacity-90 hover:scale-105 transition-all duration-300 hover:shadow-lg"
>>>>>>> f2e65fe0 (Initial commit)
            >
              Explore case study
            </Link>
          </div>

<<<<<<< HEAD
          {/* Right: Image and Stats */}
          <div className="space-y-6">
            {/* Image */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-teal-100 dark:from-blue-900/20 dark:to-teal-900/20 p-4">
              <Image src={image || "/placeholder.svg"} alt={title} fill className="object-contain p-4" />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="space-y-1">
                  <div className="text-sm text-foreground/60 dark:text-muted-foreground">{stat.label}</div>
                  <div className="text-3xl md:text-4xl font-bold text-foreground">{stat.value}</div>
                </div>
              ))}
=======
          {/* Right: Image only */}
          <div className="space-y-5">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-teal-100 dark:from-blue-900/20 dark:to-teal-900/20 p-4 group">
              <div className="absolute inset-0 flex items-center justify-center bg-muted/50">
                <ImageIcon className="text-muted-foreground" size={64} />
              </div>
>>>>>>> f2e65fe0 (Initial commit)
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
