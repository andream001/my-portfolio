'use client'

import { motion } from 'framer-motion'
import { FiArrowDown } from 'react-icons/fi'

const name = "ANDRÉ BUNHAK"
const letters = name.split('')

const letterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: 'easeOut' },
  }),
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-transparent">
      {/* Gradient Overlay - subtle */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/40 via-transparent to-blue-950/40">
        <div className="absolute w-96 h-96 bg-purple-800/10 rounded-full blur-3xl -top-40 -left-40 animate-pulse" />
        <div className="absolute w-96 h-96 bg-purple-900/5 rounded-full blur-3xl -bottom-40 -right-40 animate-pulse delay-1000" />
        <div className="absolute w-96 h-96 bg-purple-700/5 rounded-full blur-3xl top-1/2 left-1/2 animate-pulse delay-500" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl">
        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <h2 className="text-lg md:text-xl text-white/70 font-light tracking-widest uppercase">
            Bem-vindo ao meu portfólio
          </h2>
        </motion.div>

        {/* Animated Name */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-1 md:gap-3 mb-6">
            {letters.map((letter, i) => (
              <motion.span
                key={i}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={letterVariants}
                className="text-5xl md:text-7xl lg:text-8xl font-bold text-white font-serif"
              >
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="mb-12"
        >
          <h3 className="text-2xl md:text-3xl lg:text-4xl text-white/90 font-light mb-6 tracking-wide">
            Web Designer & Content Creator
          </h3>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Transformando ideias em experiências digitais modernas
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.8 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="bg-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-purple-700 transition-all shadow-lg hover:shadow-purple-500/50"
          >
            Ver Projetos
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="border-2 border-purple-500 text-purple-200 px-8 py-4 rounded-full font-semibold hover:bg-purple-600/20 transition-all"
          >
            Contato
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8, duration: 1 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center"
        >
          <p className="text-white/50 text-sm mb-2 tracking-wider uppercase">Scroll</p>
          <FiArrowDown size={24} className="text-white/50" />
        </motion.div>
      </motion.div>
    </section>
  )
}
