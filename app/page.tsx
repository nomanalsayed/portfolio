import Header from "@/components/Header"
import Hero from "@/components/Hero"
import ProjectCard from "@/components/ProjectCard"
import About from "@/components/About"
import SkillsTools from "@/components/SkillsTools"
import Experience from "@/components/Experience"
import Testimonials from "@/components/Testimonials"
import FooterCTA from "@/components/FooterCTA"
import Footer from "@/components/Footer"


export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />

        {/* Projects Section */}
        <section id="work" className="max-w-[1024px] mx-auto px-6 py-24" aria-label="Featured projects">
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Featured Work</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore a selection of projects where design meets innovation, delivering measurable results for leading companies.
            </p>
          </div>
          <div className="space-y-10">
            <ProjectCard
              badge="Fintech"
              title="Finance intelligence with Fintelli"
              description="Using a user-focused strategy, the objective was to produce a user-friendly interface for improved financial intelligence in budget planning."
              image="/fintech-mobile-dashboard.png"
              stats={[
                { label: "User Retention", value: "60%" },
                { label: "User Satisfaction", value: "5*" },
              ]}
              link="/case-study/fintelli"
              bgColor="bg-[#d4e8d4]"
            />

            <ProjectCard
              badge="Insurance"
              title="Designing a scalable CRM tool for insurance industry"
              description="As the Product Designer and UX/UI Department Leader at Omnisafe, I successfully led the design team in creating a scalable design system and conceptualizing an internal CRM tool"
              image="/insurance-crm-dashboard-interface.jpg"
              stats={[
                { label: "Modules", value: "16" },
                { label: "Design System Utilization", value: "100%" },
              ]}
              link="#"
              bgColor="bg-[#d4e4e8]"
            />

            <ProjectCard
              badge="Hospitality"
              title="Group quotation and collaboration at FLYR Hospitality"
              description="As a Product Designer, I worked on refining the Group Quotation tool and introducing profitability metrics to help hotels make data-driven decisions."
              image="/hospitality-management-dashboard.jpg"
              stats={[
                { label: "Increased user interaction", value: "30%" },
                { label: "Reduced task resolution time", value: "20%" },
              ]}
              link="#"
              bgColor="bg-[#e8dcd4]"
            />

            <ProjectCard
              badge="Software Agency"
              title="Agency redesign - Framer development"
              description="SevenLab, a cutting-edge technology company, sought a complete overhaul of their online presence to better reflect their innovative spirit and high-tech solutions."
              image="/modern-tech-agency-website.jpg"
              stats={[
                { label: "Pages", value: "18" },
                { label: "Timeframe", value: "5 weeks" },
              ]}
              link="#"
              bgColor="bg-[#e8d4e4]"
            />

            <ProjectCard
              badge="Cyber Security"
              title="Transforming the proxy market with a user-focused approach"
              description="Focus was to create a user-friendly interface that simplified the process of accessing premium operational web scraping proxies."
              image="/cybersecurity-proxy-interface.jpg"
              stats={[
                { label: "Usability Score", value: "85" },
                { label: "User Retention", value: "70%" },
              ]}
              link="#"
              bgColor="bg-[#d4dce8]"
            />
          </div>
        </section>

        <Testimonials />
        <About />
        <SkillsTools />
        <Experience />
        <FooterCTA />
      </main>
      <Footer />
    </div>
  )
}
