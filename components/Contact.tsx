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
    <section id="contact" className="py-28 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Header */}
          <h2 className="text-5xl md:text-6xl font-bold mb-6 font-serif text-gray-900">
            Vamos Trabalhar Juntos
          </h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto">
            Tem uma ideia em mente? Adoraria ouvir sobre seu projeto e como posso ajudar!
          </p>

          {/* Main CTA */}
          <motion.a
            href="mailto:andrebunhak14@gmail.com"
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all mb-16"
          >
            <FiMail size={24} />
            <span>Enviar E-mail</span>
            <FiArrowRight size={20} />
          </motion.a>

          {/* Social Links */}
          <div className="mb-12">
            <p className="text-gray-600 mb-8 font-medium">Ou me encontre em:</p>
            <div className="flex justify-center gap-6">
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
                    className={`p-4 bg-white rounded-full shadow-md ${social.color} transition-all hover:shadow-lg`}
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
            className="p-6 bg-white rounded-2xl shadow-lg border-l-4 border-purple-600"
          >
            <p className="text-gray-700">
              <span className="font-semibold text-purple-600">✓ Respondo em até 24 horas</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
