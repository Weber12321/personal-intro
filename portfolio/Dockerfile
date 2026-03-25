# Stage 1: Build React frontend
FROM node:20-alpine AS frontend-build

WORKDIR /frontend
COPY frontend/package.json frontend/package-lock.json* ./
RUN npm ci
COPY frontend/ .

# API calls go to same origin in production
ENV VITE_API_BASE_URL=/api/v1
RUN node node_modules/vite/bin/vite.js build

# Stage 2: Python backend + static frontend
FROM python:3.11-slim

WORKDIR /app

COPY backend/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY backend/app ./app
COPY backend/static ./static

# Copy React build output into backend's static_frontend dir
COPY --from=frontend-build /frontend/dist ./static_frontend

ENV PORT=8000
EXPOSE ${PORT}

CMD uvicorn app.main:app --host 0.0.0.0 --port ${PORT}
