function JobCard({ job }) {
  return (
    <article className="job-card">
      <div className="job-card-header">
        <div>
          <h2>{job.title}</h2>
          <p>{job.company}</p>
        </div>
        <span>{job.level}</span>
      </div>

      <div className="job-meta">
        <span>{job.location}</span>
        <span>{job.workMode}</span>
      </div>

      <div className="tech-list">
        {job.technologies.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>

      <a href={job.url} target="_blank" rel="noreferrer">
        View Job
      </a>
    </article>
  );
}

export default JobCard;