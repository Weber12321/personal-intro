# Stage 1: Build
FROM node:20-alpine AS build

WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci
COPY . .

ARG VITE_API_BASE_URL=http://localhost:8000/api/v1
ENV VITE_API_BASE_URL=${VITE_API_BASE_URL}

RUN node node_modules/vite/bin/vite.js build

# Stage 2: Serve static files
FROM node:20-alpine

WORKDIR /app
RUN npm install -g serve

COPY --from=build /app/dist ./dist

ENV PORT=80
EXPOSE ${PORT}

CMD ["sh", "-c", "serve dist -s -l $PORT"]
