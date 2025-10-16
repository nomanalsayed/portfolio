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
    quote: "Impressed by the professionalism and attention to detail.",
    author: "Guy Hawkins",
    role: "@guyHawkins",
    avatar: "/professional-male-portrait.png",
  },
  {
    id: 2,
    rating: 4.5,
    quote: "A seamless experience from start to finish. Highly recommend!",
    author: "Karla Lynn",
    role: "@karlalynn8",
    avatar: "/professional-male-portrait-2.png",
  },
  {
    id: 3,
    rating: 5,
    quote: "Reliable and trustworthy. Made my life so much easier!",
    author: "Jane Cooper",
    role: "@janecooper",
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
      <div className="max-w-[1024px] mx-auto px-6 mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          What Clients Say
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Trusted by founders and teams worldwide to deliver exceptional results
        </p>
      </div>

      <div className="overflow-hidden py-4">
        <div className="flex gap-6 px-6 md:px-8 animate-scroll group-hover:[animation-play-state:paused]">
          {/* Duplicate testimonials for infinite scroll effect */}
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div
              key={`${testimonial.id}-${index}`}
              className="flex-shrink-0 w-[340px] md:w-[400px] bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02]"
            >
              {/* Quote Icon */}
              <div className="mb-6 opacity-80">
                <svg
                  width="40"
                  height="32"
                  viewBox="0 0 40 32"
                  fill="none"
                  className="text-gray-300 dark:text-gray-600"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 17.92V32h12.8V17.92H6.4C6.4 11.6533 8.53333 8.53333 12.8 8.53333V0C4.26667 0 0 5.97333 0 17.92ZM27.2 17.92V32H40V17.92h-6.4c0-6.26667 2.1333-9.38667 6.4-9.38667V0c-8.5333 0-12.8 5.97333-12.8 17.92Z"
                    fill="currentColor"
                  />
                </svg>
              </div>

              {/* Quote */}
              <blockquote className="text-[1.125rem] text-gray-900 dark:text-gray-100 leading-relaxed mb-6 min-h-[120px]">
                {testimonial.quote}
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex-shrink-0 flex items-center justify-center">
                  <User className="text-gray-500 dark:text-gray-400" />
                </div>
                <div>
                  <div className="text-base font-semibold text-gray-900 dark:text-gray-100">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
