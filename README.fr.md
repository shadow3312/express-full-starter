# 🚀 Express TypeScript Boilerplate

Un starter kit Express.js + TypeScript moderne, prêt pour la production, avec tous les outils essentiels :

- ✅ TypeScript
- 🧱 Prisma + PostgreSQL
- 🛡️ Validation Zod + Config Envalid
- 📘 Swagger UI
- 🪵 Logger Winston
- 🌐 Middleware CORS
- 🐳 Docker & docker-compose
- 🧩 Alias `@/` avec `tsconfig-paths`
- 🔁 CLI interne pour les commandes Prisma

---

## 📦 Installation

```bash
pnpm install
```

---

## ⚙️ Configuration

Crée un fichier `.env` à la racine :

```env
NODE_ENV=development
PORT=3000
DATABASE_URL=postgresql://user:password@localhost:5432/ma_db
```

---

## 🧱 Commandes Prisma (via CLI interne)

| Commande                  | Description                               |
|---------------------------|-------------------------------------------|
| `pnpm db:migrate nom`     | Crée une migration et l’applique          |
| `pnpm db:push`            | Pousse le schema vers la DB               |
| `pnpm db:studio`          | Lance Prisma Studio (UI DB)               |
| `pnpm db:reset`           | Reset complet de la DB                    |

Exemple :
```bash
pnpm db:migrate add-users-table
```

---

## 🚀 Lancer le projet

```bash
pnpm dev
```

Swagger est accessible à :  
👉 [http://localhost:3000/docs](http://localhost:3000/docs)

---

## 🐳 Docker

Pour lancer le projet avec Docker :

```bash
docker-compose up --build
```

---

## 📁 Structure du projet

```
src/
├── config/         # Configuration env (envalid)
├── controllers/    # Contrôleurs Express
├── middlewares/    # Middlewares custom
├── routes/         # Déclaration des routes
├── schemas/        # Validation Zod
├── services/       # Logique métier
├── utils/          # Logger, helpers
├── app.ts          # Setup express
└── server.ts       # Point d’entrée serveur
```

---

## 🛠️ Build

```bash
pnpm build
```

Le projet compilé est généré dans le dossier `dist/`.

---

## 📘 Swagger

Le fichier `swagger.json` est déjà préconfiguré et exposé à `/docs`.  
Tu peux enrichir la documentation avec tes propres endpoints.

---

## 🔁 Réutilisation du boilerplate

```bash
git clone <repo> mon-nouveau-projet
cd mon-nouveau-projet
rm -rf .git
pnpm install
pnpm db:push
pnpm dev
```

---

## 📄 Licence

MIT – libre d’utilisation, fork, amélioration et partage 🙌