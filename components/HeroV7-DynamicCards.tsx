'use client'

import { motion } from 'framer-motion'
import { FiArrowRight, FiGithub, FiLinkedin, FiMail, FiCode, FiTrendingUp, FiZap } from 'react-icons/fi'
import { useState, useEffect } from 'react'

export default function HeroV7DynamicCards() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Dynamic cards content - Enhanced
  const dynamicCards = [
    {
      id: 1,
      title: 'React & Next.js',
      icon: FiCode,
      color: 'from-blue-500 to-cyan-400',
      bgColor: 'rgba(59, 130, 246, 0.1)',
      stat: '50+',
      label: 'Projetos',
      description: 'Aplicações web modernas, escaláveis e otimizadas',
      badge: 'Frontend'
    },
    {
      id: 2,
      title: 'Full Stack',
      icon: FiZap,
      color: 'from-purple-500 to-pink-400',
      bgColor: 'rgba(168, 85, 247, 0.1)',
      stat: '5+',
      label: 'Anos Exp.',
      description: 'Arquitetura completa do Frontend ao Backend',
      badge: 'Full Stack'
    },
    {
      id: 3,
      title: 'DevOps & Cloud',
      icon: FiTrendingUp,
      color: 'from-green-500 to-emerald-400',
      bgColor: 'rgba(34, 197, 94, 0.1)',
      stat: '∞',
      label: 'Escalabilidade',
      description: 'Deployments confiáveis e infraestrutura robusta',
      badge: 'DevOps'
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: 'easeOut'
      }
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent py-20">
      {/* Animated Background Orbs - Enhanced */}
      <motion.div
        animate={{
          y: [0, 40, 0],
          x: [0, 20, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-10 -left-40 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-25 pointer-events-none"
      />
      <motion.div
        animate={{
          y: [0, -40, 0],
          x: [0, -20, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-10 -right-40 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-25 pointer-events-none"
      />
      <motion.div
        animate={{
          y: [-30, 30, -30],
          x: [-20, 20, -20],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/3 left-1/2 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 pointer-events-none"
      />

      {/* Mouse Glow - Larger and More Visible */}
      <motion.div
        animate={{ x: mousePos.x - 200, y: mousePos.y - 200 }}
        transition={{ type: 'spring', damping: 15, stiffness: 80 }}
        className="pointer-events-none fixed w-96 h-96 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-full blur-3xl opacity-15 -z-10"
      />

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6">
        {/* Header - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="text-center mb-16 sm:mb-24"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-block mb-6"
          >
            <motion.span
              animate={{
                boxShadow: [
                  '0 0 20px rgba(168, 85, 247, 0.4)',
                  '0 0 40px rgba(168, 85, 247, 0.6)',
                  '0 0 20px rgba(168, 85, 247, 0.4)',
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="px-4 py-2 rounded-full border border-purple-600/50 bg-purple-950/50 backdrop-blur-md text-sm font-semibold text-purple-300"
            >
              ⚡ Full Stack Developer
            </motion.span>
          </motion.div>

          <motion.h1
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            className="text-6xl sm:text-7xl md:text-8xl font-black font-serif mb-6 bg-gradient-to-r from-white via-purple-300 to-white bg-[length:200%_auto] text-transparent bg-clip-text leading-tight drop-shadow-2xl"
          >
            André Bunhak
          </motion.h1>

          <motion.p
            animate={{
              color: ['rgba(168, 85, 247, 0.85)', 'rgba(236, 72, 153, 0.85)', 'rgba(168, 85, 247, 0.85)'],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="text-xl sm:text-2xl md:text-3xl font-bold mb-4"
          >
            Desenvolvedor Full Stack
          </motion.p>

          <p className="text-lg sm:text-xl text-purple-200/85 max-w-2xl mx-auto leading-relaxed">
            Transformando ideias em <span className="text-purple-300 font-semibold">experiências digitais</span> que impactam pessoas
          </p>
        </motion.div>

        {/* Dynamic Cards Grid - Enhanced */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-16 max-w-6xl mx-auto px-2"
        >
          {dynamicCards.map((card) => {
            const Icon = card.icon
            const isHovered = hoveredCard === card.id
            
            return (
              <motion.div
                key={card.id}
                variants={cardVariants}
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
                whileHover={{
                  y: -24,
                  scale: 1.08,
                }}
                whileTap={{ scale: 0.98 }}
                className="relative group cursor-pointer"
              >
                {/* Glow Background */}
                <motion.div
                  animate={{
                    opacity: isHovered ? 1 : 0.4,
                    scale: isHovered ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.4 }}
                  className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-br ${card.color} opacity-30 blur-xl -z-10`}
                />

                {/* Card Content */}
                <motion.div
                  animate={{
                    background: isHovered
                      ? 'rgba(88, 28, 135, 0.5)'
                      : 'rgba(88, 28, 135, 0.25)',
                    borderColor: isHovered
                      ? 'rgba(168, 85, 247, 0.8)'
                      : 'rgba(168, 85, 247, 0.3)',
                  }}
                  transition={{ duration: 0.4 }}
                  className="relative p-6 sm:p-8 rounded-2xl border backdrop-blur-xl overflow-hidden h-full flex flex-col"
                >
                  {/* Card Background Gradient */}
                  <motion.div
                    animate={{
                      opacity: isHovered ? 0.4 : 0.15,
                    }}
                    transition={{ duration: 0.4 }}
                    className={`absolute inset-0 bg-gradient-to-br ${card.color}`}
                  />

                  {/* Content Wrapper */}
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Top Section */}
                    <div className="mb-6">
                      {/* Badge */}
                      <motion.span
                        animate={{
                          opacity: isHovered ? 1 : 0.6,
                          scale: isHovered ? 1.05 : 1,
                        }}
                        transition={{ duration: 0.3 }}
                        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${card.color} text-white mb-4`}
                      >
                        {card.badge}
                      </motion.span>

                      {/* Icon */}
                      <motion.div
                        animate={{
                          rotate: isHovered ? 360 : 0,
                          scale: isHovered ? 1.3 : 1,
                        }}
                        transition={{
                          duration: isHovered ? 0.6 : 0,
                          type: 'spring',
                          stiffness: 200,
                        }}
                        className={`w-16 h-16 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center text-white shadow-2xl mb-6`}
                      >
                        <Icon size={32} />
                      </motion.div>

                      {/* Title */}
                      <h3 className="text-2xl sm:text-xl lg:text-2xl font-bold text-white mb-3 leading-tight">
                        {card.title}
                      </h3>
                    </div>

                    {/* Middle Section - Stat */}
                    <motion.div
                      animate={{
                        scale: isHovered ? 1.15 : 1,
                      }}
                      transition={{ duration: 0.3, type: 'spring' }}
                      className="mb-6"
                    >
                      <div className={`text-4xl sm:text-3xl lg:text-4xl font-black bg-gradient-to-r ${card.color} bg-clip-text text-transparent`}>
                        {card.stat}
                      </div>
                      <div className="text-purple-300/90 text-sm font-semibold">
                        {card.label}
                      </div>
                    </motion.div>

                    {/* Description - Flex Grow */}
                    <motion.p
                      animate={{
                        opacity: isHovered ? 1 : 0.7,
                      }}
                      transition={{ duration: 0.3 }}
                      className="text-purple-200/90 text-sm leading-relaxed mb-6 flex-grow"
                    >
                      {card.description}
                    </motion.p>

                    {/* Arrow - Bottom */}
                    <motion.div
                      animate={{
                        x: isHovered ? 12 : 0,
                        opacity: isHovered ? 1 : 0.4,
                      }}
                      transition={{ duration: 0.3, type: 'spring' }}
                      className="flex items-center gap-2 text-purple-400 font-semibold"
                    >
                      <span className="text-sm">Saiba mais</span>
                      <FiArrowRight size={18} />
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Info Cards Section - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto mb-16 px-2"
        >
          {/* Mentalidade Card */}
          <motion.div
            whileHover={{
              y: -12,
              boxShadow: '0 0 40px rgba(168, 85, 247, 0.6)',
            }}
            className="p-6 sm:p-8 rounded-2xl border border-purple-600/50 bg-purple-900/40 backdrop-blur-xl transition-all cursor-pointer"
          >
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-xl sm:text-2xl font-bold text-white mb-4"
            >
              💡 Mentalidade
            </motion.h3>
            <p className="text-purple-200/90 leading-relaxed text-sm sm:text-base">
              Construído mais do que <span className="text-purple-300 font-semibold">software</span>. Minhas paixões me proporcionam a <span className="text-purple-300 font-semibold">disciplina e foco</span> necessários para crescer e entregar resultados.
            </p>
          </motion.div>

          {/* Arte Card */}
          <motion.div
            whileHover={{
              y: -12,
              boxShadow: '0 0 40px rgba(168, 85, 247, 0.6)',
            }}
            className="p-6 sm:p-8 rounded-2xl border border-purple-600/50 bg-purple-900/40 backdrop-blur-xl transition-all cursor-pointer"
          >
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="text-xl sm:text-2xl font-bold text-white mb-4"
            >
              🎨 Arte
            </motion.h3>
            <p className="text-purple-200/90 leading-relaxed text-sm sm:text-base">
              Criação de <span className="text-purple-300 font-semibold">aplicativos, sites e automações</span> escaláveis. Compreendendo as vantagens que a tecnologia moderna pode proporcionar.
            </p>
          </motion.div>
        </motion.div>

        {/* CTA Section - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center max-w-3xl mx-auto px-2"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-8">
            Pronto para <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">transformar sua ideia</span>?
          </h2>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
            {/* Primary CTA */}
            <motion.a
              href="#projects"
              whileHover={{
                scale: 1.08,
                boxShadow: '0 0 50px rgba(168, 85, 247, 0.7)',
              }}
              whileTap={{ scale: 0.95 }}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-2xl border border-purple-400/50 hover:border-purple-300 transition-all"
            >
              <span>Ver Projetos</span>
              <FiArrowRight size={20} />
            </motion.a>

            {/* Social Links */}
            <div className="flex gap-2">
              {[
                { icon: FiGithub, href: 'https://github.com/andream001', label: 'GitHub' },
                { icon: FiLinkedin, href: 'https://www.linkedin.com/in/andrebunhak/', label: 'LinkedIn' },
                { icon: FiMail, href: 'mailto:andrebunhak14@gmail.com', label: 'Email' },
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
                      boxShadow: '0 0 30px rgba(168, 85, 247, 0.7)',
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 sm:p-4 rounded-xl border border-purple-600/50 text-purple-300 hover:text-purple-100 bg-purple-900/40 backdrop-blur-xl transition-all"
                    title={social.label}
                  >
                    <Icon size={22} />
                  </motion.a>
                )
              })}
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="text-center mt-16 sm:mt-24 text-purple-300/50"
        >
          <motion.p
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-xs sm:text-sm mb-3"
          >
            ↓ Scroll para explorar
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
