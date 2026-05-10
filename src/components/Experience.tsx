'use client'

import { motion } from 'framer-motion'
import { Building2, Calendar, ExternalLink } from 'lucide-react'
import { useInView } from '@/lib/useInView'
import SectionHeader from './SectionHeader'

const experiences = [
  {
    company: 'Zentrix Infotech',
    role: 'Frontend Developer Intern',
    period: 'Sep 2025 – Mar 2026',
    duration: '6 Months',
    type: 'Internship',
    color: 'var(--violet)',
    highlights: [
      'Developed and deployed jigyasahospital.com — a live hospital website serving real patients & staff',
      'Built fully responsive UIs using React and Next.js with modern frontend best practices',
      'Integrated frontend with PostgreSQL (Neon DB) for dynamic content management',
      'Optimized performance and improved page load speed across all projects',
      'Developed frontend for karahomes.in — brass products e-commerce website',
      'Built and deployed avs-enterprises.com — a complete business website',
    ],
    tech: ['React', 'Next.js', 'PostgreSQL', 'Neon DB', 'CSS', 'Git'],
  },
]

export default function Experience() {
  const { ref, inView } = useInView()

  return (
    <section id="experience" className="py-24 z-10 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="Experience"
          title="Work History"
          subtitle="Real-world experience building and shipping production applications."
          inView={inView}
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px hidden md:block"
            style={{ background: 'linear-gradient(to bottom, transparent, var(--violet), var(--rose), transparent)' }}
          />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:pl-20 relative"
            >
              {/* Timeline dot */}
              <div className="absolute left-5 top-8 w-6 h-6 rounded-full border-2 border-violet-500 bg-[var(--bg)] hidden md:flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[var(--violet)]" />
              </div>

              <div className="glass rounded-2xl p-8 border border-violet-500/15 hover:border-violet-500/35 transition-all duration-300">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-xl bg-violet-500/15 flex items-center justify-center">
                        <Building2 size={18} style={{ color: exp.color }} />
                      </div>
                      <div>
                        <h3 className="text-xl font-display text-[var(--text-primary)]">{exp.role}</h3>
                        <p className="text-[var(--violet)] font-medium text-sm">{exp.company}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <div className="flex items-center gap-2 text-[var(--text-muted)] text-sm font-mono">
                      <Calendar size={14} />
                      {exp.period}
                    </div>
                    <span className="tag-pill">{exp.duration}</span>
                  </div>
                </div>

                {/* Highlights */}
                <ul className="space-y-3 mb-6">
                  {exp.highlights.map((item, j) => (
                    <motion.li
                      key={j}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.4 + j * 0.08 }}
                      className="flex items-start gap-3 text-[var(--text-secondary)] text-sm leading-relaxed"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'var(--rose)' }} />
                      {item}
                    </motion.li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span key={t} className="tag-pill">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
