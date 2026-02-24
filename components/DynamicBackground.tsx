'use client'

import { useEffect, useRef, useState } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  color: string
  originalVx: number
  originalVy: number
}

interface Props {
  particleCount?: number
  particleColor?: string
  connectionColor?: string
  connectionDistance?: number
  interactive?: boolean
  darkMode?: boolean
}

export default function DynamicBackground({
  particleCount = 50,
  particleColor = 'rgba(124, 58, 237, 0.7)',
  connectionColor = 'rgba(91, 29, 141, 0.4)',
  connectionDistance = 150,
  interactive = true,
  darkMode = false,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const animationRef = useRef<number>(0)
  const [isMouseInside, setIsMouseInside] = useState(false)

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
        const vx = (Math.random() - 0.5) * 0.3
        const vy = (Math.random() - 0.5) * 0.3
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: vx,
          vy: vy,
          originalVx: vx,
          originalVy: vy,
          radius: Math.random() * 2 + 0.5,
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
        setIsMouseInside(true)
      }
    }

    const handleMouseLeave = () => {
      setIsMouseInside(false)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)

    // Animation loop
    const animate = () => {
      // Clear canvas completely (no trail effect)
      ctx.fillStyle = 'rgba(0, 0, 0, 1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update particles
      particlesRef.current.forEach((particle) => {
        // Gradual return to original velocity if mouse not near
        if (!isMouseInside) {
          particle.vx += (particle.originalVx - particle.vx) * 0.01
          particle.vy += (particle.originalVy - particle.vy) * 0.01
        }

        // Movement
        particle.x += particle.vx
        particle.y += particle.vy

        // Bounce off edges with damping
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.vx *= -0.9
          particle.x = Math.max(0, Math.min(canvas.width, particle.x))
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.vy *= -0.9
          particle.y = Math.max(0, Math.min(canvas.height, particle.y))
        }

        // Mouse interaction - repel from cursor
        if (interactive && isMouseInside) {
          const dx = particle.x - mouseRef.current.x
          const dy = particle.y - mouseRef.current.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 200 && distance > 0) {
            const angle = Math.atan2(dy, dx)
            const force = (200 - distance) / 200
            particle.vx += Math.cos(angle) * force * 1.5
            particle.vy += Math.sin(angle) * force * 1.5
          }
        }

        // Draw particle
        ctx.fillStyle = particle.color
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      // Draw connections
      ctx.lineWidth = 0.5

      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const p1 = particlesRef.current[i]
          const p2 = particlesRef.current[j]

          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < connectionDistance) {
            const opacity = (1 - distance / connectionDistance) * 0.6
            ctx.strokeStyle = connectionColor.replace(/[\d.]+\)$/, `${opacity})`)
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
      window.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [particleCount, particleColor, connectionColor, connectionDistance, interactive, isMouseInside])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-screen -z-10"
      style={{
        background: darkMode
          ? 'radial-gradient(circle at center, #0f172a 0%, #0a0e27 100%)'
          : 'radial-gradient(circle at center, #1a0f2e 0%, #0a0515 100%)',
      }}
    />
  )
}
