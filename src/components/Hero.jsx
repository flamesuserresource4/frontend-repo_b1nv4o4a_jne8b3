import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] pt-24 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4HIlOdlXYYkZW66z/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white/0 dark:from-neutral-950/90 dark:via-neutral-950/50 dark:to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="inline-flex items-center rounded-full bg-blue-600/10 dark:bg-blue-500/15 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200/60 dark:ring-blue-500/30 px-3 py-1 text-xs font-medium">Cybersecurity • Network Engineering • SOC/NOC</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
              Aditya Pratama — Membangun dan Mengamankan Infrastruktur Jaringan
            </h1>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed max-w-xl">
              Saya fokus pada hardening, monitoring, dan incident response dengan pendekatan pragmatis dan berorientasi pada hasil. Menggabungkan praktik terbaik industri untuk ketahanan dan keandalan.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center justify-center rounded-md bg-blue-600 text-white px-5 py-2.5 font-medium shadow hover:bg-blue-700 transition-colors">Lihat Proyek</a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-md border border-black/10 dark:border-white/10 px-5 py-2.5 font-medium text-neutral-800 dark:text-neutral-100 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">Hubungi Saya</a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.05 }}
            className="md:pl-10"
          >
            <div className="relative mx-auto max-w-sm md:max-w-md">
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1080&auto=format&fit=crop"
                alt="Foto profil profesional Aditya Pratama"
                className="w-full rounded-2xl border border-black/10 dark:border-white/10 shadow-lg object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
