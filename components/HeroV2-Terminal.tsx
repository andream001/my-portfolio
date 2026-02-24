'use client'

import { motion } from 'framer-motion'
import { FiArrowDown } from 'react-icons/fi'
import { useState, useEffect } from 'react'

export default function HeroV2() {
  const [displayedText, setDisplayedText] = useState('')
  const fullText = "$ npm run build:experience"
  
  useEffect(() => {
    let index = 0
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        if (index < fullText.length) {
          setDisplayedText(fullText.slice(0, index + 1))
          index++
        } else {
          clearInterval(interval)
        }
      }, 50)
      return () => clearInterval(interval)
    }, 800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-transparent">
      <div className="relative z-10 text-center px-6 max-w-4xl font-mono">
        {/* Terminal Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-slate-900/40 rounded-t-lg p-4 border-t border-l border-r border-purple-500/30 text-left"
        >
          <div className="flex gap-2 mb-3">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <p className="text-gray-400 text-sm">terminal ~ andré bunhak</p>
        </motion.div>

        {/* Terminal Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="bg-slate-950 rounded-b-lg p-8 border-b border-l border-r border-purple-500/30 text-left space-y-4"
        >
          <div>
            <p className="text-green-400">~/portfolio $</p>
          </div>

          <div>
            <p className="text-white mb-4">whoami</p>
            <p className="text-purple-400 ml-2">&gt; André Bunhak | Full-Stack Developer</p>
          </div>

          <div>
            <p className="text-white mb-4">cat skills.txt</p>
            <div className="ml-2 space-y-1 text-purple-300">
              <p>✓ React • Next.js • TypeScript</p>
              <p>✓ Node.js • Python • Tailwind CSS</p>
              <p>✓ Framer Motion • Web Design</p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <p className="text-white mb-2">npm run build:experience</p>
            <p className="text-green-400 h-6">
              {displayedText}
              <span className="animate-pulse">|</span>
            </p>
          </motion.div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="flex gap-4 justify-center flex-wrap mt-12"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-all"
          >
            Ver Meus Projetos
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-purple-500 text-purple-300 px-8 py-3 rounded-lg font-semibold hover:bg-purple-500/10 transition-all"
          >
            Conectar Comigo
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 2, delay: 2 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
      >
        <FiArrowDown size={24} className="text-purple-400" />
      </motion.div>
    </section>
  )
}
