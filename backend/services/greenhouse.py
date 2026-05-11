import requests

COMPANIES = [
    "notion",
    "vercel",
    "mongodb",
    "stripe",
    "cloudflare"
]


def search_jobs(keyword="software"):
    all_jobs = []

    for company in COMPANIES:
        url = f"https://boards-api.greenhouse.io/v1/boards/{company}/jobs"

        try:
            response = requests.get(url)
            data = response.json()

            for job in data.get("jobs", []):
                title = job.get("title", "")

                if keyword.lower() in title.lower():
                    all_jobs.append({
                        "company": company,
                        "title": title,
                        "location": job.get("location", {}).get("name", ""),
                        "url": job.get("absolute_url")
                    })

        except Exception as e:
            print(f"Error with {company}: {e}")

    return all_jobs
