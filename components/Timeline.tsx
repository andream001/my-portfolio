'use client'

import { motion } from 'framer-motion'

type Entry = {
  year: string
  title: string
  org: string
  description: string
  tags: string[]
  type: 'work' | 'education'
}

const entries: Entry[] = [
  {
    year: '2024 — atual',
    title: 'Desenvolvedor Full Stack',
    org: 'Freelance / Projetos Próprios',
    description: 'Desenvolvimento de aplicações web completas com Next.js, TypeScript e Tailwind CSS. Arquitetura de APIs RESTful e integração com serviços cloud.',
    tags: ['Next.js', 'TypeScript', 'Node.js', 'Vercel'],
    type: 'work',
  },
  {
    year: '2023',
    title: 'Desenvolvedor Frontend',
    org: 'Projetos Open Source',
    description: 'Contribuições em projetos de código aberto. Desenvolvimento de interfaces responsivas e acessíveis com React e Framer Motion.',
    tags: ['React', 'Tailwind CSS', 'Framer Motion'],
    type: 'work',
  },
  {
    year: '2022',
    title: 'Formação Full Stack',
    org: 'Rocketseat — Ignite',
    description: 'Programa intensivo de desenvolvimento full stack. Node.js, React, React Native, TypeScript e boas práticas de engenharia de software.',
    tags: ['React', 'Node.js', 'React Native', 'TypeScript'],
    type: 'education',
  },
  {
    year: '2021',
    title: 'Iniciação em Desenvolvimento Web',
    org: 'Autodidata',
    description: 'Primeiras linhas de código. HTML, CSS e JavaScript. Construção dos fundamentos que sustentam todas as missões subsequentes.',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    type: 'education',
  },
]

export default function Timeline() {
  return (
    <section id="timeline" className="py-28 bg-transparent text-white relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-950/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-xs text-red-400 font-mono uppercase tracking-widest mb-4">
            ⚠ FATO: Cada entrada foi conquistada em campo
          </p>
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-white">
            Histórico de Missões
          </h2>
        </motion.div>

        <div className="relative">
          {/* Linha vertical */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-white/[0.08]" />

          <div className="flex flex-col gap-10">
            {entries.map((entry, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative pl-10"
              >
                {/* Marcador */}
                <div className={`absolute left-0 top-1.5 w-[15px] h-[15px] border ${
                  entry.type === 'work'
                    ? 'border-red-400 bg-red-400/20'
                    : 'border-white/30 bg-white/5'
                }`} />

                <div className="group">
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <span className="text-xs font-mono text-red-400/80 tracking-widest uppercase">
                      {entry.year}
                    </span>
                    <span className={`text-[10px] px-2 py-0.5 font-mono uppercase tracking-wider border ${
                      entry.type === 'work'
                        ? 'border-red-400/30 text-red-400/70'
                        : 'border-white/15 text-zinc-500'
                    }`}>
                      {entry.type === 'work' ? 'Operação' : 'Treinamento'}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-0.5 font-serif">
                    {entry.title}
                  </h3>
                  <p className="text-xs text-zinc-500 uppercase tracking-widest mb-3">
                    {entry.org}
                  </p>
                  <p className="text-sm text-zinc-300 leading-relaxed mb-4">
                    {entry.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {entry.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono text-zinc-400 border border-white/[0.08] px-2 py-0.5 uppercase tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
