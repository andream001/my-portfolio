# 🚀 Deploy no Azure Static Web Apps

## ⚡ Início Rápido (5 minutos)

### 1️⃣ Crie uma Conta Azure
- Acesse: https://azure.microsoft.com/pt-br/free
- Crie conta gratuita (inclui $200 de crédito)

### 2️⃣ Configure GitHub Actions

Na raiz do projeto, crie:

```
.github/workflows/azure-static-web-apps-deploy.yml
```

Conteúdo:

```yaml
name: Azure Static Web Apps CI/CD

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build_and_deploy_job:
    runs-on: ubuntu-latest
    name: Build and Deploy Job
    steps:
      - uses: actions/checkout@v3
        with:
          submodules: true

      - name: Build
        run: npm install && npm run build

      - name: Upload artifact
        uses: actions/upload-artifact@v3
        with:
          name: build
          path: ./out

      - name: Deploy to Static Web Apps
        uses: Azure/static-web-apps-deploy@v1
        with:
          azure_static_web_apps_api_token: ${{ secrets.AZURE_STATIC_WEB_APPS_TOKEN }}
          repo_token: ${{ secrets.GITHUB_TOKEN }}
          action: "upload"
          app_location: "/"
          app_artifact_location: "out"
          skip_app_build: true
```

### 3️⃣ Configure next.config.js

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
```

### 4️⃣ No Azure Portal

1. Acesse: https://portal.azure.com
2. Procure: "Static Web Apps"
3. Clique: "Create"
4. Conecte seu repositório GitHub
5. Configure:
   - Build preset: **Next.js**
   - App location: `/`
   - Output location: `out`

### 5️⃣ Deploy Automático

```bash
# Commit e push
git add .
git commit -m "feat: updates"
git push origin main
```

Azure detecta automaticamente e deploya!

---

## ✅ Verificar Deploy

- Acesse seu URL do Azure
- Veja seu portfolio ao vivo!
- Performance: Excelente ⭐

---

## 📊 Vantagens Azure

✅ **Grátis** - $0/mês  
✅ **Rápido** - CDN global  
✅ **Automático** - GitHub Actions  
✅ **HTTPS** - Incluído  
✅ **Sem Servidor** - Sem manutenção  

---

## 🐛 Troubleshooting

### Build falha?

```bash
# Teste localmente
npm run build

# Verifique erros
# Corrija e tente novamente
```

### Site em branco?

```javascript
// next.config.js
output: 'export',  // Essencial!
```

### Imagens não aparecem?

```javascript
images: {
  unoptimized: true,  // Essencial para static export!
}
```

---

## 📞 URL Final

Seu site estará em:
```
https://seu-portfolio.azurestaticapps.net
```

(Azure gera um nome automático, você pode customizar)

---

**Status:** ✅ Pronto para Azure!
