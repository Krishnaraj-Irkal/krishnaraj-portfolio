import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AboutSection from '../components/About'
import SkillsSection from '../components/SkillsSection'
import ProjectsSection from '../components/Projects'
import ContactSection from '../components/Contact'
import Footer from '../components/Footer'
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <>
      <NextSeo
        title="Home | My Portfolio"
        description="Welcome to my personal portfolio showcasing projects, skills, and experience in frontend development."
        canonical="https://www.krishnarajirkal.com/"
        openGraph={{
          url: "https://www.krishnarajirkal.com/",
          title: "Home | My Portfolio",
          description: "Welcome to my personal portfolio showcasing projects, skills, and experience in frontend development.",
        }}
      />
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />

        </main>
        <Footer />
      </div>
    </>
  )
}