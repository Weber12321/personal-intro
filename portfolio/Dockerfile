# Stage 1: Build React frontend
FROM node:20-alpine AS frontend-build

WORKDIR /frontend
COPY frontend/package.json frontend/package-lock.json* ./
RUN npm ci
COPY frontend/ .

ENV VITE_API_BASE_URL=/api/v1
RUN node node_modules/vite/bin/vite.js build
# Verify build output
RUN ls -la dist/ && ls -la dist/assets/

# Stage 2: Python backend + static frontend
FROM python:3.11-slim

WORKDIR /app

COPY backend/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY backend/app ./app
COPY backend/static ./static
COPY --from=frontend-build /frontend/dist ./static_frontend

# Verify static_frontend exists
RUN ls -la static_frontend/ && ls -la static_frontend/assets/

ENV PORT=8000

CMD ["sh", "-c", "uvicorn app.main:app --host 0.0.0.0 --port $PORT"]
