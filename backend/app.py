from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from services.greenhouse import search_greenhouse_jobs
from services.lever import search_lever_jobs

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def root():
    return {"status": "AI Job Agent Backend Running 🚀"}


@app.get("/jobs")
def get_jobs(
    role: str = "",
    location: str = "",
):
    filters = {
        "role": role,
        "location": location,
    }

    greenhouse_jobs = search_greenhouse_jobs(filters)
    lever_jobs = search_lever_jobs(filters)

    jobs = greenhouse_jobs + lever_jobs

    return {
        "count": len(jobs),
        "jobs": jobs,
    }