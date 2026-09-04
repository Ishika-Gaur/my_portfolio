'use client'

import { motion } from 'framer-motion'
import { GraduationCap, MapPin, Briefcase, Heart } from 'lucide-react'
import { useInView } from '@/lib/useInView'
import SectionHeader from './SectionHeader'

const facts = [
  { icon: GraduationCap, label: 'Education', value: 'BTech CS · KITPS · 2027', color: 'var(--violet)' },
  { icon: MapPin, label: 'Location', value: 'Moradabad, Uttar Pradesh', color: 'var(--rose)' },
  { icon: Briefcase, label: 'Experience', value: '6 Months · Zentrix Infotech', color: 'var(--teal)' },
  { icon: Heart, label: 'Passion', value: 'Building Beautiful Interfaces', color: 'var(--gold, #d4a94e)' },
]

export default function About() {
  const { ref, inView } = useInView()

  return (
    <section id="about" className="py-24 z-10 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="About Me"
          title="Who I Am"
          subtitle="A passionate developer who loves turning complex ideas into simple, beautiful, and intuitive digital experiences."
          inView={inView}
        />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-6">
              I'm <span className="text-[var(--text-primary)] font-medium">Ishika Gaur</span>, a Computer Science student and Full Stack Developer
              with a genuine passion for creating digital experiences that are not just functional — but
              <span className="text-[var(--violet)]"> beautiful and memorable</span>.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
              During my internship at{' '}
              <span className="text-[var(--rose)]">Zentrix Infotech</span>, I built and deployed
              real-world production websites used by actual users, integrating REST APIs with a{' '}
              <span className="text-[var(--teal)]">PostgreSQL (Neon DB)</span> backend to power
              accurate, dynamic content. Each project sharpened my ability to write clean, maintainable
              code with great attention to UX.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
              On projects like VastraAura, I've built complete{' '}
              <span className="text-[var(--violet)]">Node.js / Express / MongoDB</span> backends
              alongside the frontend — from product and cart flows to admin dashboards.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              I've also presented <span className="text-[var(--gold, #d4a94e)]">Aifinity</span> at
              HackSynergy, a 24-hour national-level hackathon, and taken on freelance frontend work
              like <span className="text-[var(--rose)]">RozGaar</span>. I believe great software is
              equal parts logic and artistry.
            </p>
          </motion.div>

          {/* Fact cards */}
          <div className="grid grid-cols-2 gap-4">
            {facts.map((fact, i) => {
              const Icon = fact.icon
              return (
                <motion.div
                  key={fact.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 * i + 0.3 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="glass rounded-2xl p-5 border border-violet-500/10 hover:border-violet-500/30 transition-all duration-300 cursor-default"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                    style={{
                      background: `color-mix(in srgb, ${fact.color} 15%, transparent)`,
                      color: fact.color,
                    }}
                  >
                    <Icon size={20} />
                  </div>
                  <p className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider mb-1">{fact.label}</p>
                  <p className="text-sm text-[var(--text-primary)] font-medium leading-tight">{fact.value}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}