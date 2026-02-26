'use client'

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

const skills = [
  { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
  { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
  { name: 'Vercel', icon: SiVercel, color: '#000000' },
  { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
]

const skillVariants = {
  hidden: { opacity: 0, scale: 0.3 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.05,
      duration: 0.4,
      ease: 'easeOut',
    },
  }),
}

export default function Skills() {
  return (
    <section id="skills" className="py-28 bg-transparent text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-950/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif text-white">
            Arsenal Técnico
          </h2>
          <p className="text-base text-white/50 max-w-2xl mx-auto">
            Ferramentas certificadas em campo. Sem dependências desnecessárias.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-20">
          {skills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <motion.div
                key={skill.name}
                custom={index}
                initial="hidden"
                whileInView="visible"
                variants={skillVariants}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.15,
                  y: -8,
                  rotate: 5,
                }}
                className="flex flex-col items-center justify-center p-6 bg-white/[0.03] border border-white/10 hover:border-white/25 hover:bg-white/[0.06] transition-all cursor-pointer group"
              >
                <div className="mb-4 p-4 bg-white/[0.05] group-hover:bg-white/[0.09] transition-colors">
                  <Icon
                    size={48}
                    style={{ color: skill.color }}
                    className="group-hover:scale-110 transition-transform"
                  />
                </div>
                <span className="text-sm font-medium text-white/60 group-hover:text-white/90 transition-colors text-center">
                  {skill.name}
                </span>
              </motion.div>
            )
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-base text-white/55 mb-4">
            FATO: Ferramentas superiores produzem resultados superiores.
          </p>
          <p className="text-sm text-white/35 mb-8">
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
