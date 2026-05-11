import requests

LEVER_COMPANIES = [
    "netlify",
    "1password",
]


def search_lever_jobs(filters):
    jobs = []

    role = filters.get("role", "").lower()

    for company in LEVER_COMPANIES:
        url = f"https://api.lever.co/v0/postings/{company}?mode=json"

        try:
            response = requests.get(url)
            data = response.json()

            for job in data:
                title = job.get("text", "")

                if role and role not in title.lower():
                    continue

                jobs.append({
                    "company": company.capitalize(),
                    "title": title,
                    "location": job.get("categories", {}).get("location", ""),
                    "url": job.get("hostedUrl"),
                    "source": "Lever"
                })

        except Exception as e:
            print(f"Error with {company}: {e}")

    return jobs