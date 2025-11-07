import { useEffect, useMemo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  const jsonLd = useMemo(() => ({
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Fachri Rizqi',
    jobTitle: 'Cybersecurity & Network Engineer',
    description:
      'Profesional cybersecurity, SOC/NOC, dan network engineering dengan fokus pada hardening, monitoring, dan incident response.',
    url: typeof window !== 'undefined' ? window.location.origin : 'https://example.com',
    sameAs: [
      'https://www.linkedin.com',
      'https://github.com',
      'https://t.me',
    ],
    knowsAbout: [
      'Firewall',
      'SIEM',
      'Routing',
      'Switching',
      'Incident Response',
      'SOC',
      'NOC',
    ],
  }), []);

  useEffect(() => {
    document.title = 'Fachri Rizqi — Cybersecurity, Network Engineering, SOC/NOC';
    const metaDesc = document.querySelector('meta[name="description"]');
    const content = 'Portfolio profesional bidang cybersecurity, SOC/NOC, dan network engineering. Keahlian: firewall, SIEM, routing, switching, incident response.';
    if (metaDesc) {
      metaDesc.setAttribute('content', content);
    } else {
      const m = document.createElement('meta');
      m.name = 'description';
      m.content = content;
      document.head.appendChild(m);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-50">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-black/5 dark:border-white/10 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-sm flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-neutral-600 dark:text-neutral-400">© {new Date().getFullYear()} Fachri Rizqi. All rights reserved.</p>
          <p className="text-neutral-600 dark:text-neutral-400">Built with React + Tailwind • SEO-ready</p>
        </div>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
