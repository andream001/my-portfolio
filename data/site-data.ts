// Este arquivo contém dados centralizados para facilitar personalização
// Copie e cole nos componentes correspondentes

// ========================================
// HERO SECTION (components/Hero.tsx)
// ========================================

export const heroData = {
  greeting: "Hi, I'm",
  name: "ANDRÉ BUNHAK",
  title: "Web Designer & Content Creator",
  buttons: {
    primary: {
      text: "View My Work",
      href: "#projects"
    },
    secondary: {
      text: "Get in Touch",
      href: "#contact"
    }
  }
}

// ========================================
// ABOUT SECTION (components/About.tsx)
// ========================================

export const aboutData = {
  title: "About Me",
  heading: "Building Digital Experiences",
  paragraphs: [
    "Sou um desenvolvedor web apaixonado por criar experiências digitais únicas e funcionais. Com expertise em design moderno e desenvolvimento front-end, transformo ideias em realidade através de código limpo e interfaces intuitivas.",
    "Especializado em React, Next.js e tecnologias web modernas, estou sempre em busca de novos desafios que me permitam crescer e criar soluções inovadoras."
  ],
  info: {
    location: "Brasil",
    status: "Open to Work"
  },
  image: "/images/profile.jpg"
}

// ========================================
// PROJECTS (components/Projects.tsx)
// ========================================

export const projectsData = [
  {
    id: '01',
    category: 'Web App',
    title: 'Portfolio Website',
    description: 'Modern portfolio website built with Next.js, TypeScript, and Tailwind CSS featuring smooth animations and responsive design.',
    image: '/images/projects/portfolio.jpg',
    github: 'https://github.com/andream001/my-portfolio',
    demo: 'https://andrebunhak.vercel.app',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Framer Motion'],
  },
  {
    id: '02',
    category: 'Web Development',
    title: 'E-commerce Platform',
    description: 'Full-featured e-commerce platform with shopping cart, payment integration, and admin dashboard.',
    image: '/images/projects/ecommerce.jpg',
    github: 'https://github.com/andream001',
    demo: '#',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
  },
  // Adicione mais projetos aqui
]

// ========================================
// SKILLS (components/Skills.tsx)
// ========================================

// Importe os ícones necessários de 'react-icons/si'
export const skillsData = [
  { name: 'Next.js', icon: 'SiNextdotjs', color: '#000000' },
  { name: 'React', icon: 'SiReact', color: '#61DAFB' },
  { name: 'TypeScript', icon: 'SiTypescript', color: '#3178C6' },
  { name: 'JavaScript', icon: 'SiJavascript', color: '#F7DF1E' },
  { name: 'Tailwind', icon: 'SiTailwindcss', color: '#06B6D4' },
  { name: 'HTML5', icon: 'SiHtml5', color: '#E34F26' },
  { name: 'CSS3', icon: 'SiCss3', color: '#1572B6' },
  { name: 'Node.js', icon: 'SiNodedotjs', color: '#339933' },
  { name: 'Git', icon: 'SiGit', color: '#F05032' },
  { name: 'Figma', icon: 'SiFigma', color: '#F24E1E' },
]

// ========================================
// CONTACT & SOCIAL (vários componentes)
// ========================================

export const contactData = {
  email: 'andrebunhak14@gmail.com',
  title: "Let's Work Together",
  subtitle: "Interested in collaborating? Feel free to reach out!",
  buttonText: "Get in Touch"
}

export const socialLinks = {
  github: 'https://github.com/andream001',
  linkedin: 'https://www.linkedin.com/in/andrebunhak/',
  instagram: 'https://www.instagram.com/0an_dream/',
  email: 'mailto:andrebunhak14@gmail.com',
}

// ========================================
// FOOTER (components/Footer.tsx)
// ========================================

export const footerData = {
  name: "André Bunhak",
  tagline: "Web Designer & Content Creator based in Brasil",
  quickLinks: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
  ],
  copyright: "André Bunhak"
}

// ========================================
// MORE TO EXPLORE (components/MoreToExplore.tsx)
// ========================================

export const exploreData = [
  {
    title: 'Blog',
    description: 'Read my thoughts on web development and design',
    link: '/blog',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Achievements',
    description: 'Milestones, certifications, and accomplishments',
    link: '/achievements',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'My Links',
    description: 'Find me across the web and social platforms',
    link: '/links',
    gradient: 'from-orange-500 to-red-500',
  },
]

// ========================================
// ACHIEVEMENTS (app/achievements/page.tsx)
// ========================================

export const achievementsData = [
  {
    title: 'Web Development Certification',
    description: 'Completed advanced web development course',
    date: '2024',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    title: 'First Portfolio Launch',
    description: 'Successfully launched personal portfolio website',
    date: '2024',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Open Source Contributor',
    description: 'Contributing to open source projects on GitHub',
    date: '2024',
    color: 'from-purple-500 to-pink-500',
  },
]

// ========================================
// METADATA (app/layout.tsx)
// ========================================

export const metadataConfig = {
  title: 'André Luiz Bunhak - Portfolio',
  description: 'Web Designer & Content Creator specializing in modern web development with Next.js, React, and TypeScript',
  author: 'André Luiz Bunhak',
  keywords: ['Portfolio', 'Web Developer', 'Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
  siteUrl: 'https://andrebunhak.vercel.app',
  ogImage: '/og-image.jpg',
}

// ========================================
// CORES DO TEMA (tailwind.config.js)
// ========================================

export const themeColors = {
  primary: '#4E567E',      // Roxo/azul escuro
  secondary: '#D2F1E4',    // Verde água claro
  
  // Alternativas:
  // primary: '#0070F3',   // Azul Vercel
  // primary: '#F97316',   // Orange
  // primary: '#6366F1',   // Indigo
}

// ========================================
// INSTRUÇÕES DE USO
// ========================================

/*
1. Copie os dados que precisa deste arquivo
2. Cole no componente correspondente
3. Importe se necessário
4. Personalize com suas informações
5. Salve e teste!

Exemplo:
```tsx
// No componente
import { heroData } from '@/data/site-data'

// Use os dados
<h1>{heroData.name}</h1>
```
*/
