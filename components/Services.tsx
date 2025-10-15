import Link from "next/link"

const services = [
  {
    icon: "⚡",
    title: "Framer Development",
    description: "Custom websites built in Framer from pixel-perfect designs to smooth animations and CMS setups.",
    cta: "Build my website",
    link: "#",
  },
  {
    icon: "🎨",
    title: "Product Design",
    description:
      "End-to-end product design for web and mobile apps. I focus on usability, clarity, and creating intuitive experiences.",
    cta: "Start my project",
    link: "#",
  },
  {
    icon: "🎯",
    title: "Design Systems",
    description:
      "Scalable, consistent, and flexible design systems. I help teams streamline their design process with tokens, components, and clear documentation.",
    cta: "Streamline our design",
    link: "#",
  },
  {
    icon: "💡",
    title: "Workshops",
    description:
      "Collaborative sessions designed to help teams find clarity, validate ideas, and define next steps. Think of it as a design sprint: fast, focused, and outcome-driven.",
    cta: "Make it scalable",
    link: "#",
  },
]

export default function Services() {
  return (
    <section className="max-w-[1440px] mx-auto px-8 py-24">
      <h2 className="text-5xl font-bold text-foreground mb-4">Services</h2>
      <p className="text-xl text-muted-foreground mb-16">What I can help you with</p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-card/50 backdrop-blur-sm border border-border rounded-3xl p-8 hover:bg-card transition-colors"
          >
            <div className="text-4xl mb-6">{service.icon}</div>
            <h3 className="text-xl font-bold text-foreground mb-4">{service.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">{service.description}</p>
            <Link
              href={service.link}
              className="inline-flex items-center gap-2 text-foreground hover:text-muted-foreground transition-colors group text-sm"
            >
              <span>{service.cta}</span>
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
