import requests

GREENHOUSE_COMPANIES = [
    "notion",
    "vercel",
    "mongodb",
    "stripe",
    "cloudflare",
]


def is_location_match(selected_location: str, job_location: str) -> bool:
    selected_location = selected_location.lower()
    job_location = job_location.lower()

    if not selected_location:
        return True

    if selected_location == "israel":
        israel_keywords = [
            "israel",
            "tel aviv",
            "herzliya",
            "haifa",
            "jerusalem",
            "petah tikva",
            "ramat gan",
            "netanya",
            "raanana",
            "yokneam",
        ]

        return any(keyword in job_location for keyword in israel_keywords)

    return selected_location in job_location


def search_greenhouse_jobs(filters):
    jobs = []

    role = filters.get("role", "").lower()
    location = filters.get("location", "")

    for company in GREENHOUSE_COMPANIES:
        url = f"https://boards-api.greenhouse.io/v1/boards/{company}/jobs"

        try:
            response = requests.get(url, timeout=10)
            data = response.json()

            for job in data.get("jobs", []):
                title = job.get("title", "")
                job_location = job.get("location", {}).get("name", "")

                if role and role not in title.lower():
                    continue

                if not is_location_match(location, job_location):
                    continue

                jobs.append({
                    "company": company.capitalize(),
                    "title": title,
                    "location": job_location,
                    "url": job.get("absolute_url"),
                    "source": "Greenhouse",
                })

        except Exception as e:
            print(f"Error with {company}: {e}")

    return jobs