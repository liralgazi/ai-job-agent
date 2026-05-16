import requests

LEVER_COMPANIES = [
    "netlify",
    "1password",
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
            "ramat gan",
        ]

        return any(keyword in job_location for keyword in israel_keywords)

    return selected_location in job_location


def is_posted_time_match(posted_time: str, job_days_ago: int) -> bool:
    if not posted_time:
        return True

    return job_days_ago <= int(posted_time)


def search_lever_jobs(filters):
    jobs = []

    role = filters.get("role", "").lower()
    location = filters.get("location", "")
    posted_time = filters.get("postedTime", "")

    for company in LEVER_COMPANIES:
        url = f"https://api.lever.co/v0/postings/{company}?mode=json"

        try:
            response = requests.get(url, timeout=10)
            data = response.json()

            for job in data:
                title = job.get("text", "")
                job_location = job.get("categories", {}).get("location", "")

                # Temporary normalized value until real posting dates are added
                job_days_ago = 3

                if role and role not in title.lower():
                    continue

                if not is_location_match(location, job_location):
                    continue

                if not is_posted_time_match(posted_time, job_days_ago):
                    continue

                jobs.append({
                    "company": company.capitalize(),
                    "title": title,
                    "location": job_location,
                    "url": job.get("hostedUrl"),
                    "source": "Lever",
                    "days_ago": job_days_ago,
                    "is_new": job_days_ago <= 3,
                    "level": "Junior",
                })

        except Exception as e:
            print(f"Error with {company}: {e}")

    return jobs