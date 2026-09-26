'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { siteConfig } from '@/config/site'

const stepColors = ['#3B82F6', '#8B5CF6', '#06B6D4', '#10B981', '#F59E0B']

export default function ProcessSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="process"
      className="section-padding relative overflow-hidden"
      aria-labelledby="process-heading"
      ref={ref}
    >
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(59,130,246,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="container-xl relative">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-4"
          >
            <span className="section-label">Process</span>
          </motion.div>
          <motion.h2
            id="process-heading"
            initial={{ opacity: 0, y: 25 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-white leading-[1.1] tracking-tight mb-5"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)' }}
          >
            FROM IDEA TO{' '}
            <span className="gradient-text">INTELLIGENT PRODUCT.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-text-secondary text-base leading-relaxed"
          >
            A structured, transparent process designed to deliver results at every stage.
          </motion.p>
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:flex items-start gap-0 relative mb-12">
          {/* Progress line */}
          <div className="absolute top-6 left-0 right-0 h-px bg-border-light z-0" aria-hidden="true" />
          <motion.div
            className="absolute top-6 left-0 h-px z-10"
            initial={{ width: 0 }}
            animate={inView ? { width: '100%' } : {}}
            transition={{ duration: 2, delay: 0.5, ease: 'easeOut' }}
            style={{ background: 'linear-gradient(90deg, #3B82F6, #8B5CF6, #06B6D4, #10B981, #F59E0B)' }}
            aria-hidden="true"
          />

          {siteConfig.process.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
              className="flex-1 flex flex-col items-center text-center px-4 relative z-10"
            >
              {/* Step circle */}
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center font-display font-bold text-sm text-white mb-5 border-2 relative"
                style={{
                  background: `${stepColors[i]}20`,
                  borderColor: stepColors[i],
                  boxShadow: `0 0 20px ${stepColors[i]}30`,
                }}
              >
                {step.step}
              </div>

              <h3
                className="font-display font-semibold text-base text-white mb-2 uppercase tracking-wide"
                style={{ color: stepColors[i] }}
              >
                {step.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Mobile: vertical */}
        <div className="lg:hidden space-y-0">
          {siteConfig.process.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="flex gap-5"
            >
              <div className="flex flex-col items-center">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm text-white flex-shrink-0"
                  style={{
                    background: `${stepColors[i]}20`,
                    border: `2px solid ${stepColors[i]}`,
                  }}
                >
                  {i + 1}
                </div>
                {i < siteConfig.process.length - 1 && (
                  <div
                    className="w-px flex-1 mt-2 mb-0"
                    style={{ background: `linear-gradient(to bottom, ${stepColors[i]}, ${stepColors[i + 1]}40)` }}
                  />
                )}
              </div>

              <div className={`pb-8 ${i === siteConfig.process.length - 1 ? 'pb-0' : ''}`}>
                <div
                  className="font-display font-semibold text-sm uppercase tracking-wider mb-1"
                  style={{ color: stepColors[i] }}
                >
                  {step.step} — {step.title}
                </div>
                <p className="text-text-secondary text-sm leading-relaxed">{step.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop step detail cards */}
        <div className="hidden lg:grid grid-cols-5 gap-4 mt-4">
          {siteConfig.process.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
              className="glass rounded-xl p-4 text-center"
            >
              <p className="text-text-muted text-xs leading-relaxed">{step.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
