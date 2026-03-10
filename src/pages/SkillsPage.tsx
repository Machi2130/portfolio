import { motion } from 'framer-motion'
import { PageTransition } from '../components/PageTransition'

export function SkillsPage() {
  const categories = [
    {
      name: 'Languages',
      skills: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C++'],
    },
    {
      name: 'Frontend',
      skills: ['Angular', 'ReactJS', 'RxJS', 'HTML', 'SCSS', 'Tailwind CSS'],
    },
    {
      name: 'Backend',
      skills: ['ASP.NET Core', 'FastAPI', 'Flask', 'Node.js', 'REST APIs', 'WebSockets'],
    },
    {
      name: 'Databases',
      skills: ['SQL Server', 'PostgreSQL', 'MySQL', 'MongoDB', 'SQLite', 'Redis'],
    },
    {
      name: 'Cloud & DevOps',
      skills: ['AWS', 'Docker', 'Kubernetes', 'Firebase', 'NGINX', 'Cloudflare', 'CI/CD'],
    },
    {
      name: 'Tools',
      skills: ['Git', 'GitHub', 'Jenkins', 'Postman', 'SSMS', 'Visual Studio'],
    },
    {
      name: 'Other',
      skills: ['Linux', 'Windows', 'Groq API', 'Pinecone', 'Prometheus', 'Grafana'],
    },
  ]

  return (
    <PageTransition>
      <section className="w-full">
        <h2 className="mb-10 text-2xl md:text-4xl text-primary">Skills</h2>

        <div className="flex flex-col">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.06 * idx }}
              className="group grid grid-cols-[auto_1fr] items-baseline gap-6 md:gap-10 border-t border-border py-6 hover:bg-muted/30 px-2 transition-colors cursor-default"
            >
              {/* Index + Category */}
              <div className="flex items-baseline gap-4 min-w-[180px]">
                <span className="text-xs text-border select-none tabular-nums">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <span className="text-base md:text-lg text-terminal-bright group-hover:text-primary transition-colors">
                  {cat.name}
                </span>
              </div>

              {/* Skills — inline plain text */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
                {cat.skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.06 * idx + 0.03 * i }}
                    className="text-sm md:text-base text-foreground group-hover:text-foreground/90 transition-colors"
                  >
                    {skill}
                    {i < cat.skills.length - 1 && (
                      <span className="ml-4 text-border select-none">·</span>
                    )}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Bottom border */}
          <div className="border-t border-border" />
        </div>
      </section>
    </PageTransition>
  )
}
