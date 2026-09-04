'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Github, Linkedin, Mail, ArrowDown, Code2 } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-12 z-10">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center w-full">

        {/* Left — Text content */}
        {/* On mobile: order-1 (shown first). On md+: order-1 (left column) */}
        <div className="order-1 md:order-1">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-green-400/30 mb-6 md:mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs font-mono text-green-400 tracking-wider">AVAILABLE FOR OPPORTUNITIES</span>
          </motion.div>

          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl leading-[1.05] mb-4">
              <span className="block text-[var(--text-primary)]">Hi, I'm</span>
              <span className="block gradient-text font-semibold">Ishika</span>
              <span className="block text-[var(--text-primary)]">Gaur</span>
            </h1>
          </motion.div>

          {/* Role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <Code2 size={18} className="text-[var(--violet)]" />
            <p className="font-mono text-xs sm:text-sm text-[var(--violet)] tracking-widest uppercase">
              Full Stack Developer · BTech CS Student
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-[var(--text-secondary)] text-base sm:text-lg leading-relaxed mb-8 max-w-lg"
          >
            Crafting beautiful, performant web experiences end to end — from{' '}
            <span className="text-[var(--rose)]">React</span> &{' '}
            <span className="text-[var(--violet)]">Next.js</span> interfaces to{' '}
            <span className="text-[var(--teal)]">Node.js</span> APIs powering them.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="flex flex-wrap gap-4 mb-10"
          >
            <a
              href="#projects"
              className="px-6 py-3 rounded-full text-sm font-medium relative overflow-hidden group"
              style={{
                background: 'linear-gradient(135deg, var(--violet), var(--rose))',
                color: '#fff',
              }}
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full text-sm font-medium glass border border-violet-500/30 text-[var(--text-primary)] hover:border-violet-500/60 transition-all duration-300 hover:bg-violet-500/5"
            >
              Get In Touch
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex items-center gap-5 flex-wrap"
          >
            {[
              { icon: Github, href: 'https://github.com/Ishika-Gaur', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com/in/ishika-gaur-361115343', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:ishikalalitgaur521@gmail.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-full glass border border-violet-500/20 flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--violet)] hover:border-violet-500/50 transition-all duration-300"
              >
                <Icon size={18} />
              </motion.a>
            ))}
            <div className="w-px h-8 bg-[var(--border)]" />
            <span className="text-xs font-mono text-[var(--text-muted)] tracking-wider">9058622316</span>
          </motion.div>
        </div>

        {/* Right — Avatar */}
        {/* On mobile: order-2 (shown second). On md+: order-2 (right column) */}
        <div className="order-2 md:order-2 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
            style={{ overflow: 'visible' }}
          >
            {/* Orbiting rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div
                className="absolute w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] rounded-full border border-violet-500/10"
                style={{ animation: 'spin 25s linear infinite' }}
              />
              <div
                className="absolute w-[320px] h-[320px] sm:w-[440px] sm:h-[440px] rounded-full border border-rose-glow/5"
                style={{ animation: 'spin 35s linear infinite reverse' }}
              />

              {/* Orbiting dots */}
              {[
                { color: 'var(--violet)', delay: '0s', size: 10 },
                { color: 'var(--rose)', delay: '-4s', size: 8 },
                { color: 'var(--teal)', delay: '-8s', size: 6 },
              ].map((dot, i) => (
                <div
                  key={i}
                  className="absolute"
                  style={{
                    width: `${dot.size}px`,
                    height: `${dot.size}px`,
                    borderRadius: '50%',
                    background: dot.color,
                    boxShadow: `0 0 ${dot.size * 2}px ${dot.color}`,
                    animation: `orbit ${12 + i * 3}s linear infinite ${dot.delay}`,
                  }}
                />
              ))}
            </div>

            {/* Avatar container */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative z-10"
            >
              {/* Glow behind avatar — mix-blend-mode so it blends with page bg instead of creating a dark box */}
              <div
                className="absolute inset-0 rounded-full blur-3xl opacity-40 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle, var(--violet) 0%, var(--rose) 100%)',
                  mixBlendMode: 'screen',
                }}
              />

              {/* Avatar image — PNG with transparent background */}
              <div className="relative w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] md:w-[360px] md:h-[360px]">
                <Image
                  src="/avtar.png"
                  alt="Ishika Gaur"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                  unoptimized
                />
              </div>
            </motion.div>

            {/* Floating tech badges */}
            {[
              { label: 'React', x: '-50px', y: '22%', color: 'var(--teal)', duration: '7s' },
              { label: 'Next.js', x: 'calc(100% + 10px)', y: '28%', color: 'var(--violet)', duration: '9s' },
              { label: 'Node.js', x: 'calc(100% - 20px)', y: '68%', color: 'var(--rose)', duration: '6s' },
            ].map((badge) => (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4, duration: 0.5 }}
                className="absolute glass border px-3 py-1.5 rounded-full text-xs font-mono whitespace-nowrap hidden sm:block"
                style={{
                  left: badge.x,
                  top: badge.y,
                  color: badge.color,
                  borderColor: `${badge.color}44`,
                  boxShadow: `0 0 12px ${badge.color}22`,
                  animation: `float ${badge.duration} ease-in-out infinite`,
                }}
              >
                {badge.label}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--text-muted)]"
      >
        <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  )
}