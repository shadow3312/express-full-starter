# Builder step
FROM node:18-alpine AS builder

RUN npm install -g pnpm

WORKDIR /app

# Copy dependencies
COPY package.json pnpm-lock.yaml ./
COPY prisma ./prisma/

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source code
COPY . .

# Build
RUN pnpm build

RUN cp -r src/generated dist/generated

# Prod step
FROM node:18-alpine AS production

RUN npm install -g pnpm

WORKDIR /app

# Copy dependencies
COPY package.json pnpm-lock.yaml tsconfig.json ./
COPY prisma ./prisma/

# Install dependencies
RUN pnpm install --frozen-lockfile

# Generate prisma types
RUN pnpm db:generate

# Copy builded files from builder step
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/swagger.json ./swagger.json
EXPOSE 3000

ENV NODE_ENV=production

# Startup command
CMD ["pnpm", "start"]