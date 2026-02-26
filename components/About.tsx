'use client'

import { motion } from 'framer-motion'

const stats = [
  { value: '5+',  label: 'Anos em Campo' },
  { value: '30+', label: 'Projetos' },
  { value: '20+', label: 'Clientes' },
  { value: '15+', label: 'Tecnologias' },
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-transparent">
      <div className="container mx-auto px-6 max-w-4xl">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs text-red-500/80 font-black uppercase tracking-[0.3em] mb-3">⚠ FATO:</p>
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-white mb-6">
            Ficha Técnica
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Executor certificado de sistemas web. Operando há 5+ anos sem falhas críticas.
            Especializado em construir aplicações que não apenas funcionam — sobrevivem.
          </p>
          <p className="text-base text-gray-400 leading-relaxed max-w-2xl mx-auto mt-4">
            React, Next.js e TypeScript são as ferramentas de um desenvolvedor superior.
            Sem atalhos. Sem desculpas. Resultados mensuráveis.
          </p>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
              className="p-5 border border-red-900/50 rounded bg-red-950/20 text-center"
            >
              <div className="text-3xl font-black text-white mb-1">{stat.value}</div>
              <div className="text-xs text-gray-400 uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Info Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap gap-3 justify-center"
        >
          <span className="px-4 py-2 border border-red-800/50 rounded text-sm text-red-300 bg-red-950/20">
            📍 Brasil
          </span>
          <span className="px-4 py-2 border border-green-800/50 rounded text-sm text-green-300 bg-green-950/20">
            ● EM CAMPO — Disponível
          </span>
          <span className="px-4 py-2 border border-amber-800/50 rounded text-sm text-amber-300 bg-amber-950/20">
            ⚡ Full Stack
          </span>
        </motion.div>

      </div>
    </section>
  )
}
