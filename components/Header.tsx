'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Header() {
  const [scrolled, setScrolled]         = useState(false)
  const [logoHovered, setLogoHovered]   = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/70 backdrop-blur-xl border-b border-white/[0.08]'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4 max-w-6xl">
        <div className="flex items-center justify-between">

          {/* Logo — AB expande para André Bunhak no hover */}
          <div
            className="flex items-center overflow-hidden cursor-pointer select-none"
            onMouseEnter={() => setLogoHovered(true)}
            onMouseLeave={() => setLogoHovered(false)}
          >
            <span className="text-xl font-black font-serif text-white whitespace-nowrap">
              A
            </span>
            <motion.span
              animate={{ maxWidth: logoHovered ? '0px' : '22px', opacity: logoHovered ? 0 : 1 }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
              className="text-xl font-black font-serif text-white whitespace-nowrap overflow-hidden inline-block"
            >
              B
            </motion.span>
            <motion.span
              animate={{ maxWidth: logoHovered ? '240px' : '0px', opacity: logoHovered ? 1 : 0 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="text-xl font-black font-serif text-white whitespace-nowrap overflow-hidden inline-block"
            >
              ndré Bunhak
            </motion.span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {[
              { label: 'Home',     href: '#home'     },
              { label: 'Sobre',    href: '#about'    },
              { label: 'Projetos', href: '#projects' },
              { label: 'Skills',   href: '#skills'   },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-zinc-400 hover:text-white transition-colors font-medium text-sm tracking-wide"
              >
                {item.label}
              </Link>
            ))}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="border border-white/20 text-zinc-200 px-5 py-2 text-sm font-bold tracking-wide hover:border-white/50 hover:text-white transition-colors"
            >
              CONTATO
            </motion.a>
          </div>

          {/* Mobile */}
          <div className="md:hidden text-zinc-400 text-xl cursor-pointer">☰</div>
        </div>
      </nav>
    </header>
  )
}

