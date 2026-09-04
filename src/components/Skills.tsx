'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/lib/useInView'
import SectionHeader from './SectionHeader'

const skillCategories = [
  {
    title: 'Languages',
    color: 'var(--rose)',
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript'],
  },
  {
    title: 'Frameworks & Libraries',
    color: 'var(--violet)',
    skills: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    title: 'Database',
    color: 'var(--teal)',
    skills: ['PostgreSQL (Neon DB)', 'MongoDB'],
  },
  {
    title: 'Tools & Technologies',
    color: 'var(--gold, #d4a94e)',
    skills: ['Git', 'GitHub', 'REST APIs', 'Vite', 'Vercel', 'Netlify', 'Responsive Web Design'],
  },
]

export default function Skills() {
  const { ref, inView } = useInView()

  return (
    <section id="skills" className="py-24 z-10 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="Skills"
          title="Technical Arsenal"
          subtitle="Technologies I've worked with, building production-ready applications."
          inView={inView}
        />

        <div className="grid md:grid-cols-2 gap-6 items-start">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 * ci + 0.2 }}
              className="glass rounded-2xl p-6 border border-white/5"
            >
              <div className="flex items-center gap-2.5 mb-5">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: cat.color }}
                />
                <h3 className="text-sm font-medium text-[var(--text-primary)]">
                  {cat.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.3 + si * 0.05 }}
                    whileHover={{ y: -2 }}
                    className="text-sm px-3 py-1.5 rounded-full cursor-default transition-colors"
                    style={{
                      color: cat.color,
                      border: `1px solid color-mix(in srgb, ${cat.color} 35%, transparent)`,
                      background: `color-mix(in srgb, ${cat.color} 8%, transparent)`,
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}