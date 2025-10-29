<div align="center">

# 🎉 Rolê

### Sua plataforma comunitária de eventos

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express)](https://expressjs.com/)
[![SQLite](https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white)](https://www.sqlite.org/)
[![Material-UI](https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white)](https://mui.com/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

</div>

---

## Sobre o Projeto

**Rolê** é uma plataforma centralizada de descoberta e criação de eventos, desenvolvida para conectar pessoas e atividades em sua cidade. Seja um show, workshop, partida esportiva ou encontro cultural - se está acontecendo na sua região, você encontra no Rolê!

### O Problema

Atualmente, informações sobre eventos estão espalhadas em diversos grupos de WhatsApp, posts no Instagram e sites diferentes. É difícil ter uma visão completa do que está acontecendo na cidade.

### A Solução

O Rolê centraliza todos os eventos em uma única plataforma, onde qualquer pessoa pode descobrir, criar e divulgar atividades. Uma agenda cultural e social alimentada pela própria comunidade.

---

## ✨ Funcionalidades

### 👥 Sistema de Usuários
- ✅ Registro e autenticação de usuários
- ✅ Perfil personalizado
- ✅ Gerenciamento de eventos criados
- ✅ Acompanhamento de eventos confirmados

### 🎪 Gerenciamento de Eventos
- ✅ Criação de eventos com informações detalhadas
- ✅ Edição e exclusão de eventos próprios
- ✅ Categorização em 12+ categorias (festas, shows, workshops, esportes, etc.)
- ✅ Confirmação de presença ("Eu vou!")
- ✅ Visualização de participantes

### 🔍 Descoberta de Eventos
- ✅ Vitrine com eventos em destaque
- ✅ Busca avançada por título, descrição ou local
- ✅ Filtros por categoria e data
- ✅ Eventos organizados por categoria
- ✅ Paginação inteligente

### 📱 Experiência do Usuário
- ✅ Interface moderna e responsiva
- ✅ Design Material-UI
- ✅ Navegação intuitiva
- ✅ Validação de formulários em tempo real

---

## 🛠 Tecnologias

### Frontend
| Tecnologia | Descrição |
|-----------|-----------|
| ![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=flat&logo=react) | Biblioteca para construção de interfaces |
| ![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?style=flat&logo=typescript) | Superset JavaScript com tipagem estática |
| ![Vite](https://img.shields.io/badge/Vite-7.1.2-646CFF?style=flat&logo=vite) | Build tool moderno e rápido |
| ![Material-UI](https://img.shields.io/badge/MUI-7.3.4-0081CB?style=flat&logo=mui) | Biblioteca de componentes React |
| ![React Router](https://img.shields.io/badge/React_Router-7.9.1-CA4245?style=flat&logo=react-router) | Roteamento para aplicações React |
| ![React Hook Form](https://img.shields.io/badge/React_Hook_Form-7.65.0-EC5990?style=flat) | Gerenciamento de formulários performático |
| ![Zod](https://img.shields.io/badge/Zod-4.1.12-3E67B1?style=flat) | Validação de schemas TypeScript-first |

### Backend
| Tecnologia | Descrição |
|-----------|-----------|
| ![Node.js](https://img.shields.io/badge/Node.js-LTS-339933?style=flat&logo=node.js) | Runtime JavaScript do lado do servidor |
| ![Express](https://img.shields.io/badge/Express-5.1.0-000000?style=flat&logo=express) | Framework web minimalista |
| ![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-3178C6?style=flat&logo=typescript) | Superset JavaScript com tipagem estática |
| ![Sequelize](https://img.shields.io/badge/Sequelize-6.37.3-52B0E7?style=flat&logo=sequelize) | ORM para Node.js |
| ![SQLite](https://img.shields.io/badge/SQLite-3-003B57?style=flat&logo=sqlite) | Banco de dados relacional leve |
| ![bcrypt](https://img.shields.io/badge/bcrypt-6.0.0-338?style=flat) | Hash de senhas seguro |

### Ferramentas de Desenvolvimento
| Ferramenta | Descrição |
|-----------|-----------|
| ![Git](https://img.shields.io/badge/Git-F05032?style=flat&logo=git&logoColor=white) | Controle de versão |
| ![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=flat&logo=eslint) | Linter de código JavaScript/TypeScript |
| ![ts-node-dev](https://img.shields.io/badge/ts--node--dev-2.0.0-3178C6?style=flat) | Servidor de desenvolvimento TypeScript |

---

## 🚀 Como Executar

### Pré-requisitos

Certifique-se de ter instalado:
- [Node.js](https://nodejs.org/) (versão LTS recomendada)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)

### Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/saulosw/role-project.git
cd role-project
```

2. **Configure o Backend**
```bash
cd backend
npm install
```

Crie um arquivo `.env` na pasta `backend`:
```env
API_PORT=3000
NODE_ENV=development
```

3. **Configure o Frontend**
```bash
cd ../frontend
npm install
```

### Executando o Projeto

#### Opção 1: Executar Backend e Frontend Separadamente

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```
O servidor estará rodando em `http://localhost:3000`

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```
O aplicativo estará disponível em `http://localhost:5173`

#### Opção 2: Comandos de Build

**Backend:**
```bash
cd backend
npm run build  # Compila TypeScript
npm start      # Executa versão compilada
```

**Frontend:**
```bash
cd frontend
npm run build   # Gera build de produção
npm run preview # Visualiza build de produção
```

---

## 📁 Estrutura do Projeto

```
role-project/
├── backend/                  # Servidor Node.js + Express
│   ├── src/
│   │   ├── config/          # Configuração do banco de dados
│   │   ├── controllers/     # Controladores das rotas
│   │   ├── services/        # Lógica de negócio
│   │   ├── models/          # Modelos Sequelize
│   │   ├── routes/          # Definição de rotas
│   │   ├── middlewares/     # Middlewares de autenticação
│   │   └── index.ts         # Ponto de entrada do servidor
│   ├── database.sqlite      # Banco de dados SQLite
│   └── package.json
│
├── frontend/                 # Aplicação React
│   ├── src/
│   │   ├── components/      # Componentes reutilizáveis
│   │   ├── pages/           # Páginas da aplicação
│   │   ├── hooks/           # Custom hooks React
│   │   ├── schemas/         # Schemas de validação Zod
│   │   ├── utils/           # Funções utilitárias
│   │   ├── App.tsx          # Componente principal + rotas
│   │   └── main.tsx         # Ponto de entrada
│   ├── vite.config.ts
│   └── package.json
│
└── README.md                 # Este arquivo
```

---

## 🎓 Instituição

<div align="center">

### [FECAP - Fundação Escola de Comércio Álvares Penteado](https://www.fecap.br/)

Este projeto foi desenvolvido como parte do curso de **Ciência da Computação** da FECAP, uma das mais tradicionais instituições de ensino superior de São Paulo, fundada em 1902.

### Integrantes do Grupo

- Felipe Vallim
- Gustavo Demetrio
- Pedro Della Rosa
- Saulo Pereira

</div>

---

## 🤝 Como Contribuir

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

---

<div align="center">

**Desenvolvido com ❤️ pela equipe Rolê**

</div>
