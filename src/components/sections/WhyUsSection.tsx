'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { siteConfig } from '@/config/site'

export default function WhyUsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="why"
      className="section-padding relative overflow-hidden bg-surface"
      aria-labelledby="why-heading"
      ref={ref}
    >
      {/* Gradient border top */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.4), rgba(139,92,246,0.4), transparent)' }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.2), rgba(139,92,246,0.2), transparent)' }}
        aria-hidden="true"
      />

      <div className="container-xl relative">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: headline */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="mb-4"
            >
              <span className="section-label">Why Us</span>
            </motion.div>
            <motion.h2
              id="why-heading"
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display font-bold text-white leading-[1.05] tracking-tight mb-6"
              style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)' }}
            >
              WHY<br />
              <span className="gradient-text">VASEENA</span><br />
              LABS?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-text-secondary text-lg leading-relaxed"
            >
              We combine serious engineering with business thinking and an
              AI-first mindset — so every product we build creates real,
              measurable value.
            </motion.p>
          </div>

          {/* Right: value points */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {siteConfig.whyUs.map((point, i) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.07 }}
                className="group glass rounded-xl p-5 border border-border hover:border-primary/30 transition-all duration-300 hover:bg-white/[0.03]"
              >
                <div className="w-2 h-2 rounded-full bg-primary mb-3 group-hover:scale-150 transition-transform duration-300" />
                <h3 className="font-display font-semibold text-white text-sm mb-1.5 group-hover:text-primary-light transition-colors duration-300">
                  {point.title}
                </h3>
                <p className="text-text-muted text-xs leading-relaxed">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
