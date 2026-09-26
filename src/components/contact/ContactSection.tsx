'use client'
import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Phone, Send, CheckCircle } from 'lucide-react'
import { InstagramIcon } from '@/components/ui/icons'
import { siteConfig } from '@/config/site'

type FormData = {
  name: string
  email: string
  phone: string
  company: string
  service: string
  budget: string
  details: string
}

type FieldErrors = Partial<Record<keyof FormData, string>>

const initialForm: FormData = {
  name: '',
  email: '',
  phone: '',
  company: '',
  service: '',
  budget: '',
  details: '',
}

function validate(data: FormData): FieldErrors {
  const errors: FieldErrors = {}
  if (!data.name.trim()) errors.name = 'Name is required'
  if (!data.email.trim()) errors.email = 'Email is required'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = 'Invalid email address'
  if (!data.service) errors.service = 'Please select a service'
  if (!data.details.trim()) errors.details = 'Project details are required'
  else if (data.details.trim().length < 20) errors.details = 'Please provide at least 20 characters'
  return errors
}

export default function ContactSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [form, setForm] = useState<FormData>(initialForm)
  const [errors, setErrors] = useState<FieldErrors>({})
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const update = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm(prev => ({ ...prev, [field]: e.target.value }))
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: undefined }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate(form)
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setStatus('loading')

    // Simulated submission — wire up a real API route for production
    await new Promise(r => setTimeout(r, 1500))
    setStatus('success')
    setForm(initialForm)
  }

  const inputClass = (field: keyof FormData) =>
    `w-full bg-surface-2 border rounded-lg px-4 py-3 text-white text-sm placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50 transition-all duration-200 ${
      errors[field] ? 'border-red-500/50 bg-red-500/5' : 'border-border hover:border-border-light'
    }`

  return (
    <section
      id="contact"
      className="section-padding relative overflow-hidden"
      aria-labelledby="contact-heading"
      ref={ref}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 50% 60% at 30% 50%, rgba(59,130,246,0.04) 0%, transparent 60%)',
        }}
      />

      <div className="container-xl relative">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left: info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="mb-4"
            >
              <span className="section-label">Contact</span>
            </motion.div>
            <motion.h2
              id="contact-heading"
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-bold text-white leading-[1.1] tracking-tight mb-5"
              style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)' }}
            >
              LET&apos;S BUILD<br />
              <span className="gradient-text">TOGETHER.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-text-secondary text-sm leading-relaxed mb-8"
            >
              Tell us about your project and we&apos;ll get back to you within 24 hours.
            </motion.p>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-4"
            >
              {[
                {
                  icon: <Mail size={18} className="text-primary" />,
                  label: 'Email',
                  value: siteConfig.contact.email,
                  href: `mailto:${siteConfig.contact.email}`,
                },
                {
                  icon: <Phone size={18} className="text-primary" />,
                  label: 'Phone',
                  value: siteConfig.contact.phone,
                  href: `tel:${siteConfig.contact.phoneRaw}`,
                },
                {
                  icon: <InstagramIcon size={18} className="text-primary" />,
                  label: 'Instagram',
                  value: siteConfig.contact.instagramHandle,
                  href: siteConfig.contact.instagram,
                  external: true,
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  className="flex items-start gap-3 group"
                  aria-label={`${item.label}: ${item.value}`}
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors duration-200">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-text-muted text-xs uppercase tracking-wider mb-0.5">{item.label}</div>
                    <div className="text-white text-sm group-hover:text-primary-light transition-colors duration-200">
                      {item.value}
                    </div>
                  </div>
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right: form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="glass rounded-2xl p-7 border border-border">
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10"
                >
                  <CheckCircle size={48} className="text-emerald-400 mx-auto mb-4" />
                  <h3 className="font-display font-semibold text-white text-xl mb-2">Message Sent!</h3>
                  <p className="text-text-secondary text-sm">
                    Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 btn-outline text-sm py-2 px-5"
                    id="contact-send-another"
                  >
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  aria-label="Project request form"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    {/* Name */}
                    <div>
                      <label htmlFor="contact-name" className="block text-xs text-text-muted mb-1.5 font-medium">
                        Name <span className="text-red-400" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        placeholder="Your name"
                        value={form.name}
                        onChange={update('name')}
                        className={inputClass('name')}
                        aria-required="true"
                        aria-describedby={errors.name ? 'name-error' : undefined}
                        autoComplete="name"
                      />
                      {errors.name && (
                        <p id="name-error" className="text-red-400 text-xs mt-1" role="alert">{errors.name}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="contact-email" className="block text-xs text-text-muted mb-1.5 font-medium">
                        Email <span className="text-red-400" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={update('email')}
                        className={inputClass('email')}
                        aria-required="true"
                        aria-describedby={errors.email ? 'email-error' : undefined}
                        autoComplete="email"
                      />
                      {errors.email && (
                        <p id="email-error" className="text-red-400 text-xs mt-1" role="alert">{errors.email}</p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="contact-phone" className="block text-xs text-text-muted mb-1.5 font-medium">
                        Phone
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        name="phone"
                        placeholder="+91 98765 43210"
                        value={form.phone}
                        onChange={update('phone')}
                        className={inputClass('phone')}
                        autoComplete="tel"
                      />
                    </div>

                    {/* Company */}
                    <div>
                      <label htmlFor="contact-company" className="block text-xs text-text-muted mb-1.5 font-medium">
                        Company
                      </label>
                      <input
                        id="contact-company"
                        type="text"
                        name="company"
                        placeholder="Your company"
                        value={form.company}
                        onChange={update('company')}
                        className={inputClass('company')}
                        autoComplete="organization"
                      />
                    </div>

                    {/* Service */}
                    <div>
                      <label htmlFor="contact-service" className="block text-xs text-text-muted mb-1.5 font-medium">
                        Service <span className="text-red-400" aria-hidden="true">*</span>
                      </label>
                      <select
                        id="contact-service"
                        name="service"
                        value={form.service}
                        onChange={update('service')}
                        className={`${inputClass('service')} appearance-none cursor-pointer`}
                        aria-required="true"
                        aria-describedby={errors.service ? 'service-error' : undefined}
                      >
                        <option value="">Select a service</option>
                        <option value="Web Development">Web Development</option>
                        <option value="AI Automation">AI Automation</option>
                        <option value="AI Agent">AI Agent</option>
                        <option value="Custom Software">Custom Software</option>
                        <option value="E-commerce">E-commerce</option>
                        <option value="AI Integration">AI Integration</option>
                        <option value="Other">Other</option>
                      </select>
                      {errors.service && (
                        <p id="service-error" className="text-red-400 text-xs mt-1" role="alert">{errors.service}</p>
                      )}
                    </div>

                    {/* Budget */}
                    <div>
                      <label htmlFor="contact-budget" className="block text-xs text-text-muted mb-1.5 font-medium">
                        Budget
                      </label>
                      <select
                        id="contact-budget"
                        name="budget"
                        value={form.budget}
                        onChange={update('budget')}
                        className={`${inputClass('budget')} appearance-none cursor-pointer`}
                      >
                        <option value="">Select budget range</option>
                        <option value="Under ₹25,000">Under ₹25,000</option>
                        <option value="₹25,000 – ₹50,000">₹25,000 – ₹50,000</option>
                        <option value="₹50,000 – ₹1,00,000">₹50,000 – ₹1,00,000</option>
                        <option value="₹1,00,000+">₹1,00,000+</option>
                        <option value="Not sure yet">Not sure yet</option>
                      </select>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="mb-5">
                    <label htmlFor="contact-details" className="block text-xs text-text-muted mb-1.5 font-medium">
                      Project Details <span className="text-red-400" aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="contact-details"
                      name="details"
                      rows={5}
                      placeholder="Tell us about your project, goals and timeline..."
                      value={form.details}
                      onChange={update('details')}
                      className={`${inputClass('details')} resize-none`}
                      aria-required="true"
                      aria-describedby={errors.details ? 'details-error' : undefined}
                    />
                    {errors.details && (
                      <p id="details-error" className="text-red-400 text-xs mt-1" role="alert">{errors.details}</p>
                    )}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    id="contact-submit"
                    className="btn-primary w-full justify-center text-sm py-3.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
                    aria-busy={status === 'loading'}
                  >
                    {status === 'loading' ? (
                      <>
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Project Request
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
