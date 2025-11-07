import { useEffect, useState } from 'react';
import { Moon, Sun, Shield } from 'lucide-react';

function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function Navbar() {
  const [theme, setTheme] = useState('system');
  const isDark = theme === 'dark';

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = stored || (prefersDark ? 'dark' : 'light');
    setTheme(initial);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    if (theme !== 'system') localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-neutral-900/60 bg-white/70 dark:bg-neutral-900/70 border-b border-black/5 dark:border-white/10">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <button
            onClick={() => scrollToId('home')}
            className="flex items-center gap-2 font-semibold text-neutral-900 dark:text-neutral-100"
            aria-label="Go to home"
          >
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow">
              <Shield size={18} />
            </span>
            <span>CyberSec Portfolio</span>
          </button>

          <div className="hidden md:flex items-center gap-6 text-sm">
            <button onClick={() => scrollToId('about')} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Tentang</button>
            <button onClick={() => scrollToId('projects')} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Proyek</button>
            <button onClick={() => scrollToId('contact')} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Kontak</button>
          </div>

          <button
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            className="inline-flex items-center gap-2 rounded-md border border-black/5 dark:border-white/10 bg-white dark:bg-neutral-800 px-3 py-1.5 text-sm text-neutral-700 dark:text-neutral-200 shadow-sm hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors"
            aria-label="Toggle dark mode"
            title="Toggle dark mode"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
            <span className="hidden sm:inline">{isDark ? 'Light' : 'Dark'}</span>
          </button>
        </div>
      </nav>
    </header>
  );
}
