import { useState, useEffect } from 'react'
import { HiMoon, HiSun } from 'react-icons/hi2'
import { motion, AnimatePresence } from 'framer-motion'

export default function ThemeToggle() {
  const [dark, setDark] = useState(true)

  useEffect(() => {
    const root = document.documentElement
    if (dark) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [dark])

  return (
    <motion.button
      onClick={() => setDark(!dark)}
      className="fixed top-5 right-5 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md shadow-lg cursor-pointer transition-colors duration-300 hover:border-emerald-500 dark:hover:border-emerald-500"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle dark mode"
      id="theme-toggle"
    >
      <AnimatePresence mode="wait" initial={false}>
        {dark ? (
          <motion.span
            key="sun"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <HiSun className="h-5 w-5 text-amber-400" />
          </motion.span>
        ) : (
          <motion.span
            key="moon"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <HiMoon className="h-5 w-5 text-slate-700" />
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  )
}
