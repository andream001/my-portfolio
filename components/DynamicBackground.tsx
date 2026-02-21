'use client'

import { useEffect, useRef, useState } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  color: string
}

interface Props {
  particleCount?: number
  particleColor?: string
  connectionColor?: string
  connectionDistance?: number
  interactive?: boolean
}

export default function DynamicBackground({
  particleCount = 50,
  particleColor = 'rgba(168, 85, 247, 0.8)',
  connectionColor = 'rgba(107, 33, 168, 0.5)',
  connectionDistance = 150,
  interactive = true,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const animationRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Initialize particles
    const initializeParticles = () => {
      const particles: Particle[] = []
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 2 + 1,
          color: particleColor,
        })
      }
      particlesRef.current = particles
    }
    initializeParticles()

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      if (interactive) {
        mouseRef.current = { x: e.clientX, y: e.clientY }
      }
    }
    window.addEventListener('mousemove', handleMouseMove)

    // Animation loop
    const animate = () => {
      // Clear canvas with fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update particles
      particlesRef.current.forEach((particle) => {
        // Movement
        particle.x += particle.vx
        particle.y += particle.vy

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.vx *= -1
          particle.x = Math.max(0, Math.min(canvas.width, particle.x))
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.vy *= -1
          particle.y = Math.max(0, Math.min(canvas.height, particle.y))
        }

        // Mouse interaction
        if (interactive) {
          const dx = mouseRef.current.x - particle.x
          const dy = mouseRef.current.y - particle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 200) {
            const angle = Math.atan2(dy, dx)
            const force = (200 - distance) / 200
            particle.vx -= Math.cos(angle) * force * 0.5
            particle.vy -= Math.sin(angle) * force * 0.5
          }
        }

        // Draw particle
        ctx.fillStyle = particle.color
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      // Draw connections
      ctx.strokeStyle = connectionColor
      ctx.lineWidth = 0.5

      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const p1 = particlesRef.current[i]
          const p2 = particlesRef.current[j]

          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < connectionDistance) {
            const opacity = 1 - distance / connectionDistance
            // Extrai os valores RGB e aplica nova opacidade
            const rgbMatch = connectionColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/)
            if (rgbMatch) {
              const [, r, g, b] = rgbMatch
              ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${0.5 * opacity})`
            } else {
              ctx.strokeStyle = connectionColor
            }
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationRef.current)
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [particleCount, particleColor, connectionColor, connectionDistance, interactive])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-screen -z-10"
      style={{
        background: 'radial-gradient(circle at center, #1e1b4b 0%, #0f0a1e 100%)',
      }}
    />
  )
}
