import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import PageShell from "../components/PageShell.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import ChartCard from "../components/ChartCard.jsx";
import DashboardCard from "../components/DashboardCard.jsx";
import { insightData } from "../data/fields.js";
import { formatPKR } from "../utils/formatters.js";

const salaryData = [
  { level: "Intern", web: 35, ai: 45, cloud: 40 },
  { level: "Junior", web: 90, ai: 120, cloud: 110 },
  { level: "Mid", web: 210, ai: 280, cloud: 260 },
  { level: "Senior", web: 420, ai: 520, cloud: 500 }
];

export default function InsightsPage() {
  return (
    <PageShell>
      <section className="bg-gradient-to-b from-white to-background py-16">
        <div className="container-page">
          <SectionHeader
            eyebrow="Career insights"
            title="Demand, salary and global opportunity signals"
            description="Dummy analytics designed for a Pakistan-focused student career guide."
          />

          <div className="grid gap-5 md:grid-cols-3">
            <DashboardCard title="Demand Level" value="High" label="Web, AI and Cloud are strongest in this sample." accent="green">
              <div className="h-3 overflow-hidden rounded-full bg-slate-200">
                <div className="h-full w-[88%] rounded-full bg-gradient-to-r from-primary to-accent" />
              </div>
            </DashboardCard>
            <DashboardCard title="Salary Range in Pakistan" value="PKR 70k-520k" label="Estimated monthly range by level and field." />
            <DashboardCard title="Global Opportunities" value="Strong" label="Remote, Gulf, Europe and North America pathways." accent="dark">
              <div className="mt-4 flex flex-wrap gap-2">
                {["Remote", "Gulf", "Europe", "North America"].map((item) => (
                  <span key={item} className="rounded-full bg-blue-50 px-3 py-1 text-xs font-black text-primary">
                    {item}
                  </span>
                ))}
              </div>
            </DashboardCard>
          </div>

          <div className="mt-8 grid gap-6 xl:grid-cols-2">
            <ChartCard title="Demand and Global Opportunity" subtitle="Score out of 100">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={insightData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="field" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="demand" fill="#2563eb" radius={[10, 10, 0, 0]} />
                  <Bar dataKey="global" fill="#22c55e" radius={[10, 10, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>

            <ChartCard title="Salary Growth by Level" subtitle="PKR thousands per month, sample data">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={salaryData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="level" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="web" stroke="#2563eb" strokeWidth={3} dot={{ r: 4 }} />
                  <Line type="monotone" dataKey="ai" stroke="#22c55e" strokeWidth={3} dot={{ r: 4 }} />
                  <Line type="monotone" dataKey="cloud" stroke="#0f172a" strokeWidth={3} dot={{ r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </ChartCard>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {insightData.map((item) => (
              <div key={item.field} className="glass-card p-6">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-xl font-black">{item.field}</h3>
                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-black text-green-700">
                    {item.demand > 82 ? "High" : item.demand > 70 ? "Medium" : "Low"}
                  </span>
                </div>
                <Progress label="Demand" value={item.demand} />
                <Progress label="Global scope" value={item.global} />
                <p className="mt-4 text-sm font-bold text-slate-600">Salary sample: {formatPKR(item.salary)}/month</p>
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
      <div className="mb-2 flex justify-between text-xs font-black text-slate-500">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="h-3 overflow-hidden rounded-full bg-slate-200">
        <div className="h-full rounded-full bg-gradient-to-r from-primary to-accent" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}
