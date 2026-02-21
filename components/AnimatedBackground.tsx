'use client'

import { motion } from 'framer-motion'

interface Props {
  variant?: 'particles' | 'orbs' | 'gradient'
}

export default function AnimatedBackground({ variant = 'gradient' }: Props) {
  if (variant === 'particles') {
    // Particle network background
    return (
      <div className="fixed top-0 left-0 w-full h-screen -z-10 bg-black overflow-hidden">
        {/* Dynamic background canvas handled separately */}
        <svg
          className="absolute inset-0 w-full h-full"
          style={{
            filter: 'drop-shadow(0 0 60px rgba(168, 85, 247, 0.3))',
          }}
        >
          <defs>
            <filter id="blur">
              <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
            </filter>
          </defs>
          {/* Animated circles */}
          {[...Array(40)].map((_, i) => (
            <circle
              key={i}
              cx={Math.random() * 100 + '%'}
              cy={Math.random() * 100 + '%'}
              r={Math.random() * 1.5 + 0.5}
              fill="rgba(255, 255, 255, 0.6)"
              filter="url(#blur)"
              opacity={Math.random() * 0.6 + 0.4}
            />
          ))}
        </svg>
      </div>
    )
  }

  if (variant === 'orbs') {
    // Floating orbs background
    return (
      <div className="fixed top-0 left-0 w-full h-screen -z-10 bg-gradient-to-br from-slate-950 via-purple-950 to-black overflow-hidden">
        {/* Animated floating orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -top-40 -left-40 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.5,
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl"
        />
      </div>
    )
  }

  // Default: Gradient with animated elements
  return (
    <div className="fixed top-0 left-0 w-full h-screen -z-10 bg-gradient-to-br from-slate-950 via-purple-950 to-black overflow-hidden">
      <div className="absolute inset-0">
        {/* Animated radial gradients */}
        <motion.div
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            delay: 1,
          }}
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            opacity: [0.1, 0.4, 0.1],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            delay: 2,
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-600/15 rounded-full blur-3xl"
        />
      </div>
    </div>
  )
}
