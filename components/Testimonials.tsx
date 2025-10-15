"use client"

import { User } from "lucide-react"

interface Testimonial {
  id: number
  rating: number
  quote: string
  author: string
  role: string
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    rating: 5,
    quote:
      "Tom's redesign of our outdated website was nothing short of miraculous. He modernized our online presence while maintaining our core identity. The positive feedback from our clients has been overwhelming.",
    author: "Tom Shawn",
    role: "CEO, TechCorp",
    avatar: "/professional-male-portrait.png",
  },
  {
    id: 2,
    rating: 4.5,
    quote:
      "Andrew transformed my business idea into a stunning website in just two weeks, and I couldn't be happier! His attention to detail and quick turnaround time were impressive.",
    author: "Andrew Mathews",
    role: "Founder, StartupHub",
    avatar: "/professional-male-portrait-2.png",
  },
  {
    id: 3,
    rating: 5,
    quote:
      "Attention to detail is evident in the responsive layouts, ensuring seamless performance across all devices.",
    author: "Sarah Taller",
    role: "Product Manager, DesignCo",
    avatar: "/professional-female-portrait.png",
  },
  {
    id: 4,
    rating: 5,
    quote: "Pleasure to work with. 5 stars, can't recommend enough!",
    author: "Tyler Stars",
    role: "CTO, InnovateLabs",
    avatar: "/professional-male-portrait-3.jpg",
  },
  {
    id: 5,
    rating: 5,
    quote:
      "Emily delivered a complex web application ahead of schedule. Her coding prowess and problem-solving abilities were evident in the seamless functionality and robust features she implemented.",
    author: "Emily Desire",
    role: "Director, WebSolutions",
    avatar: "/professional-female-portrait-2.jpg",
  },
  {
    id: 6,
    rating: 5,
    quote:
      "Tom's redesign of our outdated website was nothing short of miraculous. He modernized our online presence while maintaining our core identity. The positive feedback from our clients has been overwhelming.",
    author: "Tom Shawn",
    role: "CEO, TechCorp",
    avatar: "/professional-male-portrait.png",
  },
  {
    id: 7,
    rating: 4.5,
    quote:
      "Andrew transformed my business idea into a stunning website in just two weeks, and I couldn't be happier! His attention to detail and quick turnaround time were impressive.",
    author: "Andrew Mathews",
    role: "Founder, StartupHub",
    avatar: "/professional-male-portrait-2.png",
  },
  {
    id: 8,
    rating: 5,
    quote:
      "Attention to detail is evident in the responsive layouts, ensuring seamless performance across all devices.",
    author: "Sarah Taller",
    role: "Product Manager, DesignCo",
    avatar: "/professional-female-portrait.png",
  },
  {
    id: 9,
    rating: 5,
    quote: "Pleasure to work with. 5 stars, can't recommend enough!",
    author: "Tyler Stars",
    role: "CTO, InnovateLabs",
    avatar: "/professional-male-portrait-3.jpg",
  },
  {
    id: 10,
    rating: 5,
    quote:
      "Emily delivered a complex web application ahead of schedule. Her coding prowess and problem-solving abilities were evident in the seamless functionality and robust features she implemented.",
    author: "Emily Desire",
    role: "Director, WebSolutions",
    avatar: "/professional-female-portrait-2.jpg",
  },
]

export default function Testimonials() {
  return (
    <section className="w-full py-16 md:py-24 bg-muted/30 dark:bg-muted/10 overflow-hidden group">
      <div className="max-w-[1024px] mx-auto px-6 mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3 text-center">What Clients Say</h2>
        <p className="text-sm text-muted-foreground text-center max-w-2xl mx-auto">
          Trusted by founders and teams worldwide to deliver exceptional results
        </p>
      </div>

      <div className="overflow-hidden py-4">
        <div
          className="flex gap-6 px-6 md:px-8 animate-scroll group-hover:[animation-play-state:paused]"
        >
        {/* Duplicate testimonials for infinite scroll effect */}
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <div
            key={`${testimonial.id}-${index}`}
            className="flex-shrink-0 w-[340px] md:w-[400px] bg-card dark:bg-accent border border-border rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            {/* Rating */}
            <div className="flex items-center gap-1 mb-4">
              <span className="text-xs font-semibold text-foreground mr-2">{testimonial.rating}/5</span>
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill={i < Math.floor(testimonial.rating) ? "currentColor" : "none"}
                  stroke="currentColor"
                  className="text-yellow-500"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 1L10 6L15 6L11 9.5L13 15L8 11.5L3 15L5 9.5L1 6L6 6L8 1Z" />
                </svg>
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-sm text-foreground/90 leading-relaxed mb-6 min-h-[120px]">
              {testimonial.quote}
            </blockquote>

            {/* Author */}
            <div className="flex items-center gap-3 pt-4 border-t border-border">
              <div className="w-10 h-10 rounded-full bg-muted flex-shrink-0 flex items-center justify-center">
                <User className="text-muted-foreground" />
              </div>
              <div>
                <div className="text-sm font-semibold text-foreground">{testimonial.author}</div>
                <div className="text-xs text-muted-foreground">{testimonial.role}</div>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
    </section>
  )
}
