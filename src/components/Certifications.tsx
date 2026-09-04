'use client'

import { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Award, Calendar, Hash, X, Shield, Star, ExternalLink, BadgeCheck } from 'lucide-react'
import { useInView } from '@/lib/useInView'
import SectionHeader from './SectionHeader'
import Image from 'next/image'

// ✅ Portal wrapper — renders children directly into document.body
function Portal({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])
  if (!mounted) return null
  return createPortal(children, document.body)
}

// ✅ Locks scroll on both html + body, restores position on close
function useScrollLock(active: boolean) {
  useEffect(() => {
    if (!active) return
    const html = document.documentElement
    const body = document.body
    const scrollY = window.scrollY

    html.style.overflow = 'hidden'
    body.style.overflow = 'hidden'
    body.style.position = 'fixed'
    body.style.top = `-${scrollY}px`
    body.style.width = '100%'

    return () => {
      html.style.overflow = ''
      body.style.overflow = ''
      body.style.position = ''
      body.style.top = ''
      body.style.width = ''
      window.scrollTo(0, scrollY)
    }
  }, [active])
}

const certs = [
  {
    title: 'Frontend Development Internship Completion',
    issuer: 'Zentrix Infotech',
    certId: 'ZEN20260310HR31',
    date: '10 March 2026',
    color: 'var(--violet)',
    description: 'Successfully completed a 6-month Frontend Development Internship, demonstrating expertise in building and deploying production-grade web applications using React and Next.js.',
    skills: ['React', 'Next.js', 'PostgreSQL', 'Responsive UI', 'Git'],
    grade: 'Excellent',
    verifyUrl: 'https://zentrixinfotech.com/verify?cin=ZEN20260310HR31',
    image: '/internship_completion.png',
  },
  {
    title: 'Website Development – Jigyasa Hospital',
    issuer: 'Zentrix Infotech',
    certId: 'ZEN20260308HR31',
    date: '08 March 2026',
    color: 'var(--rose)',
    description: 'Awarded for the successful development and deployment of jigyasahospital.com — a fully functional, responsive hospital website serving real patients and staff.',
    skills: ['Next.js', 'Neon DB', 'PostgreSQL', 'Performance Optimization'],
    grade: 'Outstanding',
    verifyUrl: 'https://zentrixinfotech.com/verify?cin=ZEN20260308HR31',
    image: '/Certificate_jigyasa.jpg',
  },
  {
    title: 'Kara Homes Frontend Project',
    issuer: 'Zentrix Infotech',
    certId: 'ZEN20260212HR31',
    date: '12 February 2026',
    color: 'var(--teal)',
    description: 'Recognized for delivering the complete frontend of karahomes.in with exceptional design sense, responsive layouts, and proficient technical skills.',
    skills: ['React', 'CSS', 'Responsive Design', 'UI/UX'],
    grade: 'Excellent',
    verifyUrl: 'https://zentrixinfotech.com/verify?cin=ZEN20260212HR31',
    image: '/Certificate_kara.jpg',
  },
  {
    title: 'HackSynergy — 24-Hour National Level Hackathon',
    issuer: 'E-Cell IPEC',
    certId: undefined,
    date: 'HackSynergy 2026',
    color: 'var(--gold, #d4a94e)',
    description: 'Certificate of Participation for presenting Aifinity, an AI-powered skill-gap assessment and roadmap platform, at HackSynergy — a 24-hour national-level hackathon organized by E-Cell IPEC.',
    skills: ['React', 'Team Project', 'Hackathon'],
    grade: 'Participation',
    verifyUrl: undefined,
    image: '/Certificate_hacksynergy.png',
  },
  {
    title: 'The Complete Python Developer',
    issuer: 'Udemy',
    certId: undefined,
    date: '15 August 2026',
    color: 'var(--rose)',
    description: 'Completed a comprehensive course covering Python fundamentals through advanced application development.',
    skills: ['Python'],
    grade: 'Completed',
    verifyUrl: undefined,
    image: '/Certificate_python.png',
  },
]

type Cert = typeof certs[0]

// ─── Fullscreen Image Viewer ────────────────────────────────────────────────
function ImageModal({ src, onClose }: { src: string; onClose: () => void }) {
  useScrollLock(true)
  return (
    <Portal>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          position: 'fixed', inset: 0, zIndex: 10000,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: 'rgba(0,0,0,0.95)',
          backdropFilter: 'blur(16px)',
          padding: '16px',
          overflowY: 'auto',
          overflowX: 'hidden',
        }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 280, damping: 26 }}
          onClick={(e) => e.stopPropagation()}
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '900px',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 25px 60px rgba(0,0,0,0.8)',
            margin: 'auto',
          }}
        >
          <button
            onClick={onClose}
            style={{
              position: 'absolute', top: 12, right: 12, zIndex: 10,
              width: 36, height: 36, borderRadius: '50%', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: 'rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.2)',
            }}
          >
            <X size={16} color="#fff" />
          </button>
          <Image
            src={src}
            alt="Certificate"
            width={1200}
            height={850}
            style={{ display: 'block', width: '100%', height: 'auto' }}
          />
        </motion.div>
      </motion.div>
    </Portal>
  )
}

// ─── Certificate Detail Modal ───────────────────────────────────────────────
function CertificateModal({ cert, onClose }: { cert: Cert; onClose: () => void }) {
  const [showImage, setShowImage] = useState(false)
  useScrollLock(true)
  const hasVerify = Boolean(cert.certId || cert.verifyUrl)

  return (
    <Portal>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          position: 'fixed', inset: 0,
          zIndex: 9999,
          display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
          padding: '24px 16px',
          background: 'rgba(0,0,0,0.85)',
          backdropFilter: 'blur(12px)',
          overflowY: 'auto',
          overflowX: 'hidden',
        }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: 40 }}
          transition={{ type: 'spring', stiffness: 300, damping: 28 }}
          onClick={(e) => e.stopPropagation()}
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '680px',
            borderRadius: '24px',
            overflow: 'hidden',
            background: 'var(--surface-2, #131325)',
            flexShrink: 0,
            margin: 'auto',
          }}
        >
          <button
            onClick={onClose}
            style={{
              position: 'absolute', top: 16, right: 16, zIndex: 10,
              width: 36, height: 36, borderRadius: '50%', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: 'rgba(255,255,255,0.08)', border: 'none',
            }}
          >
            <X size={16} style={{ color: 'var(--text-secondary)' }} />
          </button>

          <div className="p-8 md:p-12">
            <div
              className="h-1 w-full rounded-full mb-10"
              style={{ background: `linear-gradient(90deg, ${cert.color}, transparent)` }}
            />

            {/* Certificate image */}
            {cert.image && (
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShowImage(true)}
                className="relative w-full rounded-2xl overflow-hidden mb-8 group"
                style={{
                  cursor: 'zoom-in',
                  border: `1px solid color-mix(in srgb, ${cert.color} 20%, transparent)`,
                  background: `color-mix(in srgb, ${cert.color} 4%, transparent)`,
                }}
              >
                <Image
                  src={cert.image}
                  alt={`${cert.title} certificate`}
                  width={800}
                  height={560}
                  style={{ display: 'block', width: '100%', height: 'auto' }}
                />
                <div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'rgba(0,0,0,0.45)' }}
                >
                  <span
                    className="px-4 py-2 rounded-full text-xs font-mono font-semibold"
                    style={{
                      background: `color-mix(in srgb, ${cert.color} 13%, transparent)`,
                      color: cert.color,
                      border: `1px solid color-mix(in srgb, ${cert.color} 33%, transparent)`,
                      backdropFilter: 'blur(8px)',
                    }}
                  >
                    🔍 Click to enlarge
                  </span>
                </div>
              </motion.div>
            )}

            <div className="flex items-start justify-between mb-8">
              <div>
                <p className="font-mono text-xs tracking-[0.25em] uppercase mb-2" style={{ color: cert.color }}>
                  ✦ Certificate of Achievement ✦
                </p>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>This is to certify that</p>
              </div>
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 relative"
                style={{
                  border: `2px solid color-mix(in srgb, ${cert.color} 27%, transparent)`,
                  background: `color-mix(in srgb, ${cert.color} 6%, transparent)`,
                }}
              >
                <Shield size={26} style={{ color: cert.color }} />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 rounded-full"
                  style={{ border: `1px dashed color-mix(in srgb, ${cert.color} 27%, transparent)` }}
                />
              </div>
            </div>

            <h2 className="font-display text-4xl md:text-5xl mb-2" style={{ color: 'var(--text-primary)' }}>
              Ishika Gaur
            </h2>
            <div className="h-px w-48 mb-6" style={{ background: `linear-gradient(90deg, ${cert.color}, transparent)` }} />

            <p className="text-sm mb-2" style={{ color: 'var(--text-secondary)' }}>has successfully completed</p>
            <h3 className="text-xl md:text-2xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
              {cert.title}
            </h3>
            <p className="text-sm leading-relaxed mb-8" style={{ color: 'var(--text-secondary)' }}>
              {cert.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {cert.skills.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1 rounded-full text-xs font-mono"
                  style={{
                    background: `color-mix(in srgb, ${cert.color} 8%, transparent)`,
                    color: cert.color,
                    border: `1px solid color-mix(in srgb, ${cert.color} 20%, transparent)`,
                  }}
                >
                  {s}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
              <div>
                <p className="text-xs font-mono uppercase tracking-wider mb-1" style={{ color: 'var(--text-muted)' }}>Issued By</p>
                <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{cert.issuer}</p>
              </div>
              <div>
                <p className="text-xs font-mono uppercase tracking-wider mb-1" style={{ color: 'var(--text-muted)' }}>Issue Date</p>
                <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{cert.date}</p>
              </div>
              <div>
                <p className="text-xs font-mono uppercase tracking-wider mb-1" style={{ color: 'var(--text-muted)' }}>Grade</p>
                <div className="flex items-center gap-1">
                  <Star size={12} style={{ color: cert.color, fill: cert.color }} />
                  <p className="text-sm font-medium" style={{ color: cert.color }}>{cert.grade}</p>
                </div>
              </div>
            </div>

            {hasVerify && (
              <div className="mt-4 flex items-center justify-between flex-wrap gap-3">
                {cert.certId ? (
                  <div className="flex items-center gap-2 text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
                    <Hash size={11} />
                    <span>{cert.certId}</span>
                  </div>
                ) : <div />}
                {cert.verifyUrl && (
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5 text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
                      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse inline-block" />
                      Verified
                    </div>
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-mono font-medium transition-all duration-200 hover:opacity-80 hover:scale-105"
                      style={{
                        background: `color-mix(in srgb, ${cert.color} 12%, transparent)`,
                        color: cert.color,
                        border: `1px solid color-mix(in srgb, ${cert.color} 27%, transparent)`,
                      }}
                    >
                      <ExternalLink size={11} />
                      Verify Certificate
                    </a>
                  </div>
                )}
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {showImage && cert.image && (
          <ImageModal src={cert.image} onClose={() => setShowImage(false)} />
        )}
      </AnimatePresence>
    </Portal>
  )
}

// ─── Certificate Card (Project-style with image preview) ────────────────────
function CertCard({ cert, index, inView, onClick }: {
  cert: Cert
  index: number
  inView: boolean
  onClick: () => void
}) {
  const isVerified = Boolean(cert.verifyUrl)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.15 * index + 0.2 }}
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="glass rounded-2xl overflow-hidden border border-white/5 hover:border-white/15 transition-all duration-300 relative group cursor-pointer flex flex-col"
      style={{ background: 'var(--surface-2, #131325)' }}
    >
      {/* ── Image Preview (like projects) ── */}
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: '16/10' }}>
        {cert.image ? (
          <Image
            src={cert.image}
            alt={cert.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          // Fallback if no image
          <div
            className="w-full h-full flex items-center justify-center"
            style={{ background: `color-mix(in srgb, ${cert.color} 6%, transparent)` }}
          >
            <Award size={40} style={{ color: cert.color, opacity: 0.4 }} />
          </div>
        )}

        {/* Gradient overlay at bottom of image */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, transparent 40%, rgba(13,13,37,0.85) 100%)',
          }}
        />

        {/* Status badge — top-left: "Verified" if there's a verify link, else "Certificate" */}
        <div
          className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-semibold"
          style={{
            background: 'rgba(0,0,0,0.55)',
            border: '1px solid rgba(255,255,255,0.12)',
            backdropFilter: 'blur(8px)',
            color: isVerified ? '#4ade80' : 'var(--text-muted)',
          }}
        >
          <span
            className={`w-1.5 h-1.5 rounded-full inline-block ${isVerified ? 'bg-green-400 animate-pulse' : 'bg-white/30'}`}
          />
          {isVerified ? 'Verified' : 'Certificate'}
        </div>

        {/* Color accent glow on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ background: `radial-gradient(circle at 50% 100%, color-mix(in srgb, ${cert.color} 12%, transparent), transparent 70%)` }}
        />
      </div>

      {/* ── Card Body ── */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        {/* Title */}
        <h3 className="text-sm font-semibold leading-snug" style={{ color: 'var(--text-primary)' }}>
          {cert.title}
        </h3>

        {/* Issuer */}
        <p className="text-xs font-mono" style={{ color: cert.color }}>{cert.issuer}</p>

        {/* Skills / tags */}
        <div className="flex flex-wrap gap-1.5">
          {cert.skills.slice(0, 3).map((s) => (
            <span
              key={s}
              className="px-2.5 py-0.5 rounded-full text-xs font-mono"
              style={{
                background: `color-mix(in srgb, ${cert.color} 8%, transparent)`,
                color: cert.color,
                border: `1px solid color-mix(in srgb, ${cert.color} 18%, transparent)`,
              }}
            >
              {s}
            </span>
          ))}
          {cert.skills.length > 3 && (
            <span
              className="px-2.5 py-0.5 rounded-full text-xs font-mono"
              style={{ background: 'rgba(255,255,255,0.05)', color: 'var(--text-muted)' }}
            >
              +{cert.skills.length - 3}
            </span>
          )}
        </div>

        {/* Divider */}
        <div className="h-px w-full" style={{ background: 'rgba(255,255,255,0.05)' }} />

        {/* Date + Cert ID */}
        <div className="flex items-center justify-between text-xs" style={{ color: 'var(--text-muted)' }}>
          <div className="flex items-center gap-1.5">
            <Calendar size={11} />
            <span>{cert.date}</span>
          </div>
          {cert.certId && (
            <div className="flex items-center gap-1.5 font-mono">
              <Hash size={11} />
              <span>{cert.certId}</span>
            </div>
          )}
        </div>

        {/* View Certificate CTA */}
        <div
          className="flex items-center gap-1.5 text-xs font-mono mt-auto opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0"
          style={{ color: cert.color }}
        >
          <BadgeCheck size={13} />
          <span>View Certificate</span>
          <span className="ml-auto">→</span>
        </div>
      </div>
    </motion.div>
  )
}

// ─── Main Section ───────────────────────────────────────────────────────────
export default function Certifications() {
  const { ref, inView } = useInView()
  const [selected, setSelected] = useState<Cert | null>(null)

  return (
    <section id="certifications" className="py-24 z-10 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="Certifications"
          title="Credentials"
          subtitle="Click any card to view the full certificate."
          inView={inView}
        />

        <div className="grid md:grid-cols-3 gap-6">
          {certs.map((cert, i) => (
            <CertCard
              key={cert.title}
              cert={cert}
              index={i}
              inView={inView}
              onClick={() => setSelected(cert)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <CertificateModal cert={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  )
}