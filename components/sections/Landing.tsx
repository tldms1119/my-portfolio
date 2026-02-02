'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Code, Sparkles } from 'lucide-react';

export default function Landing() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-20 left-20 w-72 h-72 bg-indigo-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center relative z-10 px-6"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-indigo-400 text-lg md:text-xl mb-4 font-medium"
        >
          Hello, I&apos;m
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent"
        >
          {process.env.NEXT_PUBLIC_NAME || 'Your Name'}
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex items-center justify-center gap-2 mb-6"
        >
          <Code className="w-6 h-6 text-indigo-400" />
          <p className="text-xl md:text-3xl text-slate-300 font-medium">
            Full-Stack Software Developer
          </p>
          <Sparkles className="w-6 h-6 text-purple-400" />
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-slate-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto"
        >
          Backend with Java Spring • Frontend with React • Always Improving, Always Delivering
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition font-semibold shadow-lg shadow-indigo-500/50"
          >
            View Projects
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border-2 border-slate-600 hover:border-indigo-500 text-white rounded-lg transition font-semibold hover:bg-slate-800/50"
          >
            Contact Me
          </motion.a>
        </motion.div>
      </motion.div>
      
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 z-10"
      >
        <ArrowDown className="text-slate-400 w-6 h-6" />
      </motion.div>
    </section>
  );
}
