from fastapi import APIRouter, HTTPException
from fastapi.responses import FileResponse
from pathlib import Path

from app.config import load_all_projects, load_project

router = APIRouter()

STATIC_DIR = Path(__file__).parent.parent.parent / "static" / "projects"


@router.get("/projects")
def list_projects():
    return {"projects": load_all_projects()}


@router.get("/projects/{project_id}")
def get_project(project_id: str):
    data = load_project(project_id)
    if data is None:
        raise HTTPException(status_code=404, detail="Project not found")
    return data


@router.get("/projects/{project_id}/images/{filename}")
def get_project_image(project_id: str, filename: str):
    path = STATIC_DIR / project_id / filename
    if not path.exists():
        raise HTTPException(status_code=404, detail="Image not found")
    return FileResponse(path)
