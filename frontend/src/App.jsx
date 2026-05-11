import { useState } from "react";
import SearchFilters from "./components/SearchFilters";
import JobList from "./components/JobList";
import "./App.css";

function App() {
  const [filters, setFilters] = useState({
    role: "",
    location: "",
    workMode: "",
    level: "Junior",
    technology: "",
  });

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchJobs = async () => {
    setLoading(true);

    try {
      const params = new URLSearchParams({
        role: filters.role,
        location: filters.location,
      });

      const response = await fetch(
        `http://127.0.0.1:8000/jobs?${params}`
      );

      const data = await response.json();

      setJobs(data.jobs);
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <main className="page">
      <SearchFilters
        filters={filters}
        onChange={setFilters}
        onSearch={searchJobs}
      />

      {loading ? (
        <div className="loading">Searching jobs...</div>
      ) : (
        <JobList jobs={jobs} />
      )}
    </main>
  );
}

export default App;