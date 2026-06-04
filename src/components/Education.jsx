import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiAward, FiBookOpen } from 'react-icons/fi'

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="education"
      className="bg-white dark:bg-slate-950/50 py-24 px-6"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-500">
            Background
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl">
            Education & Certifications
          </h2>
        </motion.div>

        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 p-8 transition-all duration-300 hover:border-emerald-300 dark:hover:border-emerald-500/30 hover:shadow-lg"
            id="education-card"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 dark:bg-emerald-500/10">
              <FiBookOpen className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
            </div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Education
            </h3>
            <p className="mt-3 text-lg font-bold text-slate-900 dark:text-slate-50">
              Bachelor of Technology
            </p>
            <p className="mt-1 text-sm font-medium text-emerald-600 dark:text-emerald-400">
              Computer Science & Engineering
            </p>
            <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
              Axis Institute of Technology & Management (A.K.T.U)
            </p>
            <p className="mt-1 text-xs text-slate-400 dark:text-slate-500">
              2021 – 2025
            </p>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 p-8 transition-all duration-300 hover:border-emerald-300 dark:hover:border-emerald-500/30 hover:shadow-lg"
            id="certifications-card"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 dark:bg-emerald-500/10">
              <FiAward className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
            </div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Certifications
            </h3>

            <div className="mt-4 space-y-4">
              <div className="rounded-xl bg-white dark:bg-slate-800/50 p-4 border border-slate-100 dark:border-slate-700/50">
                <p className="text-sm font-bold text-slate-900 dark:text-slate-50">
                  AZ-900
                </p>
                <p className="mt-0.5 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                  Microsoft Azure Fundamentals
                </p>
                <p className="mt-1 text-xs text-slate-400 dark:text-slate-500">
                  Microsoft Learn
                </p>
              </div>

              <div className="rounded-xl bg-white dark:bg-slate-800/50 p-4 border border-slate-100 dark:border-slate-700/50">
                <p className="text-sm font-bold text-slate-900 dark:text-slate-50">
                  AI-900
                </p>
                <p className="mt-0.5 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                  Microsoft AI Fundamentals
                </p>
                <p className="mt-1 text-xs text-slate-400 dark:text-slate-500">
                  Microsoft Learn
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
