'use client'

import { motion } from 'framer-motion'
import { FiArrowDown, FiCode } from 'react-icons/fi'

export default function HeroV1() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-transparent">
      <div className="relative z-10 text-center px-6 max-w-5xl">
        {/* Command Line Style Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-8"
        >
          <p className="text-purple-400 font-mono text-sm md:text-base mb-2">
            &gt; BEM-VINDO AO MEU PORTFÓLIO
          </p>
          <p className="text-gray-400 font-mono text-sm md:text-base">
            // Construindo a Web com React, Next.js & TypeScript
          </p>
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-6xl md:text-8xl font-bold text-white font-serif mb-4">
            ANDRÉ BUNHAK
          </h1>
          <h2 className="text-2xl md:text-3xl text-purple-400 font-mono">
            Full-Stack Developer & Creative Technologist
          </h2>
        </motion.div>

        {/* Code Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="bg-slate-900/50 rounded-lg p-6 mb-12 border border-purple-500/30 backdrop-blur-sm font-mono text-sm"
        >
          <div className="text-left">
            <p className="text-green-400">const myStack = {'{'}</p>
            <p className="text-purple-300 ml-4">frontend: [<span className="text-orange-400">'React'</span>, <span className="text-orange-400">'Next.js'</span>, <span className="text-orange-400">'TypeScript'</span>],</p>
            <p className="text-purple-300 ml-4">backend: [<span className="text-orange-400">'Node.js'</span>, <span className="text-orange-400">'Python'</span>],</p>
            <p className="text-purple-300 ml-4">tools: [<span className="text-orange-400">'Tailwind'</span>, <span className="text-orange-400">'Framer Motion'</span>]</p>
            <p className="text-green-400">{'}'}</p>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex gap-4 justify-center flex-wrap mb-16"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-all"
          >
            <FiCode size={20} />
            Explorar Projetos
          </motion.a>
          <motion.a
            href="https://github.com/andream001"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-purple-500 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-500/10 transition-all"
          >
            Ver Código
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
      >
        <FiArrowDown size={24} className="text-purple-400" />
      </motion.div>
    </section>
  )
}
