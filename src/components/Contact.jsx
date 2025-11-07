import { motion } from 'framer-motion';
import { Github, Linkedin, Send, Mail, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white">Kontak</h2>
            <p className="mt-3 text-neutral-700 dark:text-neutral-300">Siap berdiskusi tentang peluang kerja, proyek, atau kolaborasi.</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-black/5 dark:border-white/10 bg-white dark:bg-neutral-900 px-4 py-2 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">
                <Linkedin size={18} /> LinkedIn
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-black/5 dark:border-white/10 bg-white dark:bg-neutral-900 px-4 py-2 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">
                <Github size={18} /> GitHub
              </a>
              <a href="https://t.me" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-black/5 dark:border-white/10 bg-white dark:bg-neutral-900 px-4 py-2 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">
                <MessageCircle size={18} /> Telegram
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="rounded-2xl border border-black/5 dark:border-white/10 bg-white dark:bg-neutral-900 p-6 shadow-sm"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const data = Object.fromEntries(new FormData(form));
              const mailto = `mailto:${data.email}?subject=${encodeURIComponent('Inquiry from Portfolio')}&body=${encodeURIComponent(data.message)}`;
              window.location.href = mailto;
            }}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">Nama</label>
                <input name="name" required className="mt-1 w-full rounded-md border border-black/10 dark:border-white/10 bg-white dark:bg-neutral-800 px-3 py-2 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">Email</label>
                <input type="email" name="email" required className="mt-1 w-full rounded-md border border-black/10 dark:border-white/10 bg-white dark:bg-neutral-800 px-3 py-2 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">Pesan</label>
              <textarea name="message" rows="5" required className="mt-1 w-full rounded-md border border-black/10 dark:border-white/10 bg-white dark:bg-neutral-800 px-3 py-2 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <button type="submit" className="mt-4 inline-flex items-center gap-2 rounded-md bg-blue-600 text-white px-5 py-2.5 font-medium hover:bg-blue-700 transition-colors">
              <Send size={18} /> Kirim Email
            </button>
            <p className="mt-2 flex items-center gap-2 text-xs text-neutral-500"><Mail size={14}/> Form ini menggunakan mailto di perangkat Anda.</p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
