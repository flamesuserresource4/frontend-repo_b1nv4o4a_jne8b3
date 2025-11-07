import { motion } from 'framer-motion';
import { Shield, Activity, Server } from 'lucide-react';

const projects = [
  {
    title: 'Implementasi SIEM untuk Deteksi Ancaman',
    description:
      'Mendesain dan mengimplementasikan pipeline log ke SIEM (ELK/Splunk), membuat rule korlasi, dan dashboard SOC untuk deteksi dini serangan.',
    tags: ['SIEM', 'Log Parsing', 'Correlation Rules', 'Dashboard'],
    icon: Activity,
    link: '#',
  },
  {
    title: 'Hardening Firewall Perimeter & Segmentation',
    description:
      'Menerapkan zone-based policy, NAT, IPS, dan micro-segmentation untuk mengurangi attack surface dan lateral movement.',
    tags: ['Firewall', 'IPS', 'Segmentation', 'NAT'],
    icon: Shield,
    link: '#',
  },
  {
    title: 'Desain & Konfigurasi Jaringan Kampus',
    description:
      'Topologi hierarchical (core-distribution-access), routing OSPF/EIGRP, VLAN, dan QoS untuk trafik prioritas.',
    tags: ['Routing', 'Switching', 'OSPF', 'QoS'],
    icon: Server,
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-24 bg-neutral-50 dark:bg-neutral-950/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white">Proyek & Studi Kasus</h2>
            <p className="mt-2 text-neutral-700 dark:text-neutral-300">Koleksi pekerjaan nyata yang berfokus pada keamanan dan keandalan jaringan.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex rounded-md bg-blue-600 text-white px-4 py-2 font-medium hover:bg-blue-700 transition-colors">Diskusikan Kebutuhan</a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-2xl border border-black/5 dark:border-white/10 bg-white dark:bg-neutral-900 p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-300">
                  <p.icon size={20} />
                </span>
                <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{p.title}</h3>
              </div>
              <p className="mt-3 text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 px-2.5 py-1 ring-1 ring-black/5 dark:ring-white/10">{t}</span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
