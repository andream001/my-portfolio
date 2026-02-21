# 🚀 CHEAT SHEET - Comandos Rápidos

## 💻 Desenvolvimento

### Rodar Servidor Local
```bash
npm run dev
# Acesse: http://localhost:3000
# Hot reload automático
```

### Build para Produção
```bash
npm run build
# Cria pasta .next otimizada
# Verifique erros antes de deployment
```

### Rodar Build Localmente
```bash
npm start
# Roda a build de produção localmente
# Sem hot reload
```

### Lint & Format
```bash
npm run lint
# Verifica código com ESLint

npm run format
# Formata com Prettier
```

---

## 🌐 Git & GitHub

### Adicionar Tudo
```bash
git add .
# Adiciona todos os arquivos modificados
```

### Fazer Commit
```bash
git commit -m "feat: nova funcionalidade"
# Mensagens padrão:
# feat: nova feature
# fix: correção de bug
# docs: documentação
# style: formatação
# refactor: refatoração
```

### Push para GitHub
```bash
git push origin main
# Envia para o repositório remoto
```

### Ver Status
```bash
git status
# Mostra arquivos modificados

git log --oneline -5
# Mostra últimos 5 commits
```

---

## 📁 Gerenciamento de Arquivos

### Criar Pasta
```bash
mkdir public/images/projects
# Cria pasta para imagens dos projetos
```

### Listar Arquivos
```bash
ls                    # Lista
dir                   # Dir (Windows)
Get-ChildItem        # PowerShell
```

### Deletar Arquivo
```bash
rm arquivo.txt
del arquivo.txt       # Windows
Remove-Item arquivo   # PowerShell
```

---

## 🎨 Customização Rápida

### Alterar Nome do Projeto
**Arquivo:** `components/Hero.tsx` (linha 22)
```typescript
const name = "SEU NOME"
```

### Alterar Título
**Arquivo:** `components/Hero.tsx` (linha 42)
```typescript
<h3>Seu Título Aqui</h3>
```

### Alterar Cores
**Arquivo:** `tailwind.config.js`
```javascript
colors: {
  primary: '#4E567E',    // Sua cor principal
  secondary: '#D2F1E4'   // Sua cor secundária
}
```

### Alterar Fundo
**Arquivo:** `app/layout.tsx`
```tsx
<DynamicBackground
  particleCount={60}              // Aumentar/diminuir
  particleColor="rgba(...)"       // Cor partículas
  connectionColor="rgba(...)"    // Cor linhas
  interactive={true}              // Mouse: true/false
/>
```

### Alterar Email de Contato
**Arquivo:** `components/Contact.tsx`
```tsx
<a href="mailto:seu-email@email.com">
```

---

## 📱 Testar Responsividade

### Browser DevTools
```
F12 ou Ctrl+Shift+I
Clique no ícone de celular
Teste em diferentes resoluções
```

### Resoluções Comuns
- Mobile: 375px (iPhone)
- Tablet: 768px (iPad)
- Desktop: 1920px (Monitor)

### Testar Touch
No DevTools → Console:
```javascript
// Testa mouse events
```

---

## 🔍 Debugging

### Ver Console
```bash
F12 > Console
# Mostra erros e logs
```

### Inspect Element
```bash
F12 > Elements
# Inspeciona HTML/CSS
```

### Network Tab
```bash
F12 > Network
# Vê requisições HTTP
```

### Performance
```bash
F12 > Performance
# Mede performance
```

---

## 🚀 Deployment

### Deploy na Vercel
```bash
# 1. Commit tudo
git add .
git commit -m "feat: deploy"
git push origin main

# 2. Acesse https://vercel.com
# 3. Conecte seu GitHub
# 4. Selecione repositório
# 5. Deploy automático!
```

### Usar Domínio Custom
```
1. Compre domínio (nameche, godaddy)
2. Na Vercel: Settings > Domains
3. Adicione seu domínio
4. Copie nameservers
5. Configure no provedor
```

---

## 📊 Performance

### Lighthouse Check
```bash
# No browser
F12 > Lighthouse
Gerar relatório
```

### Expected Scores
- Performance: 95-100
- Accessibility: 90-100
- Best Practices: 95-100
- SEO: 90-100

---

## 🐛 Troubleshooting

### npm não é reconhecido
```bash
# Use o caminho completo:
&"C:\Program Files\nodejs\npm.cmd" run dev
```

### Port 3000 já está em uso
```bash
# Use outra porta:
npm run dev -- -p 3001
# Acesse: http://localhost:3001
```

### Module not found
```bash
# Reinstale dependências:
npm install

# Ou força limpa:
rm -rf node_modules package-lock.json
npm install
```

### Build fail
```bash
# Veja detalhes:
npm run build

# Procure pela mensagem de erro
# Corrija o arquivo indicado
# Tente novamente
```

### Imagens não aparecem
```bash
# Verifique path:
# Correto: /images/nome.jpg
# Errado: public/images/nome.jpg

# Imagens DEVEM estar em:
# public/images/
```

### Fundo dinâmico não aparece
```bash
# Verifique em app/layout.tsx
# A importação:
import DynamicBackground from '@/components/DynamicBackground'

# E o componente:
<DynamicBackground ... />

# Limpe cache:
Ctrl+Shift+Delete > Cache
```

---

## 📚 Documentação

### Leitura Recomendada
1. `LEIA-ME-PRIMEIRO.md` ⭐
2. `QUICKSTART.md`
3. `NEXT-STEPS.md`
4. `CUSTOMIZATION.md`

---

## ⏱️ Timeline Comum

```
5-10 min      npm install
1 min         npm run dev
10 min        Adicionar imagens
15 min        Personalizar conteúdo
5 min         Customizar cores
5 min         Testar mobile
2 min         npm run build
5 min         git commit & push
10 min        Deploy Vercel
─────────────────────────
~58 min       Total
```

---

## 🎯 Próximo Comando

```bash
npm run dev
```

**Depois:** `http://localhost:3000`

---

## 📞 Cheat Sheet Favorito?

Salve como favorito para referência rápida! 📌

---

*Último atualizado: 2024*
