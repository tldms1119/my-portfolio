'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Badge from '@/components/ui/Badge';

const techData = {
  professional: {
    backend: ['Java Spring Boot', 'Spring + JSP', 'Django'],
    frontend: ['React', 'TypeScript', 'Tailwind CSS'],
    database: ['MySQL', 'Oracle', 'Redis', 'MongoDB'],
    devops: ['AWS', 'Docker', 'GitLab CI/CD', 'CloudFlare']
  },
  personal: {
    backend: ['Java Spring Boot'],
    frontend: ['Next.js', 'Flutter'],
    database: ['PostgreSQL', 'DynamoDB'],
    devops: ['AWS API Gateway', 'AWS Lambda', 'AWS S3']
  }
};

export default function TechStack() {
  const [activeTab, setActiveTab] = useState<'professional' | 'personal'>('professional');

  return (
    <section id="skills" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Tech Stack
        </h2>
        
        {/* Tab Toggle */}
        <div className="flex justify-center gap-4 mb-12">
          {['professional', 'personal'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as 'professional' | 'personal')}
              className={`px-6 py-2 rounded-full transition ${
                activeTab === tab 
                  ? 'bg-indigo-600 text-white' 
                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
        
        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(techData[activeTab]).map(([category, skills]) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-slate-900 rounded-xl p-6"
            >
              <h3 className="text-lg font-semibold text-indigo-400 mb-4 capitalize">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
