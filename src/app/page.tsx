'use client'

import { useEffect, useRef, useState } from 'react'
import {
  FiArrowRight,
  FiCheck,
  FiCompass,
  FiHeart,
  FiLayers,
  FiMessageCircle,
  FiMoon,
  FiPlay,
  FiFeather,
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

export default function Home() {
  const stickyRef = useRef<HTMLElement | null>(null)
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

    updateProgress()
    window.addEventListener('scroll', updateProgress, { passive: true })
    window.addEventListener('resize', updateProgress)

    return () => {
      window.removeEventListener('scroll', updateProgress)
      window.removeEventListener('resize', updateProgress)
    }
  }, [])

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

          <div className="hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">
                <FiSun />
                calm technology, elevated experiences
              </span>

              <h1>
                We build digital experiences that feel <span>alive.</span>
              </h1>

              <p>
                Vaseena Labs crafts soulful brands, AI-driven systems, and cinematic websites for founders who want modern impact without sacrificing warmth.
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
                  <FiHeart />
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

        <section className="story-shell" id="experience" ref={stickyRef}>
          <div className="story-stick">
            <div
              className="story-track"
              style={{ transform: `translate3d(-${scrollProgress * 200}%, 0, 0)` }}
            >
              {slides.map((slide) => (
                <article className="story-slide" key={slide.id}>
                  <div className="story-video-wrap">
                    <video autoPlay muted loop playsInline className="story-video">
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
              ))}
            </div>
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
            </div>

            <a href="mailto:vaseenalabs@gmail.com" className="primary-btn">
              hello@vaseenalabs.com
              <FiArrowRight />
            </a>
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
