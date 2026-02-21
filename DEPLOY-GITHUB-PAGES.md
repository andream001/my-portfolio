# 📄 Deploy no GitHub Pages

## ⚡ Início Rápido (10 minutos)

### 1️⃣ Configure next.config.js

Para GitHub Pages funcionar, precisa de export estático:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/my-portfolio',  // Se usar repo name diferente
}

module.exports = nextConfig
```

### 2️⃣ Crie GitHub Action

Crie arquivo:
```
.github/workflows/deploy.yml
```

Conteúdo:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'

      - name: Install dependencies
        run: npm install

      - name: Build
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2
        with:
          path: './out'

  deploy:
    needs: build
    runs-on: ubuntu-latest
    permissions:
      pages: write
      id-token: write
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}

    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v2
```

### 3️⃣ Configure GitHub

1. Acesse seu repositório
2. Vá para: **Settings** → **Pages**
3. Em "Source", selecione: **GitHub Actions**
4. Salve

### 4️⃣ Deploy

```bash
git add .github/
git commit -m "feat: github pages deployment"
git push origin main
```

GitHub Actions faz o deploy automaticamente!

---

## ✅ Verificar Deploy

1. Acesse: **Settings** → **Pages**
2. Seu site estará em: `https://seu-usuario.github.io/my-portfolio`

---

## ⚠️ Limitações GitHub Pages

❌ Sem server-side rendering  
❌ Sem API routes  
❌ Apenas static export  

✅ **MAS** seu portfolio funciona perfeitamente!

---

## 📊 Vantagens

✅ **100% Grátis**  
✅ **Integrado com GitHub**  
✅ **Simples**  
✅ **HTTPS automático**  
✅ **Deploy automático**  

---

## 🎯 Comandos Úteis

```bash
# Build local
npm run build

# Testar localmente
npx serve out

# Verificar build
ls -la out/
```

---

## 🐛 Troubleshooting

### "Page not found"?

Verifique `basePath`:
```javascript
basePath: '/my-portfolio',  // Se repo não é "seu-usuario.github.io"
```

### Images não aparecem?

```javascript
images: {
  unoptimized: true,  // Essencial!
}
```

### Build falhando?

```bash
npm run build  # Teste localmente
npm run lint   # Verifique erros
```

---

## 📞 URL Final

```
https://seu-usuario.github.io/my-portfolio
```

Substitua `seu-usuario` pelo seu login GitHub!

---

**Status:** ✅ Pronto para GitHub Pages!
