import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import { useState } from "react";
import PageShell from "../components/PageShell.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import DashboardCard from "../components/DashboardCard.jsx";
import SalaryChart from "../components/charts/SalaryChart.jsx";
import { insightData } from "../data/fields.js";
import { formatPKR } from "../utils/formatters.js";

export default function InsightsPage() {
  const [selectedIds, setSelectedIds] = useState(["web-development", "ai-engineering", "cloud-computing"]);
  const visibleInsightData = [...insightData].sort((a, b) => b.demand - a.demand).slice(0, 10);

  return (
    <PageShell>
      <section className="page-section">
        <div className="container-page">
          <SectionHeader
            eyebrow="Career insights"
            title="Demand, salary and global opportunity signals"
            description="Dummy analytics designed for a Pakistan-focused student career guide."
          />

          <div className="grid gap-5 md:grid-cols-3">
            <DashboardCard title="Demand Level" value="High" label="Web, AI and Cloud are strongest in this sample." accent="green">
              <div className="h-3 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                <div className="h-full w-[88%] rounded-full bg-gradient-to-r from-primary to-accent" />
              </div>
            </DashboardCard>
            <DashboardCard title="Salary Range in Pakistan" value="PKR 55,000-760,000" label="Estimated monthly range by level and field." />
            <DashboardCard title="Global Opportunities" value="Strong" label="Remote, Gulf, Europe and North America pathways." accent="dark">
              <div className="mt-4 flex flex-wrap gap-2">
                {["Remote", "Gulf", "Europe", "North America"].map((item) => (
                  <span key={item} className="rounded-full bg-blue-50 px-3 py-1 text-xs font-black text-primary dark:bg-blue-400/10 dark:text-blue-300">
                    {item}
                  </span>
                ))}
              </div>
            </DashboardCard>
          </div>

          <div className="mt-8 grid gap-6 xl:grid-cols-2">
            <section className="glass-card p-6">
              <div className="mb-5">
                <h3 className="text-lg font-black tracking-tight text-secondary dark:text-white">Demand and Global Opportunity</h3>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Top 10 visible fields, score out of 100.</p>
              </div>
              <div className="h-[430px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={visibleInsightData} layout="vertical" margin={{ left: 24, right: 16 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.35} />
                    <XAxis type="number" domain={[0, 100]} tick={{ fontSize: 12, fill: "#94a3b8" }} />
                    <YAxis type="category" dataKey="field" width={118} tick={{ fontSize: 12, fill: "#94a3b8" }} />
                    <Tooltip contentStyle={{ borderRadius: 16, borderColor: "#e2e8f0" }} />
                    <Legend />
                    <Bar dataKey="demand" name="Demand" fill="#2563eb" radius={[0, 10, 10, 0]} />
                    <Bar dataKey="global" name="Global opportunity" fill="#22c55e" radius={[0, 10, 10, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </section>

            <SalaryChart selectedIds={selectedIds} onChange={setSelectedIds} />
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {insightData.map((item) => (
              <div key={item.field} className="glass-card p-6">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-xl font-black dark:text-white">{item.field}</h3>
                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-black text-green-700 dark:bg-green-400/10 dark:text-green-300">
                    {item.demand > 82 ? "High" : item.demand > 70 ? "Medium" : "Low"}
                  </span>
                </div>
                <Progress label="Demand" value={item.demand} />
                <Progress label="Global scope" value={item.global} />
                <p className="mt-4 text-sm font-bold text-slate-600 dark:text-slate-300">Salary sample: {formatPKR(item.salary)}/month</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function Progress({ label, value }) {
  return (
    <div className="mt-4">
      <div className="mb-2 flex justify-between text-xs font-black text-slate-500 dark:text-slate-400">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="h-3 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
        <div className="h-full rounded-full bg-gradient-to-r from-primary to-accent" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}
