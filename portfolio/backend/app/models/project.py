from __future__ import annotations

from pydantic import BaseModel


class DiagramNode(BaseModel):
    id: str
    label: str
    x: float
    y: float
    tooltip: str = ""
    type: str = "default"


class DiagramEdge(BaseModel):
    source: str
    target: str
    label: str = ""


class GalleryImage(BaseModel):
    filename: str
    caption: str = ""


class TechStackItem(BaseModel):
    category: str
    items: list[str]


class Tab(BaseModel):
    id: str
    label: str
    type: str  # "text" | "diagram" | "gallery" | "poc"
    content: str | None = None
    poc_source: str | None = None
    nodes: list[DiagramNode] | None = None
    edges: list[DiagramEdge] | None = None
    images: list[GalleryImage] | None = None
    tech_stack: list[TechStackItem] | None = None


class ProjectSummary(BaseModel):
    id: str
    name: str
    short_description: str = ""
    company: str = ""
    tags: list[str] = []


class ProjectDetail(BaseModel):
    id: str
    name: str
    short_description: str = ""
    company: str = ""
    year: str = ""
    tags: list[str] = []
    tabs: list[Tab] = []
