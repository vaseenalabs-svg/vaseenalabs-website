'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Globe, Cpu, Code2, Brain, ShoppingBag, Network, ArrowRight } from 'lucide-react'
import { siteConfig } from '@/config/site'

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Globe, Cpu, Code2, Brain, ShoppingBag, Network,
}

const colorMap: Record<string, { badge: string; border: string; glow: string; dot: string; icon: string }> = {
  blue: {
    badge: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    border: 'hover:border-blue-500/40',
    glow: 'group-hover:shadow-[0_20px_60px_rgba(59,130,246,0.15)]',
    dot: 'bg-blue-500',
    icon: 'text-blue-400',
  },
  purple: {
    badge: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    border: 'hover:border-purple-500/40',
    glow: 'group-hover:shadow-[0_20px_60px_rgba(139,92,246,0.15)]',
    dot: 'bg-purple-500',
    icon: 'text-purple-400',
  },
  cyan: {
    badge: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
    border: 'hover:border-cyan-500/40',
    glow: 'group-hover:shadow-[0_20px_60px_rgba(6,182,212,0.15)]',
    dot: 'bg-cyan-500',
    icon: 'text-cyan-400',
  },
  violet: {
    badge: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
    border: 'hover:border-violet-500/40',
    glow: 'group-hover:shadow-[0_20px_60px_rgba(124,58,237,0.15)]',
    dot: 'bg-violet-500',
    icon: 'text-violet-400',
  },
}

function ServiceCard({ service, index }: { service: typeof siteConfig.services[number]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const Icon = iconMap[service.icon] || Globe
  const colors = colorMap[service.color] || colorMap.blue

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`group service-card relative bg-surface border border-border rounded-2xl p-7 cursor-default ${colors.border} ${colors.glow} transition-all duration-500`}
      aria-label={`${service.title} service`}
    >
      {/* Number + Icon */}
      <div className="flex items-start justify-between mb-5">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${colors.badge.split(' ').slice(0,1).join(' ')} border ${colors.badge.split(' ').slice(2).join(' ')}`}>
          <Icon size={22} className={colors.icon} />
        </div>
        <span className="text-xs font-mono font-600 text-text-muted">{service.id}</span>
      </div>

      {/* Title */}
      <h3 className="font-display font-semibold text-xl text-white mb-3 group-hover:text-primary-light transition-colors duration-300">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-text-secondary text-sm leading-relaxed mb-5">
        {service.description}
      </p>

      {/* Feature list */}
      <ul className="space-y-1.5">
        {service.features.map((feat) => (
          <li key={feat} className="flex items-center gap-2 text-sm text-text-muted">
            <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${colors.dot}`} />
            {feat}
          </li>
        ))}
      </ul>

      {/* Hover accent line */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-[2px] rounded-b-2xl transition-opacity duration-300 opacity-0 group-hover:opacity-100`}
        style={{
          background: service.color === 'blue'
            ? 'linear-gradient(90deg, #3B82F6, #06B6D4)'
            : service.color === 'purple'
            ? 'linear-gradient(90deg, #8B5CF6, #3B82F6)'
            : service.color === 'cyan'
            ? 'linear-gradient(90deg, #06B6D4, #3B82F6)'
            : 'linear-gradient(90deg, #7C3AED, #8B5CF6)',
        }}
        aria-hidden="true"
      />
    </motion.article>
  )
}

export default function ServicesSection() {
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true, margin: '-80px' })

  return (
    <section
      id="services"
      className="section-padding relative overflow-hidden"
      aria-labelledby="services-heading"
    >
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(59,130,246,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="container-xl relative">
        {/* Header */}
        <div ref={titleRef} className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-4"
          >
            <span className="section-label">Services</span>
          </motion.div>

          <motion.h2
            id="services-heading"
            initial={{ opacity: 0, y: 25 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-white leading-[1.1] tracking-tight mb-5"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
          >
            WE BUILD.<br />
            <span className="gradient-text">WE AUTOMATE.</span><br />
            WE SCALE.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-text-secondary text-lg leading-relaxed"
          >
            From high-performance websites to intelligent AI workflows, we engineer
            digital systems designed around your business.
          </motion.p>
        </div>

        {/* Service grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {siteConfig.services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="btn-outline group"
            id="services-cta"
          >
            Discuss Your Project
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
