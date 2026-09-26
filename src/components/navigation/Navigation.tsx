'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import { siteConfig } from '@/config/site'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[rgba(5,5,8,0.9)] backdrop-blur-xl border-b border-[#1a1a2e]'
            : 'bg-transparent'
        }`}
        role="banner"
      >
        <div className="container-xl">
          <nav
            className="flex items-center justify-between h-[72px]"
            aria-label="Main navigation"
          >
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); handleNavClick('#home') }}
              className="flex items-center gap-2.5 group"
              aria-label="Vaseena Labs — Home"
            >
              <div className="w-9 h-9 rounded-full overflow-hidden ring-1 ring-white/10 group-hover:ring-primary/50 transition-all duration-300">
                <Image
                  src="/images/logo.jpeg"
                  alt="Vaseena Labs"
                  width={36}
                  height={36}
                  className="object-cover"
                  priority
                />
              </div>
              <span className="font-display font-700 text-[1.05rem] tracking-tight text-white group-hover:text-primary-light transition-colors duration-300">
                Vaseena <span className="text-primary">Labs</span>
              </span>
            </a>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1" role="navigation">
              {siteConfig.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(item.href) }}
                  className="px-4 py-2 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors duration-200 rounded-md hover:bg-white/[0.04]"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* CTA + mobile toggle */}
            <div className="flex items-center gap-3">
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
                className="hidden sm:flex btn-primary text-sm py-2.5 px-5"
              >
                Let&apos;s Build
              </a>
              <button
                className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg border border-border-light text-text-secondary hover:text-white hover:border-primary/50 transition-all duration-200"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
              >
                {menuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed top-[72px] left-0 right-0 z-40 glass border-b border-border"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="container-xl py-6 flex flex-col gap-1">
              {siteConfig.nav.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(item.href) }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  className="px-4 py-3 text-sm font-medium text-text-secondary hover:text-white hover:bg-white/[0.04] rounded-lg transition-all duration-200"
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: siteConfig.nav.length * 0.05, duration: 0.3 }}
                className="mt-3 btn-primary justify-center"
              >
                Let&apos;s Build
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
