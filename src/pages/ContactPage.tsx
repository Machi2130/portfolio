import { motion } from 'framer-motion'
import { PageTransition } from '../components/PageTransition'

export function ContactPage() {
  const items = [
    {
      label: 'Email',
      value: 'you@example.com',
      href: 'mailto:you@example.com',
    },
    {
      label: 'GitHub',
      value: 'github.com/yourhandle',
      href: 'https://github.com/yourhandle',
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/yourhandle',
      href: 'https://linkedin.com/in/yourhandle',
    },
    {
      label: 'Resume',
      value: 'Download PDF',
      href: '/resume.pdf',
    },
  ]

  return (
    <PageTransition>
      <section className="space-y-6">
        <h2 className="text-2xl md:text-4xl text-primary">Contact</h2>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {items.map((item, idx) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * idx }}
              className="border border-border bg-muted/40 px-4 py-3 text-sm text-foreground hover:border-primary hover:text-primary transition-colors"
            >
              <div className="text-xs text-muted-foreground">{item.label}</div>
              <div>{item.value}</div>
            </motion.a>
          ))}
        </div>
        <div className="mt-4 border border-border bg-muted/50 px-4 py-3 text-sm text-foreground">
          Currently open to .NET, Angular, and full-stack opportunities.
        </div>
      </section>
    </PageTransition>
  )
}

