import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import PageShell from "../components/PageShell.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import ChartComponent from "../components/ChartComponent.jsx";
import Icon from "../components/Icon.jsx";
import { allFields } from "../data/fields.js";
import { demandColor, shortPKR } from "../utils/formatters.js";

const defaultSelection = ["web-development", "ai-ml", "cloud-computing"];

export default function ComparePage() {
  const [selected, setSelected] = useState(defaultSelection);

  const comparedFields = useMemo(
    () => selected.map((id) => allFields.find((field) => field.id === id)).filter(Boolean),
    [selected]
  );

  const chartData = comparedFields.map((field) => ({
    field: field.title.length > 18 ? field.title.split(" ")[0] : field.title,
    salary: Math.round(field.salary.avg / 1000),
    demand: field.demand,
    difficulty: field.difficulty,
    learningMonths: Number(field.learningTime.split("-")[1]?.replace(/\D/g, "")) || 12
  }));

  function updateSelection(index, value) {
    setSelected((current) => current.map((item, itemIndex) => (itemIndex === index ? value : item)));
  }

  return (
    <PageShell>
      <section className="page-section">
        <div className="container-page">
          <SectionHeader
            eyebrow="Field comparison"
            title="Compare 2-3 tech career paths side by side"
            description="Use salary, demand, difficulty and learning time to choose a career path that matches your goals and current skill level."
          />

          <div className="glass-card mb-8 grid gap-4 p-5 md:grid-cols-3">
            {selected.map((fieldId, index) => (
              <label key={`${fieldId}-${index}`} className="grid gap-2">
                <span className="text-sm font-black text-slate-600 dark:text-slate-300">Field {index + 1}</span>
                <select
                  value={fieldId}
                  onChange={(event) => updateSelection(index, event.target.value)}
                  className="input-control"
                >
                  {allFields.map((field) => (
                    <option key={field.id} value={field.id}>
                      {field.title}
                    </option>
                  ))}
                </select>
              </label>
            ))}
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {comparedFields.map((field) => (
              <article key={field.id} className="glass-card flex flex-col p-6">
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div>
                    <span className={`rounded-full px-3 py-1 text-xs font-black ${demandColor(field.demandLevel)}`}>
                      {field.demandLevel} demand
                    </span>
                    <h2 className="mt-4 text-2xl font-black tracking-tight dark:text-white">{field.title}</h2>
                  </div>
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-primary dark:bg-blue-400/10 dark:text-blue-300">
                    <Icon name="chart" />
                  </span>
                </div>

                <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">{field.description}</p>

                <div className="mt-6 grid gap-3">
                  <Metric label="Average salary" value={`${shortPKR(field.salary.avg)}/month`} />
                  <Metric label="Demand score" value={`${field.demand}/100`} />
                  <Metric label="Difficulty" value={`${field.difficulty}/100`} />
                  <Metric label="Learning time" value={field.learningTime} />
                </div>

                <div className="mt-6">
                  <p className="mb-2 text-xs font-black uppercase tracking-wider text-slate-400 dark:text-slate-500">Best roles</p>
                  <p className="text-sm font-semibold text-slate-600 dark:text-slate-300">{field.roles.join(", ")}</p>
                </div>

                <Link to={`/roadmaps/${field.id}`} className="btn-primary mt-6">
                  Open Roadmap
                  <Icon name="arrow" className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-8">
            <ChartComponent
              title="Comparison Chart"
              subtitle="Salary is shown in PKR thousands per month."
              data={chartData}
              bars={[
                { key: "salary", name: "Salary", color: "#2563eb" },
                { key: "demand", name: "Demand", color: "#22c55e" },
                { key: "difficulty", name: "Difficulty", color: "#f59e0b" },
                { key: "learningMonths", name: "Learning months", color: "#0f172a" }
              ]}
            />
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function Metric({ label, value }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl bg-white p-4 shadow-sm dark:bg-slate-950">
      <span className="text-sm font-bold text-slate-500 dark:text-slate-400">{label}</span>
      <span className="text-right text-sm font-black text-secondary dark:text-white">{value}</span>
    </div>
  );
}
