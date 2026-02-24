'use client'

import { FiGithub, FiLinkedin, FiInstagram, FiMail, FiHeart } from 'react-icons/fi'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-blue-950/50 text-white py-12 border-t border-blue-900">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">André Bunhak</h3>
            <p className="text-purple-400">
              Web Designer & Content Creator based in Brasil
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-purple-400 hover:text-purple-300 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-purple-400 hover:text-purple-300 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-purple-400 hover:text-purple-300 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="text-purple-400 hover:text-purple-300 transition-colors">
                  Skills
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/andream001"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-purple-800/40 rounded-full text-purple-300 hover:bg-purple-700/60 hover:text-purple-100 transition-all hover:shadow-lg hover:shadow-purple-600/30"
              >
                <FiGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/andrebunhak/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-purple-800/40 rounded-full text-purple-300 hover:bg-purple-700/60 hover:text-purple-100 transition-all hover:shadow-lg hover:shadow-purple-600/30"
              >
                <FiLinkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/0an_dream/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-purple-800/40 rounded-full text-purple-300 hover:bg-purple-700/60 hover:text-purple-100 transition-all hover:shadow-lg hover:shadow-purple-600/30"
              >
                <FiInstagram size={20} />
              </a>
              <a
                href="mailto:andrebunhak14@gmail.com"
                className="p-3 bg-purple-800/40 rounded-full text-purple-300 hover:bg-purple-700/60 hover:text-purple-100 transition-all hover:shadow-lg hover:shadow-purple-600/30"
              >
                <FiMail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-purple-800 pt-8 text-center">
          <p className="text-purple-400 flex items-center justify-center gap-2">
            © {currentYear} André Bunhak. Built with <FiHeart className="text-red-500" /> using Next.js & Tailwind
          </p>
        </div>
      </div>
    </footer>
  )
}
