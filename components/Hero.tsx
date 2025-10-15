<<<<<<< HEAD
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative pt-40 pb-32 overflow-hidden">
      <div className="max-w-[900px] mx-auto px-8 relative z-10">
        {/* Profile Photo */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="w-32 h-32 rounded-full overflow-hidden bg-muted">
              <Image
                src="/professional-headshot.png"
                alt="Goran Babarogic"
                width={128}
                height={128}
=======
"use client"


import { useEffect, useRef, useState } from "react"
import { ArrowRight, User } from "lucide-react"
import Image from "next/image"
import ScheduleMeetingButton from "./ScheduleMeetingButton"

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
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
    <section
      ref={heroRef}
      className="relative pt-32 pb-24 overflow-hidden"

    >
      <div className="max-w-[900px] mx-auto px-8 relative z-10">
        {/* Profile Photo */}
        <div
          className={`flex justify-center mb-5 transition-all duration-1000 delay-100 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          <div className="relative">
            <div className="w-28 h-28 rounded-full overflow-hidden bg-muted ring-4 ring-background">
              <Image
                src="/noman-al-sayed.jpeg"
                alt="Noman Al Sayed"
                width={112}
                height={112}
>>>>>>> f2e65fe0 (Initial commit)
                className="object-cover"
              />
            </div>
            {/* Pro Expert Badge */}
<<<<<<< HEAD
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-background border border-border px-4 py-1.5 rounded-full flex items-center gap-2 shadow-sm">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
=======
            <div className="mt-4 bg-background border border-border px-3 py-1 rounded-full flex items-center gap-1.5 mx-auto w-fit">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
>>>>>>> f2e65fe0 (Initial commit)
                <path d="M8 1L10 6L15 6L11 9.5L13 15L8 11.5L3 15L5 9.5L1 6L6 6L8 1Z" fill="currentColor" />
              </svg>
              <span className="text-xs font-medium text-foreground">Pro Expert</span>
            </div>
          </div>
        </div>

<<<<<<< HEAD
        {/* Heading */}
        <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-8 leading-tight text-center text-balance">
=======
        <h1
          className={`text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight text-center text-balance transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
>>>>>>> f2e65fe0 (Initial commit)
          Helping founders
          <br />
          build, launch, and grow.
        </h1>

<<<<<<< HEAD
        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground text-center leading-relaxed mb-12 max-w-3xl mx-auto">
          Framer Expert & Lead Product Designer with 16 years of experience in SaaS, fintech, AI and tech startups.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Link
            href="#hire"
            className="bg-foreground text-background px-8 py-4 rounded-full text-base font-medium hover:opacity-90 transition-opacity inline-flex items-center gap-2"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 2L12 8L18 8L13 12L15 18L10 14L5 18L7 12L2 8L8 8L10 2Z" fill="currentColor" />
            </svg>
            Hire Me on Contra
          </Link>
=======
        <p
          className={`text-base md:text-lg text-muted-foreground text-center leading-relaxed mb-10 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Framer Expert & Lead Product Designer with 16 years of experience in SaaS, fintech, AI and tech startups.
        </p>

        <div
          className={`flex justify-center transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <ScheduleMeetingButton />
>>>>>>> f2e65fe0 (Initial commit)
        </div>
      </div>
    </section>
  )
}
