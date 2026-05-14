import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageShell from "../components/PageShell.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import Icon from "../components/Icon.jsx";

const uspCards = [
  ["AI-powered career matching", "Quiz logic maps your answers to high-fit career fields."],
  ["Pakistan-specific salary insights", "Compare salary growth by level using localized PKR ranges."],
  ["Internship-focused roadmaps", "Follow monthly milestones that lead to portfolio-ready work."],
  ["Company recommendations", "See Pakistani companies aligned with your selected field."],
  ["Industry trends", "Demand meters help you prioritize strong career options."],
  ["Skill gap analysis", "Track current progress and suggested next skills."]
];

const tools = ["React", "Python", "Node.js", "TensorFlow", "Docker", "AWS", "Linux", "Figma", "Kubernetes", "MongoDB", "PostgreSQL", "Git/GitHub"];
const ecosystem = ["Internship guidance", "Remote work opportunities", "Startup ecosystem", "Software houses", "Freelancing opportunities"];

export default function LandingPage() {
  return (
    <PageShell>
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/70 to-background transition-colors duration-300 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <div className="container-page relative grid min-h-[calc(100vh-5rem)] items-center gap-12 py-14 lg:grid-cols-[1.02fr_0.98fr]">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <span className="eyebrow">
              <Icon name="graduation" className="h-4 w-4" />
              BSCS, IT, SE, AI and Data Science students
            </span>
            <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[1.02] tracking-tight text-secondary sm:text-6xl lg:text-7xl dark:text-white">
              CareerPath Pakistan for serious tech career planning
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl dark:text-slate-300">
              Match your interests, compare fields, follow actionable roadmaps, track progress and discover companies hiring Pakistani students.
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
          </motion.div>

          <motion.div className="glass-card p-5 sm:p-7" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}>
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-extrabold uppercase tracking-wider text-primary dark:text-blue-300">Live career command center</p>
                <h2 className="mt-1 text-2xl font-black tracking-tight dark:text-white">Smart guidance snapshot</h2>
              </div>
              <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-black text-green-700 dark:bg-green-400/10 dark:text-green-300">92% match</span>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["Career Quiz", "Score-based recommendations", "target", "/quiz"],
                ["Roadmaps", "1-year monthly milestones", "map", "/roadmaps/web-development"],
                ["Dashboard", "Progress, salaries, trends", "chart", "/dashboard"],
                ["Companies", "Pakistan hiring database", "briefcase", "/companies"]
              ].map(([title, text, icon, path]) => (
                <motion.div key={title} whileHover={{ y: -5 }}>
                <Link to={path} className="block h-full rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition hover:border-blue-200 dark:border-white/10 dark:bg-slate-950 dark:hover:border-blue-400/40">
                  <span className="mb-4 grid h-11 w-11 place-items-center rounded-2xl bg-primary text-white">
                    <Icon name={icon} />
                  </span>
                  <h3 className="font-black dark:text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">{text}</p>
                </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="page-section">
        <div className="container-page">
          <SectionHeader
            eyebrow="Why CareerPath Pakistan?"
            title="A complete guidance system, not just a list of fields"
            description="Designed for Pakistani students who need clarity, proof of skill and career direction."
            align="center"
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {uspCards.map(([title, text], index) => (
              <motion.article
                key={title}
                className="glass-card p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                whileHover={{ y: -5 }}
              >
                <span className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-primary dark:bg-blue-400/10 dark:text-blue-300">
                  <Icon name={index % 2 ? "spark" : "chart"} />
                </span>
                <h3 className="text-lg font-black dark:text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container-page">
          <div className="grid gap-4 md:grid-cols-4">
            {[
              [20, "+ Career Fields"],
              [50, "+ Pakistani Companies"],
              [100, "+ Learning Resources"],
              [10, "K+ Students Guided"]
            ].map(([value, label]) => (
              <div key={label} className="glass-card p-6 text-center">
                <AnimatedCounter value={value} suffix={label.startsWith("K") ? "K+" : "+"} />
                <p className="mt-2 text-sm font-bold text-slate-500 dark:text-slate-400">{label.replace(/^\+ |^K\+ /, "")}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container-page">
          <SectionHeader eyebrow="Core tools" title="Technologies students will learn" description="A practical stack across software, AI, cloud, design, data and infrastructure." />
          <div className="flex flex-wrap gap-3">
            {tools.map((tool) => (
              <motion.span key={tool} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-black text-slate-700 shadow-sm dark:border-white/10 dark:bg-slate-900 dark:text-slate-100" whileHover={{ y: -4 }}>
                {tool}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container-page">
          <SectionHeader
            eyebrow="Pakistan tech ecosystem"
            title="Built around local career realities"
            description="Guidance for internships, software houses, startups, remote work and freelancing opportunities."
            align="center"
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {ecosystem.map((item) => (
              <motion.div key={item} className="glass-card p-5 text-center" whileHover={{ y: -5 }}>
                <span className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-green-50 text-accent dark:bg-green-400/10 dark:text-green-300">
                  <Icon name="briefcase" />
                </span>
                <h3 className="font-black dark:text-white">{item}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function AnimatedCounter({ value, suffix }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCount((current) => Math.min(value, current + Math.ceil(value / 24)));
    }, 35);
    return () => window.clearInterval(timer);
  }, [value]);

  return <p className="text-4xl font-black text-primary dark:text-blue-300">{count}{suffix}</p>;
}
