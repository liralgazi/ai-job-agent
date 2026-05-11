import { useState } from "react";
import SearchFilters from "./components/SearchFilters";
import JobList from "./components/JobList";
import { mockJobs } from "./data/mockJobs";
import "./App.css";

function App() {
  const [filters, setFilters] = useState({
    role: "",
    location: "",
    workMode: "",
    level: "Junior",
    technology: "",
  });

  const [jobs, setJobs] = useState(mockJobs);

  const searchJobs = () => {
    const filteredJobs = mockJobs.filter((job) => {
      const matchesRole =
        !filters.role ||
        job.title.toLowerCase().includes(filters.role.toLowerCase());

      const matchesLocation =
        !filters.location ||
        job.location.toLowerCase().includes(filters.location.toLowerCase());

      const matchesWorkMode =
        !filters.workMode || job.workMode === filters.workMode;

      const matchesLevel =
        !filters.level || job.level === filters.level;

      const matchesTechnology =
        !filters.technology ||
        job.technologies.some((tech) =>
          tech.toLowerCase().includes(filters.technology.toLowerCase())
        );

      return (
        matchesRole &&
        matchesLocation &&
        matchesWorkMode &&
        matchesLevel &&
        matchesTechnology
      );
    });

    setJobs(filteredJobs);
  };

  return (
    <main className="page">
      <SearchFilters
        filters={filters}
        onChange={setFilters}
        onSearch={searchJobs}
      />

      <JobList jobs={jobs} />
    </main>
  );
}

export default App;