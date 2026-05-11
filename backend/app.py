from fastapi import FastAPI
from services.greenhouse import search_jobs

app = FastAPI()


@app.get("/")
def root():
    return {"status": "Job Agent Running 🚀"}


@app.get("/jobs")
def get_jobs(keyword: str):
    jobs = search_jobs(keyword)

    return {
        "count": len(jobs),
        "jobs": jobs
    }