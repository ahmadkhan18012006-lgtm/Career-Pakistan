import { Link, useParams } from "react-router-dom";
import PageShell from "../components/PageShell.jsx";
import RoadmapTimeline from "../components/RoadmapTimeline.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import { allFields, getRoadmap } from "../data/fields.js";
import Icon from "../components/Icon.jsx";

export default function RoadmapPage() {
  const { fieldId = "web-development" } = useParams();
  const { field, roadmap } = getRoadmap(fieldId);

  return (
    <PageShell>
      <section className="bg-gradient-to-b from-white via-blue-50/60 to-background py-16">
        <div className="container-page">
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
            <aside className="glass-card h-fit p-6 lg:sticky lg:top-28">
              <span className="eyebrow">1-year roadmap</span>
              <h1 className="mt-4 text-4xl font-black tracking-tight text-secondary">{roadmap.title}</h1>
              <p className="mt-4 leading-8 text-slate-600">{roadmap.summary}</p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                <div className="rounded-2xl bg-white p-4 shadow-sm">
                  <p className="text-xs font-black uppercase tracking-wider text-slate-400">Career roles</p>
                  <p className="mt-2 text-sm font-semibold text-slate-700">{field.roles.join(", ")}</p>
                </div>
                <div className="rounded-2xl bg-white p-4 shadow-sm">
                  <p className="text-xs font-black uppercase tracking-wider text-slate-400">Companies in Pakistan</p>
                  <p className="mt-2 text-sm font-semibold text-slate-700">{field.companies.join(", ")}</p>
                </div>
              </div>

              <div className="mt-6">
                <p className="mb-3 text-sm font-black text-secondary">Switch roadmap</p>
                <div className="grid gap-2">
                  {allFields.map((item) => (
                    <Link
                      key={item.id}
                      to={`/roadmaps/${item.id}`}
                      className={`rounded-2xl px-4 py-3 text-sm font-bold transition ${
                        item.id === field.id ? "bg-primary text-white" : "bg-white text-slate-600 hover:text-primary"
                      }`}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            </aside>

            <div>
              <SectionHeader
                eyebrow="Timeline UI"
                title={`${roadmap.title} roadmap`}
                description="Each phase includes skills, tools, projects and an outcome so students know exactly what to practice."
              />
              <RoadmapTimeline roadmap={roadmap} />
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link to="/dashboard" className="btn-primary">
                  Track in Dashboard
                  <Icon name="arrow" className="h-4 w-4" />
                </Link>
                <Link to="/insights" className="btn-secondary">
                  View Career Insights
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
