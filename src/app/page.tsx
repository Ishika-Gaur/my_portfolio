'use client'

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Certifications from '@/components/Certifications'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import FloatingOrbs from '@/components/FloatingOrbs'
import CursorGlow from '@/components/CursorGlow'

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <CursorGlow />
      <FloatingOrbs />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  )
}
