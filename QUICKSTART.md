# ⚡ Quick Start Guide

## 🎯 Próximos Passos (Execute nesta ordem!)

### 1️⃣ Instalar Dependências (IMPORTANTE!)

Abra o terminal e execute:

```bash
npm install
```

Isso instalará:
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- React Icons

### 2️⃣ Adicionar Suas Imagens

Crie as pastas necessárias:

```bash
# PowerShell
New-Item -ItemType Directory -Force -Path public\images\projects

# Ou manualmente crie:
# public/images/profile.jpg
# public/images/projects/portfolio.jpg
# public/images/projects/ecommerce.jpg
# public/images/projects/branding.jpg
# public/images/projects/taskapp.jpg
```

### 3️⃣ Rodar o Projeto

```bash
npm run dev
```

Abra: `http://localhost:3000`

### 4️⃣ Personalizar (Arquivos Importantes)

1. **Hero** → `components/Hero.tsx` (Nome e título)
2. **About** → `components/About.tsx` (Biografia)
3. **Projects** → `components/Projects.tsx` (Seus projetos)
4. **Skills** → `components/Skills.tsx` (Suas tecnologias)
5. **Cores** → `tailwind.config.js` (primary/secondary)

### 5️⃣ Testar

- ✅ Navegação funciona?
- ✅ Imagens aparecem?
- ✅ Animações funcionam?
- ✅ Links sociais corretos?
- ✅ Responsivo no mobile?

### 6️⃣ Deploy

```bash
# Commit suas mudanças
git add .
git commit -m "feat: novo portfolio com Next.js"
git push origin main

# Depois vá para vercel.com e importe o repositório
```

---

## 🐛 Problemas Comuns

### Erro: "Module not found"
```bash
npm install
```

### Erro: "Port 3000 is already in use"
```bash
npm run dev -- -p 3001
```

### Imagens não aparecem
- Verifique se estão em `public/images/`
- Use path: `/images/nome.jpg` (sem "public")

### TypeScript errors
```bash
npm run build
# Verifique os erros e corrija
```

---

## 📊 Estrutura Criada

✅ **Arquivos de Configuração**
- `package.json` - Dependências atualizadas
- `next.config.js` - Config do Next.js
- `tailwind.config.js` - Config do Tailwind
- `tsconfig.json` - Config do TypeScript
- `postcss.config.js` - Config do PostCSS

✅ **App Directory (Next.js 14)**
- `app/layout.tsx` - Layout principal
- `app/page.tsx` - Página inicial
- `app/globals.css` - Estilos globais
- `app/loading.tsx` - Loading state
- `app/error.tsx` - Error boundary
- `app/not-found.tsx` - 404 page

✅ **Componentes Principais**
- `components/Header.tsx` - Navegação
- `components/Hero.tsx` - Hero section com animações
- `components/About.tsx` - Sobre você
- `components/Projects.tsx` - Portfolio de projetos
- `components/Skills.tsx` - Tecnologias
- `components/Contact.tsx` - Contato
- `components/Footer.tsx` - Rodapé
- `components/MoreToExplore.tsx` - Cards extras

✅ **Páginas Adicionais**
- `app/blog/page.tsx` - Blog (placeholder)
- `app/achievements/page.tsx` - Conquistas
- `app/links/page.tsx` - Árvore de links

✅ **Documentação**
- `README.md` - Documentação principal
- `SETUP.md` - Instruções de setup
- `CUSTOMIZATION.md` - Guia de customização
- `VISUAL-GUIDE.md` - Guia visual das seções
- `COMMANDS.md` - Comandos úteis

---

## 🎉 Pronto!

Seu portfolio moderno está configurado! Agora é só:

1. `npm install`
2. `npm run dev`
3. Personalizar o conteúdo
4. Deploy na Vercel

**Dúvidas?** Consulte os guias criados ou a documentação do Next.js!

---

💡 **Dica:** Use o VS Code com as extensões:
- ES7+ React/Redux/React-Native snippets
- Tailwind CSS IntelliSense
- Prettier
