'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, Github, Linkedin, Send } from 'lucide-react'
import { useInView } from '@/lib/useInView'
import SectionHeader from './SectionHeader'

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'ishikalalitgaur521@gmail.com',
    href: 'mailto:ishikalalitgaur521@gmail.com',
    color: 'var(--rose)',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 9058622316',
    href: 'tel:+919058622316',
    color: 'var(--violet)',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/Ishika-Gaur',
    href: 'https://github.com/Ishika-Gaur',
    color: 'var(--teal)',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'ishika-gaur-361115343',
    href: 'https://linkedin.com/in/ishika-gaur-361115343',
    color: 'var(--gold)',
  },
]

export default function Contact() {
  const { ref, inView } = useInView()

  return (
    <section id="contact" className="py-24 z-10 relative" ref={ref}>
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeader
          label="Contact"
          title="Let's Connect"
          subtitle="Open to internships, collaborations, and exciting frontend opportunities."
          inView={inView}
        />

        {/* Main CTA card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="glass rounded-3xl p-10 border border-violet-500/15 text-center mb-10 relative overflow-hidden"
        >
          {/* Background glow */}
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(168,85,247,0.3) 0%, transparent 70%)',
            }}
          />
          <div className="relative">
            <p className="font-display text-3xl md:text-4xl text-[var(--text-primary)] mb-3">
              Have a project in mind?
            </p>
            <p className="text-[var(--text-secondary)] mb-8 text-lg">
              I'd love to hear about it. Let's build something great together.
            </p>
            <motion.a
              href="mailto:ishikalalitgaur521@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-white font-medium text-lg"
              style={{ background: 'linear-gradient(135deg, var(--violet), var(--rose))' }}
            >
              <Send size={18} />
              Say Hello
            </motion.a>
          </div>
        </motion.div>

        {/* Contact links grid */}
        <div className="grid sm:grid-cols-2 gap-4">
          {contactLinks.map((link, i) => {
            const Icon = link.icon
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                whileHover={{ x: 4 }}
                className="glass rounded-xl p-4 border border-violet-500/10 hover:border-violet-500/30 transition-all duration-300 flex items-center gap-4 group"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: `${link.color}18` }}
                >
                  <Icon size={18} style={{ color: link.color }} />
                </div>
                <div>
                  <p className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider">{link.label}</p>
                  <p className="text-sm text-[var(--text-primary)] group-hover:text-[var(--violet)] transition-colors truncate max-w-[220px]">
                    {link.value}
                  </p>
                </div>
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
