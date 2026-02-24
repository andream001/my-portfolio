'use client'

import { motion } from 'framer-motion'
import { FiArrowDown } from 'react-icons/fi'
import { useState, useEffect } from 'react'

const codeSymbols = ['<', '>', '{', '}', '[', ']', '/', '\\']

export default function HeroV4() {
  const [dimensions, setDimensions] = useState({ width: 1024, height: 768 })

  useEffect(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    })
  }, [])

  const floatingSymbols = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    symbol: codeSymbols[i % codeSymbols.length],
    duration: 15 + Math.random() * 10,
    delay: Math.random() * 2,
    size: Math.random() * 30 + 20,
    xPos: Math.random() * dimensions.width
  }))

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-transparent">
      {/* Floating Code Symbols */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingSymbols.map((item) => (
          <motion.div
            key={item.id}
            initial={{
              x: item.xPos,
              y: dimensions.height + 100,
              opacity: 0
            }}
            animate={{
              y: -100,
              opacity: [0, 0.3, 0]
            }}
            transition={{
              duration: item.duration,
              delay: item.delay,
              repeat: Infinity,
              ease: 'linear'
            }}
            className="absolute text-purple-500 font-mono"
            style={{ fontSize: `${item.size}px` }}
          >
            {item.symbol}
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        {/* Animated Greeting */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.div
            animate={{
              textShadow: [
                '0 0 10px rgba(168, 85, 247, 0.3)',
                '0 0 20px rgba(168, 85, 247, 0.6)',
                '0 0 10px rgba(168, 85, 247, 0.3)'
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-purple-400 font-mono text-lg md:text-xl mb-4"
          >
            &gt; BEM-VINDO AO MEU PORTFÓLIO
          </motion.div>
          <p className="text-gray-400 font-mono text-sm">desenvolvendo o futuro, um pixel por vez</p>
        </motion.div>

        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-6xl md:text-8xl font-bold text-white font-serif mb-4 tracking-wider">
            ANDRÉ BUNHAK
          </h1>
          <motion.div
            animate={{
              color: ['#a855f7', '#ec4899', '#a855f7']
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="text-2xl md:text-4xl font-bold font-mono"
          >
            Full-Stack Developer
          </motion.div>
        </motion.div>

        {/* Subtitle with Neon Effect */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-lg md:text-xl text-purple-300 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Transformando <span className="text-purple-400 font-bold">código</span> em <span className="text-purple-400 font-bold">experiências</span> 
          <br />
          <span className="text-gray-400 text-base">React • Next.js • TypeScript • Node.js • Tailwind</span>
        </motion.p>

        {/* Neon Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <motion.a
            href="#projects"
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 20px rgba(168, 85, 247, 0.8)'
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-purple-600/80 text-white px-8 py-4 rounded-lg font-semibold border border-purple-500 hover:bg-purple-600 transition-all backdrop-blur-sm"
          >
            Ver Projetos
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 20px rgba(168, 85, 247, 0.6)',
              backgroundColor: 'rgba(168, 85, 247, 0.1)'
            }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-purple-500 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:text-purple-200 transition-all backdrop-blur-sm"
          >
            Conectar
          </motion.a>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-16 pt-8 border-t border-purple-500/30"
        >
          <p className="text-gray-400 font-mono text-sm mb-4">// stack atual</p>
          <div className="flex flex-wrap justify-center gap-4">
            {['React', 'Next.js', 'TypeScript', 'Tailwind', 'Node.js'].map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 + i * 0.1 }}
                className="px-4 py-2 bg-purple-500/20 border border-purple-500/50 rounded-full text-purple-300 font-mono text-sm"
              >
                {tech}
              </motion.span>
            ))}
          </div>
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
