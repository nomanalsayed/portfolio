import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { ImageIcon } from "lucide-react"

export default function CaseStudy() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-[1024px] mx-auto px-8 py-24">
        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-12 bg-muted flex items-center justify-center">
          <ImageIcon className="text-muted-foreground" size={128} />
        </div>
        <h1 className="text-5xl font-bold text-foreground mb-8">Finance intelligence with Fintelli</h1>
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">About the project</h2>
              <p className="text-muted-foreground leading-relaxed">
                Fintelli is a mobile application that provides users with financial intelligence to help them with their budget planning. The goal of the project was to create a user-friendly interface that would make it easy for users to track their expenses, set budgets, and get insights into their spending habits.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">My Role</h2>
              <p className="text-muted-foreground leading-relaxed">
                As the lead product designer, I was responsible for the entire design process, from user research and wireframing to prototyping and user testing. I worked closely with the development team to ensure that the final product was both beautiful and functional.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">The Challenge</h2>
              <p className="text-muted-foreground leading-relaxed">
                The main challenge of the project was to create an interface that was both powerful and easy to use. The app needed to provide users with a lot of information, but it also needed to be intuitive and not overwhelming.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">The Solution</h2>
              <p className="text-muted-foreground leading-relaxed">
                To solve this challenge, I designed a dashboard that provides users with a quick overview of their finances. The dashboard includes a chart that shows their spending over time, as well as a list of their most recent transactions. Users can also drill down into their spending by category to get more detailed information.
              </p>
            </div>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">Client</h3>
              <p className="text-muted-foreground">Fintelli</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">Year</h3>
              <p className="text-muted-foreground">2023</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">Services</h3>
              <ul className="list-disc list-inside text-muted-foreground">
                <li>UI/UX Design</li>
                <li>Prototyping</li>
                <li>User Research</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
