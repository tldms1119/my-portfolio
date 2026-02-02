'use client';

import { motion } from 'framer-motion';
import Badge from '@/components/ui/Badge';
import type { Project } from '@/data/project';

interface ProjectCardProps {
  project: Project;
  onViewDetails: () => void;
}

export default function ProjectCard({ project, onViewDetails }: ProjectCardProps) {
  const allTechStack = project.contributions.flatMap(c => c.techStack);
  const uniqueTech = [...new Set(allTechStack)].slice(0, 5);

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-indigo-500 transition-all"
    >
      {/* Preview Image */}
      <div className="h-48 bg-gradient-to-br from-indigo-900 to-purple-900 flex items-center justify-center">
        {project.image ? (
          <img src={project.image} alt={project.title} className="object-cover w-full h-full" />
        ) : (
          <span className="text-4xl">💼</span>
        )}
      </div>
      
      {/* Content */}
      <div className="p-6">
        <span className="text-xs text-indigo-400 uppercase tracking-wider">
          {project.category}
        </span>
        <h3 className="text-xl font-semibold text-white mt-2 mb-2">
          {project.title}
        </h3>
        <p className="text-slate-400 text-sm mb-4">
          {project.role}
        </p>
        
        {/* Tech Stack Preview */}
        <div className="flex flex-wrap gap-2 mb-4">
          {uniqueTech.map((tech) => (
            <Badge key={tech} variant="outline" size="sm">
              {tech}
            </Badge>
          ))}
        </div>
        
        {/* Actions */}
        <button
          onClick={onViewDetails}
          className="w-full py-2 bg-slate-700 hover:bg-indigo-600 text-white rounded-lg transition"
        >
          View Details
        </button>
      </div>
    </motion.div>
  );
}
