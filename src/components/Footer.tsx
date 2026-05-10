'use client'

import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-violet-500/10 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-[var(--text-muted)] text-sm flex items-center gap-2"
        >
          Crafted with <Heart size={14} className="text-[var(--rose)] animate-pulse" /> by{' '}
          <span className="gradient-text font-medium">Ishika Gaur</span>
        </motion.p>
        <p className="text-[var(--text-muted)] text-xs font-mono">
          © {new Date().getFullYear()} · Built with Next.js & Framer Motion
        </p>
      </div>
    </footer>
  )
}
