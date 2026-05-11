function JobCard({ job }) {
  return (
    <article className="job-card">
      <div className="job-top">
        <div className="job-main-info">
          <h2>{job.title}</h2>

          <div className="company-row">
            <span className="company-name">{job.company}</span>
            <span className="dot">•</span>
            <span className="job-location">
              {job.location || "Location not specified"}
            </span>
          </div>
        </div>

        <div className="source-badge">{job.source}</div>
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