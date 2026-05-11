function JobCard({ job }) {
  return (
    <article className="job-card">
      <div className="job-card-header">
        <div>
          <h2>{job.title}</h2>
          <p>{job.company}</p>
        </div>

        <span>{job.source}</span>
      </div>

      <div className="job-meta">
        <span>{job.location}</span>
      </div>

      <a href={job.url} target="_blank" rel="noreferrer">
        Apply Now
      </a>
    </article>
  );
}

export default JobCard;