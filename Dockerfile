FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build:deploy

FROM node:20-alpine

RUN npm install -g serve

WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY serve.json ./

EXPOSE 3000

CMD ["serve", "-s", "dist", "-l", "3000", "--config", "serve.json"]
