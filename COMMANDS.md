# 🛠️ Comandos Úteis

## Desenvolvimento

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Iniciar servidor de produção
npm start

# Linting
npm run lint
```

## Estrutura de Pastas

```bash
# Criar pasta de imagens
mkdir -p public/images/projects

# Listar estrutura do projeto
tree -L 2
```

## Git

```bash
# Verificar status
git status

# Adicionar arquivos
git add .

# Commit
git commit -m "feat: migração para Next.js com Tailwind"

# Push
git push origin main
```

## Deploy

### Vercel CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy para produção
vercel --prod
```

## Troubleshooting

```bash
# Limpar cache do Next.js
rm -rf .next

# Limpar node_modules e reinstalar
rm -rf node_modules
npm install

# Verificar versão do Node
node --version

# Verificar versão do npm
npm --version
```

## Úteis

```bash
# Abrir no VS Code
code .

# Abrir no navegador
start http://localhost:3000
```
