FROM node:18-alpine

WORKDIR /app

COPY pnpm-lock.yaml package.json pnpm-workspace.yaml ./
COPY apps/web/package.json ./apps/web/

RUN corepack enable && pnpm install --frozen-lockfile --filter web...

COPY apps/web ./apps/web

EXPOSE 3000

CMD ["pnpm", "--filter", "web", "dev"]