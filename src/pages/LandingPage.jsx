import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageShell from "../components/PageShell.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import DashboardCard from "../components/DashboardCard.jsx";
import Icon from "../components/Icon.jsx";

const features = [
  {
    title: "Smart Field Selector",
    text: "Answer a few questions and get field suggestions based on your interests and strengths.",
    icon: "spark"
  },
  {
    title: "Roadmap Generator",
    text: "Follow structured 1-year plans with skills, tools, projects and career outcomes.",
    icon: "map"
  },
  {
    title: "Future Scope Analysis",
    text: "Compare Pakistani demand, salaries and global opportunities with visual insights.",
    icon: "chart"
  },
  {
    title: "Skill Tracker",
    text: "Monitor progress, identify gaps and keep your learning momentum visible.",
    icon: "target"
  }
];

const stats = [
  { value: "20+", label: "Tech fields" },
  { value: "4", label: "Roadmap levels" },
  { value: "6", label: "Company signals" }
];

export default function LandingPage() {
  return (
    <PageShell>
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/70 to-background">
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="container-page relative grid min-h-[calc(100vh-5rem)] items-center gap-12 py-16 lg:grid-cols-[1.02fr_0.98fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <span className="eyebrow">
              <Icon name="graduation" className="h-4 w-4" />
              BSCS, IT and Data Science students
            </span>
            <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[1.02] tracking-tight text-secondary sm:text-6xl lg:text-7xl">
              Find the Right Tech Career Path in Pakistan
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              Discover fields, compare market scope, follow practical roadmaps and track progress toward internships, freelance work and junior roles.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/fields" className="btn-primary">
                Explore Fields
                <Icon name="arrow" className="h-4 w-4" />
              </Link>
              <Link to="/quiz" className="btn-secondary">
                Take Career Quiz
              </Link>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="glass-card p-4">
                  <p className="text-2xl font-black text-secondary">{stat.value}</p>
                  <p className="text-sm font-semibold text-slate-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="glass-card relative p-5 sm:p-7"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.12, duration: 0.55 }}
          >
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-extrabold uppercase tracking-wider text-primary">Student match report</p>
                <h2 className="mt-1 text-2xl font-black tracking-tight">Recommended path</h2>
              </div>
              <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-black text-green-700">92%</span>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["Web Development", "React, Node.js, freelance projects", "code"],
                ["AI / ML", "Python, data, ML model demos", "brain"],
                ["Cloud Computing", "AWS, Linux, Docker, CI/CD", "cloud"],
                ["Cybersecurity", "SOC, Linux, networking labs", "shield"]
              ].map(([title, text, icon]) => (
                <motion.div
                  key={title}
                  className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"
                  whileHover={{ y: -5 }}
                >
                  <span className="mb-4 grid h-11 w-11 place-items-center rounded-2xl bg-primary text-white">
                    <Icon name={icon} />
                  </span>
                  <h3 className="font-black">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">{text}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-5 rounded-2xl bg-secondary p-5 text-white">
              <div className="flex items-center justify-between">
                <span className="font-bold">Pakistan hiring readiness</span>
                <span className="font-black text-green-300">High</span>
              </div>
              <div className="mt-4 h-3 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-green-400 to-blue-400"
                  initial={{ width: 0 }}
                  animate={{ width: "84%" }}
                  transition={{ delay: 0.4, duration: 0.9 }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-page">
          <SectionHeader
            eyebrow="Core tools"
            title="Built like a student career command center"
            description="Every section is designed to reduce confusion and help students move from interest to practical execution."
            align="center"
          />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <DashboardCard key={feature.title} title={feature.title}>
                <span className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-primary">
                  <Icon name={feature.icon} />
                </span>
                <p className="text-sm leading-7 text-slate-600">{feature.text}</p>
              </DashboardCard>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-page">
          <div className="glass-card grid items-center gap-8 overflow-hidden bg-secondary p-8 text-white lg:grid-cols-[1fr_auto] lg:p-10">
            <div>
              <p className="text-sm font-black uppercase tracking-widest text-blue-200">Start with clarity</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                Choose a field, follow a roadmap, build a portfolio.
              </h2>
              <p className="mt-4 max-w-2xl leading-8 text-slate-300">
                The platform includes categorized fields, complete roadmaps, comparison tools, career insights and a student dashboard with charts.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link to="/fields" className="btn-primary bg-white text-secondary hover:bg-slate-100">
                Browse Fields
              </Link>
              <Link to="/compare" className="btn-secondary border-white/20 bg-white/10 text-white hover:bg-white hover:text-secondary">
                Compare Paths
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
