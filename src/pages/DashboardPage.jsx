import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import PageShell from "../components/PageShell.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import DashboardCard from "../components/DashboardCard.jsx";
import ChartCard from "../components/ChartCard.jsx";
import ChartComponent from "../components/ChartComponent.jsx";
import Icon from "../components/Icon.jsx";
import { dashboardProgress, insightData } from "../data/fields.js";

const weeklyData = [
  { week: "W1", hours: 6 },
  { week: "W2", hours: 9 },
  { week: "W3", hours: 8 },
  { week: "W4", hours: 12 },
  { week: "W5", hours: 14 },
  { week: "W6", hours: 16 }
];

const nextSkills = ["React Router", "API integration", "MongoDB schemas", "JWT authentication", "Vercel deployment"];

export default function DashboardPage() {
  const focusInsights = insightData
    .filter((item) => ["web-development", "ai-ml", "cloud-computing", "cybersecurity", "data-science"].includes(item.id))
    .map((item) => ({
      ...item,
      salary: Math.round(item.salary / 1000)
    }));

  return (
    <PageShell>
      <section className="bg-gradient-to-b from-white to-background py-16">
        <div className="container-page">
          <SectionHeader
            eyebrow="Student dashboard"
            title="Track progress and decide what to learn next"
            description="A SaaS-style student workspace with roadmap stats, skill progress, suggested skills and recommendation cards."
          />

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            <DashboardCard title="Completed Roadmaps" value="2" label="Web Development and UI/UX basics" />
            <DashboardCard title="Current Focus" value="MERN" label="Month 4-6 intermediate phase" accent="dark" />
            <DashboardCard title="Weekly Learning" value="16h" label="Up 24% from last week" accent="green" />
            <DashboardCard title="Portfolio Projects" value="5" label="3 polished, 2 in progress" />
          </div>

          <div className="mt-8 grid gap-6 xl:grid-cols-[1.25fr_0.75fr]">
            <ChartCard title="Skill Progress Chart" subtitle="Dummy completion score by skill">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={dashboardProgress}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="skill" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip />
                  <Bar dataKey="progress" radius={[12, 12, 0, 0]} fill="#2563eb" />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>

            <div className="glass-card p-6">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-black tracking-tight">Field Recommendation</h3>
                  <p className="mt-1 text-sm text-slate-500">Based on quiz and progress</p>
                </div>
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-green-100 text-accent">
                  <Icon name="target" />
                </span>
              </div>

              <div className="rounded-2xl bg-gradient-to-br from-secondary to-blue-900 p-5 text-white">
                <p className="text-sm font-bold text-blue-100">Best match</p>
                <h4 className="mt-2 text-2xl font-black">Full Stack Web Development</h4>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Your frontend progress and project activity suggest a strong fit for MERN internships and freelance work.
                </p>
                <div className="mt-4 h-3 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-[88%] rounded-full bg-gradient-to-r from-accent to-blue-300" />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-6 xl:grid-cols-2">
            <ChartComponent
              title="Field Demand Comparison"
              subtitle="Demand score for popular paths in Pakistan."
              data={focusInsights}
              bars={[
                { key: "demand", name: "Demand", color: "#2563eb" },
                { key: "global", name: "Global scope", color: "#22c55e" }
              ]}
            />

            <ChartComponent
              title="Salary Comparison"
              subtitle="Average salary shown in PKR thousands per month."
              data={focusInsights}
              bars={[
                { key: "salary", name: "Average salary", color: "#0f172a" },
                { key: "difficulty", name: "Difficulty", color: "#f59e0b" }
              ]}
            />
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="glass-card p-6">
              <h3 className="text-lg font-black tracking-tight">Suggested Next Skills</h3>
              <div className="mt-5 grid gap-3">
                {nextSkills.map((skill, index) => (
                  <div key={skill} className="flex items-center justify-between rounded-2xl bg-white p-4 shadow-sm">
                    <span className="font-bold text-slate-700">{skill}</span>
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-black text-primary">
                      Step {index + 1}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <ChartCard title="Learning Momentum" subtitle="Weekly study hours trend">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={weeklyData}>
                  <defs>
                    <linearGradient id="hours" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#22c55e" stopOpacity={0.35} />
                      <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="week" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip />
                  <Area type="monotone" dataKey="hours" stroke="#22c55e" strokeWidth={3} fill="url(#hours)" />
                </AreaChart>
              </ResponsiveContainer>
            </ChartCard>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
