import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const projects = [
  {
    title: 'Stay AI',
    subtitle: 'Natural Language Ticket Booking Web App',
    stack: ['React.js', 'LangChain', 'FastAPI', 'RBAC'],
    bullets: [
      'Built a conversational ticketing system using LangChain agents and FastAPI; reduced booking time by 70% by replacing form-based input with a natural language interface.',
      'Designed an agentic backend that parses free-text queries and maps them to booking operations (search, reserve, cancel) using LangChain tool-calling and prompt engineering.',
      'Implemented RBAC across 3 user roles (customer, staff, admin) on all FastAPI endpoints, enforcing least-privilege access control from initial production release.',
    ],
    github: 'https://github.com/Ritik261',
    accent: 'emerald',
  },
  {
    title: 'Chat with PDF',
    subtitle: 'RAG Pipeline',
    stack: ['LangChain', 'FastAPI', 'FAISS', 'Python', 'Vector Search', 'OpenAI API'],
    bullets: [
      'Built an end-to-end RAG pipeline covering PDF ingestion, text chunking, FAISS vector indexing, and LLM-based answer generation for context-aware document Q&A.',
      'Optimized semantic retrieval using FAISS similarity search and LangChain orchestration, maintaining answer relevance across documents exceeding 100 pages.',
    ],
    github: 'https://github.com/Ritik261',
    accent: 'blue',
  },
  {
    title: 'Resume Analyzer',
    subtitle: 'AI Evaluation System',
    stack: ['FastAPI', 'React.js', 'OpenAI API', 'LLM', 'REST API'],
    bullets: [
      'Built a full-stack resume screening tool with a React frontend and FastAPI backend that uses OpenAI API to generate structured, role-specific candidate feedback.',
      'Developed 3 REST API modules for resume parsing, LLM-based scoring, and feedback generation; structured output as JSON for consistent downstream consumption.',
    ],
    github: 'https://github.com/Ritik261',
    accent: 'violet',
  },
  {
    title: 'Vendor Onboarding Agent',
    subtitle: 'AI-Powered Automation',
    stack: ['Copilot Studio', 'Power Automate', 'Dataverse', 'SharePoint', 'AI Agents'],
    bullets: [
      'Built a no-code AI agent in Copilot Studio to automate vendor onboarding across 3 stages (document intake, entity extraction, and compliance validation), reducing manual processing time for the onboarding team.',
      'Integrated Power Automate, Dataverse, and SharePoint to build multi-step approval workflows and centralized vendor data storage across the Microsoft 365 ecosystem.',
    ],
    github: 'https://github.com/Ritik261',
    accent: 'amber',
  },
]

const accentMap = {
  emerald: {
    border: 'hover:border-emerald-400 dark:hover:border-emerald-500/50',
    tag: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400',
    dot: 'bg-emerald-500',
    number: 'text-emerald-500/20',
  },
  blue: {
    border: 'hover:border-blue-400 dark:hover:border-blue-500/50',
    tag: 'bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400',
    dot: 'bg-blue-500',
    number: 'text-blue-500/20',
  },
  violet: {
    border: 'hover:border-violet-400 dark:hover:border-violet-500/50',
    tag: 'bg-violet-50 text-violet-700 dark:bg-violet-500/10 dark:text-violet-400',
    dot: 'bg-violet-500',
    number: 'text-violet-500/20',
  },
  amber: {
    border: 'hover:border-amber-400 dark:hover:border-amber-500/50',
    tag: 'bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400',
    dot: 'bg-amber-500',
    number: 'text-amber-500/20',
  },
}

function ProjectCard({ project, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const colors = accentMap[project.accent]

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={`group relative rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-8 transition-all duration-300 ${colors.border} hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-slate-900/50`}
      id={`project-${index}`}
    >
      {/* Project number watermark */}
      <span className={`absolute top-4 right-6 text-6xl font-black ${colors.number} select-none`}>
        {String(index + 1).padStart(2, '0')}
      </span>

      <div className="relative">
        {/* Title */}
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50">
          {project.title}
        </h3>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          {project.subtitle}
        </p>

        {/* Stack Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className={`rounded-full px-3 py-1 text-xs font-medium ${colors.tag}`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Bullets */}
        <ul className="mt-6 space-y-3">
          {project.bullets.map((bullet, i) => (
            <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              <span className={`mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full ${colors.dot}`} />
              {bullet}
            </li>
          ))}
        </ul>

        {/* Links */}
        <div className="mt-6 flex items-center gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400 transition-colors hover:text-emerald-600 dark:hover:text-emerald-400"
          >
            <FiGithub className="h-4 w-4" />
            Source Code
          </a>
        </div>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-50px' })

  return (
    <section
      id="projects"
      className="bg-white dark:bg-slate-950/50 py-24 px-6"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-500">
            Portfolio
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-slate-500 dark:text-slate-400">
            Production systems I've designed, built, and shipped — each solving a real-world problem with AI.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
