import { motion } from 'framer-motion'
import { PageTransition } from '../components/PageTransition'
import { ExternalLink } from 'lucide-react'

export function ProjectsPage() {
const projects = [
  {
    title: 'LegalVault — AI-Powered Legal Judgment Intelligence',
    year: '2025',
    tech: ['Python', 'PyTorch', 'Groq Llama 3', 'Jina Embeddings', 'Flask', 'AWS S3'],
    bullets: [
      'Built an AI system to process and analyze 10,000+ Indian High Court judgments using LLM-based entity extraction.',
      'Implemented semantic search using Jina embeddings with GPU-accelerated similarity computation in PyTorch.',
      'Designed an automated pipeline for PDF extraction and structured legal entity generation, reducing manual review workload by ~60%.',
      'Developed a Flask REST API enabling instant retrieval of legally similar cases and structured analytics.',
    ],
    repo: '#',
  },
  {
    title: 'AI-Powered Stock Analysis Platform',
    year: '2024',
    tech: ['Python', 'Pinecone', 'Sentence Transformers', 'Groq LLM'],
    bullets: [
      'Developed an AI-powered stock analysis platform evaluating companies using financial ratios and valuation metrics across 1,000+ equities.',
      'Integrated Pinecone vector database and LLM-based explanations to generate contextual investment insights.',
      'Implemented scoring algorithms with nonlinear valuation penalties and automated red-flag detection for risky stocks.',
      'Optimized architecture for scalability, reducing query response time by ~30% and supporting large-scale analysis.',
    ],
    repo: '#',
  },
  {
    title: 'Multi-Database AI Query Generator',
    year: '2024',
    tech: ['Python', 'Flask', 'MySQL', 'PostgreSQL', 'MongoDB', 'SQLite'],
    bullets: [
      'Built a backend platform converting natural language queries into SQL using a modular Flask architecture.',
      'Implemented support for MySQL, PostgreSQL, MongoDB, and SQLite, enabling unified querying across multiple database systems.',
      'Developed schema extraction and validation logic, reducing invalid query execution by ~40%.',
      'Designed a session-based connection manager handling multiple concurrent database connections efficiently.',
    ],
    repo: '#',
  },
  {
    title: 'AI-Based Mental Health Detection System',
    year: 'Jul 2022 – Nov 2022',
    tech: ['Python', 'TensorFlow', 'BERT', 'LSTM', 'Scikit-learn'],
    bullets: [
      'Built an AI system to detect mental health indicators from user text and MCQ responses using NLP techniques on a dataset of 5,000+ records.',
      'Implemented and compared ML models including Random Forest, XGBoost, BERT, and LSTM, improving classification accuracy by ~12%.',
      'Developed a preprocessing pipeline for text cleaning, tokenization, and feature extraction, reducing model training noise by ~20%.',
      'Evaluated models using accuracy and NLP metrics, selecting the best-performing model for reliable mental health assessment.',
    ],
    repo: '#',
  },
  {
    title: 'Secure Remote Linux Environment',
    year: '2023',
    tech: ['Docker', 'Ubuntu', 'XFCE', 'noVNC', 'NGINX', 'Cloudflare'],
    bullets: [
      'Created a browser-accessible Linux desktop using Docker, XFCE, and noVNC for remote system access.',
      'Configured NGINX reverse proxy with HTTPS, improving connection security and reducing attack surface.',
      'Integrated VPN access and firewall rules, strengthening infrastructure security for remote environments.',
      'Implemented Cloudflare Tunnel to eliminate port exposure and improve secure connectivity for distributed access.',
    ],
    repo: '#',
  },
  {
    title: 'Team Project Planner — Factwise Assessment',
    year: '2024',
    tech: ['Python', 'Flask', 'REST API', 'JSON Persistence'],
    bullets: [
      'Developed a backend project management system supporting users, teams, boards, and task workflows.',
      'Designed RESTful APIs for task creation, assignment, and status tracking across project boards.',
      'Implemented modular architecture using abstract base classes, improving code maintainability and extensibility.',
      'Built JSON-based persistence layer to manage users, teams, boards, and tasks with efficient data handling.',
    ],
    repo: 'https://github.com/Machi2130/Factwise1',
  },
]

  return (
    <PageTransition>
      <section className="w-full">
        <h2 className="mb-8 text-2xl md:text-4xl text-primary">Projects</h2>

        <div className="flex flex-col divide-y divide-border border border-border">
          {projects.map((project, idx) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.08 * idx }}
              className="group flex flex-col md:flex-row md:items-start gap-4 md:gap-8 px-5 py-6 bg-muted/40 hover:bg-muted/70 transition-colors"
            >
              {/* Index number */}
              <span className="hidden md:block text-3xl font-bold text-border select-none w-8 shrink-0 pt-1">
                {String(idx + 1).padStart(2, '0')}
              </span>

              {/* Main content */}
              <div className="flex-1 min-w-0">
                {/* Title + Year */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                  <h3 className="text-base md:text-lg text-terminal-bright group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-xs text-muted-foreground shrink-0">{project.year}</span>
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="border border-border bg-secondary px-2.5 py-0.5 text-xs text-secondary-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Bullet points */}
                <ul className="space-y-1.5">
                  {project.bullets.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-foreground leading-relaxed">
                      <span className="text-primary mt-1 shrink-0">▸</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* GitHub link */}
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                className="shrink-0 self-start md:self-center inline-flex items-center gap-2 border border-primary px-4 py-2 text-xs text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                GitHub
              </a>
            </motion.article>
          ))}
        </div>
      </section>
    </PageTransition>
  )
}
