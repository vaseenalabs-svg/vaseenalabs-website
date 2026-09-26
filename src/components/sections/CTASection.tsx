'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function CTASection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      className="section-padding relative overflow-hidden"
      aria-label="Call to action"
      ref={ref}
    >
      {/* BG */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: `
            radial-gradient(ellipse 70% 60% at 50% 50%, rgba(59,130,246,0.1) 0%, transparent 60%),
            radial-gradient(ellipse 40% 40% at 20% 80%, rgba(139,92,246,0.07) 0%, transparent 50%),
            radial-gradient(ellipse 40% 40% at 80% 20%, rgba(6,182,212,0.05) 0%, transparent 50%)
          `,
        }}
      />

      {/* Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(rgba(59,130,246,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.08) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
        aria-hidden="true"
      />

      <div className="container-xl relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <span className="section-label">Start Today</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-bold text-white leading-[1.05] tracking-tight mb-6"
          style={{ fontSize: 'clamp(2.4rem, 5vw, 4.5rem)' }}
        >
          READY TO BUILD SOMETHING<br />
          <span className="gradient-text">INTELLIGENT?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-text-secondary text-lg max-w-xl mx-auto leading-relaxed mb-10"
        >
          Tell us what you&apos;re building, and let&apos;s turn your idea into a powerful
          digital product or intelligent automated system.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="btn-primary group text-base py-4 px-8"
            id="cta-start-project"
          >
            Start a Project
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
          </a>
          <a
            href="https://wa.me/919738176663?text=Hello%20Vaseena%20Labs%2C%20I%20would%20like%20to%20discuss%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-base py-4 px-8"
            id="cta-talk-to-us"
          >
            Talk to Us
          </a>
        </motion.div>
      </div>
    </section>
  )
}
