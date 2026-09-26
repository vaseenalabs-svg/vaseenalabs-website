'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const realProjects = [
  {
    id: 'vasundhara',
    title: 'Vasundhara Palace',
    industry: 'Restaurant',
    services: ['Web Development', 'UI Design'],
    technologies: ['Next.js', 'Tailwind CSS', 'Vercel'],
    description:
      'A premium restaurant website for Vasundhara Palace Bangalore — designed to showcase their dining experience and convert visitors into guests with elegant visuals.',
    url: 'https://www.vasundharapalacebangalore.com/',
    gradient: 'from-orange-600/25 to-amber-600/25',
    accentColor: '#F59E0B',
    emoji: '🍽️',
  },
  {
    id: 'seaplate',
    title: 'SeaPlate Bangalore',
    industry: 'Restaurant',
    services: ['Web Development', 'Branding'],
    technologies: ['React', 'CSS', 'Vercel'],
    description:
      'A vibrant seafood restaurant website for SeaPlate Bangalore — featuring an immersive menu showcase and reservation flow that drives consistent dine-in traffic.',
    url: 'https://seaplatebangalore.in/',
    gradient: 'from-cyan-600/25 to-teal-600/25',
    accentColor: '#06B6D4',
    emoji: '🦞',
  },
  {
    id: 'akik',
    title: 'Akik Creations by HY',
    industry: 'Clothing & Fashion',
    services: ['E-Commerce Development', 'Web Design'],
    technologies: ['Next.js', 'Tailwind CSS', 'Stripe'],
    description:
      'A stylish e-commerce store for a clothing brand specialising in kurti sets — with a clean product catalog, smooth checkout, and WhatsApp ordering integration.',
    url: 'https://www.akikcreationsbyhy.com/',
    gradient: 'from-pink-600/25 to-rose-600/25',
    accentColor: '#EC4899',
    emoji: '👗',
  },
  {
    id: 'shenme',
    title: 'Shenme',
    industry: 'Salon & Beauty',
    services: ['Web Development', 'UI/UX Design'],
    technologies: ['React', 'Node.js', 'Vercel'],
    description:
      'A modern and sleek website for a salon — built to attract new clients, showcase services, and make appointment booking a seamless experience.',
    url: 'https://shenme.vercel.app',
    gradient: 'from-violet-600/25 to-purple-600/25',
    accentColor: '#8B5CF6',
    emoji: '✂️',
  },
]

export default function WorkSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="work"
      className="section-padding relative overflow-hidden bg-surface"
      aria-labelledby="work-heading"
      ref={ref}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.3), transparent)' }}
        aria-hidden="true"
      />

      <div className="container-xl relative">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-4"
          >
            <span className="section-label">Work</span>
          </motion.div>
          <motion.h2
            id="work-heading"
            initial={{ opacity: 0, y: 25 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-white leading-[1.1] tracking-tight mb-4"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)' }}
          >
            SELECTED{' '}
            <span className="gradient-text">DIGITAL WORK</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-text-secondary text-base"
          >
            Real websites and digital products we have built for our clients.
          </motion.p>
        </div>

        {/* 2-col project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {realProjects.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
              className="group glass rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)] hover:-translate-y-1"
              aria-label={`Project: ${project.title}`}
            >
              {/* Visual header */}
              <div className={`h-44 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
                    backgroundSize: '30px 30px',
                  }}
                  aria-hidden="true"
                />

                <div className="absolute inset-0 flex items-center justify-center gap-6">
                  <span className="text-5xl select-none" aria-hidden="true">{project.emoji}</span>
                  <div className="glass rounded-lg p-3 border border-white/10 w-28">
                    <div className="h-1.5 bg-white/20 rounded mb-2" />
                    <div className="h-1.5 bg-white/10 rounded w-3/4 mb-2" />
                    <div
                      className="h-1.5 rounded w-1/2"
                      style={{ background: `${project.accentColor}60` }}
                    />
                  </div>
                </div>

                {/* Industry badge */}
                <div className="absolute top-3 left-3">
                  <span className="text-xs bg-black/40 text-white/70 px-2 py-1 rounded-md border border-white/10">
                    {project.industry}
                  </span>
                </div>

                {/* Live badge */}
                <div className="absolute top-3 right-3">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs bg-black/50 text-white/80 px-2 py-1 rounded-md border border-white/10 hover:bg-white/10 transition-all duration-200"
                    onClick={(e) => e.stopPropagation()}
                    aria-label={`Visit ${project.title} live`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
                    Live
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display font-semibold text-white text-lg mb-2 group-hover:text-primary-light transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Service tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.services.map((s) => (
                    <span
                      key={s}
                      className="text-xs px-2.5 py-1 rounded-full border font-medium"
                      style={{
                        color: project.accentColor,
                        borderColor: `${project.accentColor}30`,
                        background: `${project.accentColor}10`,
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.technologies.map((t) => (
                    <span key={t} className="tech-badge text-xs py-0.5 px-2.5">
                      {t}
                    </span>
                  ))}
                </div>

                {/* View Project */}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200 hover:gap-3"
                  style={{ color: project.accentColor }}
                  id={`project-link-${project.id}`}
                  aria-label={`View ${project.title} live website`}
                >
                  View Project
                  <ExternalLink size={14} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
