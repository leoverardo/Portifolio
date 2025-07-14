# Portfólio Pessoal – Leonardo Moura Verardo Jordão de Souza

Este é um portfólio moderno, minimalista e responsivo, desenvolvido em **React** com **Vite** e estilizado com **Tailwind CSS**. O design é inspirado no site [itssharl.ee](https://itssharl.ee), com tema escuro, tipografia contemporânea, animações suaves e navegação fluida.

## ✨ Funcionalidades

- **Tema escuro** com cores vibrantes e tipografia moderna (Space Grotesk, Sora, Inter)
- **Layout minimalista** e responsivo
- **Navbar fixa** com navegação suave por âncoras
- **Componentes arredondados** e efeito glassmorphism
- **Animações** com Framer Motion
- **Transições suaves** e efeitos de hover
- **Ícones sociais estilizados**
- **Seções**: Sobre, Experiência, Educação, Skills, Projetos, Contato
- **Botão para download do currículo** ao lado do formulário de contato

## 📁 Estrutura do Projeto

```
src/
  components/
    About/
    Contact/
    Education/
    Experience/
    Footer/
    Header/
    Hero/
    Projects/
    Skills/
    AnimatedSection.jsx
  data/
    projects.js
  styles/
    global.css
  App.jsx
  main.jsx
public/
  assets/
    Leonardo Moura Verardo Jordão de Souza (1).pdf
```

## 🚀 Tecnologias Utilizadas

- [React 19](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS 3](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Router DOM 7](https://reactrouter.com/en/main)
- ESLint

## ⚙️ Instalação e Uso

1. **Clone o repositório:**
   ```bash
   git clone <url-do-repo>
   cd portifolio
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Rode o projeto em modo desenvolvimento:**
   ```bash
   npm run dev
   ```

4. **Build para produção:**
   ```bash
   npm run build
   ```

5. **Preview do build:**
   ```bash
   npm run preview
   ```

## 📝 Customização

- **Estilos globais:** `src/styles/global.css` (usa Tailwind + fontes do Google)
- **Configuração do Tailwind:** `tailwind.config.cjs`
- **Configuração do PostCSS:** `postcss.config.cjs`
- **Dados dos projetos:** `src/data/projects.js`
- **Currículo:** Substitua o PDF em `public/assets/` para atualizar o botão de download.

## 📄 Download do Currículo

O botão de download está disponível na seção de contato e utiliza o arquivo:
```
public/assets/Leonardo Moura Verardo Jordão de Souza (1).pdf
```
Para atualizar, basta substituir o arquivo por um novo PDF com o mesmo nome ou ajustar o caminho no componente de contato.

## 💡 Créditos e Inspiração

- Design inspirado em [itssharl.ee](https://itssharl.ee)
- Ícones e fontes do Google Fonts

---
