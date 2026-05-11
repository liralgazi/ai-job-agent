import requests

GREENHOUSE_COMPANIES = [
    "notion",
    "vercel",
    "mongodb",
    "stripe",
    "cloudflare",
    "monday",
]


def search_greenhouse_jobs(filters):
    jobs = []

    role = filters.get("role", "").lower()
    location = filters.get("location", "").lower()

    for company in GREENHOUSE_COMPANIES:
        url = f"https://boards-api.greenhouse.io/v1/boards/{company}/jobs"

        try:
            response = requests.get(url)
            data = response.json()

            for job in data.get("jobs", []):
                title = job.get("title", "")
                job_location = job.get("location", {}).get("name", "")

                if role and role not in title.lower():
                    continue

                if location and location not in job_location.lower():
                    continue

                jobs.append({
                    "company": company.capitalize(),
                    "title": title,
                    "location": job_location,
                    "url": job.get("absolute_url"),
                    "source": "Greenhouse"
                })

        except Exception as e:
            print(f"Error with {company}: {e}")

    return jobs