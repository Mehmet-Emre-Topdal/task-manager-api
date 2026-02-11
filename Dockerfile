FROM node:20-alpine AS base

WORKDIR /app

COPY package*.json ./

FROM base AS development
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]

FROM base AS production-deps
RUN npm ci --only=production

FROM base AS build
RUN npm ci
COPY . .
RUN npm test

FROM node:20-alpine AS production
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

COPY --from=production-deps /app/node_modules ./node_modules
COPY --from=build /app/src ./src
COPY --from=build /app/server.js ./
COPY --from=build /app/package.json ./

RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodejs -u 1001 && \
    chown -R nodejs:nodejs /app

USER nodejs

EXPOSE 3000

CMD ["node", "server.js"]
