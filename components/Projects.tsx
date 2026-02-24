'use client'

import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const projects = [
  {
    id: '01',
    category: 'Web App',
    title: 'Portfolio Website',
    description:
      'Website de portfólio moderno construído com Next.js, TypeScript e Tailwind CSS com animações suaves e design responsivo.',
    image: '/images/projects/portfolio.jpg',
    github: 'https://github.com/andream001/my-portfolio',
    demo: 'https://andrebunhak.vercel.app',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Framer Motion'],
  },
  {
    id: '02',
    category: 'Web Development',
    title: 'Plataforma E-commerce',
    description:
      'Plataforma e-commerce completa com carrinho de compras, integração de pagamento e dashboard administrativo.',
    image: '/images/projects/ecommerce.jpg',
    github: 'https://github.com/andream001',
    demo: '#',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
  },
  {
    id: '03',
    category: 'Design',
    title: 'Identidade de Marca',
    description:
      'Design completo de identidade de marca incluindo logo, paleta de cores, tipografia e materiais de marketing.',
    image: '/images/projects/branding.jpg',
    github: '',
    demo: '#',
    tags: ['Figma', 'Illustrator', 'Branding', 'UI/UX'],
  },
  {
    id: '04',
    category: 'Mobile App',
    title: 'Gestor de Tarefas',
    description:
      'Aplicação mobile multiplataforma para gerenciamento de tarefas com sincronização em tempo real e recursos de colaboração.',
    image: '/images/projects/taskapp.jpg',
    github: 'https://github.com/andream001',
    demo: '#',
    tags: ['React Native', 'Firebase', 'Redux', 'Mobile'],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const projectVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

export default function Projects() {
  return (
    <section id="projects" className="py-28 bg-transparent">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-serif bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
            Projetos em Destaque
          </h2>
          <p className="text-xl text-purple-300 max-w-2xl mx-auto leading-relaxed">
            Uma seleção curada de projetos que demonstram minha expertise em design e desenvolvimento
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-32"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={projectVariants}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } gap-12 items-center`}
            >
              {/* Image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="w-full md:w-1/2"
              >
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-purple-700/30 to-purple-900/40 border border-purple-700/50">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-7xl font-bold text-white/10 mb-4">
                        {project.id}
                      </div>
                      <p className="text-white/40">{project.title}</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Content */}
              <div className="w-full md:w-1/2 space-y-6">
                <div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center gap-4 mb-4"
                  >
                    <span className="text-6xl font-bold text-purple-300">
                      {project.id}
                    </span>
                    <span className="inline-block text-xs font-bold text-purple-200 bg-purple-800/60 px-4 py-2 rounded-full uppercase tracking-wider">
                      {project.category}
                    </span>
                  </motion.div>

                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {project.title}
                  </h3>

                  <p className="text-lg text-purple-300 leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <motion.span
                      key={tag}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 bg-gradient-to-r from-purple-700/60 to-purple-800/60 text-purple-200 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4 pt-4">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-600/50 transition-all"
                    >
                      <FiGithub size={20} />
                      <span>Código</span>
                    </motion.a>
                  )}
                  {project.demo !== '#' && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-6 py-3 border-2 border-purple-500 text-purple-300 rounded-full hover:bg-purple-700/30 transition-all"
                    >
                      <FiExternalLink size={20} />
                      <span>Demo</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-24"
        >
          <a
            href="https://github.com/andream001?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-semibold text-lg transition-colors"
          >
            Explorar todos os projetos no GitHub
            <FiExternalLink className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
