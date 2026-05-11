function SearchFilters({ filters, onChange, onSearch }) {
  const handleChange = (e) => {
    onChange({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };

  return (
    <section className="filters-card" onKeyDown={handleKeyDown}>
      <div>
        <h1>AI Job Hunter</h1>
        <p>Find junior tech jobs in Israel based on your skills and preferences.</p>
      </div>

      <div className="filters-grid">
        <select name="role" value={filters.role} onChange={handleChange}>
          <option value="">Any role</option>
          <option value="Fullstack">Fullstack Developer</option>
          <option value="Frontend">Frontend Developer</option>
          <option value="Backend">Backend Developer</option>
          <option value="DevOps">DevOps Engineer</option>
          <option value="Data">Data Analyst</option>
          <option value="AI">AI / Automation Developer</option>
        </select>

        <select name="location" value={filters.location} onChange={handleChange}>
          <option value="">Any location</option>
          <option value="Tel Aviv">Tel Aviv</option>
          <option value="Ramat Gan">Ramat Gan</option>
          <option value="Herzliya">Herzliya</option>
          <option value="Petah Tikva">Petah Tikva</option>
          <option value="Haifa">Haifa</option>
          <option value="Remote">Remote</option>
        </select>

        <select name="workMode" value={filters.workMode} onChange={handleChange}>
          <option value="">Any work mode</option>
          <option value="Remote">Remote</option>
          <option value="Hybrid">Hybrid</option>
          <option value="On-site">On-site</option>
        </select>

        <select name="level" value={filters.level} onChange={handleChange}>
          <option value="">Any level</option>
          <option value="Junior">Junior</option>
          <option value="Entry Level">Entry Level</option>
          <option value="Student">Student</option>
        </select>

        <select name="technology" value={filters.technology} onChange={handleChange}>
          <option value="">Any technology</option>
          <option value="React">React</option>
          <option value="JavaScript">JavaScript</option>
          <option value="TypeScript">TypeScript</option>
          <option value="Node.js">Node.js</option>
          <option value="Python">Python</option>
          <option value="FastAPI">FastAPI</option>
          <option value="Docker">Docker</option>
          <option value="Kubernetes">Kubernetes</option>
          <option value="AWS">AWS</option>
          <option value="MongoDB">MongoDB</option>
          <option value="PostgreSQL">PostgreSQL</option>
        </select>

        <button type="button" onClick={onSearch}>
          Search Jobs
        </button>
      </div>
    </section>
  );
}

export default SearchFilters;