# 🎯 Customization Guide

## 📝 Checklist de Personalização

### 1️⃣ Informações Básicas

- [ ] **Nome e Título** (`components/Hero.tsx`)
  - Linha 22: Altere `"ANDRÉ BUNHAK"` para seu nome
  - Linha 42: Altere o título/cargo

- [ ] **Email** (`components/Contact.tsx`)
  - Linha 20: Seu email principal

- [ ] **Links Sociais** (vários arquivos)
  - GitHub: `https://github.com/SEU-USERNAME`
  - LinkedIn: `https://linkedin.com/in/SEU-PERFIL`
  - Instagram: `https://instagram.com/SEU-USUARIO`

### 2️⃣ Conteúdo

- [ ] **Biografia** (`components/About.tsx`)
  - Linhas 44-54: Escreva sua história
  - Linhas 58-59: Location e Status

- [ ] **Projetos** (`components/Projects.tsx`)
  - Linha 9-46: Array de projetos
  - Adicione 3-6 projetos seus
  - Inclua: título, descrição, tech stack, links

- [ ] **Habilidades** (`components/Skills.tsx`)
  - Linha 16-27: Lista de tecnologias
  - Adicione ou remova conforme necessário

### 3️⃣ Imagens

- [ ] Foto de perfil: `public/images/profile.jpg`
- [ ] Projetos: `public/images/projects/[nome].jpg`
- [ ] Tamanhos recomendados:
  - Profile: 800x800px (square)
  - Projects: 1200x675px (16:9)

### 4️⃣ Cores e Branding

- [ ] **Cores Principais** (`tailwind.config.js`)
```javascript
colors: {
  primary: '#SUA-COR',
  secondary: '#SUA-COR',
}
```

- [ ] **Logo/Iniciais** (`components/Header.tsx`)
  - Linha 25-27: Substitua "AB" pelas suas iniciais

### 5️⃣ Metadados e SEO

- [ ] **Metadata** (`app/layout.tsx`)
  - Linha 21-24: Title e description
  - Adicione Open Graph tags se desejar

- [ ] **Favicon**
  - Adicione `public/favicon.ico`

### 6️⃣ Funcionalidades Opcionais

- [ ] Google Analytics
- [ ] Formulário de contato com EmailJS
- [ ] Dark mode toggle
- [ ] Página de Blog
- [ ] Guestbook
- [ ] Achievements page

---

## 🎨 Paletas de Cores Sugeridas

### Opção 1: Purple/Blue (Atual)
```javascript
primary: '#4E567E',    // Roxo azulado
secondary: '#D2F1E4',  // Verde água
```

### Opção 2: Modern Blue
```javascript
primary: '#0070F3',    // Azul Vercel
secondary: '#7928CA',  // Roxo
```

### Opção 3: Warm Orange
```javascript
primary: '#F97316',    // Orange
secondary: '#FCD34D',  // Yellow
```

### Opção 4: Professional Dark
```javascript
primary: '#111827',    // Gray-900
secondary: '#6366F1',  // Indigo
```

---

## 🚀 Melhorias Futuras

Considere adicionar:

1. **Blog com MDX**
   - Crie `app/blog/page.tsx`
   - Use `next-mdx-remote` para posts

2. **CMS Headless**
   - Integre Sanity.io ou Contentful
   - Gerencie conteúdo sem código

3. **Formulário de Contato**
   - Use EmailJS ou Resend
   - Adicione validação com Zod

4. **Animações Avançadas**
   - Scroll-triggered animations
   - Parallax effects
   - GSAP para animações complexas

5. **Performance**
   - Adicione `next/image` em todas as imagens
   - Lazy loading de componentes pesados
   - Optimize fonts com `next/font`

6. **Analytics**
   - Google Analytics 4
   - Vercel Analytics
   - Hotjar ou Microsoft Clarity

---

## 📐 Design System

### Espaçamento
- Seções: `py-20` (5rem vertical)
- Container: `px-6` (1.5rem horizontal)
- Gaps: `gap-8`, `gap-12` (2rem, 3rem)

### Tipografia
- Títulos grandes: `text-4xl md:text-5xl` (font-serif)
- Subtítulos: `text-2xl md:text-3xl`
- Corpo: `text-lg text-gray-600`

### Arredondamentos
- Cards: `rounded-2xl` (1rem)
- Botões: `rounded-full`
- Pequenos: `rounded-lg`

### Sombras
- Cards: `shadow-lg`, `shadow-2xl`
- Hover: `hover:shadow-2xl`

### Transições
- Padrão: `transition-all duration-300`
- Suave: `transition-all duration-500`

---

## 🔗 Recursos Úteis

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Unsplash](https://unsplash.com/) - Imagens gratuitas
- [Coolors](https://coolors.co/) - Paletas de cores

---

**Dica:** Comece personalizando o conteúdo (textos e links) antes de mexer no design e cores!
