'use client'

import { motion } from 'framer-motion'
import { FiArrowRight, FiGithub, FiMail, FiLinkedin } from 'react-icons/fi'
import { useState, useEffect } from 'react'

export default function HeroV6() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Animated floating cards
  const floatingCards = [
    { label: 'React', color: 'from-blue-500 to-cyan-500', x: -20, y: -30, delay: 0 },
    { label: 'Next.js', color: 'from-black to-gray-700', x: 20, y: -30, delay: 0.2 },
    { label: 'TypeScript', color: 'from-blue-600 to-blue-400', x: -25, y: 40, delay: 0.4 },
    { label: 'Node.js', color: 'from-green-600 to-green-400', x: 25, y: 40, delay: 0.6 },
  ]

  // Animated orbs
  const orbs = [
    { color: 'bg-purple-500', x: -100, y: -100, size: 300 },
    { color: 'bg-pink-500', x: 100, y: 100, size: 250 },
    { color: 'bg-blue-500', x: 50, y: -50, size: 200 },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent">
      {/* Animated Orbs Background */}
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          animate={{
            x: [orb.x, orb.x + 30, orb.x],
            y: [orb.y, orb.y + 30, orb.y],
          }}
          transition={{ duration: 8 + i * 2, repeat: Infinity, ease: 'easeInOut' }}
          className={`absolute ${orb.color} opacity-20 blur-3xl -z-10 pointer-events-none`}
          style={{
            width: orb.size,
            height: orb.size,
            borderRadius: '50%',
          }}
        />
      ))}

      {/* Gradient Mesh Background */}
      <motion.div
        animate={{
          background: [
            'radial-gradient(600px at 0% 0%, rgba(168, 85, 247, 0.1) 0%, transparent 80%)',
            'radial-gradient(600px at 100% 100%, rgba(168, 85, 247, 0.1) 0%, transparent 80%)',
            'radial-gradient(600px at 50% 50%, rgba(168, 85, 247, 0.1) 0%, transparent 80%)',
            'radial-gradient(600px at 0% 0%, rgba(168, 85, 247, 0.1) 0%, transparent 80%)',
          ]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-0 -z-10"
      />

      {/* Mouse Follow Glow - Larger */}
      <motion.div
        animate={{ x: mousePos.x - 100, y: mousePos.y - 100 }}
        transition={{ type: 'spring', damping: 25, stiffness: 150 }}
        className="pointer-events-none fixed w-52 h-52 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-full blur-3xl opacity-15 -z-10"
      />

      {/* Grid Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/5" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl">
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 inline-block"
        >
          <motion.div
            animate={{
              boxShadow: [
                '0 0 20px rgba(168, 85, 247, 0.5)',
                '0 0 40px rgba(168, 85, 247, 0.8)',
                '0 0 20px rgba(168, 85, 247, 0.5)',
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="px-6 py-2 rounded-full border border-purple-600/50 bg-purple-950/50 backdrop-blur-md"
          >
            <span className="text-purple-300 font-semibold">💡 Full Stack Developer</span>
          </motion.div>
        </motion.div>

        {/* Main Heading with Gradient */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <motion.h1
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ duration: 5, repeat: Infinity }}
            className="text-6xl md:text-8xl font-black font-serif bg-gradient-to-r from-white via-purple-300 to-white bg-[length:200%_auto] text-transparent bg-clip-text drop-shadow-2xl"
            style={{
              backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(168,85,247,1) 25%, rgba(236,72,153,1) 50%, rgba(168,85,247,1) 75%, rgba(255,255,255,1) 100%)',
              backgroundSize: '200% auto',
            }}
          >
            André Bunhak
          </motion.h1>
        </motion.div>

        {/* Animated Subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-10"
        >
          <p className="text-xl md:text-2xl text-purple-200 font-light mb-2">
            Criando experiências digitais
          </p>
          <motion.p
            animate={{
              color: ['rgba(168, 85, 247, 0.8)', 'rgba(236, 72, 153, 0.8)', 'rgba(168, 85, 247, 0.8)'],
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="text-2xl md:text-3xl font-bold"
          >
            que impactam pessoas
          </motion.p>
        </motion.div>

        {/* Floating Tech Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative h-32 mb-12 flex items-center justify-center"
        >
          {floatingCards.map((card, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -20, 0],
                x: [0, card.x * 0.5, 0],
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: card.delay,
              }}
              whileHover={{
                scale: 1.15,
                y: -40,
              }}
              className={`absolute px-6 py-3 rounded-2xl bg-gradient-to-br ${card.color} text-white font-semibold text-sm shadow-2xl border border-white/20 backdrop-blur-md cursor-pointer transform transition-all`}
            >
              {card.label}
            </motion.div>
          ))}
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <p className="text-lg text-purple-200/90 leading-relaxed">
            Especializado em <span className="text-purple-300 font-semibold">React, Next.js, TypeScript e Node.js</span>.
            Transformo ideias em produtos digitais que <span className="text-pink-400 font-semibold">geram resultados reais</span>.
          </p>
        </motion.div>

        {/* Stats Section with Glowing Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-12"
        >
          {[
            { value: '50+', label: 'Projetos', icon: '🚀' },
            { value: '5+', label: 'Anos Exp.', icon: '⭐' },
            { value: '100%', label: 'Dedicação', icon: '💜' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{
                scale: 1.1,
                y: -8,
                boxShadow: '0 0 30px rgba(168, 85, 247, 0.6)',
              }}
              animate={{
                boxShadow: [
                  '0 0 10px rgba(168, 85, 247, 0.3)',
                  '0 0 20px rgba(168, 85, 247, 0.5)',
                  '0 0 10px rgba(168, 85, 247, 0.3)',
                ],
              }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-purple-900/50 to-purple-800/30 border border-purple-600/50 backdrop-blur-xl shadow-lg"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-black bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-purple-200/70 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons with Enhanced Effects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          {/* Main CTA - Premium Style */}
          <div className="relative group">
            <motion.div
              animate={{
                boxShadow: [
                  '0 0 20px rgba(168, 85, 247, 0.5)',
                  '0 0 40px rgba(168, 85, 247, 0.8)',
                  '0 0 20px rgba(168, 85, 247, 0.5)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-xl blur-lg opacity-75"
            />
            <motion.button
              onHoverStart={() => setIsHovering(true)}
              onHoverEnd={() => setIsHovering(false)}
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-8 py-4 bg-gradient-to-r from-purple-700 to-pink-700 rounded-xl text-white font-bold flex items-center gap-3 border border-purple-400/50 shadow-2xl"
            >
              <span>Explorar Projetos</span>
              <motion.span
                animate={{ x: isHovering ? 8 : 0 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <FiArrowRight size={20} />
              </motion.span>
            </motion.button>
          </div>

          {/* Social CTAs */}
          <div className="flex gap-3">
            {[
              { icon: FiGithub, href: 'https://github.com/andream001', color: 'hover:text-gray-300' },
              { icon: FiLinkedin, href: 'https://www.linkedin.com/in/andrebunhak/', color: 'hover:text-blue-400' },
              { icon: FiMail, href: 'mailto:andrebunhak14@gmail.com', color: 'hover:text-pink-400' },
            ].map((social, i) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.2,
                    y: -8,
                    boxShadow: '0 0 20px rgba(168, 85, 247, 0.6)',
                  }}
                  className={`p-4 rounded-xl bg-purple-900/40 border border-purple-600/50 text-purple-300 ${social.color} transition-all backdrop-blur-md`}
                >
                  <Icon size={24} />
                </motion.a>
              )
            })}
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-purple-300/50"
        >
          <span className="text-sm">Scroll para explorar</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            <svg className="w-6 h-10 border-2 border-purple-600 rounded-full p-2" viewBox="0 0 24 24" fill="none">
              <motion.path
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                d="M12 19V5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
