'use client'

import { motion } from 'framer-motion'
import { FiArrowRight, FiGithub, FiCode } from 'react-icons/fi'
import { useState, useEffect } from 'react'

export default function HeroV5() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const words = ['Inovador', 'Criativo', 'Desenvolvedor']
  const [currentWord, setCurrentWord] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20" />
        <motion.div
          animate={{
            background: [
              'radial-gradient(600px at 0% 0%, rgba(168, 85, 247, 0.15) 0%, transparent 80%)',
              'radial-gradient(600px at 100% 100%, rgba(168, 85, 247, 0.15) 0%, transparent 80%)',
              'radial-gradient(600px at 0% 0%, rgba(168, 85, 247, 0.15) 0%, transparent 80%)',
            ]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute inset-0"
        />
      </div>

      {/* Mouse Follow Glow */}
      <motion.div
        animate={{ x: mousePos.x - 50, y: mousePos.y - 50 }}
        transition={{ type: 'spring', damping: 30, stiffness: 200 }}
        className="pointer-events-none fixed w-24 h-24 bg-purple-500/10 rounded-full blur-3xl -z-10"
      />

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl">
        {/* Glitch Text Effect */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <div className="relative inline-block">
            <motion.h1
              className="text-6xl md:text-7xl font-black font-serif text-white drop-shadow-lg"
              animate={{
                textShadow: [
                  '0 0 20px rgba(168, 85, 247, 0.5)',
                  '0 0 40px rgba(168, 85, 247, 0.8)',
                  '0 0 20px rgba(168, 85, 247, 0.5)',
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              André Bunhak
            </motion.h1>

            {/* Glitch Layer 1 */}
            <motion.h1
              className="absolute inset-0 text-6xl md:text-7xl font-black font-serif text-purple-500/80"
              animate={{
                x: [0, -3, 3, -2, 2, 0],
                opacity: [0, 0.7, 0.7, 0, 0, 0]
              }}
              transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 2 }}
            >
              André Bunhak
            </motion.h1>

            {/* Glitch Layer 2 */}
            <motion.h1
              className="absolute inset-0 text-6xl md:text-7xl font-black font-serif text-pink-500/60"
              animate={{
                x: [0, 3, -3, 2, -2, 0],
                opacity: [0, 0.5, 0.5, 0, 0, 0]
              }}
              transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 2, delay: 0.1 }}
            >
              André Bunhak
            </motion.h1>
          </div>
        </motion.div>

        {/* Rotating Words */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="h-12 mb-8"
        >
          <motion.div
            key={currentWord}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent"
          >
            {words[currentWord]}
          </motion.div>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-purple-200 mb-4 leading-relaxed"
        >
          Transformo ideias em código que impacta. Especializado em{' '}
          <span className="text-purple-300 font-semibold">React, Next.js e Node.js</span>
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-3 gap-4 my-12 max-w-2xl mx-auto"
        >
          {[
            { value: '50+', label: 'Projetos' },
            { value: '5+', label: 'Anos Exp.' },
            { value: '100%', label: 'Dedicação' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1, y: -5 }}
              className="p-4 rounded-lg bg-purple-800/30 border border-purple-700/50 backdrop-blur-sm"
            >
              <div className="text-2xl font-bold text-purple-300">{stat.value}</div>
              <div className="text-sm text-purple-200/70">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          {/* Main CTA - Animated Border */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300" />
            <motion.button
              onHoverStart={() => setIsHovering(true)}
              onHoverEnd={() => setIsHovering(false)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-8 py-4 bg-black rounded-full text-white font-bold flex items-center gap-3 group/btn"
            >
              <FiCode size={20} />
              <span>Ver Meu Trabalho</span>
              <motion.span
                animate={{ x: isHovering ? 5 : 0 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <FiArrowRight size={20} />
              </motion.span>
            </motion.button>
          </div>

          {/* Secondary CTA */}
          <motion.a
            href="https://github.com/andream001"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-purple-600 text-purple-300 rounded-full font-semibold flex items-center gap-3 hover:bg-purple-600/10 transition-all"
          >
            <FiGithub size={20} />
            <span>GitHub</span>
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="text-purple-300/50 text-sm mb-2">Scroll para explorar</div>
          <div className="w-6 h-10 border-2 border-purple-600 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-2 bg-purple-600 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
