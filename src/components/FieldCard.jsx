import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Icon from "./Icon.jsx";

export default function FieldCard({ field }) {
  return (
    <motion.article
      className="glass-card flex h-full flex-col p-6"
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
    >
      <div className="mb-5 flex items-start justify-between gap-4">
        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary text-white shadow-lg shadow-blue-600/20">
          <Icon name={field.id.includes("ai") ? "brain" : field.id.includes("cloud") ? "cloud" : field.id.includes("cyber") ? "shield" : "code"} />
        </div>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-extrabold text-slate-600">
          {field.category}
        </span>
      </div>

      <h3 className="text-xl font-black tracking-tight text-secondary">{field.title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{field.description}</p>

      <div className="mt-5">
        <p className="text-xs font-black uppercase tracking-wider text-slate-400">Skills</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {field.skills.slice(0, 5).map((skill) => (
            <span key={skill} className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-primary">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-5">
        <p className="text-xs font-black uppercase tracking-wider text-slate-400">Tools / technologies</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {field.tools.slice(0, 5).map((tool) => (
            <span key={tool} className="rounded-full bg-green-50 px-3 py-1 text-xs font-bold text-green-700">
              {tool}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-5 grid gap-4 text-sm text-slate-600">
        <div>
          <p className="mb-2 font-black text-secondary">Job roles</p>
          <p>{field.roles.join(", ")}</p>
        </div>
        <div>
          <p className="mb-2 font-black text-secondary">Pakistani companies</p>
          <p>{field.companies.slice(0, 7).join(", ")}</p>
        </div>
      </div>

      <Link to={`/roadmaps/${field.id}`} className="btn-primary mt-6">
        View Roadmap
        <Icon name="arrow" className="h-4 w-4" />
      </Link>
    </motion.article>
  );
}
