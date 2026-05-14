import { Link } from "react-router-dom";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import PageShell from "../components/PageShell.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import DashboardCard from "../components/DashboardCard.jsx";
import ChartCard from "../components/ChartCard.jsx";
import SalaryChart from "../components/charts/SalaryChart.jsx";
import CompanyCard from "../components/companies/CompanyCard.jsx";
import FieldCard from "../components/FieldCard.jsx";
import SearchFilters from "../components/common/SearchFilters.jsx";
import { useCareer } from "../context/CareerContext.jsx";
import { useAuth } from "../context/AuthContext.jsx";
import { useProgress } from "../context/ProgressContext.jsx";
import { allFields, dashboardProgress, insightData } from "../data/fields.js";
import { companiesForField } from "../data/companies.js";
import { useMemo, useState } from "react";
import { generateRecommendations } from "../utils/recommendationEngine.js";

const initialFilters = { search: "", demand: "all", skill: "all", remote: "all" };

export default function DashboardPage() {
  const { bookmarkedFields, quizResult } = useCareer();
  const { currentUser } = useAuth();
  const { progress, toggleSkill, addLearningHour } = useProgress();
  const [salaryFields, setSalaryFields] = useState(["web-development", "ai-engineering", "cloud-computing"]);
  const [filters, setFilters] = useState(initialFilters);

  const trending = insightData.sort((a, b) => b.demand - a.demand).slice(0, 6);
  const recommended = allFields.slice().sort((a, b) => b.demand + b.global - (a.demand + a.global)).slice(0, 3);
  const companies = companiesForField(recommended[0].id, 3);
  const aiRecommendations = generateRecommendations({ quizResult, progress, profile: currentUser.profile });

  const filteredSaved = useMemo(() => {
    return bookmarkedFields.filter((field) => {
      const text = [field.title, field.description, ...field.skills, ...field.tools].join(" ").toLowerCase();
      return (
        text.includes(filters.search.toLowerCase()) &&
        (filters.demand === "all" || field.demandLevel === filters.demand) &&
        (filters.skill === "all" || field.skills.includes(filters.skill)) &&
        (filters.remote === "all" || (filters.remote === "remote" ? field.remote : !field.remote))
      );
    });
  }, [bookmarkedFields, filters]);

  return (
    <PageShell>
      <section className="page-section">
        <div className="container-page">
          <SectionHeader
            eyebrow="Student dashboard"
            title={`Welcome back, ${currentUser.name}`}
            description="Track progress, compare salaries, bookmark careers, discover trends and get personalized recommendations."
          />

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            <DashboardCard title="Career recommendations" value={recommended.length} label="High-fit paths this week" />
            <DashboardCard title="Saved careers" value={bookmarkedFields.length || "0"} label="Stored in localStorage" accent="green" />
            <DashboardCard title="Completed sections" value={progress.completedRoadmapSteps.length} label="Roadmap milestones completed" />
            <DashboardCard title="Learning streak" value={`${progress.streak} days`} label={`${progress.weeklyHours}/${progress.weeklyGoal} weekly hours`} accent="dark" />
          </div>

          <div className="glass-card mt-8 p-6">
            <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
              <div>
                <span className="eyebrow">AI recommendation engine</span>
                <h2 className="mt-3 text-2xl font-black dark:text-white">{aiRecommendations.primaryField.title}</h2>
                <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600 dark:text-slate-300">{aiRecommendations.report}</p>
              </div>
              <button type="button" onClick={() => addLearningHour(1)} className="btn-primary">
                Add 1 Learning Hour
              </button>
            </div>
            <div className="mt-5 grid gap-3 md:grid-cols-3">
              <MiniList title="Next skills" items={aiRecommendations.skills} onItemClick={toggleSkill} />
              <MiniList title="Certifications" items={aiRecommendations.certifications} />
              <MiniList title="Projects" items={aiRecommendations.projects} />
            </div>
          </div>

          <div className="mt-8 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
            <SalaryChart selectedIds={salaryFields} onChange={setSalaryFields} />
            <ChartCard title="Skill Progress" subtitle="Progress tracker with responsive bars">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={dashboardProgress}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="skill" tick={{ fontSize: 11 }} />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip />
                  <Bar dataKey="progress" fill="#2563eb" radius={[10, 10, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>
          </div>

          <div className="mt-8 grid gap-6 xl:grid-cols-[0.8fr_1.2fr]">
            <ChartCard title="Demand Indicators" subtitle="Most active student career paths">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={trending} dataKey="demand" nameKey="field" outerRadius={96} fill="#22c55e" label />
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </ChartCard>

            <div className="glass-card p-6">
              <h3 className="text-lg font-black tracking-tight dark:text-white">Recommended next steps</h3>
              <div className="mt-5 grid gap-3 md:grid-cols-2">
                {["Finish one portfolio project", "Apply to 5 internships", "Compare 3 salaries", "Bookmark 2 backup fields"].map((item, index) => (
                  <div key={item} className="rounded-2xl bg-white p-4 text-sm font-bold text-slate-600 shadow-sm dark:bg-slate-950 dark:text-slate-300">
                    Step {index + 1}: {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <section className="mt-10">
            <div className="mb-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
              <div>
                <h2 className="text-2xl font-black dark:text-white">Saved careers</h2>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Bookmark careers from the fields page or cards across the app.</p>
              </div>
              <Link to="/fields" className="btn-secondary">Browse careers</Link>
            </div>
            <SearchFilters filters={filters} onChange={setFilters} />
            {filteredSaved.length ? (
              <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {filteredSaved.map((field) => <FieldCard key={field.id} field={field} />)}
              </div>
            ) : (
              <div className="glass-card mt-6 p-8 text-center">
                <h3 className="text-xl font-black dark:text-white">No saved careers yet</h3>
                <p className="mt-2 text-slate-500 dark:text-slate-400">Use the bookmark button on career cards to save fields here.</p>
              </div>
            )}
          </section>

          <section className="mt-10 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h2 className="mb-5 text-2xl font-black dark:text-white">Trending fields</h2>
              <div className="grid gap-5 md:grid-cols-3">
                {recommended.map((field) => <FieldCard key={field.id} field={field} />)}
              </div>
            </div>
            <div>
              <h2 className="mb-5 text-2xl font-black dark:text-white">Recommended companies</h2>
              <div className="grid gap-5">
                {companies.map((company) => <CompanyCard key={company.id} company={company} />)}
              </div>
            </div>
          </section>
        </div>
      </section>
    </PageShell>
  );
}

function MiniList({ title, items, onItemClick }) {
  return (
    <div className="rounded-2xl bg-white p-4 shadow-sm dark:bg-slate-950">
      <p className="mb-3 text-sm font-black dark:text-white">{title}</p>
      <div className="grid gap-2">
        {items.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => onItemClick?.(item)}
            className="rounded-xl bg-slate-50 px-3 py-2 text-left text-sm font-bold text-slate-600 transition hover:text-primary dark:bg-slate-900 dark:text-slate-300"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
