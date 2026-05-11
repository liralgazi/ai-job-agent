import JobCard from "./JobCard";

function JobList({ jobs }) {
  if (jobs.length === 0) {
    return <div className="empty-state">No matching jobs found yet.</div>;
  }

  return (
    <section className="jobs-section">
      <h3>{jobs.length} matching jobs found</h3>

      <div className="jobs-grid">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </section>
  );
}

export default JobList;