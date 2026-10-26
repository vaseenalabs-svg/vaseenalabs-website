'use client'

import { IconCloud } from '@/components/ui/icon-cloud'

const techGroups = [
  {
    label: 'Frontend',
    accent: '#60a5fa',
    items: ['React', 'Next.js', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'Tailwind CSS'],
    position: { top: '8%', left: '50%' },
  },
  {
    label: 'Backend',
    accent: '#34d399',
    items: ['Node.js', 'Express', 'Python', 'FastAPI'],
    position: { top: '28%', left: '10%' },
  },
  {
    label: 'AI',
    accent: '#a78bfa',
    items: ['OpenAI', 'Google Gemini', 'LangChain', 'LangGraph', 'RAG', 'AI Agents'],
    position: { top: '28%', left: '82%' },
  },
  {
    label: 'Databases',
    accent: '#fbbf24',
    items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Supabase'],
    position: { top: '70%', left: '18%' },
  },
  {
    label: 'DevOps',
    accent: '#22d3ee',
    items: ['Docker', 'Cloud', 'REST APIs', 'Git', 'CI/CD', 'Terraform', 'Kubernetes', 'AWS'],
    position: { top: '70%', left: '82%' },
  },
] as const

const customAwsLogo =
  'data:image/svg+xml;charset=UTF-8,' +
  encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
      <rect width="40" height="40" rx="10" fill="#0b1324"/>
      <path d="M20 7 30 12.2v15.6L20 33 10 27.8V12.2L20 7Zm-7 9.5v8.8l3.8 1.8V18.5L20 16l4.2 2.5v8.7l3.8-1.8v-8.8L20 12l-7 4.5Z" fill="#FF9900"/>
      <path d="M14.5 16.6h3.7l1.8 5.7h.1l1.8-5.7h3.7l-3.3 9.2h-3.9l-3.9-9.2Z" fill="#fff"/>
    </svg>
  `)

const customOpenAILogo =
  'data:image/svg+xml;charset=UTF-8,' +
  encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
      <rect width="40" height="40" rx="10" fill="#0d0d0d"/>
      <path d="M20.1 7.8c-1.6 0-3.2.5-4.5 1.5l-2.8 2c-.5.4-.6 1-.3 1.5l1.2 2.1c.3.6 1.1.9 1.8.6l2.5-1.1c.7-.3 1.5-.3 2.2 0l2.5 1.1c.7.3 1.5 0 1.8-.6l1.3-2.1c.3-.5.2-1.1-.3-1.5l-2.7-2c-1.4-1-3-1.5-4.6-1.5Z" fill="#FFFFFF"/>
      <path d="M12.5 17.8c-1 0-1.9.8-2 1.8l-.4 4.7c-.1 1 .7 1.9 1.7 1.9h2.6l2.2-4.2c.4-.8.4-1.7 0-2.5l-1.6-3.1c-.4-.7-1.2-1.1-2.1-1.1h-.4Z" fill="#FFFFFF" opacity=".95"/>
      <path d="M27.5 17.8c1 0 1.9.8 2 1.8l.4 4.7c.1 1-.7 1.9-1.7 1.9h-2.6l-2.2-4.2c-.4-.8-.4-1.7 0-2.5l1.6-3.1c.4-.7 1.2-1.1 2.1-1.1h.4Z" fill="#FFFFFF" opacity=".95"/>
      <path d="M18.7 17.1h2.6l2 7.9h-2.6l-.5-1.9h-2.1l-.5 1.9h-2.6l2-7.9Z" fill="#0d0d0d"/>
      <circle cx="20" cy="20" r="2.1" fill="#0d0d0d"/>
    </svg>
  `)

const customLangChainLogo =
  'data:image/svg+xml;charset=UTF-8,' +
  encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
      <rect width="40" height="40" rx="10" fill="#0f172a"/>
      <path d="M11 12h7.2v3.4H17v9.2h-3.1V12Zm7.8 0h3.8l5.3 12.6h-3.5l-1-2.7H17l-1 2.7H12.6L18.8 12Zm.8 3.3 1.5 4.2h-3l1.5-4.2Z" fill="#3FA9F5"/>
    </svg>
  `)

const customLangGraphLogo =
  'data:image/svg+xml;charset=UTF-8,' +
  encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
      <rect width="40" height="40" rx="10" fill="#0f172a"/>
      <path d="M10 12h20v3H10v-3Zm0 10h20v3H10v-3Zm-1-5h3v3H9v-3Zm5 0h3v3h-3v-3Zm5 0h3v3h-3v-3Zm5 0h3v3h-3v-3Zm5 0h3v3h-3v-3Z" fill="#9AE6B4"/>
      <circle cx="15" cy="20" r="2.5" fill="#F59E0B"/>
      <circle cx="25" cy="20" r="2.5" fill="#60A5FA"/>
    </svg>
  `)

const customRagLogo =
  'data:image/svg+xml;charset=UTF-8,' +
  encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
      <rect width="40" height="40" rx="10" fill="#0f172a"/>
      <path d="M12 11.5h4.8l5 7.5 5-7.5H28v17h-4.4v-10.8l-4.5 6.5-4.5-6.5V28.5H12v-17Z" fill="#F8FAFC"/>
      <circle cx="20" cy="11.5" r="3.5" fill="#34D399"/>
    </svg>
  `)

const customAiLogo =
  'data:image/svg+xml;charset=UTF-8,' +
  encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
      <rect width="40" height="40" rx="10" fill="#0f172a"/>
      <path d="M10 25.5V14.5h4.2l3.2 5.4 3.3-5.4h4.3v11h-3.5v-6.8l-3.1 5.2h-1.5l-3.1-5.2v6.8H10Zm16.5-11h3.5v11h-3.5V14.5Z" fill="#C084FC"/>
      <circle cx="25.5" cy="11.5" r="2.2" fill="#60A5FA"/>
    </svg>
  `)

const customCssLogo =
  'data:image/svg+xml;charset=UTF-8,' +
  encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
      <rect width="40" height="40" rx="10" fill="#0f172a"/>
      <path d="M12 10.5 9.5 28l10.5 3.5 10.5-3.5L28 10.5H12Zm14.3 6.1-6.7 2.8v-3.1l6.9-3.1 1.1 2.7-1.3 1.7Zm-7.8 4.4 1.4-1.8h4.8l1.5 1.8-3.4 1.5-4.3-1.5Zm9.8 3.8-1.6 4.2-5.7 1.9-5.7-1.9-1.3-3.6 2.8-1.1 1 2.7 3.1 1 3.1-1 1.1-2.7 2.6 1.1Z" fill="#2F9AE5"/>
    </svg>
  `)

const cloudItems = [
  { name: 'React', logo: 'https://cdn.simpleicons.org/react/react' },
  { name: 'Next.js', logo: 'https://cdn.simpleicons.org/nextdotjs/nextdotjs' },
  { name: 'HTML', logo: 'https://cdn.simpleicons.org/html5/html5' },
  { name: 'CSS', logo: customCssLogo },
  { name: 'JavaScript', logo: 'https://cdn.simpleicons.org/javascript/javascript' },
  { name: 'TypeScript', logo: 'https://cdn.simpleicons.org/typescript/typescript' },
  { name: 'Tailwind CSS', logo: 'https://cdn.simpleicons.org/tailwindcss/tailwindcss' },
  { name: 'Node.js', logo: 'https://cdn.simpleicons.org/nodedotjs/nodedotjs' },
  { name: 'Express', logo: 'https://cdn.simpleicons.org/express/express' },
  { name: 'Python', logo: 'https://cdn.simpleicons.org/python/python' },
  { name: 'FastAPI', logo: 'https://cdn.simpleicons.org/fastapi/fastapi' },
  { name: 'OpenAI', logo: customOpenAILogo },
  { name: 'Google Gemini', logo: 'https://cdn.simpleicons.org/google/google' },
  { name: 'LangChain', logo: customLangChainLogo },
  { name: 'LangGraph', logo: customLangGraphLogo },
  { name: 'RAG', logo: customRagLogo },
  { name: 'AI Agents', logo: customAiLogo },
  { name: 'AI', logo: customAiLogo },
  { name: 'MongoDB', logo: 'https://cdn.simpleicons.org/mongodb/mongodb' },
  { name: 'PostgreSQL', logo: 'https://cdn.simpleicons.org/postgresql/postgresql' },
  { name: 'MySQL', logo: 'https://cdn.simpleicons.org/mysql/mysql' },
  { name: 'Supabase', logo: 'https://cdn.simpleicons.org/supabase/supabase' },
  { name: 'Docker', logo: 'https://cdn.simpleicons.org/docker/docker' },
  { name: 'Cloud', logo: 'https://cdn.simpleicons.org/cloudflare/cloudflare' },
  { name: 'REST APIs', logo: 'https://cdn.simpleicons.org/postman/postman' },
  { name: 'Git', logo: 'https://cdn.simpleicons.org/git/git' },
  { name: 'CI/CD', logo: 'https://cdn.simpleicons.org/githubactions/githubactions' },
  { name: 'Terraform', logo: 'https://cdn.simpleicons.org/terraform/terraform' },
  { name: 'Kubernetes', logo: 'https://cdn.simpleicons.org/kubernetes/kubernetes' },
  { name: 'AWS', logo: customAwsLogo },
] as const
 
export default function TechnologySection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-20 md:py-28"
      aria-labelledby="tech-heading"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.65),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(159,169,201,0.18),transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto mb-8 max-w-5xl text-center md:mb-12">
          <div className="mb-5 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/40 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#1b1a1d] shadow-[0_10px_25px_rgba(0,0,0,0.04)] backdrop-blur-sm sm:px-4 sm:py-2 sm:text-[10px]">
              technology
            </span>
          </div>

          <h2
            id="tech-heading"
            className="text-[2.1rem] font-black leading-[0.8] tracking-[-0.08em] text-[#141414] sm:text-5xl md:text-6xl lg:text-[5rem]"
          >
            POWERED BY{' '}
            <span className="bg-gradient-to-r from-[#4b4b58] via-[#7c7b84] to-[#b5accf] bg-clip-text text-transparent">
              MODERN
            </span>
            <span className="block">TECHNOLOGY</span>
          </h2>
        </div>

        <div className="relative overflow-hidden rounded-[1.75rem] border border-black/5 bg-[rgba(135,131,123,0.08)] p-3 shadow-[0_22px_70px_rgba(88,76,62,0.08)] backdrop-blur-md sm:rounded-[2rem] md:p-6 lg:p-8">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.22),rgba(255,255,255,0.04)_40%,transparent_72%)]" />

          <div className="hidden lg:block">
            <div className="relative mx-auto h-[360px] w-full max-w-[760px] md:h-[400px] xl:h-[500px]">
              <div className="pointer-events-none absolute inset-0 rounded-[1.6rem] border border-black/5 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),rgba(240,236,228,0.06)_42%,rgba(244,239,233,0.02)_100%)]" />

              <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
                <IconCloud items={cloudItems} showControl={false} />
              </div>

              {techGroups.map((group) => (
                <div
                  key={group.label}
                  className="absolute z-10 w-[150px] -translate-x-1/2 -translate-y-1/2 rounded-[1.1rem] border border-black/5 bg-[rgba(255,255,255,0.22)] p-2.5 shadow-[0_18px_36px_rgba(63,52,42,0.08)] backdrop-blur-sm md:w-[170px] xl:w-[200px]"
                  style={{
                    left: group.position.left,
                    top: group.position.top,
                  }}
                >
                  <div className="mb-2 flex items-center gap-2">
                    <span
                      className="h-2.5 w-2.5 rounded-full shadow-[0_0_12px_rgba(255,255,255,0.7)]"
                      style={{ background: group.accent }}
                    />
                    <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-[#1d1b1d] md:text-[9px] xl:text-[10px]">
                      {group.label}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-black/5 bg-white/60 px-1.5 py-1 text-[8px] text-[#222226] md:text-[9px] xl:text-[10px]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10 mt-8 grid gap-3 md:grid-cols-2 lg:hidden">
            {techGroups.map((group) => (
              <div
                key={group.label}
                className="rounded-[1.3rem] border border-black/5 bg-[rgba(255,255,255,0.18)] p-4 shadow-[0_10px_30px_rgba(63,52,42,0.05)]"
              >
                <div className="mb-3 flex items-center gap-2">
                  <span
                    className="h-2.5 w-2.5 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.7)]"
                    style={{ background: group.accent }}
                  />
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1d1b1d]">
                    {group.label}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-black/5 bg-white/60 px-2.5 py-1 text-[10px] text-[#222226]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="relative z-10 mt-6 block lg:hidden">
            <div className="mx-auto flex w-full max-w-[420px] items-center justify-center">
              <IconCloud items={cloudItems} showControl={false} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
