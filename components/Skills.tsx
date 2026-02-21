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
    <section id="skills" className="py-28 bg-gradient-to-b from-purple-950 to-purple-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-700/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
            Minhas Habilidades
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Tecnologias e ferramentas que utilizo para transformar ideias em realidade
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
                className="flex flex-col items-center justify-center p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-white/30 transition-all cursor-pointer group"
              >
                <div className="mb-4 p-4 bg-white/5 rounded-xl group-hover:bg-white/10 transition-colors">
                  <Icon
                    size={48}
                    style={{ color: skill.color }}
                    className="group-hover:scale-110 transition-transform"
                  />
                </div>
                <span className="text-sm font-medium text-gray-300 text-center">
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
          <p className="text-xl text-gray-300 mb-8">
            💡 Vou encontrar e entregar a melhor solução de tecnologia para seu negócio
          </p>
          <p className="text-lg text-gray-400 mb-8">
            Aberto para colaborações & oportunidades freelance
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-semibold hover:shadow-lg transition-all"
          >
            Vamos Conversar
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
