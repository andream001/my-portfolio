'use client'

import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink, FiArrowRight } from 'react-icons/fi'

const projects = [
  {
    id: '01',
    category: 'Frontend',
    tag: 'Destaque',
    title: 'Portfolio Website',
    description: 'Next.js 14, TypeScript e Tailwind CSS. AnimaÃ§Ãµes com Framer Motion e design totalmente responsivo.',
    github: 'https://github.com/andream001/my-portfolio',
    demo: 'https://andrebunhak.vercel.app',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Framer Motion'],
    featured: true,
    accent: 'from-purple-500 to-blue-500',
  },
  {
    id: '02',
    category: 'E-commerce',
    tag: 'Recente',
    title: 'Plataforma E-commerce',
    description: 'Carrinho, pagamento via Stripe e painel admin completo.',
    github: 'https://github.com/andream001',
    demo: '#',
    tags: ['React', 'Node.js', 'MongoDB'],
    featured: false,
    accent: 'from-pink-500 to-purple-500',
  },
  {
    id: '03',
    category: 'Design',
    tag: 'Branding',
    title: 'Identidade de Marca',
    description: 'Logo, paleta de cores e materiais de marketing criados do zero.',
    github: '',
    demo: '#',
    tags: ['Figma', 'Branding', 'UI/UX'],
    featured: false,
    accent: 'from-orange-500 to-pink-500',
  },
  {
    id: '04',
    category: 'Mobile',
    tag: 'App',
    title: 'Gestor de Tarefas',
    description: 'App multiplataforma com Firebase e colaboraÃ§Ã£o em tempo real.',
    github: 'https://github.com/andream001',
    demo: '#',
    tags: ['React Native', 'Firebase'],
    featured: false,
    accent: 'from-green-500 to-cyan-500',
  },
  {
    id: '05',
    category: 'Backend',
    tag: 'API',
    title: 'REST API EscalÃ¡vel',
    description: 'MicrosserviÃ§os com JWT, rate limiting e documentaÃ§Ã£o Swagger.',
    github: 'https://github.com/andream001',
    demo: '#',
    tags: ['Node.js', 'Express', 'Docker'],
    featured: false,
    accent: 'from-blue-500 to-cyan-400',
  },
]

const featured = projects.find((p) => p.featured)!
const rest = projects.filter((p) => !p.featured)

export default function Projects() {
  return (
    <section id="projects" className="py-14 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-end justify-between mb-8 pb-4 border-b border-red-800/40"
        >
          <div>
            <p className="text-xs font-bold text-red-400 uppercase tracking-widest mb-1">
              PortfÃ³lio Â· {new Date().getFullYear()}
            </p>
            <h2 className="text-3xl md:text-4xl font-black font-serif text-white leading-none">
              Projetos
            </h2>
          </div>
          <motion.a
            href="https://github.com/andream001?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 4 }}
            className="hidden sm:flex items-center gap-2 text-red-400 hover:text-white text-sm font-medium transition-colors"
          >
            Ver todos <FiArrowRight size={14} />
          </motion.a>
        </motion.div>

        {/* Featured Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <div className="group relative rounded-2xl overflow-hidden border border-red-800/40 hover:border-red-600/60 bg-red-950/20 hover:bg-red-950/30 p-6 sm:p-8 transition-all">
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${featured.accent}`} />
            <span className="absolute top-4 right-6 text-8xl font-black text-white/[0.04] font-serif select-none leading-none pointer-events-none">
              {featured.id}
            </span>

            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`px-2 py-0.5 text-xs font-black uppercase tracking-wider bg-gradient-to-r ${featured.accent} text-white rounded`}>
                    {featured.tag}
                  </span>
                  <span className="text-xs font-bold text-red-400 uppercase tracking-wider">
                    {featured.category}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black font-serif text-white mb-3 group-hover:text-red-100 transition-colors">
                  {featured.title}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4 max-w-xl">
                  {featured.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {featured.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 bg-red-900/40 text-red-200 rounded text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex sm:flex-col gap-2 shrink-0">
                {featured.github && (
                  <motion.a
                    href={featured.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.04, y: -2 }}
                    whileTap={{ scale: 0.96 }}
                    className="flex items-center gap-2 px-4 py-2 bg-red-800 hover:bg-red-700 text-white rounded font-bold text-sm transition-all"
                  >
                    <FiGithub size={15} /> CÃ³digo
                  </motion.a>
                )}
                {featured.demo !== '#' && (
                  <motion.a
                    href={featured.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.04, y: -2 }}
                    whileTap={{ scale: 0.96 }}
                    className="flex items-center gap-2 px-4 py-2 border border-red-700 text-red-300 hover:bg-red-950/40 rounded font-bold text-sm transition-all"
                  >
                    <FiExternalLink size={15} /> Demo
                  </motion.a>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Project Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {rest.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group relative"
            >
              <div className="relative h-full rounded-xl overflow-hidden border border-red-800/30 hover:border-red-600/50 bg-red-950/15 hover:bg-red-950/25 p-5 transition-all">
                <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${project.accent}`} />
                <span className="text-xs font-bold text-red-400 uppercase tracking-wider mb-2 block">
                  {project.category}
                </span>
                <h4 className="text-sm font-black font-serif text-white leading-tight mb-2 group-hover:text-red-200 transition-colors">
                  {project.title}
                </h4>
                <p className="text-xs text-gray-400 leading-relaxed mb-3 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="px-1.5 py-0.5 bg-red-900/40 text-red-300 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                {project.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2 }}
                    className="text-red-400 hover:text-white transition-colors inline-block"
                  >
                    <FiGithub size={13} />
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-red-800/30"
        >
          <p className="text-sm text-gray-400">Mais projetos disponÃ­veis no GitHub</p>
          <div className="flex gap-3">
            <motion.a
              href="https://github.com/andream001?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-red-700 hover:bg-red-600 text-white rounded text-sm font-semibold transition-all"
            >
              <FiGithub size={16} /> Ver no GitHub
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-red-700 text-red-300 hover:bg-red-950/40 rounded text-sm font-semibold transition-all"
            >
              Fale Comigo
            </motion.a>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

