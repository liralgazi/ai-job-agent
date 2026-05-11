import JobCard from "./JobCard";

function JobList({ jobs }) {
  if (jobs.length === 0) {
    return (
      <div className="empty-state">
        No jobs found. Try different filters.
      </div>
    );
  }

  return (
    <section className="jobs-section">
      <h3>{jobs.length} jobs found</h3>

      <div className="jobs-grid">
        {jobs.map((job, index) => (
          <JobCard key={index} job={job} />
        ))}
      </div>
    </section>
  );
}

export default JobList;