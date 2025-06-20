# 🚀 Express-TypeScript Production Ready Starter

<div align="center">
    <img src="https://img.shields.io/badge/Express-4.18.2-black?style=for-the-badge&logo=express" alt="Express" />
    <img src="https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript" alt="Typescript" />
    <img src="https://img.shields.io/badge/Prisma-4.15.0-2D3748?style=for-the-badge&logo=prisma" alt="Prisma" />
    <img src="https://img.shields.io/badge/Docker-24.0.7-blue?style=for-the-badge&logo=docker" alt="Docker" />
    <img src="https://img.shields.io/badge/TSC%20alias-%40%2Fsrc-blueviolet?style=for-the-badge&logo=typescript" alt="TSC alias" />
    <img src="https://img.shields.io/badge/pnpm-8.6.12-F69220?style=for-the-badge&logo=pnpm" alt="pnpm" />
</div>

<div align="center">
This is a **modern and production ready Express.js + TypeScript boilerplate** designed to kickstart your backend projects with best practices and essential tools:
</div>

- ✅ **TypeScript** setup with alias support (`@/` → `src`)
- 🧱 **Prisma + PostgreSQL** database integration
- 🛡️ **Zod + Envalid** for schema and env validation
- 🌐 **CORS** middleware
- 🪵 **Winston** logger
- 📘 **Swagger UI** docs at `/docs`
- 🐳 Ready for **Docker & docker-compose**
- 🔁 Built-in **Prisma CLI commands**
- 🏁 Easy to extend, modular project structure

---

## 🚀 Getting Started

You can use this boilerplate in 3 different ways:

### Option 1: GitHub Template (recommended)

1. Click the green **"Use this template"** button on [GitHub](https://github.com/your-username/express-ts-boilerplate)
2. Clone your new repo:
   ```bash
   git clone https://github.com/your-org/your-new-repo
   cd your-new-repo
   pnpm install
   pnpm dev
   ```

### Option 2: Use degit (fast clone, no git history)

```bash
pnpm dlx degit shadow3312/express-ts-boilerplate my-app
cd my-app
pnpm install
pnpm dev
```

### Option 3: Docker

## docker-compose up --build

## ⚙️ Environment Setup

Create a `.env` file at the root:

```env
NODE_ENV=development
PORT=3000
DATABASE_URL=postgresql://user:password@localhost:5432/your_db
```

---

## 🧱 Prisma CLI Commands

| Command                | Description                       |
| ---------------------- | --------------------------------- |
| `pnpm db:migrate name` | Creates and runs a new migration  |
| `pnpm db:push`         | Pushes the schema to the database |
| `pnpm db:studio`       | Opens Prisma Studio               |
| `pnpm db:reset`        | Drops and resets the database     |

Example:

```bash
pnpm db:migrate add-users-table
```

---

## 🚀 Start the App

```bash
pnpm dev
```

Swagger will be available at:  
👉 [http://localhost:3001/docs](http://localhost:3001/docs)

---

## 📁 Project Structure

```
scripts             # CLI setup
src/
├── config/         # Environment config (Envalid and db)
├── controllers/    # Express controllers
├── middlewares/    # Custom middleware
├── routes/         # Route definitions
├── schemas/        # Zod validation schemas
├── services/       # Business logic
├── types/          # Types, interfaces
├── utils/          # Logger, helpers
├── app.ts          # Express app setup
└── server.ts       # Entry point
```

---

## 🛠️ Build

```bash
pnpm build
```

The compiled app will be in the `dist/` folder.

---

## 📘 Swagger

The included `swagger.json` is preconfigured and served at `/docs`.  
You can enhance the documentation with your own endpoints.

---

## 📄 License

MIT – Free to use, fork, improve, and share 🙌
