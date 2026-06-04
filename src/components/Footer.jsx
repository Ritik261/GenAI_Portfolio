import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          {/* Left – Brand */}
          <div className="text-center md:text-left">
            <p className="text-lg font-bold text-slate-900 dark:text-slate-50">
              Ritik Singh<span className="text-emerald-600 dark:text-emerald-500">.</span>
            </p>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              FullStack GenAI Developer
            </p>
          </div>

          {/* Center – Availability indicator */}
          <div className="flex items-center gap-2 rounded-full border border-emerald-200 dark:border-emerald-500/20 bg-emerald-50 dark:bg-emerald-500/10 px-4 py-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-xs font-medium text-emerald-700 dark:text-emerald-400">
              Available for freelance / full-time roles
            </span>
          </div>

          {/* Right – Social */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Ritik261"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 transition-all hover:border-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400"
              aria-label="GitHub"
            >
              <FiGithub className="h-4 w-4" />
            </a>
            <a
              href="https://linkedin.com/in/ritiksingh01"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 transition-all hover:border-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="h-4 w-4" />
            </a>
            <a
              href="mailto:ritiksingh1356@gmail.com"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 transition-all hover:border-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400"
              aria-label="Email"
            >
              <FiMail className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 border-t border-slate-200 dark:border-slate-800 pt-6 text-center">
          <p className="text-xs text-slate-400 dark:text-slate-500">
            © {currentYear} Ritik Singh. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  )
}
