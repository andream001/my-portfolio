'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'

const navLinks = [
  { label: 'Home',     href: '#home'     },
  { label: 'Sobre',    href: '#about'    },
  { label: 'Projetos', href: '#projects' },
  { label: 'Skills',   href: '#skills'   },
]

export default function Header() {
  const [scrolled,    setScrolled]    = useState(false)
  const [logoHovered, setLogoHovered] = useState(false)
  const [mobileOpen,  setMobileOpen]  = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const close = () => setMobileOpen(false)

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled || mobileOpen
            ? 'bg-black/80 backdrop-blur-xl border-b border-white/[0.08]'
            : 'bg-transparent'
        }`}
      >
        <nav className="container mx-auto px-6 py-4 max-w-6xl">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <div
              className="flex items-center overflow-hidden cursor-pointer select-none"
              onMouseEnter={() => setLogoHovered(true)}
              onMouseLeave={() => setLogoHovered(false)}
            >
              <span className="text-xl font-black font-serif text-white whitespace-nowrap">A</span>
              <motion.span
                animate={{ maxWidth: logoHovered ? '0px' : '22px', opacity: logoHovered ? 0 : 1 }}
                transition={{ duration: 0.2, ease: 'easeInOut' }}
                className="text-xl font-black font-serif text-white whitespace-nowrap overflow-hidden inline-block"
              >B</motion.span>
              <motion.span
                animate={{ maxWidth: logoHovered ? '240px' : '0px', opacity: logoHovered ? 1 : 0 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="text-xl font-black font-serif text-white whitespace-nowrap overflow-hidden inline-block"
              >ndré Bunhak</motion.span>
            </div>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((item) => (
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

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen((o) => !o)}
              className="md:hidden text-zinc-300 hover:text-white transition-colors p-1"
              aria-label="Menu"
            >
              {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-drawer"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-2 md:hidden"
          >
            <div className="flex flex-col items-center gap-1 w-full px-8">
              <p className="text-xs text-red-400 font-mono uppercase tracking-widest mb-8">
                ⚠ SELECIONE O DESTINO
              </p>

              {navLinks.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.2 }}
                  className="w-full"
                >
                  <Link
                    href={item.href}
                    onClick={close}
                    className="block w-full text-center py-4 text-2xl font-black font-serif text-zinc-200 hover:text-white border-b border-white/[0.06] hover:border-white/20 transition-colors tracking-wide"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              <motion.a
                href="#contact"
                onClick={close}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="mt-8 w-full text-center py-3 border border-white/25 text-zinc-100 font-bold text-sm tracking-widest hover:border-white/60 hover:text-white transition-colors uppercase"
              >
                ESTABELECER CONTATO
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}


