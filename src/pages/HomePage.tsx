import { motion } from 'framer-motion'
import { Phone, Mail, Github, Linkedin, MapPin } from 'lucide-react'
import { PageTransition } from '../components/PageTransition'
import { useEffect, useState } from 'react'

const HOOKS = [
  'I turn requirements into production-ready code.',
  'I build things that actually ship.',
  'Full stack. Zero fluff.',
  'From database schema to Angular UI — end to end.',
]

function TypewriterHook() {
  const [hookIndex, setHookIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    const current = HOOKS[hookIndex]

    if (paused) {
      const t = setTimeout(() => {
        setPaused(false)
        setDeleting(true)
      }, 2200)
      return () => clearTimeout(t)
    }

    if (!deleting && displayed.length < current.length) {
      const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 40)
      return () => clearTimeout(t)
    }

    if (!deleting && displayed.length === current.length) {
      setPaused(true)
      return
    }

    if (deleting && displayed.length > 0) {
      const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 22)
      return () => clearTimeout(t)
    }

    if (deleting && displayed.length === 0) {
      setDeleting(false)
      setHookIndex((i) => (i + 1) % HOOKS.length)
    }
  }, [displayed, deleting, paused, hookIndex])

  return (
    <span className="text-primary">
      {displayed}
      <span className="inline-block w-[2px] h-[1em] bg-primary align-middle ml-0.5 animate-pulse" />
    </span>
  )
}

export function HomePage() {
  const contacts = [
    {
      label: 'Phone',
      value: '+91-8169703820',
      icon: Phone,
    },
    {
      label: 'Email',
      value: 'pshivale21@gmail.com',
      icon: Mail,
      href: 'mailto:pshivale21@gmail.com',
    },
    {
      label: 'GitHub',
      value: 'github.com/prathameshshivale',
      icon: Github,
      href: 'https://github.com/prathameshshivale',
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/prathameshshivale',
      icon: Linkedin,
      href: 'https://linkedin.com/in/prathameshshivale',
    },
    {
      label: 'Location',
      value: 'Kharghar, Navi Mumbai, India',
      icon: MapPin,
    },
  ] as const

  const stats = [
    { value: '3+', label: 'Years Experience' },
    { value: '3',  label: 'Domains Shipped' },
    { value: '4',  label: 'Projects Delivered' },
    { value: '5',  label: 'Team Avg. Size' },
  ]

  return (
    <PageTransition>
      <main className="flex flex-1 flex-col justify-center gap-6 sm:gap-8 py-8">

        {/* Name */}
        <motion.h1
          className="font-bold leading-[0.95] tracking-tight text-terminal-bright text-[clamp(2.75rem,7vw,6rem)]"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Hi, I&apos;m{' '}
          <span className="text-primary">Prathamesh Shivale</span>
        </motion.h1>

        {/* Role */}
        <motion.h2
          className="text-muted-foreground text-[clamp(1.125rem,2.2vw,1.75rem)]"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
        >
          .NET &amp; Angular Developer · 3 Years Experience
        </motion.h2>

        {/* Typewriter hook */}
        <motion.p
          className="text-[clamp(1rem,1.8vw,1.35rem)] font-mono min-h-[1.8em]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <TypewriterHook />
        </motion.p>

        {/* Bio */}
        <motion.p
  className="max-w-3xl text-foreground text-[clamp(0.95rem,1.5vw,1.15rem)] leading-relaxed border-l-2 border-primary pl-4"
  initial={{ opacity: 0, y: 8 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.55 }}
>
  Full-stack developer with 3 years of experience across the complete SDLC — from database
  design and REST API development to Angular UI delivery. Specialized in ASP.NET Core and
  Angular (8+) for enterprise web applications, with strong Python backend experience using
  FastAPI, Flask, and Docker. Worked across Retail, Technology, and Import/Export domains,
  delivering production systems with SQL Server, PostgreSQL, Redis, and AWS.
</motion.p>


        {/* Stats row */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-px border border-border w-full max-w-xl"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center justify-center py-3 px-2 bg-muted/40 hover:bg-muted/70 transition-colors"
            >
              <span className="text-xl md:text-2xl font-bold text-primary tabular-nums">{s.value}</span>
              <span className="text-[10px] text-muted-foreground uppercase tracking-widest mt-0.5 text-center">{s.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Contact links */}
        <motion.div
          className="grid gap-3 text-[clamp(0.9rem,1.3vw,1.05rem)]"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12, delayChildren: 0.75 } },
          }}
        >
          {contacts.map((item) => {
            const Icon = item.icon
            const content = (
              <span className="cursor-pointer text-primary hover:underline">
                {item.value}
              </span>
            )

            return (
              <motion.div
                key={item.label}
                variants={{
                  hidden: { opacity: 0, y: 4 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="flex items-start gap-3 sm:gap-4"
              >
                <Icon className="mt-1 h-4 w-4 text-primary shrink-0" />
                <span className="w-20 sm:w-24 text-muted-foreground shrink-0 text-sm">{item.label}</span>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                  >
                    {content}
                  </a>
                ) : (
                  content
                )}
              </motion.div>
            )
          })}
        </motion.div>

      </main>
    </PageTransition>
  )
}
