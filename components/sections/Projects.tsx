'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';
import PostCard from '@/components/projects/PostCard';
import Badge from '@/components/ui/Badge';
import type { Project } from '@/data/project';
import { projects } from '@/data/project';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<'all' | 'professional' | 'personal'>('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="bg-slate-900">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">
            A collection of projects showcasing my skills and experience
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          {(['all', 'professional', 'personal'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-6 py-2 rounded-full transition ${
                filter === tab
                  ? 'bg-indigo-600 text-white'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <PostCard
                  project={project}
                  onViewDetails={() => setSelectedProject(project)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-slate-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-slate-700"
              >
                <div className="sticky top-0 bg-slate-900 border-b border-slate-700 p-6 flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge>{selectedProject.category}</Badge>
                      {selectedProject.liveUrl && (
                        <a
                          href={selectedProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-indigo-400 hover:text-indigo-300"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h3>
                    <p className="text-indigo-400 mb-2">{selectedProject.role}</p>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-slate-400 hover:text-white transition"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="p-6">
                  <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                    {selectedProject.overview}
                  </p>

                  <div className="space-y-6">
                    {selectedProject.contributions.map((contribution, idx) => (
                      <div key={idx} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                        <div className="flex justify-between items-center mb-4">
                          <h4 className="text-xl font-semibold text-white">{contribution.area}</h4>
                          <span className="text-indigo-400 font-semibold">{contribution.percentage}%</span>
                        </div>
                        <ul className="space-y-2 mb-4">
                          {contribution.description.map((desc, i) => (
                            <li key={i} className="text-slate-300 flex items-start">
                              <span className="text-indigo-400 mr-2">•</span>
                              {desc}
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-2">
                          {contribution.techStack.map((tech) => (
                            <Badge key={tech} variant="outline" size="sm">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
