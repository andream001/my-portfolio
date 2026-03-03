'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiGit,
  SiFigma,
  SiVercel,
  SiFirebase,
} from 'react-icons/si'
import type { IconType } from 'react-icons'

const skills: { name: string; Icon: IconType; color: string }[] = [
  { name: 'Next.js',    Icon: SiNextdotjs,   color: '#ffffff' },
  { name: 'React',      Icon: SiReact,       color: '#61DAFB' },
  { name: 'TypeScript', Icon: SiTypescript,  color: '#3178C6' },
  { name: 'JavaScript', Icon: SiJavascript,  color: '#F7DF1E' },
  { name: 'Tailwind',   Icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'HTML5',      Icon: SiHtml5,       color: '#E34F26' },
  { name: 'CSS3',       Icon: SiCss3,        color: '#1572B6' },
  { name: 'Node.js',    Icon: SiNodedotjs,   color: '#339933' },
  { name: 'Git',        Icon: SiGit,         color: '#F05032' },
  { name: 'Figma',      Icon: SiFigma,       color: '#F24E1E' },
  { name: 'Vercel',     Icon: SiVercel,      color: '#ffffff' },
  { name: 'Firebase',   Icon: SiFirebase,    color: '#FFCA28' },
]

function MarqueeRow({ reverse = false }: { reverse?: boolean }) {
  const [paused, setPaused] = useState(false)
  const items = [...skills, ...skills]
  return (
    <div
      className="relative overflow-hidden py-6"
      style={{
        maskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="flex gap-16"
        style={{
          width: 'max-content',
          animation: reverse
            ? 'marquee-reverse 30s linear infinite'
            : 'marquee 30s linear infinite',
          animationPlayState: paused ? 'paused' : 'running',
        }}
      >
        {items.map((skill, i) => (
          <div
            key={i}
            className="flex items-center gap-3 flex-shrink-0 transition-transform duration-200 ease-out hover:scale-125 cursor-default"
          >
            <skill.Icon size={24} style={{ color: skill.color }} />
            <span className="text-zinc-300 font-medium text-sm whitespace-nowrap tracking-wide">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-28 bg-transparent text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-950/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 px-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif text-white">
            Arsenal Técnico
          </h2>
          <p className="text-base text-zinc-300 max-w-2xl mx-auto">
            Ferramentas certificadas em campo. Sem dependências desnecessárias.
          </p>
        </motion.div>

        <div className="border-y border-white/[0.06]">
          <MarqueeRow />
        </div>
        <div className="border-b border-white/[0.06]">
          <MarqueeRow reverse />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-20 px-6"
        >
          <p className="text-base text-zinc-200 mb-4">
            FATO: Ferramentas superiores produzem resultados superiores.
          </p>
          <p className="text-sm text-zinc-400 mb-8">
            Disponível para colaborações e projetos freelance.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block px-8 py-3 bg-white text-black font-bold tracking-wide text-sm hover:bg-gray-100 transition-colors"
          >
            INICIAR MISSÃO
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
