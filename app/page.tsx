import Hero from "@/app/components/Hero"
import Navbar from "@/app/components/Navbar"
import About from "@/app/components/About"
import Experience from "@/app/components/Experience"
import Projects from "@/app/components/Projects"
import Contact from "./components/Contact"
import TechnicalSkills from "./components/TechnicalSkills"
import SoftSkills from "./components/SoftSkills"

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <TechnicalSkills />
      <SoftSkills />
      <Contact />
    </main>
  )
}
