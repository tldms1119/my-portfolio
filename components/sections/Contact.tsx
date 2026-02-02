'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      href: `mailto:${process.env.NEXT_PUBLIC_EMAIL || ''}`,
      text: process.env.NEXT_PUBLIC_EMAIL || '',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: process.env.NEXT_PUBLIC_LINKEDIN_URL || '',
      text: 'Connect on LinkedIn',
    },
    {
      icon: Github,
      label: 'GitHub',
      href: process.env.NEXT_PUBLIC_GITHUB_URL || '',
      text: 'View my code',
    },
  ];

  return (
    <section id="contact" className="bg-slate-800/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {contactLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 5, scale: 1.02 }}
                  className="flex items-center gap-4 p-6 bg-slate-900/50 rounded-xl border border-slate-700 hover:border-indigo-500 transition-all group"
                >
                  <div className="w-12 h-12 bg-indigo-600/20 rounded-lg flex items-center justify-center group-hover:bg-indigo-600/30 transition">
                    <Icon className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">{link.label}</p>
                    <p className="text-white font-medium">{link.text}</p>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
