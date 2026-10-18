'use client'

import { useEffect, useRef, useState } from 'react'
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
    label: 'Brand motion',
    title: 'Design that feels like a quiet luxury brand in motion.',
    copy:
      'We shape identity systems, narratives, and digital experiences that feel calm, premium, and unmistakably memorable.',
    bullets: ['Identity systems', 'Immersive storytelling', 'Conversion-focused UX'],
    video: '/videos/desktop_hero_background.mp4',
    accent: 'amber',
  },
  {
    id: '02',
    label: 'Automation flow',
    title: 'Systems that remove friction while keeping the soul intact.',
    copy:
      'From intelligent workflows to AI-powered operations, we turn complex processes into elegant and scalable everyday experiences.',
    bullets: ['AI orchestration', 'Workflow design', 'Operational clarity'],
    video: '/videos/Tech 1.mp4',
    accent: 'sky',
  },
  {
    id: '03',
    label: 'Future craft',
    title: 'Technology built to feel effortless and unforgettable.',
    copy:
      'We blend strategy, engineering, and design into products that move with intention and deliver measurable business momentum.',
    bullets: ['Product engineering', 'Sustainable scale', 'Human-first interfaces'],
    video: '/videos/Tech 2.mp4',
    accent: 'violet',
  },
]

const metrics = [
  { value: '8+', label: 'years of craft' },
  { value: '40+', label: 'brands elevated' },
  { value: '99%', label: 'client delight' },
]

const pillars = [
  {
    icon: FiCompass,
    title: 'Strategy first',
    text: 'We map moments, motion, and business intent before a single line of code is written.',
  },
  {
    icon: FiFeather,
    title: 'Soulful design',
    text: 'Every interface is shaped to feel premium, grounded, and emotionally resonant.',
  },
  {
    icon: FiZap,
    title: 'Intelligent systems',
    text: 'AI, automation, and product thinking come together to remove friction at scale.',
  },
]

const process = [
  { step: '01', title: 'Discover', copy: 'We unpack the brand, the audience, and the opportunity.' },
  { step: '02', title: 'Design', copy: 'We create elegant systems with clarity, motion, and depth.' },
  { step: '03', title: 'Build', copy: 'We engineer experiences that are fast, polished, and scalable.' },
  { step: '04', title: 'Launch', copy: 'We refine the rollout with performance and growth in mind.' },
]

const caseStudies = [
  {
    title: 'Northstar Logistics',
    type: 'B2B operations',
    summary: 'Reframed a legacy logistics brand with a sharper story, a precision-driven website, and automation flows that reduced manual coordination.',
    metric: '+214%',
    result: 'higher inbound inquiries',
    tags: ['UX', 'CRM', 'Automation'],
  },
  {
    title: 'Asteria Wellness',
    type: 'Luxury wellness',
    summary: 'Built a calming, premium digital identity that translated wellness rituals into a polished customer journey and higher booking intent.',
    metric: '3.2x',
    result: 'more qualified bookings',
    tags: ['Brand', 'Landing', 'Conversion'],
  },
  {
    title: 'Summit Studio',
    type: 'Creative agency',
    summary: 'Developed a portfolio platform with cinematic motion and editorial storytelling that elevated their positioning and case-study narrative.',
    metric: '44%',
    result: 'longer average engagement',
    tags: ['Motion', 'Portfolio', 'Strategy'],
  },
]

const capabilityCards = [
  {
    title: 'Brand experiences',
    text: 'We build identity systems, landing pages, and digital storytelling that feel premium, trustworthy, and emotionally memorable.',
  },
  {
    title: 'AI & automation',
    text: 'From lead capture to sales support and internal automation, we design systems that save time without making the business feel robotic.',
  },
  {
    title: 'Product engineering',
    text: 'We create scalable web products and custom platforms that balance speed, structure, and long-term flexibility.',
  },
  {
    title: 'Growth design',
    text: 'Every digital touchpoint is shaped to be clear, persuasive, and conversion-aware so it helps the business grow in real time.',
  },
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
  const animationRef = useRef<number | null>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

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

  const trackTranslate = `translate3d(-${scrollProgress * 200}vw, 0, 0)`

  return (
    <div className="page-shell">
      <header className="site-header">
        <div className="brand-mark">
          <span className="brand-dot" />
          Vaseena Labs
        </div>

        <nav className="top-nav" aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#experience">Experience</a>
          <a href="#work">Work</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="primary-btn nav-button">
          Let&apos;s talk
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
                calm technology, elevated experiences
              </span>

              <h1>
                We shape <span>quietly magnetic</span> digital brands.
              </h1>

              <p>
                Vaseena Labs creates warm, considered brands and software experiences for founders who want clarity, presence, and measurable growth without the noise.
              </p>

              <div className="cta-row">
                <a href="#contact" className="primary-btn">
                  Start your story
                  <FiArrowRight />
                </a>
                <a href="#experience" className="secondary-btn">
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
              <div className="video-panel glass-panel">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="hero-video"
                  poster="/images/placeholder.jpg"
                >
                  <source src="/videos/desktop_hero_background.mp4" type="video/mp4" />
                </video>
                <div className="video-overlay" />

                <div className="mini-card card-top">
                  <FiStar />
                  <div>
                    <small>Brand design</small>
                    <strong>Quiet luxury</strong>
                  </div>
                </div>

                <div className="mini-card card-bottom">
                  <FiMessageCircle />
                  <div>
                    <small>Client energy</small>
                    <strong>Warm + premium</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="feature-strip">
          {pillars.map(({ icon: Icon, title, text }) => (
            <article className="feature-card glass-panel" key={title}>
              <div className="feature-icon">
                <Icon />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </section>

        <section className="content-panel">
          <div className="panel-intro">
            <span className="eyebrow dark">
              <FiCompass />
              what we do
            </span>
            <h2>We turn ambition into calm, modern momentum.</h2>
          </div>

          <div className="capability-grid">
            {capabilityCards.map((card) => (
              <article className="capability-card glass-panel" key={card.title}>
                <div className="capability-number">0{capabilityCards.indexOf(card) + 1}</div>
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
                <div className="case-card-visual">
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

                  <div className="case-footer">
                    <span>View story</span>
                    <FiArrowRight />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="detail-panel">
          <div className="panel-intro">
            <span className="eyebrow dark">
              <FiLayers />
              built for momentum
            </span>
            <h2>Quiet confidence, measurable growth.</h2>
          </div>

          <div className="detail-grid">
            <article className="detail-box glass-panel">
              <FiMoon />
              <h3>Immersive storytelling</h3>
              <p>Every scroll, section, and interaction is designed to carry feeling with clarity.</p>
            </article>
            <article className="detail-box glass-panel">
              <FiFeather />
              <h3>Design systems</h3>
              <p>Distinctive visuals with consistency across product, web, and brand touchpoints.</p>
            </article>
            <article className="detail-box glass-panel">
              <FiCompass />
              <h3>Conversion strategy</h3>
              <p>Brand energy meets performance, letting the experience do the selling naturally.</p>
            </article>
          </div>
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
              <h2>Your next digital chapter starts here.</h2>
              <p className="cta-copy">
                We help founders, creators, and modern businesses turn ideas into premium digital experiences that feel human, elegant, and highly effective.
              </p>
            </div>

            <div className="contact-actions">
              <a href="mailto:vaseenalabs@gmail.com" className="primary-btn action-btn">
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

      <footer className="site-footer">
        <div>© 2026 Vaseena Labs</div>
        <div>Crafted for calm, clarity, and growth.</div>
      </footer>
    </div>
  )
}
