from pydantic import BaseModel


class Experience(BaseModel):
    id: str
    year: str
    company: str
    title: str
    summary: str
    highlights: list[str] = []
    description: str = ""


class ExperienceList(BaseModel):
    experiences: list[Experience]
