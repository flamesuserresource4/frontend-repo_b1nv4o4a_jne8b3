import { motion } from 'framer-motion';
import { ShieldCheck, Activity, Server, AlertTriangle } from 'lucide-react';

const skills = [
  { name: 'Firewall Hardening', icon: ShieldCheck },
  { name: 'SIEM & Log Analysis', icon: Activity },
  { name: 'Routing', icon: Server },
  { name: 'Switching', icon: Server },
  { name: 'Incident Response', icon: AlertTriangle },
];

const certs = [
  'CompTIA Security+',
  'Cisco CCNA/CCNP',
  'CEH (Certified Ethical Hacker)',
  'Blue Team Level 1',
  'Fortinet NSE',
];

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-24">
      <div className="absolute inset-0 -z-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white">Tentang Saya</h2>
            <p className="mt-4 text-neutral-700 dark:text-neutral-300 leading-relaxed">
              Dengan latar belakang kuat di cybersecurity, SOC/NOC operation, dan network engineering, saya terbiasa mendesain arsitektur jaringan yang aman, memonitor ancaman secara real-time, dan mengeksekusi respons insiden dengan cepat dan terukur.
            </p>

            <div className="mt-6">
              <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">Sertifikasi</h3>
              <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-neutral-700 dark:text-neutral-300">
                {certs.map((c) => (
                  <li key={c} className="rounded-md border border-black/5 dark:border-white/10 bg-white dark:bg-neutral-900 px-3 py-2">{c}</li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="lg:col-span-7"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              {skills.map(({ name, icon: Icon }) => (
                <div key={name} className="flex items-start gap-3 rounded-xl border border-black/5 dark:border-white/10 bg-white dark:bg-neutral-900 p-4 shadow-sm">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-300">
                    <Icon size={20} />
                  </span>
                  <div>
                    <h4 className="font-medium text-neutral-900 dark:text-neutral-100">{name}</h4>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">Pengalaman praktis penerapan pada lingkungan produksi.</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
