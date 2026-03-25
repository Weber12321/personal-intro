from fastapi import APIRouter, HTTPException

from app.config import load_experiences

router = APIRouter()


@router.get("/experiences")
def get_experiences():
    return load_experiences()


@router.get("/experiences/{experience_id}")
def get_experience(experience_id: str):
    data = load_experiences()
    for exp in data.get("experiences", []):
        if exp["id"] == experience_id:
            return exp
    raise HTTPException(status_code=404, detail="Experience not found")
