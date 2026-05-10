'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Globe, Activity, Home, Building } from 'lucide-react'
import { useInView } from '@/lib/useInView'
import SectionHeader from './SectionHeader'

const projects = [
  {
    title: 'Jigyasa Superspeciality Hospital',
    description:
      'A fully functional, responsive hospital website serving real patients and staff. Built with dynamic content sections integrated with a PostgreSQL backend for live data management.',
    url: 'https://jigyasahospital.com',
    icon: Activity,
    color: 'var(--rose)',
    gradient: 'from-rose-500/20 to-violet-500/10',
    tags: ['React', 'Next.js', 'PostgreSQL', 'Neon DB'],
    status: 'Live',
  },
  {
    title: 'Kara Homes Brass Products',
    description:
      'Frontend for a premium brass products e-commerce website. Delivered a fully responsive, user-friendly interface with a strong design aesthetic and proficient technical execution.',
    url: 'https://karahomes.in',
    icon: Home,
    color: 'var(--violet)',
    gradient: 'from-violet-500/20 to-teal-500/10',
    tags: ['React', 'Next.js', 'CSS', 'Responsive'],
    status: 'Live',
  },
  {
    title: 'AVS Enterprises',
    description:
      'A complete, responsive business website for AVS Enterprises. Developed and deployed end-to-end during internship with a modern, professional look and fast performance.',
    url: 'https://avs-enterprises.com',
    icon: Building,
    color: 'var(--teal)',
    gradient: 'from-teal-500/20 to-rose-500/10',
    tags: ['Next.js', 'React', 'Git', 'Deployment'],
    status: 'Live',
  },
]

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

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => {
            const Icon = project.icon
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.1 * i + 0.2 }}
                whileHover={{ y: -8 }}
                className="group glass rounded-2xl overflow-hidden border border-violet-500/10 hover:border-violet-500/30 transition-all duration-500"
              >
                {/* Card top gradient bar */}
                <div
                  className="h-1 w-full"
                  style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }}
                />

                <div className="p-7">
                  {/* Icon + status */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ background: `${project.color}18` }}
                    >
                      <Icon size={22} style={{ color: project.color }} />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      <span className="text-xs font-mono text-green-400">{project.status}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-display text-[var(--text-primary)] mb-3 leading-tight group-hover:text-[var(--violet)] transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag-pill text-[10px]">{tag}</span>
                    ))}
                  </div>

                  {/* CTA */}
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium transition-all duration-300 group/link"
                    style={{ color: project.color }}
                  >
                    <Globe size={14} />
                    <span>{project.url.replace('https://', '')}</span>
                    <ExternalLink size={12} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
                  </a>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
