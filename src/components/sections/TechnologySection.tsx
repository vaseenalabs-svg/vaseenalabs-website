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

const cloudItems = [
  { name: 'React', logo: 'https://cdn.simpleicons.org/react/react' },
  { name: 'Next.js', logo: 'https://cdn.simpleicons.org/nextdotjs/nextdotjs' },
  { name: 'HTML', logo: 'https://cdn.simpleicons.org/html5/html5' },
  { name: 'CSS', logo: 'https://cdn.simpleicons.org/css3/css3' },
  { name: 'JavaScript', logo: 'https://cdn.simpleicons.org/javascript/javascript' },
  { name: 'TypeScript', logo: 'https://cdn.simpleicons.org/typescript/typescript' },
  { name: 'Tailwind CSS', logo: 'https://cdn.simpleicons.org/tailwindcss/tailwindcss' },
  { name: 'Node.js', logo: 'https://cdn.simpleicons.org/nodedotjs/nodedotjs' },
  { name: 'Express', logo: 'https://cdn.simpleicons.org/express/express' },
  { name: 'Python', logo: 'https://cdn.simpleicons.org/python/python' },
  { name: 'FastAPI', logo: 'https://cdn.simpleicons.org/fastapi/fastapi' },
  { name: 'OpenAI', logo: 'https://cdn.simpleicons.org/openai/openai' },
  { name: 'Google Gemini', logo: 'https://cdn.simpleicons.org/google/google' },
  { name: 'LangChain', logo: 'https://cdn.simpleicons.org/langchain/langchain' },
  { name: 'LangGraph', logo: undefined },
  { name: 'RAG', logo: undefined },
  { name: 'AI Agents', logo: undefined },
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
  { name: 'AWS', logo: 'https://cdn.simpleicons.org/amazonaws/amazonaws' },
] as const

export default function TechnologySection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-20 md:py-28"
      aria-labelledby="tech-heading"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(96,165,250,0.12),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.1),transparent_35%)]" />
      <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:26px_26px]" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto mb-8 max-w-2xl text-center md:mb-12">
          <div className="mb-4 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-neutral-200">
              technology
            </span>
          </div>

          <h2
            id="tech-heading"
            className="text-3xl font-semibold tracking-[-0.06em] text-white md:text-5xl"
          >
            POWERED BY <span className="bg-gradient-to-r from-[#f7f1e5] via-[#d7d9df] to-[#a5b4fc] bg-clip-text text-transparent">MODERN TECHNOLOGY</span>
          </h2>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b1020]/80 p-4 shadow-[0_30px_120px_rgba(15,23,42,0.45)] backdrop-blur-xl md:p-8">
          <div className="hidden lg:block">
            <div className="relative mx-auto h-[460px] w-full max-w-[780px]">
              <div className="pointer-events-none absolute inset-0 rounded-[1.6rem] border border-white/10 bg-[radial-gradient(circle_at_center,rgba(96,165,250,0.12),rgba(11,15,26,0.9)_50%,rgba(4,7,15,1)_100%)]" />

              <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
                <IconCloud items={cloudItems} showControl={false} />
              </div>

              {techGroups.map((group) => (
                <div
                  key={group.label}
                  className="absolute z-10 w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-[1.2rem] border border-white/10 bg-white/[0.04] p-3 shadow-[0_16px_40px_rgba(15,23,42,0.35)] backdrop-blur-md"
                  style={{
                    left: group.position.left,
                    top: group.position.top,
                  }}
                >
                  <div className="mb-2 flex items-center gap-2">
                    <span
                      className="h-2.5 w-2.5 rounded-full"
                      style={{ background: group.accent }}
                    />
                    <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-neutral-300">
                      {group.label}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-black/20 px-2 py-1 text-[9px] text-neutral-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-3 lg:hidden">
            {techGroups.map((group) => (
              <div
                key={group.label}
                className="rounded-[1.3rem] border border-white/10 bg-white/[0.03] p-4"
              >
                <div className="mb-3 flex items-center gap-2">
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ background: group.accent }}
                  />
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-300">
                    {group.label}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-[10px] text-neutral-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 block lg:hidden">
            <div className="mx-auto flex w-full max-w-[420px] items-center justify-center">
              <IconCloud items={cloudItems} showControl={false} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
