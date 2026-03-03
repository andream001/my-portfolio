'use client'

import { motion } from 'framer-motion'
import { FiArrowRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { useState, useEffect } from 'react'

const WRONG_NAME = 'Dwight Schrute'
const REAL_NAME  = 'André Bunhak'

const stats = [
  { value: '50+', label: 'Projetos' },
  { value: '5+',  label: 'Anos' },
  { value: '20+', label: 'Missões' },
  { value: '∞',   label: 'Beterrabas 🌱' },
]

const ASCII_PORTRAIT = `
           \`-/+ooooooo+/-\`
        \`/yNNNNNNNNNNNNNNNNy/\`
       /NNNNNNNNNNNNNNNNNNNNNNs
      yNNNNNNNNNNNNNNNNNNNNNNNNy
     :NNNNNNNNNNNNNNNNNNNNNNNNNy:
     hNNNNN+-::::::::::-+NNNNNNNh
     NNNNh.               .hNNNN
     NNNd   .---.   .---.   dNNN
     NNs   /  o  \./  o  \   sNN
     NN:  |[=====]|[=====]|  :NN
     NN:   \\-----/ \\-----/   :NN
     NNN      .----------.    NNN
     NNNs     |  ------  |   sNNN
     NNNNs.   \`----------\`  .sNNNN
     yNNNNNNs.           .sNNNNNy
      :NNNNNNNNNNssNNNNNNNNNNN:
       \`+yNNNNNNNNNNNNNNNNNy+\`
           \`-:/+syys+/:-\`
       ________________________
      |                        |
      |   DWIGHT K. SCHRUTE    |
      |   Fazenda de Beterraba |
      |________________________|
`

export default function HeroV7DynamicCards() {
  const [displayName, setDisplayName] = useState('')
  const [phase, setPhase] = useState<'typing-wrong' | 'pause' | 'deleting' | 'typing-right' | 'done'>('typing-wrong')

  useEffect(() => {
    let t: ReturnType<typeof setTimeout>

    if (phase === 'typing-wrong') {
      if (displayName.length < WRONG_NAME.length) {
        t = setTimeout(() => setDisplayName(WRONG_NAME.slice(0, displayName.length + 1)), 90)
      } else {
        t = setTimeout(() => setPhase('pause'), 850)
      }
    } else if (phase === 'pause') {
      t = setTimeout(() => setPhase('deleting'), 100)
    } else if (phase === 'deleting') {
      if (displayName.length > 0) {
        t = setTimeout(() => setDisplayName(displayName.slice(0, -1)), 50)
      } else {
        setPhase('typing-right')
      }
    } else if (phase === 'typing-right') {
      if (displayName.length < REAL_NAME.length) {
        t = setTimeout(() => setDisplayName(REAL_NAME.slice(0, displayName.length + 1)), 90)
      } else {
        setPhase('done')
      }
    }

    return () => clearTimeout(t)
  }, [displayName, phase])

  const isDone      = phase === 'done'
  const isWrong     = phase === 'typing-wrong' || phase === 'pause'
  const isDeleting  = phase === 'deleting'

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-transparent px-6">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-950/15 rounded-full blur-3xl pointer-events-none" />

      <pre
        aria-hidden
        className="absolute z-0 pointer-events-none select-none"
        style={{
          fontFamily: 'monospace',
          fontSize: '0.82rem',
          lineHeight: '1.3',
          color: '#f87171',
          opacity: 0.13,
          top: '50%',
          left: '50%',
          transform: 'translate(-20%, -50%)',
          whiteSpace: 'pre',
          textAlign: 'left',
        }}
      >
        {ASCII_PORTRAIT}
      </pre>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 w-full max-w-2xl mx-auto flex flex-col items-center"
      >
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3 py-1 mb-10 border border-white/[0.12] text-zinc-400 text-xs tracking-[0.2em] uppercase"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
          Modo Operacional Ativo
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-xs text-red-400 font-mono uppercase tracking-widest mb-3">⚠ FATO:</p>
          <p className="text-base text-zinc-300 mb-5">Você está prestes a conhecer</p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          className="text-6xl sm:text-7xl lg:text-8xl font-black font-serif leading-tight mb-8 min-h-[1.1em] flex items-center justify-center"
        >
          <span
            className={
              isWrong
                ? 'text-red-400'
                : isDeleting
                ? 'text-red-400/50 line-through'
                : 'text-white'
            }
          >
            {displayName}
          </span>
          {!isDone && (
            <span className="inline-block w-[3px] h-[0.75em] ml-1 bg-red-400 animate-pulse" />
          )}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="text-zinc-300 text-sm tracking-wider mb-10"
        >
          Desenvolvedor Full Stack — Next.js · React · TypeScript
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="flex flex-wrap justify-center gap-3 mb-8"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-bold text-sm tracking-wide hover:bg-gray-100 transition-colors"
          >
            INSPECIONAR PROJETOS <FiArrowRight size={15} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-zinc-200 font-bold text-sm tracking-wide hover:border-white/50 hover:text-white transition-colors"
          >
            ESTABELECER CONTATO
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55 }}
          className="flex justify-center gap-3 mb-16"
        >
          {[
            { Icon: FiGithub,   href: 'https://github.com/andream001',            label: 'GitHub' },
            { Icon: FiLinkedin, href: 'https://www.linkedin.com/in/andrebunhak/', label: 'LinkedIn' },
            { Icon: FiMail,     href: 'mailto:andrebunhak14@gmail.com',           label: 'Email' },
          ].map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              title={label}
              className="w-9 h-9 border border-white/15 text-zinc-400 hover:text-white hover:border-white/45 flex items-center justify-center transition-colors"
            >
              <Icon size={16} />
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          className="w-full grid grid-cols-4 border-t border-white/[0.08] pt-8"
        >
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-1">
              <span className="text-xl font-black text-white">{s.value}</span>
              <span className="text-xs text-zinc-400 uppercase tracking-wider">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-500 text-xs flex flex-col items-center gap-1 tracking-widest uppercase"
      >
        <span>Continue Descendo</span>
        <span>↓</span>
      </motion.div>
    </section>
  )
}
