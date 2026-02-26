'use client'

import { motion } from 'framer-motion'
import { FiArrowRight, FiGithub, FiLinkedin, FiMail, FiCode, FiTrendingUp, FiZap, FiShield } from 'react-icons/fi'
import { useState, useEffect } from 'react'

const WRONG_NAME = 'Dwight Schrute'
const REAL_NAME  = 'AndrÃ© Bunhak'

const stats = [
  { id: 1, stat: '50+', label: 'Projetos',       icon: FiCode },
  { id: 2, stat: '5+',  label: 'Anos em Campo',  icon: FiShield },
  { id: 3, stat: '20+', label: 'MissÃµes',         icon: FiTrendingUp },
  { id: 4, stat: 'âˆž',   label: 'Beterrabas ðŸŒ±',  icon: FiZap },
]

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
    <section className="relative min-h-screen flex items-center overflow-hidden bg-transparent">
      {/* Subtle red glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-950/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-10 py-20">
        <div className="grid lg:grid-cols-[3fr_2fr] gap-12 lg:gap-20 items-center">

          {/* â”€â”€ LEFT â”€â”€ */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1 mb-8 border border-white/15 text-white/50 text-xs tracking-[0.2em] uppercase"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              Modo Operacional Ativo
            </motion.div>

            {/* Typewriter name block */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <p className="text-xs text-red-400 font-mono uppercase tracking-widest mb-2">âš  FATO:</p>
              <p className="text-lg text-white/60 mb-3">VocÃª estÃ¡ prestes a conhecer</p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black font-serif leading-tight min-h-[1.2em] flex items-center">
                <span
                  className={
                    isWrong
                      ? 'text-red-400/80'
                      : isDeleting
                      ? 'text-red-400/50 line-through'
                      : 'text-white'
                  }
                >
                  {displayName}
                </span>
                {!isDone && (
                  <span className="inline-block w-[3px] h-[0.8em] ml-1 bg-red-400 animate-pulse" />
                )}
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="text-white/55 text-base mb-10 leading-relaxed"
            >
              Desenvolvedor Full Stack â€”{' '}
              <span className="text-white/85">Next.js</span> Â·{' '}
              <span className="text-white/85">React</span> Â·{' '}
              <span className="text-white/85">TypeScript</span>
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-bold text-sm tracking-wide hover:bg-gray-100 transition-colors"
              >
                INSPECIONAR PROJETOS <FiArrowRight size={15} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white/75 font-bold text-sm tracking-wide hover:border-white/60 hover:text-white transition-colors"
              >
                ESTABELECER CONTATO
              </a>
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
              className="flex gap-3"
            >
              {[
                { Icon: FiGithub,   href: 'https://github.com/andream001',              label: 'GitHub' },
                { Icon: FiLinkedin, href: 'https://www.linkedin.com/in/andrebunhak/',   label: 'LinkedIn' },
                { Icon: FiMail,     href: 'mailto:andrebunhak14@gmail.com',             label: 'Email' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={label}
                  className="w-9 h-9 border border-white/20 text-white/45 hover:text-white hover:border-white/50 flex items-center justify-center transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* â”€â”€ RIGHT â€” Stat cards â”€â”€ */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 gap-3"
          >
            {stats.map((s, i) => {
              const Icon = s.icon
              return (
                <motion.div
                  key={s.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45 + i * 0.08 }}
                  whileHover={{ y: -3 }}
                  className="p-5 border border-white/10 hover:border-white/25 bg-white/[0.02] hover:bg-white/[0.05] transition-all group cursor-default"
                >
                  <Icon size={16} className="text-red-400 mb-4 group-hover:text-red-300 transition-colors" />
                  <div className="text-2xl font-black text-white mb-1">{s.stat}</div>
                  <div className="text-xs text-white/40 uppercase tracking-wider">{s.label}</div>
                </motion.div>
              )
            })}
          </motion.div>

        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/25 text-xs flex flex-col items-center gap-1 tracking-widest uppercase"
        >
          <span>Continue Descendo</span>
          <span>â†“</span>
        </motion.div>
      </div>
    </section>
  )
}
