'use client'
import { useRef, useState, useEffect, useCallback } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 'vasundhara',
    name: 'Vasundhara Palace',
    company: 'Vasundhara Palace Bangalore',
    website: 'https://www.vasundharapalacebangalore.com/',
    industry: 'Restaurant',
    service: 'Web Development',
    rating: 5,
    avatar: 'VP',
    avatarColor: '#F59E0B',
    text: 'Vaseena Labs built us a website that truly reflects our restaurant. The design is sophisticated, the menu presentation looks stunning, and our online visibility has improved dramatically since launch. Guests frequently compliment us on how professional and beautiful the website looks before they even walk through our doors. The team was responsive, understood exactly what we wanted, and delivered on time. Highly recommended.',
    highlight: 'Guests compliment us on the website before they even walk through our doors.',
  },
  {
    id: 'seaplate',
    name: 'SeaPlate Bangalore',
    company: 'SeaPlate Bangalore',
    website: 'https://seaplatebangalore.in/',
    industry: 'Restaurant',
    service: 'Web Development',
    rating: 5,
    avatar: 'SP',
    avatarColor: '#06B6D4',
    text: 'We needed our seafood restaurant to stand out online and Vaseena Labs did exactly that. The website looks incredible — every section makes you want to come in and eat. Our reservation enquiries have gone up noticeably after the launch. The mobile experience is especially smooth, which matters a lot since most of our customers browse on their phones. Very professional team throughout the entire process.',
    highlight: 'Reservation enquiries have gone up noticeably after launch.',
  },
  {
    id: 'akik',
    name: 'Akik Creations by HY',
    company: 'Akik Creations by HY',
    website: 'https://www.akikcreationsbyhy.com/',
    industry: 'Clothing & Fashion',
    service: 'E-Commerce Development',
    rating: 5,
    avatar: 'AC',
    avatarColor: '#EC4899',
    text: 'Our kurti collections finally have the online store they deserve. Vaseena Labs built us a beautiful, easy-to-shop website where customers can browse our full range, place orders smoothly, and even reach us directly on WhatsApp. Orders started coming in within days of the launch. The design perfectly matches our brand — elegant, clean, and feminine. I could not be happier with the result.',
    highlight: 'Orders started coming in within days of the launch.',
  },
  {
    id: 'shenme',
    name: 'Shenme Salon',
    company: 'Shenme',
    website: 'https://shenme.vercel.app',
    industry: 'Salon & Beauty',
    service: 'Web Development',
    rating: 5,
    avatar: 'SH',
    avatarColor: '#8B5CF6',
    text: 'Vaseena Labs gave our salon a digital presence we are genuinely proud of. The website is sleek, modern, and showcases our services in a way that builds instant trust with new clients. We have seen a clear increase in appointment enquiries through the website since it went live. The team was easy to work with, communicated clearly at every step, and delivered a product that exceeded what we imagined.',
    highlight: 'Clear increase in appointment enquiries since going live.',
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="text-amber-400 fill-amber-400" aria-hidden="true" />
      ))}
    </div>
  )
}

export default function TestimonialsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [active, setActive] = useState(0)
  const [direction, setDirection] = useState(1)
  const [paused, setPaused] = useState(false)

  const next = useCallback(() => {
    setDirection(1)
    setActive(i => (i + 1) % testimonials.length)
  }, [])

  const prev = useCallback(() => {
    setDirection(-1)
    setActive(i => (i - 1 + testimonials.length) % testimonials.length)
  }, [])

  useEffect(() => {
    if (paused || !inView) return
    const t = setInterval(next, 5000)
    return () => clearInterval(t)
  }, [paused, inView, next])

  const t = testimonials[active]

  return (
    <section
      id="testimonials"
      className="section-padding relative overflow-hidden"
      aria-labelledby="testimonials-heading"
      ref={ref}
    >
      {/* BG glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(139,92,246,0.05) 0%, transparent 70%)',
        }}
      />
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" aria-hidden="true" />

      <div className="container-xl relative">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-4"
          >
            <span className="section-label">Client Stories</span>
          </motion.div>
          <motion.h2
            id="testimonials-heading"
            initial={{ opacity: 0, y: 25 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-white leading-[1.1] tracking-tight mb-4"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)' }}
          >
            WHAT OUR{' '}
            <span className="gradient-text">CLIENTS SAY</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-text-secondary text-base leading-relaxed"
          >
            Real feedback from real businesses we have built digital products for.
          </motion.p>
        </div>

        {/* Main card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-4xl mx-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <div className="relative glass rounded-3xl p-8 md:p-12 border border-border overflow-hidden">
            {/* Glow */}
            <div
              className="absolute top-0 right-0 w-64 h-64 pointer-events-none rounded-full"
              style={{ background: `radial-gradient(circle, ${t.avatarColor}12 0%, transparent 70%)` }}
              aria-hidden="true"
            />

            {/* Big quote mark */}
            <div className="absolute top-8 right-8 md:top-12 md:right-12 opacity-[0.07]" aria-hidden="true">
              <Quote size={90} className="text-white" />
            </div>

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={active}
                custom={direction}
                initial={{ opacity: 0, x: direction * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -40 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10"
              >
                {/* Stars */}
                <div className="mb-5">
                  <StarRating count={t.rating} />
                </div>

                {/* Highlight */}
                <blockquote
                  className="font-display font-semibold text-white/90 text-lg md:text-xl leading-snug mb-6 italic"
                >
                  &ldquo;{t.highlight}&rdquo;
                </blockquote>

                {/* Full text */}
                <p className="text-text-secondary text-sm md:text-base leading-relaxed mb-8">
                  &ldquo;{t.text}&rdquo;
                </p>

                {/* Client + tags */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
                  <div className="flex items-center gap-4">
                    {/* Avatar bubble */}
                    <div
                      className="w-11 h-11 rounded-full flex items-center justify-center font-display font-bold text-sm text-white flex-shrink-0"
                      style={{
                        background: `linear-gradient(135deg, ${t.avatarColor}50, ${t.avatarColor}20)`,
                        border: `1.5px solid ${t.avatarColor}50`,
                      }}
                      aria-hidden="true"
                    >
                      {t.avatar}
                    </div>
                    <div>
                      <a
                        href={t.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-white text-sm hover:underline transition-colors duration-200"
                        style={{ color: t.avatarColor }}
                        aria-label={`Visit ${t.company} website`}
                      >
                        {t.company} ↗
                      </a>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    <span
                      className="text-xs px-3 py-1 rounded-full border"
                      style={{
                        color: t.avatarColor,
                        borderColor: `${t.avatarColor}30`,
                        background: `${t.avatarColor}10`,
                      }}
                    >
                      {t.industry}
                    </span>
                    <span className="tech-badge text-xs py-1">{t.service}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Nav controls */}
          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center gap-2" role="tablist" aria-label="Testimonial navigation">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={active === i}
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => { setDirection(i > active ? 1 : -1); setActive(i) }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    active === i ? 'w-8 bg-primary' : 'w-2 bg-border-light hover:bg-text-muted'
                  }`}
                />
              ))}
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                id="testimonial-prev"
                className="w-9 h-9 rounded-full glass border border-border flex items-center justify-center text-text-muted hover:text-white hover:border-primary/40 transition-all duration-200"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={next}
                aria-label="Next testimonial"
                id="testimonial-next"
                className="w-9 h-9 rounded-full glass border border-border flex items-center justify-center text-text-muted hover:text-white hover:border-primary/40 transition-all duration-200"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Client logos strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-14 pt-10 border-t border-border"
        >
          <p className="text-center text-text-muted text-xs uppercase tracking-widest mb-6">
            Trusted by
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            {testimonials.map((client, i) => (
              <motion.a
                key={client.id}
                href={client.website}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + i * 0.08 }}
                className="group glass rounded-xl px-5 py-3 border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
                aria-label={`${client.company} website`}
              >
                <div className="flex items-center gap-2.5">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0"
                    style={{ background: `linear-gradient(135deg, ${client.avatarColor}, ${client.avatarColor}80)` }}
                    aria-hidden="true"
                  >
                    {client.avatar[0]}
                  </div>
                  <span className="text-text-secondary text-xs font-medium group-hover:text-white transition-colors duration-200 whitespace-nowrap">
                    {client.company}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
