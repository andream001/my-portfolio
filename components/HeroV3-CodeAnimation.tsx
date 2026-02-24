'use client'

import { motion } from 'framer-motion'
import { FiArrowDown } from 'react-icons/fi'
import { useState, useEffect } from 'react'

export default function HeroV3() {
  const [codeLines, setCodeLines] = useState<number>(0)

  useEffect(() => {
    const totalLines = 8
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setCodeLines(prev => (prev < totalLines ? prev + 1 : prev))
      }, 300)
      return () => clearInterval(interval)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  const lines = [
    { text: "function buildYourDream() {", color: "text-purple-400" },
    { text: "  const ideas = ['inovação', 'tecnologia'];", color: "text-purple-300" },
    { text: "  const result = createWithPassion(ideas);", color: "text-purple-300" },
    { text: "  return result.ship();", color: "text-purple-300" },
    { text: "}", color: "text-purple-400" },
    { text: "", color: "" },
    { text: "export default <AndréBunhak />", color: "text-green-400" },
    { text: "// Building the future, one component at a time", color: "text-gray-500" }
  ]

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-transparent">
      <div className="relative z-10 text-center px-6 max-w-3xl">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white font-serif mb-2">
            ANDRÉ BUNHAK
          </h1>
          <p className="text-purple-400 text-xl">Full-Stack Developer & Digital Architect</p>
        </motion.div>

        {/* Animated Code Block */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="bg-slate-900/50 rounded-lg p-8 mb-12 border border-purple-500/30 backdrop-blur-sm font-mono text-sm text-left"
        >
          {lines.map((line, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={index < codeLines ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className={`h-6 ${line.color}`}
            >
              {line.text}
            </motion.div>
          ))}
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 0.8 }}
          className="text-purple-300 text-lg max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Transformo ideias em experiências digitais incríveis. Utilizando as tecnologias mais modernas para criar soluções inovadoras que impactam.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.2, duration: 0.8 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-all shadow-lg hover:shadow-purple-600/50"
          >
            Ver Projetos
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-purple-500 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-500/10 transition-all"
          >
            Entrar em Contato
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 2, delay: 3.5 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
      >
        <FiArrowDown size={24} className="text-purple-400" />
      </motion.div>
    </section>
  )
}
