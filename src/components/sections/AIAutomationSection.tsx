'use client'
import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'

const workflowSteps = [
  { id: 'trigger', label: 'Trigger', sublabel: 'Customer Message', color: '#3B82F6', emoji: '📩' },
  { id: 'ai', label: 'AI Agent', sublabel: 'Understands Intent', color: '#8B5CF6', emoji: '🤖' },
  { id: 'analyze', label: 'Analyze', sublabel: 'Checks Business Data', color: '#06B6D4', emoji: '🔍' },
  { id: 'decide', label: 'Decide', sublabel: 'Makes Decision', color: '#10B981', emoji: '⚡' },
  { id: 'automate', label: 'Automate', sublabel: 'Performs Action', color: '#F59E0B', emoji: '⚙️' },
  { id: 'result', label: 'Result', sublabel: 'Customer Gets Response', color: '#3B82F6', emoji: '✅' },
]

function AnimatedDataParticle({ startX, startY, endX, endY, delay }: {
  startX: number; startY: number; endX: number; endY: number; delay: number
}) {
  return (
    <motion.circle
      r={3}
      fill="#3B82F6"
      initial={{ cx: startX, cy: startY, opacity: 0 }}
      animate={{
        cx: [startX, endX],
        cy: [startY, endY],
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        duration: 1.5,
        delay,
        repeat: Infinity,
        repeatDelay: 2,
        ease: 'easeInOut',
      }}
    />
  )
}

export default function AIAutomationSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    if (!inView) return
    const t = setInterval(() => setActiveStep(i => (i + 1) % workflowSteps.length), 1200)
    return () => clearInterval(t)
  }, [inView])

  return (
    <section
      id="solutions"
      className="section-padding relative overflow-hidden"
      aria-labelledby="ai-section-heading"
      ref={ref}
    >
      {/* Deep bg glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(139,92,246,0.06) 0%, transparent 70%)',
        }}
      />

      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" aria-hidden="true" />

      <div className="container-xl relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="mb-4"
            >
              <span className="section-label">AI Automation</span>
            </motion.div>

            <motion.h2
              id="ai-section-heading"
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display font-bold leading-[1.08] tracking-tight mb-6 text-white"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}
            >
              TURN REPETITIVE WORK INTO{' '}
              <span className="gradient-text">INTELLIGENT SYSTEMS.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-text-secondary text-lg leading-relaxed mb-8"
            >
              We design AI automation workflows that replace manual, repetitive business
              operations — saving time, reducing errors, and scaling your capacity
              without scaling headcount.
            </motion.p>

            {/* Feature list */}
            {[
              'AI Agents that understand natural language',
              'Multi-step automated business workflows',
              'Integration with your existing tools and APIs',
              'Real-time decision making powered by LLMs',
            ].map((feat, i) => (
              <motion.div
                key={feat}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                className="flex items-start gap-3 mb-3"
              >
                <div className="w-5 h-5 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                </div>
                <span className="text-text-secondary text-sm">{feat}</span>
              </motion.div>
            ))}
          </div>

          {/* Right: workflow visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="glass rounded-2xl p-8 relative overflow-hidden">
              {/* Ambient glow inside card */}
              <div
                className="absolute inset-0 pointer-events-none"
                aria-hidden="true"
                style={{
                  background:
                    'radial-gradient(ellipse at 50% 0%, rgba(139,92,246,0.1) 0%, transparent 60%)',
                }}
              />

              <div className="relative z-10">
                <div className="text-center mb-6">
                  <span className="text-xs font-mono tracking-widest text-text-muted uppercase">
                    Live Automation Flow
                  </span>
                </div>

                {/* Workflow steps */}
                <div className="space-y-0">
                  {workflowSteps.map((step, i) => (
                    <div key={step.id}>
                      <motion.div
                        className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-500 ${
                          activeStep === i
                            ? 'bg-white/[0.06] border border-white/10'
                            : 'border border-transparent'
                        }`}
                        animate={activeStep === i ? { x: [0, 4, 0] } : {}}
                        transition={{ duration: 0.3 }}
                      >
                        {/* Icon bubble */}
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0 transition-all duration-300 ${
                            activeStep === i
                              ? 'scale-110 shadow-lg'
                              : 'opacity-50'
                          }`}
                          style={{
                            background: activeStep === i
                              ? `linear-gradient(135deg, ${step.color}22, ${step.color}11)`
                              : 'rgba(255,255,255,0.03)',
                            border: activeStep === i
                              ? `1px solid ${step.color}40`
                              : '1px solid rgba(255,255,255,0.06)',
                          }}
                        >
                          {step.emoji}
                        </div>
                        <div className="flex-1">
                          <div
                            className={`font-semibold text-sm transition-colors duration-300 ${
                              activeStep === i ? 'text-white' : 'text-text-muted'
                            }`}
                          >
                            {step.label}
                          </div>
                          <div className="text-text-muted text-xs">{step.sublabel}</div>
                        </div>
                        {/* Active indicator */}
                        {activeStep === i && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-2 h-2 rounded-full"
                            style={{ background: step.color }}
                          />
                        )}
                      </motion.div>

                      {/* Connector line */}
                      {i < workflowSteps.length - 1 && (
                        <div className="ml-9 flex items-center gap-2 py-0.5">
                          <div
                            className={`w-px h-5 transition-all duration-500 ${
                              activeStep > i
                                ? 'bg-primary'
                                : 'bg-border-light'
                            }`}
                          />
                          {activeStep === i && (
                            <motion.div
                              animate={{ opacity: [1, 0, 1] }}
                              transition={{ duration: 0.6, repeat: Infinity }}
                              className="w-1 h-1 rounded-full bg-primary"
                            />
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative glow */}
            <div
              className="absolute -inset-4 -z-10 pointer-events-none"
              aria-hidden="true"
              style={{
                background: 'radial-gradient(ellipse at 50% 50%, rgba(139,92,246,0.12) 0%, transparent 70%)',
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
