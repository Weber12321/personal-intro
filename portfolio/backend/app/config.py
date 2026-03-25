from pathlib import Path
from functools import lru_cache

import yaml

DATA_DIR = Path(__file__).parent / "data"
PROJECTS_DIR = DATA_DIR / "projects"


@lru_cache
def load_profile() -> dict:
    with open(DATA_DIR / "profile.yaml", encoding="utf-8") as f:
        return yaml.safe_load(f)


@lru_cache
def load_experiences() -> dict:
    with open(DATA_DIR / "experiences.yaml", encoding="utf-8") as f:
        return yaml.safe_load(f)


def load_project(project_id: str) -> dict | None:
    path = PROJECTS_DIR / f"{project_id}.yaml"
    if not path.exists():
        return None
    with open(path, encoding="utf-8") as f:
        return yaml.safe_load(f)


def load_all_projects() -> list[dict]:
    projects = []
    for path in sorted(PROJECTS_DIR.glob("*.yaml")):
        with open(path, encoding="utf-8") as f:
            data = yaml.safe_load(f)
            projects.append({
                "id": data["id"],
                "name": data["name"],
                "short_description": data.get("short_description", ""),
                "company": data.get("company", ""),
                "tags": data.get("tags", []),
            })
    return projects
