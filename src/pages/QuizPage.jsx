import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageShell from "../components/PageShell.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import Icon from "../components/Icon.jsx";

const questions = [
  {
    text: "What type of work feels most exciting?",
    options: [
      { label: "Building web apps", field: "Web Development" },
      { label: "Working with data and models", field: "AI / ML" },
      { label: "Protecting systems", field: "Cybersecurity" },
      { label: "Deploying reliable infrastructure", field: "Cloud Computing" }
    ]
  },
  {
    text: "Which subject do you enjoy most?",
    options: [
      { label: "JavaScript and UI", field: "Web Development" },
      { label: "Math and Python", field: "AI / ML" },
      { label: "Networking and Linux", field: "Cybersecurity" },
      { label: "Servers and automation", field: "Cloud Computing" }
    ]
  },
  {
    text: "What portfolio project would you rather build?",
    options: [
      { label: "A SaaS dashboard", field: "Web Development" },
      { label: "A prediction model", field: "AI / ML" },
      { label: "A security lab report", field: "Cybersecurity" },
      { label: "A cloud deployment pipeline", field: "Cloud Computing" }
    ]
  },
  {
    text: "Which career environment sounds best?",
    options: [
      { label: "Software house or freelance clients", field: "Web Development" },
      { label: "Research, products or analytics", field: "AI / ML" },
      { label: "SOC or security team", field: "Cybersecurity" },
      { label: "DevOps or cloud operations", field: "Cloud Computing" }
    ]
  },
  {
    text: "What do you want to improve first?",
    options: [
      { label: "Frontend and backend coding", field: "Web Development" },
      { label: "Python notebooks and ML", field: "AI / ML" },
      { label: "Threat analysis skills", field: "Cybersecurity" },
      { label: "Linux and AWS skills", field: "Cloud Computing" }
    ]
  },
  {
    text: "Which outcome matters most in the next 12 months?",
    options: [
      { label: "Freelance websites and internships", field: "Web Development" },
      { label: "AI portfolio and research projects", field: "AI / ML" },
      { label: "SOC analyst or security internship", field: "Cybersecurity" },
      { label: "Cloud support or DevOps trainee role", field: "Cloud Computing" }
    ]
  }
];

const routes = {
  "Web Development": "/roadmaps/web-development",
  "AI / ML": "/roadmaps/ai-ml",
  Cybersecurity: "/roadmaps/cybersecurity",
  "Cloud Computing": "/roadmaps/cloud-computing"
};

const explanations = {
  "Web Development":
    "You seem to prefer visible product building, frontend/backend coding and portfolio projects that can convert into internships or freelance work quickly.",
  "AI / ML":
    "Your answers point toward data, Python, models and research-style projects, which fits AI/ML and intelligent product development.",
  Cybersecurity:
    "You show interest in networks, Linux, investigation and protecting systems, which maps well to SOC, security engineering and ethical hacking paths.",
  "Cloud Computing":
    "You prefer infrastructure, deployment, automation and reliability work, which fits cloud engineering and DevOps-adjacent roles."
};

export default function QuizPage() {
  const [answers, setAnswers] = useState({});

  const result = useMemo(() => {
    const scores = {};
    Object.values(answers).forEach((field) => {
      scores[field] = (scores[field] || 0) + 1;
    });
    return Object.entries(scores).sort((a, b) => b[1] - a[1])[0]?.[0] || "Web Development";
  }, [answers]);

  const completed = Object.keys(answers).length;
  const percent = Math.round((completed / questions.length) * 100);

  return (
    <PageShell>
      <section className="bg-gradient-to-b from-white to-background py-16">
        <div className="container-page">
          <SectionHeader
            eyebrow="Field quiz"
            title="Find a suggested tech field"
            description="A UI-only quiz that shows how the platform could recommend a career path from student preferences."
          />

          <div className="grid gap-8 lg:grid-cols-[1fr_24rem]">
            <div className="grid gap-5">
              {questions.map((question, index) => (
                <motion.div
                  key={question.text}
                  className="glass-card p-6"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.06 }}
                >
                  <div className="mb-5 flex items-start gap-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-primary text-sm font-black text-white">
                      {index + 1}
                    </span>
                    <h2 className="text-xl font-black tracking-tight">{question.text}</h2>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {question.options.map((option) => {
                      const selected = answers[index] === option.field;
                      return (
                        <button
                          key={option.label}
                          className={`rounded-2xl border p-4 text-left text-sm font-bold transition ${
                            selected
                              ? "border-primary bg-blue-50 text-primary shadow-md"
                              : "border-slate-200 bg-white text-slate-600 hover:border-blue-200 hover:text-primary"
                          }`}
                          onClick={() => setAnswers((current) => ({ ...current, [index]: option.field }))}
                        >
                          {option.label}
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </div>

            <aside className="glass-card h-fit p-6 lg:sticky lg:top-28">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm font-black uppercase tracking-wider text-primary">Quiz progress</p>
                  <h3 className="mt-1 text-2xl font-black">{percent}% complete</h3>
                </div>
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-green-100 text-accent">
                  <Icon name="spark" />
                </span>
              </div>

              <div className="h-3 overflow-hidden rounded-full bg-slate-200">
                <div className="h-full rounded-full bg-gradient-to-r from-primary to-accent" style={{ width: `${percent}%` }} />
              </div>

              <div className="mt-6 rounded-2xl bg-secondary p-5 text-white">
                <p className="text-sm font-bold text-blue-100">Suggested field result</p>
                <h4 className="mt-2 text-2xl font-black">{result}</h4>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {explanations[result]}
                </p>
              </div>

              <Link to={routes[result]} className="btn-primary mt-5 w-full">
                View Suggested Roadmap
                <Icon name="arrow" className="h-4 w-4" />
              </Link>
            </aside>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
