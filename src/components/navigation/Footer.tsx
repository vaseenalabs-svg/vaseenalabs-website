import Image from 'next/image'

const fireflies = [
  { left: '12%', top: '18%', size: 7, delay: '0s' },
  { left: '74%', top: '30%', size: 9, delay: '2.4s' },
  { left: '52%', top: '74%', size: 8, delay: '1.3s' },
]

export default function Footer() {
  return (
    <footer className="relative mt-auto w-full px-4 pb-12 pt-8 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-[420px]">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-[32px]">
          {fireflies.map((firefly) => (
            <span
              key={`${firefly.left}-${firefly.top}`}
              className="absolute rounded-full bg-[#f1c98c] shadow-[0_0_18px_rgba(241,201,140,0.8)]"
              style={{
                left: firefly.left,
                top: firefly.top,
                width: `${firefly.size}px`,
                height: `${firefly.size}px`,
                animation: 'fireflyFloat 8s ease-in-out infinite',
                animationDelay: firefly.delay,
                opacity: 0.75,
              }}
            />
          ))}
        </div>

        <div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border border-[#e2d5c8] bg-[#fffdfb] shadow-[0_12px_24px_rgba(90,72,50,0.12)] sm:h-20 sm:w-20">
              <Image
                src="/images/Vaseena%20Labs%20Main%20Logo.png"
                alt="Vaseena Labs"
                width={88}
                height={88}
                className="h-full w-full object-contain p-1"
              />
            </div>

            <a
              href="#"
              aria-label="Vaseena Labs"
              className="text-lg font-semibold tracking-[-0.04em] text-[#1d1a17] transition-colors duration-200 hover:text-[#544536] focus:text-[#544536] sm:text-xl"
            >
              Vaseena Labs
            </a>

            <p className="mt-3 max-w-[260px] text-sm leading-6 text-[#5d5a57] sm:text-[0.95rem]">
              Designing digital experiences. Automating intelligent businesses.
            </p>

            <div className="mt-5 flex items-center justify-center gap-2" aria-label="Social links">
              <a
                href="#"
                aria-label="Google"
                className="inline-flex size-8 items-center justify-center rounded-full border border-[#e8dfd5] bg-white/30 text-[#5d5a57] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#f8f3ee] hover:text-[#1d1a17] focus:bg-[#f8f3ee] focus:text-[#1d1a17] sm:size-9"
              >
                <svg viewBox="0 0 16 16" aria-hidden="true" className="size-3.5 fill-current sm:size-3.75">
                  <path d="M8 3.5c1.5 0 2.8.5 3.8 1.5l2.8-2.8C12.4.9 10.5 0 8 0 4.8 0 2.1 1.7.8 4.2l3.3 2.6C5 5.4 6.3 3.5 8 3.5ZM16 8.1c0-.7-.1-1.3-.2-1.9H8v3.6h4.4c-.2 1.1-.9 2.1-1.9 2.7l3.1 2.3C15.1 13.2 16 10.8 16 8.1ZM4.2 9.4A4.9 4.9 0 0 1 4 8c0-.7.1-1.3.3-1.9L1 3.6A7.9 7.9 0 0 0 0 8a7.9 7.9 0 0 0 1 4.4l3.2-2.6Zm3.8 3.8c1.7 0 3.2-.5 4.3-1.5l3.1 2.3A8.1 8.1 0 0 1 8 16c-3.2 0-6-1.7-7.5-4.2l3.1-2.3c1.1 1 2.6 1.6 4.4 1.6Z" />
                </svg>
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="inline-flex size-8 items-center justify-center rounded-full border border-[#e8dfd5] bg-white/30 text-[#5d5a57] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#f8f3ee] hover:text-[#1d1a17] focus:bg-[#f8f3ee] focus:text-[#1d1a17] sm:size-9"
              >
                <svg viewBox="0 0 16 16" aria-hidden="true" className="size-3.5 fill-current sm:size-3.75">
                  <path d="M12.6 1h2.2l-4.8 5.4L15.7 15h-4.5l-3.5-5-4 5H1.5l5.2-5.9L.3 1h4.6l3.2 4.8L12.6 1Zm-.8 12.6h1.2L4.7 2.3H3.4l8.4 11.3Z" />
                </svg>
              </a>

              <a
                href="#"
                aria-label="GitHub"
                className="inline-flex size-8 items-center justify-center rounded-full border border-[#e8dfd5] bg-white/30 text-[#5d5a57] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#f8f3ee] hover:text-[#1d1a17] focus:bg-[#f8f3ee] focus:text-[#1d1a17] sm:size-9"
              >
                <svg viewBox="0 0 16 16" aria-hidden="true" className="size-3.5 fill-current sm:size-3.75">
                  <path d="M8 0a8 8 0 0 0-2.5 15.5c.4.1.5-.2.5-.4v-1.4c-2.1.5-2.6-1-2.6-1-.3-.9-.8-1.2-.8-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.2 1.9 1 2.3.8.1-.6.3-1 .5-1.3-1.7-.2-3.4-.9-3.4-3.9 0-.9.3-1.6.8-2.2-.1-.2-.3-1 .1-2.1 0 0 .7-.2 2.3.9A7.8 7.8 0 0 1 8 4.3c.7 0 1.4.1 2 .3 1.6-1.1 2.3-.9 2.3-.9.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.2 0 3-1.7 3.7-3.4 3.9.3.3.6.8.6 1.6v2.4c0 .2.1.5.6.4A8 8 0 0 0 8 0Z" />
                </svg>
              </a>

              <a
                href="#"
                aria-label="Slack"
                className="inline-flex size-8 items-center justify-center rounded-full border border-[#e8dfd5] bg-white/30 text-[#5d5a57] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#f8f3ee] hover:text-[#1d1a17] focus:bg-[#f8f3ee] focus:text-[#1d1a17] sm:size-9"
              >
                <svg viewBox="0 0 16 16" aria-hidden="true" className="size-3.5 fill-current sm:size-3.75">
                  <path d="M6 1.5a1.5 1.5 0 1 1 3 0v2.4H6V1.5Zm-1.5 4a1.5 1.5 0 0 1 1.5 1.5v.6H2.2A1.5 1.5 0 0 1 1 6.3a1.5 1.5 0 0 1 1.5-1.5H4.5Zm5.7 0h1.8A1.5 1.5 0 0 1 13.5 6.3a1.5 1.5 0 0 1-1.5 1.5h-1.8V5.5Zm-7.1 3A1.5 1.5 0 1 1 6 10.5v2.4H4.5A1.5 1.5 0 0 1 3 11.4a1.5 1.5 0 0 1 1.5-1.5h.6Zm6.7 0h1.8A1.5 1.5 0 0 1 13.5 11.4 1.5 1.5 0 0 1 12 13h-1.8v-2.4Zm-5.2 2.7a1.5 1.5 0 0 1 1.5-1.5h.6v2.4a1.5 1.5 0 1 1-3 0v-1.5Zm7.3-1.5a1.5 1.5 0 0 1 1.5 1.5v1.5a1.5 1.5 0 0 1-3 0v-2.4h1.5Z" />
                </svg>
              </a>
            </div>

            <p className="mt-5 text-[10px] font-medium uppercase tracking-[0.22em] text-[#7a6d61]">
              © 2026 Vaseena Labs
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
