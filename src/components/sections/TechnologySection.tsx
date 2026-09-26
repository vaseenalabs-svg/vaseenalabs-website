'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { siteConfig } from '@/config/site'

const categoryColors: Record<string, string> = {
  frontend: '#3B82F6',
  backend: '#10B981',
  ai: '#8B5CF6',
  database: '#F59E0B',
  infrastructure: '#06B6D4',
}

const categoryLabels: Record<string, string> = {
  frontend: 'Frontend',
  backend: 'Backend',
  ai: 'AI & LLMs',
  database: 'Database',
  infrastructure: 'Infrastructure',
}

export default function TechnologySection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const techEntries = Object.entries(siteConfig.technologies) as [string, readonly string[]][]

  return (
    <section
      id="about"
      className="section-padding relative overflow-hidden"
      aria-labelledby="tech-heading"
      ref={ref}
    >
      <div
        className="absolute inset-0 pointer-events-none dot-grid opacity-30"
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
            <span className="section-label">Technology</span>
          </motion.div>
          <motion.h2
            id="tech-heading"
            initial={{ opacity: 0, y: 25 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-white leading-[1.1] tracking-tight mb-4"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)' }}
          >
            POWERED BY{' '}
            <span className="gradient-text">MODERN TECHNOLOGY</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-text-secondary text-base leading-relaxed"
          >
            We select the right tools for each project — not the most fashionable ones.
          </motion.p>
        </div>

        {/* Tech categories */}
        <div className="space-y-10">
          {techEntries.map(([category, techs], catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + catIndex * 0.08 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ background: categoryColors[category] }}
                />
                <span
                  className="text-xs font-bold tracking-widest uppercase"
                  style={{ color: categoryColors[category] }}
                >
                  {categoryLabels[category]}
                </span>
                <div className="flex-1 h-px bg-border-light" />
              </div>

              <div className="flex flex-wrap gap-2">
                {techs.map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.1 + catIndex * 0.08 + i * 0.04 }}
                    className="tech-badge"
                    style={{
                      ['--hover-color' as string]: categoryColors[category],
                    }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: categoryColors[category] }}
                    />
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center text-text-muted text-xs mt-10"
        >
          Technology names are used for reference only. Vaseena Labs is not an official partner of any listed technology.
        </motion.p>
      </div>
    </section>
  )
}
