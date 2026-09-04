'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { useInView } from '@/lib/useInView'
import SectionHeader from './SectionHeader'

const projects = [
  {
    title: 'Jigyasa Superspeciality Hospital',
    description:
      'Responsive hospital website with dynamic content and PostgreSQL backend, used by real patients and staff.',
    url: 'https://jigyasahospital.com',
    image: '/projects/jigyasa.png',
    tags: ['Next.js', 'PostgreSQL', 'Neon DB'],
    badge: 'Live',
  },
  {
    title: 'Kara Homes Brass Products',
    description:
      'Fully responsive frontend for a premium brass products e-commerce brand with strong design aesthetics.',
    url: 'https://karahomes.in',
    image: '/projects/kara.png',
    tags: ['Next.js', 'Tailwind CSS'],
    badge: 'Live',
  },
  {
    title: 'AVS Enterprises',
    description:
      'Complete responsive business website built and deployed end-to-end with modern, professional design.',
    url: 'https://avs-enterprises.com',
    image: '/projects/avs.png',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    badge: 'Live',
  },
  {
    title: 'Aifinity',
    description:
      'AI-powered skill-gap assessment and personalized learning roadmap platform, built for HackSynergy, a 24-hour national-level hackathon.',
    url: 'https://aifinity-frontend.onrender.com/',
    image: '/projects/aifinity.png',
    tags: ['React', 'Tailwind CSS'],
    badge: 'Hackathon',
  },
  {
    title: 'VastraAura',
    description:
      'Full-stack saree e-commerce platform with product browsing, cart, checkout, and an admin dashboard for product management.',
    url: 'https://aurasaree.netlify.app/',
    image: '/projects/vastra.png',
    tags: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
    badge: 'Personal',
  },
  {
    title: 'RozGaar',
    description:
      'A group freelancing platform designed to connect users with opportunities, featuring Jaano, Sikho, and Pao sections with a clean and responsive user interface.',
    url: 'https://rozgaar-org-in-imiz.onrender.com/',
    image: '/projects/rozgaar.png',
    tags: ['React', 'react-router-dom'],
    badge: 'Freelance',
  },
  {
    title: 'Personal Portfolio Website',
    description:
      'Animated portfolio with scroll effects, glassmorphism cards, and dark theme built with Framer Motion.',
    url: 'https://ishikaprofile.netlify.app',
    image: '/projects/portfolio.png',
    tags: ['Next.js 14', 'Framer Motion'],
    badge: 'Personal',
  },
  {
    title: 'Premium Rice Export Company',
    description:
      'Corporate site for an Indian rice exporter targeting UAE markets with English & Arabic language support.',
    url: 'https://rice-export-two.vercel.app',
    image: '/projects/rice.png',
    tags: ['React', 'Vite', 'i18n'],
    badge: 'Personal',
  },
  {
    title: 'Podcast Platform Website',
    description:
      'Clean, responsive podcast platform with episode listing pages and smooth navigation, deployed on Vercel.',
    url: 'https://podcast-9pq8zcez7-ishika-gaurs-projects.vercel.app',
    image: '/projects/podcast.png',
    tags: ['Next.js', 'Vercel'],
    badge: 'Personal',
  },
]

type Project = typeof projects[0]

function badgeColors(badge: string) {
  switch (badge) {
    case 'Live':
      return { bg: 'bg-black/60', dot: 'bg-green-400', text: 'text-green-400' }
    case 'Hackathon':
      return { bg: 'bg-amber-600/70', dot: 'bg-amber-200', text: 'text-amber-100' }
    case 'Freelance':
      return { bg: 'bg-teal-600/70', dot: 'bg-teal-200', text: 'text-teal-100' }
    default:
      return { bg: 'bg-violet-600/70', dot: 'bg-violet-200', text: 'text-violet-100' }
  }
}

function ProjectCard({ project, index, inView }: { project: Project; index: number; inView: boolean }) {
  const [expanded, setExpanded] = useState(false)
  const colors = badgeColors(project.badge)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 * index + 0.2 }}
      whileHover={{ y: -6 }}
      className={`group glass rounded-2xl overflow-hidden border border-violet-500/10 hover:border-violet-500/30 transition-all duration-500 ${
        project.url ? 'cursor-pointer' : 'cursor-default'
      }`}
      onClick={() => project.url && window.open(project.url, '_blank')}
    >
      {/* Screenshot Preview */}
      <div className="relative overflow-hidden h-48 bg-[var(--bg-secondary)]">
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        {/* Hover overlay */}
        {project.url && (
          <div className="absolute inset-0 bg-violet-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="flex items-center gap-2 text-white font-medium text-sm">
              <ExternalLink size={16} />
              <span>Visit Site</span>
            </div>
          </div>
        )}
        {/* Badge - Live (green), Hackathon (gold), Freelance (teal), or Personal (violet) */}
        <div className={`absolute top-3 right-3 flex items-center gap-1.5 backdrop-blur-sm rounded-full px-2.5 py-1 ${colors.bg}`}>
          <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${colors.dot}`} />
          <span className={`text-[10px] font-mono ${colors.text}`}>{project.badge}</span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5">
        <h3 className="text-base font-display text-[var(--text-primary)] mb-2 leading-snug group-hover:text-[var(--violet)] transition-colors duration-300">
          {project.title}
        </h3>
        <p className={`text-[var(--text-secondary)] text-sm leading-relaxed mb-1 ${expanded ? '' : 'line-clamp-2'}`}>
          {project.description}
        </p>
        <button
          onClick={(e) => {
            e.stopPropagation()
            setExpanded((v) => !v)
          }}
          className="text-xs font-mono mb-3 hover:underline"
          style={{ color: 'var(--violet)' }}
        >
          {expanded ? 'Show less' : 'Read more'}
        </button>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span key={tag} className="tag-pill text-[10px]">{tag}</span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const { ref, inView } = useInView()

  return (
    <section id="projects" className="py-24 z-10 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="Projects"
          title="Featured Work"
          subtitle="Production-ready websites built and deployed for real users."
          inView={inView}
        />

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}