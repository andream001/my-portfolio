'use client'

import { FiGithub, FiLinkedin, FiInstagram, FiMail } from 'react-icons/fi'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-transparent text-white py-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">André Bunhak</h3>
            <p className="text-white/40 text-sm">
              Executor certificado. Full Stack. Brasil.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold mb-4 text-white/70 uppercase tracking-widest">Navegação</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-white/40 hover:text-white text-sm transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/40 hover:text-white text-sm transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#projects" className="text-white/40 hover:text-white text-sm transition-colors">
                  Projetos
                </a>
              </li>
              <li>
                <a href="#skills" className="text-white/40 hover:text-white text-sm transition-colors">
                  Skills
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-sm font-bold mb-4 text-white/70 uppercase tracking-widest">Contato</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/andream001"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 border border-white/15 text-white/45 hover:text-white hover:border-white/40 transition-colors"
              >
                <FiGithub size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/andrebunhak/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 border border-white/15 text-white/45 hover:text-white hover:border-white/40 transition-colors"
              >
                <FiLinkedin size={18} />
              </a>
              <a
                href="https://www.instagram.com/0an_dream/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 border border-white/15 text-white/45 hover:text-white hover:border-white/40 transition-colors"
              >
                <FiInstagram size={18} />
              </a>
              <a
                href="mailto:andrebunhak14@gmail.com"
                className="p-2.5 border border-white/15 text-white/45 hover:text-white hover:border-white/40 transition-colors">
                <FiMail size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/25 text-xs">
            © {currentYear} André Bunhak. Construído com Next.js &amp; Tailwind.
          </p>
        </div>
      </div>
    </footer>
  )
}
