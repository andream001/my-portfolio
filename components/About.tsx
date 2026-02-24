'use client'

import { motion } from 'framer-motion'

export default function About() {
  const stats = [
    { label: 'Experiência', value: '5+', unit: 'anos' },
    { label: 'Projetos', value: '30+', unit: 'completos' },
    { label: 'Clientes', value: '20+', unit: 'satisfeitos' },
    { label: 'Tecnologias', value: '15+', unit: 'dominadas' },
  ]

  return (
    <section id="about" className="py-28 bg-transparent">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 font-serif bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
            Sobre Mim
          </h2>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-purple-800/30"></div>
              <div className="w-full h-full bg-purple-900/50 flex items-center justify-center border border-purple-700/50">
                <span className="text-purple-400">Sua foto aqui</span>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-4xl font-bold text-white mb-4">
                  Construindo Experiências Digitais
                </h3>
                <p className="text-lg text-purple-300 leading-relaxed mb-4">
                  Sou um desenvolvedor web apaixonado por criar experiências digitais únicas e funcionais. 
                  Com expertise em design moderno e desenvolvimento front-end, transformo ideias em realidade 
                  através de código limpo e interfaces intuitivas.
                </p>
                <p className="text-lg text-purple-300 leading-relaxed">
                  Especializado em React, Next.js e tecnologias web modernas, estou sempre em busca de novos 
                  desafios que me permitam crescer e criar soluções inovadoras.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 pt-8 border-t border-purple-700/50">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="p-4 bg-gradient-to-br from-purple-700/40 to-purple-900/40 rounded-xl border border-purple-600/30"
                  >
                    <div className="text-3xl font-bold text-purple-200">
                      {stat.value}
                    </div>
                    <div className="text-sm text-purple-300 mt-1">
                      {stat.label}
                    </div>
                    <div className="text-xs text-purple-400">
                      {stat.unit}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Info Cards */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="p-4 bg-gradient-to-br from-purple-700/50 to-purple-800/40 rounded-xl cursor-pointer border border-purple-600/40"
                >
                  <h4 className="font-bold text-purple-200 mb-1">Localização</h4>
                  <p className="text-purple-300">Brasil</p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="p-4 bg-gradient-to-br from-purple-700/50 to-purple-800/40 rounded-xl cursor-pointer border border-purple-600/40"
                >
                  <h4 className="font-bold text-purple-200 mb-1">Status</h4>
                  <p className="text-purple-300">Aberto para trabalhar</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
