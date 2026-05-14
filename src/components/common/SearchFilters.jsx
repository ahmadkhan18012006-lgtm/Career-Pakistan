import { allFields } from "../../data/fields.js";

export default function SearchFilters({ filters, onChange }) {
  const skills = [...new Set(allFields.flatMap((field) => field.skills.slice(0, 3)))].slice(0, 18);

  function update(key, value) {
    onChange({ ...filters, [key]: value });
  }

  return (
    <div className="glass-card grid gap-3 p-4 md:grid-cols-2 xl:grid-cols-5">
      <input
        value={filters.search}
        onChange={(event) => update("search", event.target.value)}
        className="input-control xl:col-span-2"
        placeholder="Search careers, skills, tools..."
      />
      <select value={filters.demand} onChange={(event) => update("demand", event.target.value)} className="input-control">
        <option value="all">All demand</option>
        <option value="High">High demand</option>
        <option value="Medium">Medium demand</option>
        <option value="Low">Low demand</option>
      </select>
      <select value={filters.skill} onChange={(event) => update("skill", event.target.value)} className="input-control">
        <option value="all">All skills</option>
        {skills.map((skill) => (
          <option key={skill} value={skill}>
            {skill}
          </option>
        ))}
      </select>
      <select value={filters.remote} onChange={(event) => update("remote", event.target.value)} className="input-control">
        <option value="all">Any work style</option>
        <option value="remote">Remote friendly</option>
        <option value="onsite">On-site / hybrid</option>
      </select>
    </div>
  );
}
