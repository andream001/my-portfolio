'use client'

import { motion } from 'framer-motion'
import { FiMail, FiGithub, FiLinkedin, FiInstagram, FiArrowRight } from 'react-icons/fi'

export default function Contact() {
  const socials = [
    { icon: FiGithub, label: 'GitHub', href: 'https://github.com/andream001', color: 'hover:text-gray-800' },
    { icon: FiLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/andrebunhak/', color: 'hover:text-blue-600' },
    { icon: FiInstagram, label: 'Instagram', href: 'https://www.instagram.com/0an_dream/', color: 'hover:text-pink-600' },
  ]

  return (
    <section id="contact" className="py-20 bg-transparent">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Header */}
          <h2 className="text-5xl md:text-6xl font-bold mb-6 font-serif text-white">
            Iniciar Missão
          </h2>
          <p className="text-lg md:text-xl text-zinc-200 mb-12 leading-relaxed max-w-2xl mx-auto">
            Descreva os objetivos do seu projeto com precisão. Responderei com eficiência e sem rodeios.
          </p>

          {/* Main CTA */}
          <motion.a
            href="mailto:andrebunhak14@gmail.com"
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-red-800 to-red-900 text-white px-8 py-4 rounded font-semibold text-lg hover:shadow-2xl hover:shadow-red-800/50 transition-all mb-16"
          >
            <FiMail size={24} />
            <span>Enviar E-mail</span>
            <FiArrowRight size={20} />
          </motion.a>

          {/* Social Links */}
          <div className="mb-16">
            <p className="text-zinc-300 mb-8 font-medium text-base">Ou me encontre em:</p>
            <div className="flex justify-center gap-8">
              {socials.map((social, index) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.2, y: -8 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-4 bg-white/[0.04] border border-white/10 text-zinc-400 hover:text-white hover:bg-white/[0.08] hover:border-white/25 transition-all"
                  >
                    <Icon size={28} />
                  </motion.a>
                )
              })}
            </div>
          </div>

          {/* Response Time */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="p-6 border border-white/[0.08] bg-white/[0.02]"
          >
            <p className="text-zinc-200">
              <span className="font-semibold text-red-400">⚠ FATO: Resposta garantida em até 24 horas. Sem exceções.</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
