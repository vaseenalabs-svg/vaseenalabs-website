'use client'
import Image from 'next/image'
import { Mail, Phone, ArrowRight } from 'lucide-react'
import { InstagramIcon } from '@/components/ui/icons'
import { siteConfig } from '@/config/site'

export default function Footer() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-surface border-t border-border" role="contentinfo">
      {/* Gradient top line */}
      <div
        className="h-px w-full"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(59,130,246,0.5), rgba(139,92,246,0.5), transparent)',
        }}
        aria-hidden="true"
      />

      <div className="container-xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); handleNav('#home') }}
              className="flex items-center gap-2.5 mb-4 w-fit group"
              aria-label="Vaseena Labs"
            >
              <div className="w-9 h-9 rounded-full overflow-hidden ring-1 ring-white/10">
                <Image
                  src="/images/logo.jpeg"
                  alt="Vaseena Labs"
                  width={36}
                  height={36}
                  className="object-cover"
                />
              </div>
              <span className="font-display font-bold text-base text-white">
                Vaseena <span className="text-primary">Labs</span>
              </span>
            </a>
            <p className="text-text-muted text-sm leading-relaxed max-w-xs mb-6">
              Building digital experiences.<br />
              Automating intelligent businesses.
            </p>

            {/* Social */}
            <div className="flex items-center gap-3">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="w-9 h-9 rounded-lg glass border border-border flex items-center justify-center text-text-muted hover:text-primary hover:border-primary/30 transition-all duration-200"
                aria-label="Email Vaseena Labs"
              >
                <Mail size={16} />
              </a>
              <a
                href={`tel:${siteConfig.contact.phoneRaw}`}
                className="w-9 h-9 rounded-lg glass border border-border flex items-center justify-center text-text-muted hover:text-primary hover:border-primary/30 transition-all duration-200"
                aria-label="Call Vaseena Labs"
              >
                <Phone size={16} />
              </a>
                <a
                href={siteConfig.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg glass border border-border flex items-center justify-center text-text-muted hover:text-primary hover:border-primary/30 transition-all duration-200"
                aria-label="Vaseena Labs on Instagram"
              >
                <InstagramIcon size={16} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-white text-sm uppercase tracking-wider mb-5">Navigation</h3>
            <ul className="space-y-3" role="list">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => { e.preventDefault(); handleNav(item.href) }}
                    className="text-text-muted text-sm hover:text-white transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">›</span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white text-sm uppercase tracking-wider mb-5">Services</h3>
            <ul className="space-y-3" role="list">
              {siteConfig.services.map((s) => (
                <li key={s.id}>
                  <a
                    href="#services"
                    onClick={(e) => { e.preventDefault(); handleNav('#services') }}
                    className="text-text-muted text-sm hover:text-white transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">›</span>
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-xs">
            © {new Date().getFullYear()} Vaseena Labs. All rights reserved.
          </p>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNav('#contact') }}
            className="text-xs text-text-muted hover:text-primary-light flex items-center gap-1 transition-colors duration-200"
            id="footer-contact-link"
          >
            Start a project <ArrowRight size={12} />
          </a>
        </div>
      </div>
    </footer>
  )
}
