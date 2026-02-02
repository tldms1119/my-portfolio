'use client';

import { motion } from 'framer-motion';
import { Code, Users, Rocket, Target } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: Code,
      title: 'Full-Stack Expertise',
      description: '5 years of experience building scalable web applications from frontend to backend',
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Led cross-functional teams and managed projects from conception to deployment',
    },
    {
      icon: Rocket,
      title: 'Innovation Focus',
      description: 'Passionate about leveraging cutting-edge technologies to solve real-world problems',
    },
    {
      icon: Target,
      title: 'Quality Driven',
      description: 'Committed to writing clean, maintainable code and delivering exceptional user experiences',
    },
  ];

  return (
    <section id="about" className="bg-slate-800/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            A passionate full-stack developer with expertise in building modern web applications
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-900/50 rounded-2xl p-8 border border-slate-700"
          >
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              With 5 years of experience in software development, I specialize in creating end-to-end solutions
              that combine elegant frontend interfaces with robust backend systems. My expertise spans the entire
              web project lifecycle, from initial planning and architecture design to deployment and maintenance.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              I thrive in collaborative environments where I can leverage my technical skills to solve complex
              problems and deliver high-quality software solutions. Whether working on professional projects or
              personal side projects, I&apos;m always eager to learn new technologies and push the boundaries of
              what&apos;s possible.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="bg-slate-900/50 rounded-xl p-6 border border-slate-700 hover:border-indigo-500 transition-all group"
              >
                <div className="w-12 h-12 bg-indigo-600/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-600/30 transition">
                  <Icon className="w-6 h-6 text-indigo-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
