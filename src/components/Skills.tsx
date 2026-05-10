'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/lib/useInView'
import SectionHeader from './SectionHeader'

const skillCategories = [
  {
    title: 'Languages',
    color: 'var(--rose)',
    skills: [
      { name: 'HTML', level: 95 },
      { name: 'CSS', level: 90 },
      { name: 'JavaScript', level: 80 },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    color: 'var(--violet)',
    skills: [
      { name: 'React', level: 85 },
      { name: 'Next.js', level: 82 },
    ],
  },
  {
    title: 'Database & Tools',
    color: 'var(--teal)',
    skills: [
      { name: 'PostgreSQL / Neon DB', level: 70 },
      { name: 'Git & GitHub', level: 80 },
      { name: 'Docker (In Progress)', level: 35 },
    ],
  },
]

const techBadges = [
  'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Next.js',
  'PostgreSQL', 'Neon DB', 'Git', 'GitHub', 'Docker', 'Responsive Design',
  'REST APIs', 'Vercel', 'UI/UX', 'Performance Optimization'
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

        <div className="grid md:grid-cols-3 gap-8 mb-16" ref={ref}>
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 * ci + 0.2 }}
              className="glass rounded-2xl p-6 border border-violet-500/10"
            >
              <h3 className="font-mono text-xs tracking-widest uppercase mb-5" style={{ color: cat.color }}>
                {cat.title}
              </h3>
              <div className="space-y-5">
                {cat.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-[var(--text-primary)]">{skill.name}</span>
                      <span className="text-xs font-mono text-[var(--text-muted)]">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.3 + si * 0.1, ease: 'easeOut' }}
                        className="h-full rounded-full"
                        style={{ background: `linear-gradient(90deg, ${cat.color}, ${cat.color}aa)` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech badge cloud */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {techBadges.map((badge, i) => (
            <motion.span
              key={badge}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.7 + i * 0.03 }}
              whileHover={{ scale: 1.1, y: -3 }}
              className="tag-pill cursor-default"
            >
              {badge}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
