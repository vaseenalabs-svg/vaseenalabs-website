'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Phone, Mail } from 'lucide-react'
import { siteConfig } from '@/config/site'

export default function FloatingContact() {
  const [open, setOpen] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 3000)
    return () => clearTimeout(timer)
  }, [])

  const waLink = `${siteConfig.contact.whatsapp}?text=${encodeURIComponent(siteConfig.contact.whatsappMessage)}`

  if (!visible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Popup options */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="glass rounded-2xl p-4 border border-border w-56 shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
            role="dialog"
            aria-label="Contact options"
          >
            <p className="text-xs text-text-muted mb-3 font-medium">Get in touch via:</p>
            <div className="space-y-2">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                id="float-whatsapp"
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium hover:bg-emerald-500/20 transition-all duration-200"
                aria-label="Chat on WhatsApp"
                onClick={() => setOpen(false)}
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>
              <a
                href={`tel:${siteConfig.contact.phoneRaw}`}
                id="float-phone"
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-primary/10 border border-primary/20 text-primary-light text-sm font-medium hover:bg-primary/20 transition-all duration-200"
                aria-label={`Call ${siteConfig.contact.phone}`}
                onClick={() => setOpen(false)}
              >
                <Phone size={16} />
                {siteConfig.contact.phone}
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                id="float-email"
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-accent/10 border border-accent/20 text-accent-light text-sm font-medium hover:bg-accent/20 transition-all duration-200"
                aria-label={`Email ${siteConfig.contact.email}`}
                onClick={() => setOpen(false)}
              >
                <Mail size={16} />
                Email Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 300, delay: 0.2 }}
        onClick={() => setOpen(!open)}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-all duration-300 ${
          open
            ? 'bg-surface border border-border text-text-secondary hover:text-white'
            : 'bg-emerald-500 text-white hover:bg-emerald-400 hover:shadow-[0_8px_30px_rgba(16,185,129,0.4)]'
        }`}
        aria-label={open ? 'Close contact menu' : 'Contact us'}
        aria-expanded={open}
        id="float-contact-btn"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <X size={22} />
            </motion.span>
          ) : (
            <motion.span key="msg" initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0, opacity: 0 }} transition={{ duration: 0.2 }}>
              <MessageCircle size={22} />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  )
}
