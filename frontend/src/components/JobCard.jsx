function JobCard({ job }) {
  return (
    <article className="job-card">
      <div className="job-top">
        <div className="job-main-info">
          <div className="title-row">
            <h2>{job.title}</h2>

            {job.is_new && (
              <span className="new-badge">
                🔥 New
              </span>
            )}
          </div>

          <div className="company-row">
            <span className="company-name">
              {job.company}
            </span>

            <span className="dot">•</span>

            <span className="job-location">
              {job.location || "Location not specified"}
            </span>
          </div>

          <div className="job-tags">
            <span className="junior-tag">
              🟢 {job.level || "Junior"}
            </span>

            <span className="days-tag">
              {job.days_ago === 1
                ? "1 day ago"
                : job.days_ago
                ? `${job.days_ago} days ago`
                : "Posted recently"}
            </span>
          </div>
        </div>

        <div className="source-badge">
          {job.source}
        </div>
      </div>

      <div className="job-footer">
        <a
          href={job.url}
          target="_blank"
          rel="noreferrer"
          className="apply-button"
        >
          Apply Now
        </a>
      </div>
    </article>
  );
}

export default JobCard;