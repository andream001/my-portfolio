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
          <p className="text-xs text-red-400 font-black uppercase tracking-[0.3em] mb-3">⚠ FATO:</p>
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-white mb-6">
            Ficha Técnica
          </h2>
          <p className="text-base text-zinc-200 leading-relaxed max-w-2xl mx-auto">
            Executor certificado de sistemas web. Operando há 5+ anos sem falhas críticas.
            Especializado em construir aplicações que não apenas funcionam — sobrevivem.
          </p>
          <p className="text-sm text-zinc-400 leading-relaxed max-w-2xl mx-auto mt-3">
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
          className="grid grid-cols-4 border-t border-b border-white/[0.08] divide-x divide-white/[0.06] mb-10"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="py-8 text-center">
              <div className="text-3xl font-black text-white mb-1">{stat.value}</div>
              <div className="text-xs text-zinc-400 uppercase tracking-wider">{stat.label}</div>
            </div>
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
          {['📍 Brasil', '● EM CAMPO — Disponível', '⚡ Full Stack'].map((badge) => (
            <span key={badge} className="px-4 py-2 border border-white/[0.08] text-sm text-zinc-300">
              {badge}
            </span>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
