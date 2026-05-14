import { useMemo, useState } from "react";
import PageShell from "../components/PageShell.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import CompanyCard from "../components/companies/CompanyCard.jsx";
import { allFields } from "../data/fields.js";
import { companyDatabase } from "../data/companies.js";

const modeFilters = [
  { label: "All", value: "all" },
  { label: "Remote", value: "Remote-friendly" },
  { label: "Hybrid", value: "Hybrid" },
  { label: "On-site", value: "On-site" },
  { label: "Internships", value: "internship" }
];

export default function CompaniesPage() {
  const [fieldId, setFieldId] = useState("all");
  const [mode, setMode] = useState("all");
  const [search, setSearch] = useState("");

  const companies = useMemo(() => {
    return companyDatabase.filter((company) => {
      const matchesField = fieldId === "all" || company.fields.includes(fieldId);
      const matchesMode = mode === "all" || company.workMode === mode || (mode === "internship" && company.internship);
      const matchesSearch = [company.name, ...company.hiringRoles, ...company.technologies]
        .join(" ")
        .toLowerCase()
        .includes(search.toLowerCase());
      return matchesField && matchesMode && matchesSearch;
    });
  }, [fieldId, mode, search]);

  function resetFilters() {
    setFieldId("all");
    setMode("all");
    setSearch("");
  }

  return (
    <PageShell>
      <section className="page-section">
        <div className="container-page">
          <SectionHeader
            eyebrow="Companies database"
            title="Pakistani tech companies aligned with your career path"
            description="Filter companies by field, work mode, internship availability, hiring roles and technologies."
          />

          <div className="glass-card p-4 sm:p-5">
            <div className="grid gap-3 lg:grid-cols-[1.1fr_1fr_auto] lg:items-center">
              <label className="grid gap-2">
                <span className="text-xs font-black uppercase tracking-wider text-slate-400 dark:text-slate-500">Search companies</span>
                <input
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  className="input-control w-full"
                  placeholder="Search by name, role, or technology..."
                />
              </label>

              <label className="grid gap-2">
                <span className="text-xs font-black uppercase tracking-wider text-slate-400 dark:text-slate-500">Career field</span>
                <select value={fieldId} onChange={(event) => setFieldId(event.target.value)} className="input-control w-full">
                  <option value="all">All fields</option>
                  {allFields.map((field) => (
                    <option key={field.id} value={field.id}>
                      {field.title}
                    </option>
                  ))}
                </select>
              </label>

              <button type="button" className="btn-secondary mt-5 lg:mt-6" onClick={resetFilters}>
                Reset
              </button>
            </div>

            <div className="mt-5 overflow-x-auto pb-1">
              <div className="flex min-w-max gap-2">
                {modeFilters.map((item) => (
                  <button
                    key={item.value}
                    type="button"
                    onClick={() => setMode(item.value)}
                    className={`rounded-2xl px-4 py-2 text-sm font-black transition ${
                      mode === item.value
                        ? "bg-primary text-white shadow-lg shadow-blue-600/20"
                        : "bg-white text-slate-600 hover:text-primary dark:bg-slate-950 dark:text-slate-300 dark:hover:text-blue-300"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
            <p className="text-sm font-bold text-slate-500 dark:text-slate-400">Showing {companies.length} companies</p>
            <div className="flex flex-wrap gap-2">
              {(fieldId !== "all" || mode !== "all" || search) && (
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-black text-primary dark:bg-blue-400/10 dark:text-blue-300">
                  Filters active
                </span>
              )}
              <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-black text-green-700 dark:bg-green-400/10 dark:text-green-300">
                Responsive filter navbar
              </span>
            </div>
          </div>

          {companies.length ? (
            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {companies.map((company) => <CompanyCard key={company.id} company={company} />)}
            </div>
          ) : (
            <div className="glass-card mt-8 p-8 text-center">
              <h2 className="text-2xl font-black dark:text-white">No companies found</h2>
              <p className="mt-2 text-slate-500 dark:text-slate-400">Try another field or work-mode filter.</p>
              <button type="button" className="btn-primary mt-5" onClick={resetFilters}>
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>
    </PageShell>
  );
}
