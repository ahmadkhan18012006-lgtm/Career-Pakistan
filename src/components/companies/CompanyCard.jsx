import { motion } from "framer-motion";

export default function CompanyCard({ company }) {
  return (
    <motion.article
      className="glass-card flex h-full flex-col p-5"
      whileHover={{ y: -5, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-primary to-accent text-sm font-black text-white">
            {company.logo}
          </span>
          <div>
            <h3 className="font-black tracking-tight text-secondary dark:text-white">{company.name}</h3>
            <p className="text-xs font-bold text-slate-500 dark:text-slate-400">{company.workMode}</p>
          </div>
        </div>
        <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-black text-green-700 dark:bg-green-400/10 dark:text-green-300">
          {company.demandBadge}
        </span>
      </div>

      <div className="mt-5">
        <p className="mb-2 text-xs font-black uppercase tracking-wider text-slate-400">Hiring roles</p>
        <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">{company.hiringRoles.join(", ")}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {company.technologies.slice(0, 5).map((tech) => (
          <span key={tech} className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-primary dark:bg-blue-400/10 dark:text-blue-300">
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-5 rounded-2xl bg-white p-4 text-sm font-bold text-slate-600 shadow-sm dark:bg-slate-950 dark:text-slate-300">
        Internship availability: {company.internship ? "Yes" : "Limited"}
      </div>
    </motion.article>
  );
}
