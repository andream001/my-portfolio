'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-lg border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4 max-w-6xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold bg-gradient-to-r from-red-600 to-amber-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            AB
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {[
              { label: 'Home', href: '#home' },
              { label: 'Sobre', href: '#about' },
              { label: 'Projetos', href: '#projects' },
              { label: 'Skills', href: '#skills' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-red-600 transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-red-700 to-amber-600 text-white px-6 py-2 rounded hover:shadow-lg transition-all"
            >
              Contato
            </motion.a>
          </div>

          {/* Mobile menu icon */}
          <div className="md:hidden text-gray-700">☰</div>
        </div>
      </nav>
    </header>
  )
}
