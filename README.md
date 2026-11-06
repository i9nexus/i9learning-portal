# i9 Learning - Portal Institucional & Soluções eLearning

Portal institucional da **i9 Learning**, empresa portuguesa especializada em soluções de eLearning à medida, implementação de plataformas LMS Moodle, desenvolvimento de cursos interativos (SCORM/xAPI), inteligência artificial aplicada à educação, consultoria EdTech e suporte especializado.

## Tecnologias

- **Framework**: [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Linguagem**: [TypeScript](https://www.typescriptlang.org/)
- **Estilos**: [Tailwind CSS](https://tailwindcss.com/)
- **Componentes UI**: [Radix UI](https://www.radix-ui.com/) + [shadcn/ui](https://ui.shadcn.com/)
- **Ícones**: [Lucide React](https://lucide.dev/)
- **Animações**: [Framer Motion](https://www.framer.com/motion/)
- **Formulário de Contacto**: [Web3Forms](https://web3forms.com/)
- **Alojamento & Deploy**: [Vercel](https://vercel.com/)

## Desenvolvimento Local

```sh
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento (porta 3000)
npm run dev

# Construir para produção
npm run build

# Executar testes unitários
npm test

# Executar linter
npm run lint
```

## Variáveis de Ambiente

Crie um ficheiro `.env` com base no `.env.example`:

```env
VITE_WEB3FORMS_KEY=a-sua-chave-web3forms
```

## Deploy na Vercel

O projeto está configurado para deploy contínuo na Vercel:
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`
- Certifique-se de configurar a variável de ambiente `VITE_WEB3FORMS_KEY` no painel da Vercel (Project Settings > Environment Variables).
