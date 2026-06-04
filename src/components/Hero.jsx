import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-50 dark:bg-slate-950 px-6 pt-20"
    >
      {/* Subtle gradient orb background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-emerald-500/5 dark:bg-emerald-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-emerald-600/5 dark:bg-emerald-600/8 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-200 dark:border-emerald-500/20 bg-emerald-50 dark:bg-emerald-500/10 px-4 py-1.5"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span className="text-xs font-medium text-emerald-700 dark:text-emerald-400">
            Available for opportunities
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50 sm:text-6xl lg:text-7xl"
        >
          Ritik Singh
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-lg font-medium text-emerald-700 dark:text-emerald-400 sm:text-xl"
        >
          FullStack GenAI Developer
        </motion.p>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg"
        >
          I build production LLM applications — from RAG pipelines and agentic workflows
          to full-stack interfaces that solve real user problems. Currently at UnifyCloud,
          where I cut ticket booking time by 70% using LangChain and FastAPI. Comfortable
          across the stack; most at home designing the AI layer.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 flex flex-col items-center gap-6 sm:flex-row sm:justify-center"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-emerald-600 dark:bg-emerald-500 px-7 py-3 text-sm font-semibold text-white dark:text-slate-950 transition-all hover:bg-emerald-700 dark:hover:bg-emerald-400 hover:shadow-xl hover:shadow-emerald-500/25"
            id="cta-view-work"
          >
            View My Work
            <FiArrowDown className="transition-transform group-hover:translate-y-0.5" />
          </a>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Ritik261"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 transition-all hover:border-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 hover:shadow-md"
              aria-label="GitHub"
              id="social-github"
            >
              <FiGithub className="h-4 w-4" />
            </a>
            <a
              href="https://linkedin.com/in/ritiksingh01"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 transition-all hover:border-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 hover:shadow-md"
              aria-label="LinkedIn"
              id="social-linkedin"
            >
              <FiLinkedin className="h-4 w-4" />
            </a>
            <a
              href="mailto:ritiksingh1356@gmail.com"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 transition-all hover:border-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 hover:shadow-md"
              aria-label="Email"
              id="social-email"
            >
              <FiMail className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex h-8 w-5 items-start justify-center rounded-full border-2 border-slate-300 dark:border-slate-700 p-1"
        >
          <div className="h-1.5 w-1 rounded-full bg-slate-400 dark:bg-slate-500" />
        </motion.div>
      </motion.div>
    </section>
  )
}
