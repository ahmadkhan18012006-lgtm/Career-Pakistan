import { useState } from "react";
import { motion } from "framer-motion";
import Icon from "./Icon.jsx";

export default function RoadmapTimeline({ roadmap, field }) {
  const [open, setOpen] = useState(roadmap.periods[0]?.range);

  return (
    <div className="relative grid gap-5">
      <div className="absolute left-6 top-8 hidden h-[calc(100%-4rem)] w-px bg-blue-200 dark:bg-blue-400/20 md:block" />
      {roadmap.periods.map((period, index) => {
        const expanded = open === period.range;
        return (
          <motion.article
            key={period.range}
            className="relative grid gap-4 md:grid-cols-[3rem_1fr]"
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{ delay: index * 0.08, duration: 0.35 }}
          >
            <div className="z-10 grid h-12 w-12 place-items-center rounded-full border-4 border-white bg-primary text-sm font-black text-white shadow-lg shadow-blue-600/20 dark:border-slate-950">
              {index + 1}
            </div>

            <div className="glass-card overflow-hidden">
              <button
                type="button"
                onClick={() => setOpen(expanded ? "" : period.range)}
                className="flex w-full flex-col justify-between gap-4 p-6 text-left lg:flex-row lg:items-center"
              >
                <div>
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-black uppercase tracking-wider text-primary dark:bg-blue-400/10 dark:text-blue-300">
                    {period.range}
                  </span>
                  <h3 className="mt-3 text-2xl font-black tracking-tight text-secondary dark:text-white">{period.level}</h3>
                </div>
                <div className="min-w-52">
                  <div className="mb-2 flex justify-between text-xs font-bold text-slate-500 dark:text-slate-400">
                    <span>Skill progress</span>
                    <span>{period.progress}%</span>
                  </div>
                  <div className="h-3 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${period.progress}%` }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              </button>

              {expanded && (
                <motion.div
                  className="border-t border-slate-100 p-6 dark:border-white/10"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  <div className="grid gap-5 lg:grid-cols-3">
                    <Checklist title="Skills to learn" items={period.skills} />
                    <Checklist title="Tools" items={period.tools} />
                    <Checklist title="Projects" items={period.projects} />
                  </div>
                  <div className="mt-6 grid gap-4 lg:grid-cols-2">
                    <Checklist title="Certifications" items={field.certifications} />
                    <Checklist title="Learning resources" items={field.learningResources} />
                  </div>
                  <div className="mt-6 rounded-2xl border border-green-100 bg-green-50 p-4 text-sm font-semibold text-green-800 dark:border-green-400/10 dark:bg-green-400/10 dark:text-green-300">
                    Career outcome: {period.outcome}
                  </div>
                </motion.div>
              )}
            </div>
          </motion.article>
        );
      })}
    </div>
  );
}

function Checklist({ title, items }) {
  return (
    <div>
      <p className="mb-3 text-sm font-black text-secondary dark:text-white">{title}</p>
      <div className="grid gap-2">
        {items.map((item) => (
          <div key={item} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
            <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-green-100 text-accent dark:bg-green-400/10 dark:text-green-300">
              <Icon name="check" className="h-3 w-3" />
            </span>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
