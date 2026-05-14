import { useMemo, useState } from "react";
import PageShell from "../components/PageShell.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import FieldCard from "../components/FieldCard.jsx";
import SearchFilters from "../components/common/SearchFilters.jsx";
import { allFields, fieldCategories } from "../data/fields.js";

const initialFilters = {
  search: "",
  demand: "all",
  skill: "all",
  remote: "all"
};

export default function FieldsPage() {
  const [filters, setFilters] = useState(initialFilters);

  const filteredFields = useMemo(() => {
    return allFields.filter((field) => {
      const haystack = [field.title, field.description, ...field.skills, ...field.tools, ...field.roles]
        .join(" ")
        .toLowerCase();
      const matchesSearch = haystack.includes(filters.search.toLowerCase());
      const matchesDemand = filters.demand === "all" || field.demandLevel === filters.demand;
      const matchesSkill = filters.skill === "all" || field.skills.includes(filters.skill);
      const matchesRemote =
        filters.remote === "all" ||
        (filters.remote === "remote" && field.remote) ||
        (filters.remote === "onsite" && !field.remote);

      return matchesSearch && matchesDemand && matchesSkill && matchesRemote;
    });
  }, [filters]);

  return (
    <PageShell>
      <section className="page-section">
        <div className="container-page">
          <SectionHeader
            eyebrow="Find your field"
            title="Explore every major tech career path"
            description="Search and filter fields by demand, skills and remote potential. Every career includes roadmaps, roles, companies and salary insight."
          />

          <SearchFilters filters={filters} onChange={setFilters} />

          <div className="mt-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
            <p className="text-sm font-bold text-slate-500 dark:text-slate-400">
              Showing {filteredFields.length} of {allFields.length} fields across {fieldCategories.length} categories.
            </p>
            <button type="button" className="btn-secondary" onClick={() => setFilters(initialFilters)}>
              Reset filters
            </button>
          </div>

          {filteredFields.length === 0 ? (
            <div className="glass-card mt-8 p-8 text-center">
              <h2 className="text-2xl font-black dark:text-white">No fields found</h2>
              <p className="mt-2 text-slate-500 dark:text-slate-400">Try changing the search term or filters.</p>
            </div>
          ) : (
            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {filteredFields.map((field) => (
                <FieldCard key={field.id} field={field} />
              ))}
            </div>
          )}
        </div>
      </section>
    </PageShell>
  );
}
