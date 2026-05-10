'use client'

import { motion } from 'framer-motion'

interface SectionHeaderProps {
  label: string
  title: string
  subtitle?: string
  inView: boolean
}

export default function SectionHeader({ label, title, subtitle, inView }: SectionHeaderProps) {
  return (
    <div className="text-center mb-16">
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="inline-block font-mono text-xs tracking-[0.3em] uppercase text-[var(--violet)] mb-4"
      >
        ✦ {label} ✦
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="font-display text-4xl md:text-5xl text-[var(--text-primary)] mb-4"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-6 mx-auto h-px w-32"
        style={{ background: 'linear-gradient(90deg, transparent, var(--violet), var(--rose), transparent)' }}
      />
    </div>
  )
}
