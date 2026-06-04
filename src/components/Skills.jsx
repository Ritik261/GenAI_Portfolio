import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const skillCategories = [
  {
    title: 'AI / ML',
    icon: '🧠',
    skills: ['LLMs', 'RAG', 'LangChain', 'FAISS', 'OpenAI API', 'Prompt Engineering', 'Vector Databases', 'Agentic Workflows'],
  },
  {
    title: 'Languages',
    icon: '⌨️',
    skills: ['Python', 'JavaScript'],
  },
  {
    title: 'Frameworks',
    icon: '⚡',
    skills: ['FastAPI', 'React.js', 'REST API'],
  },
  {
    title: 'Databases',
    icon: '🗄️',
    skills: ['PostgreSQL', 'MongoDB', 'SQL'],
  },
  {
    title: 'Tools & Cloud',
    icon: '☁️',
    skills: ['Git', 'Copilot Studio', 'Power Automate', 'Microsoft Azure'],
  },
]

function SkillCard({ category, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-6 transition-all duration-300 hover:border-emerald-300 dark:hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/5"
      id={`skill-card-${index}`}
    >
      <div className="mb-4 flex items-center gap-3">
        <span className="text-2xl">{category.icon}</span>
        <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-100">
          {category.title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-slate-100 dark:bg-slate-800 px-3 py-1 text-xs font-medium text-slate-600 dark:text-slate-400 transition-colors group-hover:bg-emerald-50 dark:group-hover:bg-emerald-500/10 group-hover:text-emerald-700 dark:group-hover:text-emerald-400"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-50px' })

  return (
    <section
      id="skills"
      className="bg-slate-50 dark:bg-slate-950 py-24 px-6"
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
            Expertise
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl">
            Technical Skills
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-slate-500 dark:text-slate-400">
            The tools and technologies I use to turn ideas into production-ready systems.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, i) => (
            <SkillCard key={cat.title} category={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
