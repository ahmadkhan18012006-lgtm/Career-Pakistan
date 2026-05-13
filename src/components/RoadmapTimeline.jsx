import { motion } from "framer-motion";
import Icon from "./Icon.jsx";

export default function RoadmapTimeline({ roadmap }) {
  return (
    <div className="relative grid gap-6">
      <div className="absolute left-6 top-8 hidden h-[calc(100%-4rem)] w-px bg-blue-200 md:block" />
      {roadmap.periods.map((period, index) => (
        <motion.article
          key={period.range}
          className="relative grid gap-4 md:grid-cols-[3rem_1fr]"
          initial={{ opacity: 0, x: -18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ delay: index * 0.08, duration: 0.4 }}
        >
          <div className="z-10 grid h-12 w-12 place-items-center rounded-full border-4 border-white bg-primary text-sm font-black text-white shadow-lg shadow-blue-600/20">
            {index + 1}
          </div>

          <div className="glass-card p-6">
            <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
              <div>
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-black uppercase tracking-wider text-primary">
                  {period.range}
                </span>
                <h3 className="mt-3 text-2xl font-black tracking-tight text-secondary">{period.level}</h3>
              </div>
              <div className="min-w-48">
                <div className="mb-2 flex justify-between text-xs font-bold text-slate-500">
                  <span>Progress</span>
                  <span>{period.progress}%</span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-slate-200">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${period.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.15 }}
                  />
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-4 lg:grid-cols-3">
              <Checklist title="Skills to learn" items={period.skills} />
              <Checklist title="Tools" items={period.tools} />
              <Checklist title="Projects" items={period.projects} />
            </div>

            <div className="mt-6 rounded-2xl border border-green-100 bg-green-50 p-4 text-sm font-semibold text-green-800">
              Career outcome: {period.outcome}
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  );
}

function Checklist({ title, items }) {
  return (
    <div>
      <p className="mb-3 text-sm font-black text-secondary">{title}</p>
      <div className="grid gap-2">
        {items.map((item) => (
          <div key={item} className="flex items-center gap-2 text-sm text-slate-600">
            <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-green-100 text-accent">
              <Icon name="check" className="h-3 w-3" />
            </span>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
