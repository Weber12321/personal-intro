import os
from pathlib import Path

from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles

from app.routers import profile, experiences, projects

app = FastAPI(title="Weber Huang Portfolio API")

cors_env = os.getenv("CORS_ORIGINS", "*")
origins = ["*"] if cors_env == "*" else [o.strip() for o in cors_env.split(",")]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=cors_env != "*",
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(profile.router, prefix="/api/v1")
app.include_router(experiences.router, prefix="/api/v1")
app.include_router(projects.router, prefix="/api/v1")


@app.get("/api/v1/health")
def health():
    return {"status": "ok"}


# Serve React static build (for production / Railway deployment)
STATIC_DIR = Path(__file__).parent.parent / "static_frontend"

if STATIC_DIR.exists():
    app.mount("/assets", StaticFiles(directory=STATIC_DIR / "assets"), name="frontend-assets")

    @app.get("/{full_path:path}")
    async def serve_spa(request: Request, full_path: str):
        # Try serving a real static file first
        file_path = STATIC_DIR / full_path
        if full_path and file_path.exists() and file_path.is_file():
            return FileResponse(file_path)
        # Fallback to index.html for SPA client-side routing
        return FileResponse(STATIC_DIR / "index.html")
