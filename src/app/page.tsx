'use client'

import { motion } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import Footer from '@/components/navigation/Footer'
import ThreeDCardDemo from '@/components/3d-card-demo'
import TechnologySection from '@/components/sections/TechnologySection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import { ContainerScroll } from '@/components/ui/container-scroll-animation'
import {
  FiArrowRight,
  FiCheck,
  FiCompass,
  FiFeather,
  FiLayers,
  FiMail,
  FiMessageCircle,
  FiMoon,
  FiPhone,
  FiPlay,
  FiStar,
  FiSun,
  FiZap,
} from 'react-icons/fi'

const slides = [
  {
    id: '01',
    label: 'Web Development',
    title: 'Modern websites built to convert and scale with clarity.',
    copy:
      'We design high-performance business websites, landing pages, and digital experiences that feel premium and perform under pressure.',
    bullets: ['Business websites', 'Landing pages', 'Custom platforms'],
    video: '/videos/desktop_hero_background.mp4',
    accent: 'amber',
  },
  {
    id: '02',
    label: 'AI Automation',
    title: 'Replace repetitive work with intelligent systems that move faster.',
    copy:
      'From AI-powered operations to workflow automation, we build systems that remove manual bottlenecks and let teams focus on growth.',
    bullets: ['Workflow automation', 'AI agents', 'Lead operations'],
    video: '/videos/Tech 1.mp4',
    accent: 'sky',
  },
  {
    id: '03',
    label: 'Custom Software',
    title: 'Purpose-built software for the way your business actually works.',
    copy:
      'We engineer dashboards, internal tools, management systems, and custom software that are tailored to your exact process and goals.',
    bullets: ['SaaS products', 'Dashboards', 'API integrations'],
    video: '/videos/Tech 2.mp4',
    accent: 'violet',
  },
]

const metrics = [
  { value: '8+', label: 'years of craft' },
  { value: '40+', label: 'brands elevated' },
  { value: '99%', label: 'client delight' },
]



const process = [
  { step: '01', title: 'Discover', copy: 'Understand the business, the users, and the requirements behind the opportunity.' },
  { step: '02', title: 'Strategize', copy: 'Plan the tech stack, architecture, and roadmap aligned to business goals.' },
  { step: '03', title: 'Design', copy: 'Create premium interfaces, user journeys, and consistent visual systems.' },
  { step: '04', title: 'Build', copy: 'Engineer clean code, integrate systems, test thoroughly, and optimize performance.' },
  { step: '05', title: 'Launch & Automate', copy: 'Deploy the system and introduce AI-driven workflows for maximum ROI.' },
]

const caseStudies = [
  {
    title: 'Vasundhara Palace',
    type: 'Restaurant',
    summary: 'Premium restaurant website designed to showcase the dining experience and turn visitors into guests through stronger brand presence and clearer conversion paths.',
    metric: 'Premium',
    result: 'brand-first restaurant experience',
    tags: ['Next.js', 'Tailwind', 'Web Design'],
    image:
      'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80',
    link: 'https://www.vasundharapalacebangalore.com/',
  },
  {
    title: 'SeaPlate Bangalore',
    type: 'Restaurant',
    summary: 'Vibrant seafood restaurant website with immersive menu storytelling and a smoother mobile-first reservation journey for local diners.',
    metric: 'Mobile',
    result: 'stronger direct engagement',
    tags: ['React', 'UI/UX', 'Vercel'],
    image:
      'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80',
    link: 'https://seaplatebangalore.in/',
  },
  {
    title: 'Akik Creations by HY',
    type: 'Fashion / E-Commerce',
    summary: 'Elegant e-commerce experience for kurti collections with a high-end brand feel, WhatsApp ordering flow, and smoother buying experience.',
    metric: 'Orders',
    result: 'started coming in quickly',
    tags: ['E-Commerce', 'Stripe', 'Brand'],
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
    link: 'https://www.akikcreationsbyhy.com/',
  },
  {
    title: 'Shenme',
    type: 'Beauty & Salon',
    summary: 'Modern salon website designed to showcase services, build trust, and increase appointment enquiries through a premium digital presence.',
    metric: 'Enquiries',
    result: 'clear uplift in bookings',
    tags: ['Salon', 'UI/UX', 'Conversion'],
    image:
      'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=80',
    link: 'https://shenme.vercel.app',
  },
]

const implementationFlow = [
  {
    step: '01',
    title: 'Discover',
    detail: 'We understand the business, the audience, and the exact friction points in the process.',
  },
  {
    step: '02',
    title: 'Strategize',
    detail: 'We map the roadmap, system architecture, and growth opportunities before design begins.',
  },
  {
    step: '03',
    title: 'Design',
    detail: 'We shape the visual system, product flow, and brand motion for a premium digital experience.',
  },
  {
    step: '04',
    title: 'Build',
    detail: 'We engineer, integrate, and test the product so it runs cleanly and scales with confidence.',
  },
  {
    step: '05',
    title: 'Launch & Automate',
    detail: 'We deploy the experience and connect intelligent workflows that keep the business moving.',
  },
]

const automationPipelines = [
  {
    id: 'lead-management',
    label: 'Lead Management',
    description: 'Website Lead → AI Qualification → CRM Entry → Sales Notification → Follow-up',
    steps: [
      { name: 'Website Lead', tone: 'amber' },
      { name: 'AI Qualification', tone: 'gold' },
      { name: 'CRM Entry', tone: 'lavender' },
      { name: 'Sales Notification', tone: 'steel' },
      { name: 'Follow-up', tone: 'amber' },
    ],
  },
  {
    id: 'customer-support',
    label: 'Customer Support',
    description: 'Customer Message → AI Agent → Knowledge Base → Instant Response → Escalation',
    steps: [
      { name: 'Customer Message', tone: 'amber' },
      { name: 'AI Agent', tone: 'gold' },
      { name: 'Knowledge Base', tone: 'lavender' },
      { name: 'Instant Response', tone: 'steel' },
      { name: 'Escalation', tone: 'amber' },
    ],
  },
  {
    id: 'document-processing',
    label: 'Document Processing',
    description: 'Document Upload → AI Extraction → Validation → Database Entry → Action Trigger',
    steps: [
      { name: 'Document Upload', tone: 'amber' },
      { name: 'AI Extraction', tone: 'gold' },
      { name: 'Validation', tone: 'lavender' },
      { name: 'Database Entry', tone: 'steel' },
      { name: 'Action Trigger', tone: 'amber' },
    ],
  },
  {
    id: 'appointment-booking',
    label: 'Appointment Booking',
    description: 'Customer Request → AI Assistant → Check Availability → Auto Booking → Reminder',
    steps: [
      { name: 'Customer Request', tone: 'amber' },
      { name: 'AI Assistant', tone: 'gold' },
      { name: 'Check Availability', tone: 'lavender' },
      { name: 'Auto Booking', tone: 'steel' },
      { name: 'Reminder', tone: 'amber' },
    ],
  },
  {
    id: 'business-reporting',
    label: 'Business Reporting',
    description: 'Business Data → AI Analysis → Generate Insights → Automated Report → Team Action',
    steps: [
      { name: 'Business Data', tone: 'amber' },
      { name: 'AI Analysis', tone: 'gold' },
      { name: 'Generate Insights', tone: 'lavender' },
      { name: 'Automated Report', tone: 'steel' },
      { name: 'Team Action', tone: 'amber' },
    ],
  },
]

const capabilityCards = [
  { title: 'Web Development', text: 'Modern, responsive and conversion-focused websites engineered for performance, scalability and exceptional user experience.' },
  { title: 'AI Automation', text: 'Automate repetitive business processes with intelligent AI-powered workflows that reduce manual effort and improve operational efficiency.' },
  { title: 'Custom Software', text: 'Purpose-built software designed around your exact business requirements, from internal tools to full digital platforms.' },
  { title: 'AI-Powered Solutions', text: 'Integrate modern AI capabilities into your existing products, operations and customer experiences with practical business impact.' },
  { title: 'E-Commerce Development', text: 'High-converting storefronts and systems built for product discovery, payment flows, order management and growth.' },
  { title: 'System Integration', text: 'Connect your business tools, APIs and data into one intelligent digital ecosystem that runs smoothly and efficiently.' },
]

const fireflies = [
  { left: '8%', top: '18%', size: 6, delay: '0s' },
  { left: '16%', top: '55%', size: 8, delay: '1.6s' },
  { left: '28%', top: '28%', size: 7, delay: '3.2s' },
  { left: '38%', top: '62%', size: 9, delay: '2.1s' },
  { left: '52%', top: '22%', size: 7, delay: '4.1s' },
  { left: '64%', top: '46%', size: 8, delay: '0.7s' },
  { left: '78%', top: '30%', size: 10, delay: '2.6s' },
  { left: '88%', top: '58%', size: 7, delay: '3.8s' },
  { left: '72%', top: '72%', size: 8, delay: '1.1s' },
  { left: '42%', top: '76%', size: 6, delay: '4.5s' },
]

export default function Home() {
  const stickyRef = useRef<HTMLElement | null>(null)
  const flowDeckRef = useRef<HTMLDivElement | null>(null)
  const animationRef = useRef<number | null>(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeWorkflow, setActiveWorkflow] = useState(automationPipelines[0].id)
  const [workflowStage, setWorkflowStage] = useState(0)
  const [stackProgress, setStackProgress] = useState(0)

  const activeWorkflowData = automationPipelines.find((item) => item.id === activeWorkflow) ?? automationPipelines[0]

  useEffect(() => {
    setWorkflowStage(0)
  }, [activeWorkflow])

  useEffect(() => {
    const interval = setInterval(() => {
      setWorkflowStage((current) => (current >= activeWorkflowData.steps.length - 1 ? 0 : current + 1))
    }, 1800)

    return () => clearInterval(interval)
  }, [activeWorkflowData])

  useEffect(() => {
    const node = stickyRef.current
    if (!node) return

    const updateProgress = () => {
      const rect = node.getBoundingClientRect()
      const total = node.offsetHeight - window.innerHeight
      const progress = total > 0 ? Math.min(Math.max((-rect.top) / total, 0), 1) : 0
      setScrollProgress(progress)
    }

    const handleScroll = () => {
      if (animationRef.current !== null) return

      animationRef.current = window.requestAnimationFrame(() => {
        updateProgress()
        animationRef.current = null
      })
    }

    updateProgress()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
      if (animationRef.current !== null) {
        window.cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  useEffect(() => {
    const node = flowDeckRef.current
    if (!node) return

    let frameId = 0

    const updateStack = () => {
      const rect = node.getBoundingClientRect()
      const total = Math.max(node.offsetHeight - window.innerHeight * 0.75, 1)
      const progress = Math.min(Math.max((window.innerHeight * 0.55 - rect.top) / total, 0), 1)
      setStackProgress(progress)
    }

    const onScroll = () => {
      if (frameId) return
      frameId = window.requestAnimationFrame(() => {
        updateStack()
        frameId = 0
      })
    }

    updateStack()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frameId) {
        window.cancelAnimationFrame(frameId)
      }
    }
  }, [])

  const trackTranslate = `translate3d(-${scrollProgress * 200}vw, 0, 0)`

  return (
    <div className="page-shell">
      <header className="site-header">
        <div className="brand-mark">
          <img
            src="/images/Vaseena%20Labs%20Main%20Logo.png"
            alt="Vaseena Labs"
            className="brand-logo"
          />
        </div>

        <nav className="top-nav" aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#solutions">Solutions</a>
          <a href="#work">Work</a>
          <a href="#testimonials">Clients</a>
          <a href="#process">Process</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="primary-btn nav-button">
          Start a project
          <FiArrowRight />
        </a>
      </header>

      <main>
        <section className="hero-section" id="home">
          <div className="ambient ambient-one" />
          <div className="ambient ambient-two" />

          <div className="firefly-layer" aria-hidden="true">
            {fireflies.map((firefly, index) => (
              <span
                key={`${firefly.left}-${firefly.top}-${index}`}
                className="firefly"
                style={{
                  left: firefly.left,
                  top: firefly.top,
                  width: `${firefly.size}px`,
                  height: `${firefly.size}px`,
                  animationDelay: firefly.delay,
                }}
              />
            ))}
          </div>

          <div className="hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">
                <FiSun />
                Build Digital. Automate Intelligently.
              </span>

              <h1>
                BUILD. <span>AUTOMATE.</span> SCALE.
              </h1>

              <p>
                We build high-performance digital experiences and AI-powered automation systems that help businesses work smarter.
              </p>

              <div className="cta-row">
                <a href="#contact" className="primary-btn">
                  Start a project
                  <FiArrowRight />
                </a>
                <a href="#solutions" className="secondary-btn">
                  <FiPlay />
                  See the flow
                </a>
              </div>

              <div className="quick-links" aria-label="Core strengths">
                <span className="quick-pill">
                  <FiCompass />
                  Strategy
                </span>
                <span className="quick-pill">
                  <FiZap />
                  Automation
                </span>
                <span className="quick-pill">
                  <FiStar />
                  Design
                </span>
              </div>

              <div className="metrics-row" aria-label="Key metrics">
                {metrics.map((item) => (
                  <div className="metric-card" key={item.label}>
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="hero-visual">
              <div className="video-panel">
                <ThreeDCardDemo />
              </div>
            </div>
          </div>
        </section>

        <section className="automation-showcase" id="solutions">
          <div className="panel-intro">
            <span className="eyebrow dark">
              <FiCompass />
              AI automation workflows
            </span>
            <h2>Turn repetitive work into intelligent systems.</h2>
          </div>

          <div className="automation-flow-panel glass-panel">
            <div className="flow-header">
              <span className="live-dot" />
              live enterprise workflow
            </div>

            <div className="workflow-tabs" aria-label="Automation pipeline tabs">
              {automationPipelines.map((pipeline) => (
                <button
                  key={pipeline.id}
                  type="button"
                  className={`workflow-tab ${activeWorkflow === pipeline.id ? 'active' : ''}`}
                  onClick={() => setActiveWorkflow(pipeline.id)}
                  aria-pressed={activeWorkflow === pipeline.id}
                >
                  {pipeline.label}
                </button>
              ))}
            </div>

            <div className="workflow-flowchart" aria-live="polite">
              <div className="workflow-summary">
                <span className="summary-label">Automation Blueprint</span>
                <strong>{activeWorkflowData.description}</strong>
              </div>

              <div className="workflow-timeline" role="list" aria-label={`${activeWorkflowData.label} automation steps`}>
                {activeWorkflowData.steps.map((step, index) => {
                  const isActive = index === workflowStage
                  const isDone = index < workflowStage

                  return (
                    <motion.div
                      key={`${activeWorkflowData.id}-${step.name}`}
                      role="listitem"
                      className={`timeline-item ${isActive ? 'active' : ''} ${isDone ? 'done' : ''}`}
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, delay: index * 0.08 }}
                    >
                      <div className="timeline-rail" aria-hidden="true">
                        <span className="timeline-dot" />
                      </div>

                      <div className={`timeline-card tone-${step.tone}`}>
                        <div className="timeline-header">
                          <span className="timeline-step">0{index + 1}</span>
                          <span className="timeline-status">
                            {isActive ? 'Live' : isDone ? 'Done' : 'Queued'}
                          </span>
                        </div>
                        <h3>{step.name}</h3>
                        <p>
                          {isActive
                            ? 'This step is currently processing and moving data through the pipeline.'
                            : isDone
                              ? 'This phase has been completed and handed off to the next stage.'
                              : 'The workflow is waiting to move to the next stage in sequence.'}
                        </p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="content-panel" id="services">
          <div className="panel-intro">
            <span className="eyebrow dark">
              <FiCompass />
              what we do
            </span>
            <h2>Custom digital systems built for modern growth.</h2>
          </div>

          <div className="capability-grid">
            {capabilityCards.map((card, index) => (
              <article className="capability-card glass-panel" key={card.title}>
                <div className="capability-number">0{index + 1}</div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="story-shell" id="experience" ref={stickyRef}>
          <div className="story-stick">
            <div className="story-track" style={{ transform: trackTranslate }}>
              {slides.map((slide, index) => {
                const offset = index - scrollProgress * (slides.length - 1)
                const rotateY = offset * -18
                const scale = 1 - Math.abs(offset) * 0.08
                const opacity = Math.max(0.4, 1 - Math.abs(offset) * 0.34)

                return (
                  <article
                    className="story-slide page-turn"
                    key={slide.id}
                    style={{
                      transform: `perspective(1600px) rotateY(${rotateY}deg) scale(${scale})`,
                      opacity,
                    }}
                  >
                    <div className="story-video-wrap">
                      <video autoPlay muted loop playsInline preload="metadata" className="story-video">
                        <source src={slide.video} type="video/mp4" />
                      </video>
                      <div className="story-gradient" />
                    </div>

                    <div className="story-content">
                      <div className="story-tag">{slide.label}</div>
                      <h2>{slide.title}</h2>
                      <p>{slide.copy}</p>

                      <ul>
                        {slide.bullets.map((item) => (
                          <li key={item}>
                            <FiCheck />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="flow-section">
          <div className="panel-intro flow-intro">
            <span className="eyebrow dark">
              <FiLayers />
              5-step execution model
            </span>
            {/* <h2>From idea to launch, shaped with intention.</h2> */}
          </div>

          <ContainerScroll
            titleComponent={
              <div className="mx-auto max-w-6xl px-4 text-center" aria-hidden="true">
                <h3 className="text-[2.5rem] font-semibold tracking-[-0.08em] text-[#1f2328] sm:text-[4rem] md:text-[6rem]">
                  From idea to launch, <span className="text-[#5a5c61]">shaped with intention.</span>
                </h3>
              </div>
            }
          >
            <div className="flex h-full w-full flex-col justify-center rounded-[1.8rem] bg-[#111214]/95 p-4 text-left text-white md:p-8">
              <div className="grid gap-3 md:grid-cols-5">
                {implementationFlow.map((item) => (
                  <div
                    key={item.step}
                    className="rounded-[1.4rem] border border-white/10 bg-white/5 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-sm md:p-4"
                  >
                    <div className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#f2d6a3]">
                      {item.step}
                    </div>
                    <div className="mb-3 text-xl font-medium text-white md:text-2xl">{item.title}</div>
                    <p className="text-sm leading-6 text-slate-200/80 md:text-[0.95rem]">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </ContainerScroll>
        </section>

        <section className="case-study-section" id="work">
          <div className="panel-intro">
            <span className="eyebrow dark">
              <FiStar />
              selected work
            </span>
            <h2>Case studies built for momentum.</h2>
          </div>

          <div className="case-study-grid">
            {caseStudies.map((study) => (
              <article className="case-card glass-panel" key={study.title}>
                <div
                  className="case-card-visual"
                  style={{
                    backgroundImage: `linear-gradient(180deg, rgba(11, 11, 13, 0.1), rgba(11, 11, 13, 0.6)), url(${study.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <span className="case-type">{study.type}</span>
                  <strong>{study.metric}</strong>
                </div>

                <div className="case-card-body">
                  <small>{study.result}</small>
                  <h3>{study.title}</h3>
                  <p>{study.summary}</p>

                  <div className="case-tags">
                    {study.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <a href={study.link} target="_blank" rel="noreferrer" className="case-footer">
                    <span>Visit site</span>
                    <FiArrowRight />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="detail-panel" id="about">
          <div className="panel-intro">
            <span className="eyebrow dark">
              <FiLayers />
              why vaseena labs
            </span>
            <h2>Business-first technology with a modern design mind.</h2>
          </div>

          <div className="detail-grid">
            <article className="detail-box glass-panel">
              <FiMoon />
              <h3>Business-first technology</h3>
              <p>Every technical decision is designed to support a real business outcome, not just aesthetics.</p>
            </article>
            <article className="detail-box glass-panel">
              <FiFeather />
              <h3>Modern engineering</h3>
              <p>We build with production-ready systems, scalable architecture, and a clean experience that feels premium.</p>
            </article>
            <article className="detail-box glass-panel">
              <FiCompass />
              <h3>AI-first mindset</h3>
              <p>Automation and AI are integrated early so your operations become faster, smarter, and easier to scale.</p>
            </article>
          </div>
        </section>

        <TechnologySection />

        <section id="testimonials">
          <TestimonialsSection />
        </section>

        <section className="process-section" id="process">
          <div className="panel-intro">
            <span className="eyebrow dark">
              <FiStar />
              process
            </span>
            <h2>From spark to signal.</h2>
          </div>

          <div className="process-grid">
            {process.map((item) => (
              <article className="process-card glass-panel" key={item.step}>
                <span>{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="cta-section" id="contact">
          <div className="cta-panel glass-panel">
            <div>
              <span className="eyebrow dark">
                <FiMessageCircle />
                let&apos;s build something memorable
              </span>
              <h2>READY TO BUILD SOMETHING INTELLIGENT?</h2>
              <p className="cta-copy">
                Tell us what you&apos;re building, and let&apos;s turn your idea into a powerful digital product or intelligent automated system.
              </p>
            </div>

            <div className="contact-actions">
              <a href="mailto:hello@vaseenalabs.com" className="primary-btn action-btn">
                <FiMail />
                hello@vaseenalabs.com
              </a>
              <a href="https://wa.me/919738176663" target="_blank" rel="noreferrer" className="secondary-btn action-btn">
                <FiMessageCircle />
                WhatsApp
              </a>
              <a href="tel:+919738176663" className="secondary-btn action-btn">
                <FiPhone />
                Call now
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
