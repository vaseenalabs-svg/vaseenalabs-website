'use client'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'

// Particle system for hero background
function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let particles: Particle[] = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    class Particle {
      x: number; y: number; vx: number; vy: number
      size: number; opacity: number; color: string
      constructor() {
        this.x = Math.random() * canvas!.width
        this.y = Math.random() * canvas!.height
        this.vx = (Math.random() - 0.5) * 0.3
        this.vy = (Math.random() - 0.5) * 0.3
        this.size = Math.random() * 1.5 + 0.5
        this.opacity = Math.random() * 0.5 + 0.1
        const colors = ['59, 130, 246', '139, 92, 246', '6, 182, 212']
        this.color = colors[Math.floor(Math.random() * colors.length)]
      }
      update() {
        this.x += this.vx
        this.y += this.vy
        if (this.x < 0) this.x = canvas!.width
        if (this.x > canvas!.width) this.x = 0
        if (this.y < 0) this.y = canvas!.height
        if (this.y > canvas!.height) this.y = 0
      }
      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`
        ctx.fill()
      }
    }

    for (let i = 0; i < 120; i++) particles.push(new Particle())

    const drawConnections = (ctx: CanvasRenderingContext2D) => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 100) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.08 * (1 - dist / 100)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => { p.update(); p.draw(ctx) })
      drawConnections(ctx)
      animId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      id="hero-particles"
      className="absolute inset-0 z-[3] pointer-events-none"
      aria-hidden="true"
    />
  )
}

// Grid overlay
function GridOverlay() {
  return (
    <div
      className="absolute inset-0 z-[3] pointer-events-none"
      aria-hidden="true"
      style={{
        backgroundImage: `
          linear-gradient(rgba(59,130,246,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(59,130,246,0.03) 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px',
      }}
    />
  )
}

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoSrc, setVideoSrc] = useState('/videos/desktop_hero_background.mp4')

  useEffect(() => {
    // Set proper video based on screen size
    const handleResize = () => {
      const targetSrc = window.innerWidth < 768
        ? '/videos/mobile_hero_background.mp4'
        : '/videos/desktop_hero_background.mp4'
      setVideoSrc(prev => (prev !== targetSrc ? targetSrc : prev))
    }
    
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.muted = true
    video.defaultMuted = true
    video.playbackRate = 0.85

    const playPromise = video.play()
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Fallback for strict browser autoplay policies
        const onInteract = () => {
          video.play().catch(() => {})
          window.removeEventListener('click', onInteract)
          window.removeEventListener('touchstart', onInteract)
          window.removeEventListener('scroll', onInteract)
        }
        window.addEventListener('click', onInteract, { once: true })
        window.addEventListener('touchstart', onInteract, { once: true })
        window.addEventListener('scroll', onInteract, { once: true })
      })
    }
  }, [videoSrc])

  const handleScroll = () => {
    document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })
  }

  const words = ['DIGITAL.', 'SMARTER.', 'INTELLIGENTLY.']
  const [wordIndex, setWordIndex] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setWordIndex(i => (i + 1) % words.length), 2500)
    return () => clearInterval(t)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* 1. Base fallback dark background (z-0, sits behind video) */}
      <div
        className="absolute inset-0 z-0 bg-[#050508]"
        aria-hidden="true"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 50% 0%, rgba(59,130,246,0.18) 0%, transparent 60%),
            radial-gradient(ellipse 50% 40% at 80% 50%, rgba(139,92,246,0.12) 0%, transparent 50%),
            radial-gradient(ellipse 40% 40% at 20% 80%, rgba(6,182,212,0.08) 0%, transparent 50%),
            #050508
          `,
        }}
      />

      {/* 2. Video background (z-[1], positioned on top of fallback) */}
      <video
        ref={videoRef}
        key={videoSrc}
        src={videoSrc}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover z-[1] opacity-75 md:opacity-85 pointer-events-none transition-opacity duration-700"
        aria-hidden="true"
      />

      {/* 3. Subtle dark gradient overlay (z-[2]) for text contrast */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'linear-gradient(to bottom, rgba(5,5,8,0.45) 0%, rgba(5,5,8,0.15) 45%, rgba(5,5,8,0.85) 100%)',
        }}
      />

      {/* 4. Overlay grids and particles (z-[3]) */}
      <GridOverlay />
      <ParticleCanvas />

      {/* Hero content */}
      <div className="relative z-10 container-xl text-center px-4">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center mb-6"
        >
          <span className="section-label">VASEENA LABS</span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-bold leading-[1.05] tracking-tight mb-6"
          style={{ fontSize: 'clamp(2.8rem, 7vw, 6rem)' }}
        >
          <span className="block text-white">BUILD</span>
          <span className="block gradient-text">
            AUTOMATE{' '}
          </span>
          <span className="block text-white">SCALE.</span>
        </motion.h1>

        {/* Supporting line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
        >
          We build high-performance digital experiences and AI-powered automation
          systems that help businesses work smarter.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="btn-primary group text-base py-4 px-8"
            id="hero-cta-start"
          >
            Start a Project
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
          </a>
          <a
            href="#services"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="btn-outline text-base py-4 px-8"
            id="hero-cta-services"
          >
            Explore Services
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex items-center justify-center gap-8 mt-16 flex-wrap"
        >
          {[
            { label: 'Services', value: '6+' },
            { label: 'Technologies', value: '20+' },
            { label: 'Solutions', value: 'AI-First' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display font-bold text-2xl text-white mb-1">{stat.value}</div>
              <div className="text-text-muted text-xs tracking-widest uppercase">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        onClick={handleScroll}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-text-muted hover:text-primary-light transition-colors duration-200"
        aria-label="Scroll to services"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.button>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 z-[3] pointer-events-none"
        style={{ background: 'linear-gradient(to top, #050508, transparent)' }}
        aria-hidden="true"
      />
    </section>
  )
}
