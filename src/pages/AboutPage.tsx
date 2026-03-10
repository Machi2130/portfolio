import { motion } from 'framer-motion'
import { PageTransition } from '../components/PageTransition'

export function AboutPage() {
  return (
    <PageTransition>
      <section className="space-y-10">

        {/* About */}
        <div>
          <h2 className="text-2xl md:text-4xl text-primary mb-4">About</h2>
          <p className="max-w-none text-[clamp(1rem,1.3vw,1.25rem)] leading-relaxed text-foreground">
            Angular and .NET developer with 3 years of experience (including internship) building
            scalable, component-driven web applications. Comfortable across the full stack with
            Angular (8+), ASP.NET Core, Python (Flask/Django/FastAPI), and SQL Server, covering the
            full SDLC from requirements to deployment. Started working from the second year of
            college and have contributed to products in retail, technology, and import/export
            domains.
          </p>
        </div>

        <div className="h-px bg-border" />

        {/* Education */}
        <div>
          <h3 className="mb-6 text-xl md:text-2xl text-terminal-bright">Education</h3>
          <div className="border-l-2 border-primary pl-6 space-y-6">

            <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.08 }}>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h4 className="font-semibold text-foreground">B.Tech – Computer Engineering</h4>
                <span className="text-xs text-muted-foreground">2021 – 2024</span>
              </div>
              <p className="text-xs text-muted-foreground mt-0.5">
                Bharati Vidyapeeth Deemed University, Pune · CGPA: 9.6
              </p>
              <div className="mt-3 space-y-3">
                <div>
                  <p className="text-xs text-primary mb-1.5">Final Year Project</p>
                  <div className="flex flex-wrap items-baseline justify-between gap-1">
                    <span className="text-sm font-medium text-foreground">Mental Health Detection Application</span>
                    <span className="text-xs text-muted-foreground">Jul 2022 – Nov 2022</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-0.5 mb-2">Team: 2 · Role: ML Developer</p>
                  <ul className="space-y-1.5">
                    {[
                      'Built a Python application using SVM and SQLite for mental health assessment.',
                      'Compared BERT, LSTM, XGBoost, Random Forest models and evaluated performance.',
                      'Achieved accuracy up to 88%.',
                    ].map((p, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-foreground leading-relaxed">
                        <span className="text-primary mt-1 shrink-0">▸</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.16 }}>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h4 className="font-semibold text-foreground">Diploma – Computer Engineering</h4>
                <span className="text-xs text-muted-foreground">2018 – 2021</span>
              </div>
              <p className="text-xs text-muted-foreground mt-0.5">
                Vidyalankar Polytechnic, Mumbai (MSBTE) · CGPA: 8.6
              </p>
              <div className="mt-3">
                <p className="text-xs text-primary mb-1.5">Final Year Project</p>
                <div className="flex flex-wrap items-baseline justify-between gap-1">
                  <span className="text-sm font-medium text-foreground">Home Automation System</span>
                  <span className="text-xs text-muted-foreground">Mar 2023 – Jun 2023</span>
                </div>
                <p className="text-xs text-muted-foreground mt-0.5 mb-2">Team: 3 · Role: Team Lead</p>
                <ul className="space-y-1.5">
                  {[
                    'Developed a Kotlin mobile app integrated with Firebase to control smart home appliances.',
                    'Implemented a Node.js backend and ReactJS frontend to enhance system functionality.',
                    'Improved system efficiency by 30%.',
                  ].map((p, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-foreground leading-relaxed">
                      <span className="text-primary mt-1 shrink-0">▸</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.24 }}>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h4 className="font-semibold text-foreground">12th – Science</h4>
                <span className="text-xs text-muted-foreground">2019</span>
              </div>
              <p className="text-xs text-muted-foreground mt-0.5">
                SSH Junior College, Kamothe, Navi Mumbai · 49%
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.32 }}>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h4 className="font-semibold text-foreground">10th</h4>
                <span className="text-xs text-muted-foreground">2017</span>
              </div>
              <p className="text-xs text-muted-foreground mt-0.5">
                KPC English High School, Kharghar · 62%
              </p>
            </motion.div>

          </div>
        </div>

        <div className="h-px bg-border" />

        {/* Work Experience — newest to oldest */}
        <div>
          <h3 className="mb-6 text-xl md:text-2xl text-terminal-bright">Work Experience</h3>
          <div className="border-l-2 border-primary pl-6 space-y-10">

            {/* 1 — Neptron 2025 */}
            <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.08 }}>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h4 className="font-semibold text-foreground">.NET / Angular Developer · Neptron</h4>
                <span className="text-xs text-muted-foreground">Aug 2025 – Dec 2025 · 5 months</span>
              </div>
              <p className="text-xs text-muted-foreground mt-0.5 mb-2">Domain: Retail · Team: 5</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {['Angular', 'ASP.NET Core', 'SQL Server', 'GIT', 'CI/CD'].map((t) => (
                  <span key={t} className="border border-border bg-secondary px-2.5 py-0.5 text-xs text-secondary-foreground">{t}</span>
                ))}
              </div>
              <p className="text-xs text-primary mb-1.5">Project: Neptron Retail-POS Web Application</p>
              <ul className="space-y-1.5">
                {[
                  'Working on Retail-POS product development across the full stack.',
                  'Actively involved in database design, .NET Core API development, and Angular UI development.',
                  'Understanding UI/UX requirements and developing responsive front-end components.',
                  'Developing REST APIs per screen and business requirements.',
                  'Designing database schemas following normalization principles.',
                  'Managing code via GIT with daily CI/CD pipeline and deployment activities.',
                ].map((p, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-foreground leading-relaxed">
                    <span className="text-primary mt-1 shrink-0">▸</span><span>{p}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* 2 — India Bison 2024–2025 */}
            <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.16 }}>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h4 className="font-semibold text-foreground">Backend Developer Intern · India Bison (Remote)</h4>
                <span className="text-xs text-muted-foreground">Aug 2024 – Aug 2025 · 12 months</span>
              </div>
              <p className="text-xs text-muted-foreground mt-0.5 mb-2">Domain: Technology · Team: 5</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {['Python', 'FastAPI', 'SQLAlchemy', 'SQL Server', 'Docker', 'AWS', 'Redis', 'React.js'].map((t) => (
                  <span key={t} className="border border-border bg-secondary px-2.5 py-0.5 text-xs text-secondary-foreground">{t}</span>
                ))}
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-primary mb-1.5">Project: E-Commerce Intelligence Platform</p>
                  <ul className="space-y-1.5">
                    {[
                      'Led end-to-end development of a product aggregation engine using Python, crawl4ai, and BeautifulSoup to transform raw product pages into structured datasets.',
                      'Built a React.js dashboard for discovery, filtering, and CSV/JSON exports across multiple categories.',
                      'Designed crawling logic with user-agent rotation, queuing, and smart retry mechanisms.',
                      'Reduced metadata processing time by 65% and cut manual handling by 80%.',
                      'Deployed with Docker on AWS EC2 and implemented alerting with CloudWatch.',
                    ].map((p, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-foreground leading-relaxed">
                        <span className="text-primary mt-1 shrink-0">▸</span><span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs text-primary mb-1.5">Project: Backend Systems</p>
                  <ul className="space-y-1.5">
                    {[
                      'Built and tested APIs using FastAPI; worked with HTTP methods, status codes, and flows.',
                      'Created services for user login and product management using PostgreSQL.',
                      'Added Redis caching and background task queues for notifications and reporting.',
                      'Integrated backend with React frontends and real-time updates using WebSockets.',
                      'Containerized services with Docker and deployed on AWS ECS.',
                      'Worked across backend design, deployment automation, and CI/CD workflows.',
                    ].map((p, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-foreground leading-relaxed">
                        <span className="text-primary mt-1 shrink-0">▸</span><span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* 3 — Anjani 2023–2024 */}
            <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.24 }}>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h4 className="font-semibold text-foreground">Python Developer · Anjani Shipping Agency</h4>
                <span className="text-xs text-muted-foreground">Aug 2023 – Aug 2024 · 12 months</span>
              </div>
              <p className="text-xs text-muted-foreground mt-0.5 mb-2">Domain: Import/Export · Team: 4</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {['Python', 'Flask', 'SQL Server', 'Pandas', 'CKAN'].map((t) => (
                  <span key={t} className="border border-border bg-secondary px-2.5 py-0.5 text-xs text-secondary-foreground">{t}</span>
                ))}
              </div>
              <p className="text-xs text-primary mb-1.5">Project: Import/Export Management Web Application</p>
              <ul className="space-y-1.5">
                {[
                  'Worked on in-house Import/Export Management product.',
                  'Developed Python scripts to capture, process, and migrate large import/export datasets (CSV, Excel) into relational databases.',
                  'Performed data cleaning, validation, and transformation using Pandas to ensure accuracy and consistency of trade data.',
                  'Integrated processed data with CKAN-based data catalog systems for structured storage and metadata management.',
                ].map((p, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-foreground leading-relaxed">
                    <span className="text-primary mt-1 shrink-0">▸</span><span>{p}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* 4 — Happiest Minds 2023 */}
            <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.32 }}>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h4 className="font-semibold text-foreground">Cloud Development Intern · Happiest Minds Technologies (Bangalore)</h4>
                <span className="text-xs text-muted-foreground">Jun 2023 – Aug 2023 · 3 months</span>
              </div>
              <p className="text-xs text-muted-foreground mt-0.5 mb-2">Domain: Cloud / IoT</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {['AWS Lambda', 'EC2', 'S3', 'API Gateway', 'ReactJS', 'Node.js', 'IAM'].map((t) => (
                  <span key={t} className="border border-border bg-secondary px-2.5 py-0.5 text-xs text-secondary-foreground">{t}</span>
                ))}
              </div>
              <ul className="space-y-1.5">
                {[
                  'Engineered AWS Lambda functions for IoT-based automation workflows.',
                  'Developed a dynamic ReactJS UI, increasing system interactivity by 20%.',
                  'Designed microservices using EC2, S3, IAM, and API Gateway.',
                  'Refactored Node.js server logic, achieving a 15% reduction in service downtime.',
                ].map((p, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-foreground leading-relaxed">
                    <span className="text-primary mt-1 shrink-0">▸</span><span>{p}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

          </div>
        </div>

      </section>
    </PageTransition>
  )
}
