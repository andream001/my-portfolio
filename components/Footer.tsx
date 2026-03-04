'use client'

import { FiGithub, FiLinkedin, FiInstagram, FiMail } from 'react-icons/fi'
import { useState, useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const KONAMI = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a']

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [easterEgg, setEasterEgg] = useState(false)
  const progress = useRef<string[]>([])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      progress.current.push(e.key)
      progress.current = progress.current.slice(-KONAMI.length)
      if (progress.current.join(',') === KONAMI.join(',')) {
        setEasterEgg(true)
        progress.current = []
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  return (
    <>
    <AnimatePresence>
      {easterEgg && (
        <motion.div
          key="easter-egg"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.85 }}
          transition={{ duration: 0.3 }}
          onClick={() => setEasterEgg(false)}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/90 backdrop-blur-xl cursor-pointer"
        >
          <div className="text-center select-none">
            <pre className="text-red-400 text-xs leading-tight font-mono mb-6" style={{ fontSize: '0.6rem' }}>{`
     🐻  🌱  📺
     `}</pre>
            <p className="text-red-400 font-mono text-xs uppercase tracking-widest mb-4">⚠ FATO CONFIRMADO:</p>
            <p className="text-white font-black font-serif text-3xl md:text-5xl mb-4">
              Bears.<br />Beets.<br />Battlestar Galactica.
            </p>
            <p className="text-zinc-500 text-xs font-mono uppercase tracking-widest mt-8">
              — Jim Halpert sendo Jim Halpert
            </p>
            <p className="text-zinc-600 text-[10px] font-mono mt-6 uppercase tracking-widest">[clique para fechar]</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
    <footer className="bg-transparent text-white py-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">André Bunhak</h3>
            <p className="text-zinc-400 text-sm">
              Executor certificado. Full Stack. Brasil.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold mb-4 text-zinc-200 uppercase tracking-widest">Navegação</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-zinc-400 hover:text-white text-sm transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-zinc-400 hover:text-white text-sm transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#projects" className="text-zinc-400 hover:text-white text-sm transition-colors">
                  Projetos
                </a>
              </li>
              <li>
                <a href="#skills" className="text-zinc-400 hover:text-white text-sm transition-colors">
                  Skills
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-sm font-bold mb-4 text-zinc-200 uppercase tracking-widest">Contato</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/andream001"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 border border-white/15 text-zinc-400 hover:text-white hover:border-white/40 transition-colors"
              >
                <FiGithub size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/andrebunhak/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 border border-white/15 text-zinc-400 hover:text-white hover:border-white/40 transition-colors"
              >
                <FiLinkedin size={18} />
              </a>
              <a
                href="https://www.instagram.com/0an_dream/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 border border-white/15 text-zinc-400 hover:text-white hover:border-white/40 transition-colors"
              >
                <FiInstagram size={18} />
              </a>
              <a
                href="mailto:andrebunhak14@gmail.com"
                className="p-2.5 border border-white/15 text-zinc-400 hover:text-white hover:border-white/40 transition-colors">
                <FiMail size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-zinc-500 text-xs">
            © {currentYear} André Bunhak. Construído com Next.js &amp; Tailwind.
          </p>
        </div>
      </div>
    </footer>
    </>
  )
}
