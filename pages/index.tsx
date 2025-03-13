import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AboutSection from '../components/About'
import SkillsSection from '../components/SkillsSection'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <SkillsSection />
      </main>
    </div>
  )
}