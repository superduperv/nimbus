FROM node:18-alpine

WORKDIR /app

COPY pnpm-lock.yaml package.json pnpm-workspace.yaml ./
COPY apps/api/package.json ./apps/api/

RUN corepack enable && pnpm install --frozen-lockfile --filter api...

COPY apps/api ./apps/api

EXPOSE 4000

CMD ["pnpm", "--filter", "api", "start"]
