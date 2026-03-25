from fastapi import APIRouter

from app.config import load_profile

router = APIRouter()


@router.get("/profile")
def get_profile():
    return load_profile()
