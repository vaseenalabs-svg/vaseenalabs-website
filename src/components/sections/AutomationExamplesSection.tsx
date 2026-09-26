'use client'
import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { siteConfig } from '@/config/site'
import { ArrowRight } from 'lucide-react'

const stepTypeColors: Record<string, { bg: string; text: string; border: string }> = {
  trigger: { bg: 'bg-blue-500/10', text: 'text-blue-400', border: 'border-blue-500/20' },
  ai: { bg: 'bg-purple-500/10', text: 'text-purple-400', border: 'border-purple-500/20' },
  action: { bg: 'bg-cyan-500/10', text: 'text-cyan-400', border: 'border-cyan-500/20' },
  result: { bg: 'bg-emerald-500/10', text: 'text-emerald-400', border: 'border-emerald-500/20' },
}

export default function AutomationExamplesSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [activeTab, setActiveTab] = useState(0)

  const examples = siteConfig.automationExamples

  return (
    <section
      id="automation"
      className="section-padding relative overflow-hidden"
      aria-labelledby="automation-heading"
      ref={ref}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 50% 50% at 80% 50%, rgba(59,130,246,0.04) 0%, transparent 60%)',
        }}
      />

      <div className="container-xl relative">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-4"
          >
            <span className="section-label">Automation Examples</span>
          </motion.div>
          <motion.h2
            id="automation-heading"
            initial={{ opacity: 0, y: 25 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-white leading-[1.1] tracking-tight mb-4"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)' }}
          >
            WHAT CAN WE{' '}
            <span className="gradient-text">AUTOMATE?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-text-secondary text-base"
          >
            Real business workflows, automated with AI.
          </motion.p>
        </div>

        {/* Tab selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
          role="tablist"
          aria-label="Automation examples"
        >
          {examples.map((ex, i) => (
            <button
              key={ex.title}
              onClick={() => setActiveTab(i)}
              role="tab"
              aria-selected={activeTab === i}
              aria-controls={`tab-panel-${i}`}
              id={`tab-${i}`}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                activeTab === i
                  ? 'bg-primary text-white shadow-[0_0_20px_rgba(59,130,246,0.3)]'
                  : 'glass text-text-secondary hover:text-white border border-border hover:border-primary/30'
              }`}
            >
              {ex.title}
            </button>
          ))}
        </motion.div>

        {/* Workflow display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            id={`tab-panel-${activeTab}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeTab}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="max-w-4xl mx-auto"
          >
            <div className="glass rounded-2xl p-8 md:p-12">
              <h3 className="font-display font-semibold text-white text-lg text-center mb-8">
                {examples[activeTab].title} Workflow
              </h3>

              {/* Steps */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-3 flex-wrap">
                {examples[activeTab].steps.map((step, si) => {
                  const colors = stepTypeColors[step.type]
                  return (
                    <div key={si} className="flex items-center gap-3">
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: si * 0.1, duration: 0.4 }}
                        className={`flex flex-col items-center justify-center rounded-xl px-5 py-4 border ${colors.bg} ${colors.border} min-w-[130px] text-center`}
                      >
                        <div className={`text-xs font-bold uppercase tracking-wider mb-1 ${colors.text}`}>
                          {step.type}
                        </div>
                        <div className="text-white text-sm font-medium">{step.label}</div>
                      </motion.div>

                      {si < examples[activeTab].steps.length - 1 && (
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: si * 0.1 + 0.15 }}
                          className="hidden md:flex text-text-muted"
                        >
                          <ArrowRight size={16} />
                        </motion.div>
                      )}
                    </div>
                  )
                })}
              </div>

              {/* Mobile arrows (vertical) */}
              <div className="md:hidden flex justify-center mt-4">
                <div className="text-text-muted text-xs tracking-wider">↑ Tap to see workflow ↑</div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
