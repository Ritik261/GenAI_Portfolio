import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiBriefcase, FiMapPin, FiCalendar } from 'react-icons/fi'

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="experience"
      className="bg-slate-50 dark:bg-slate-950 py-24 px-6"
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
            Career
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl">
            Experience
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto max-w-3xl"
        >
          {/* Timeline line */}
          <div className="relative border-l-2 border-emerald-200 dark:border-emerald-500/20 pl-8 ml-4">
            {/* Timeline dot */}
            <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full border-2 border-emerald-500 bg-white dark:bg-slate-950" />

            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-8">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50">
                    Software Development Engineer
                  </h3>
                  <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                    <span className="inline-flex items-center gap-1.5">
                      <FiBriefcase className="h-3.5 w-3.5" />
                      UnifyCloud
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <FiMapPin className="h-3.5 w-3.5" />
                      Noida
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <FiCalendar className="h-3.5 w-3.5" />
                      July 2025 – Present
                    </span>
                  </div>
                </div>
                <span className="rounded-full bg-emerald-50 dark:bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                  Current
                </span>
              </div>

              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500" />
                  Designed the LangChain agent pipeline for StayAI to route natural language text input to 3 core booking operations (search, reserve, cancel), reducing ticket booking time by 70%.
                </li>
                <li className="flex items-start gap-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500" />
                  Enforced FastAPI RBAC for customer, staff, and admin tiers, ensuring least-privilege access control across all production endpoints.
                </li>
                <li className="flex items-start gap-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500" />
                  Built conversational AI interfaces with React.js, integrating real-time LangChain agent responses for a seamless user experience.
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
