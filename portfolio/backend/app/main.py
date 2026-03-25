import os

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routers import profile, experiences, projects

app = FastAPI(title="Weber Huang Portfolio API")

origins = os.getenv("CORS_ORIGINS", "http://localhost:5173").split(",")

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(profile.router, prefix="/api/v1")
app.include_router(experiences.router, prefix="/api/v1")
app.include_router(projects.router, prefix="/api/v1")


@app.get("/api/v1/health")
def health():
    return {"status": "ok"}
