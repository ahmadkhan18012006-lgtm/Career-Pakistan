import { motion } from "framer-motion";

export default function MentorCard({ mentor, onBook }) {
  return (
    <motion.article
      className="glass-card flex h-full flex-col overflow-hidden"
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
    >
      <div className="flex gap-4 p-5">
        <img src={mentor.image} alt={mentor.name} className="h-20 w-20 rounded-2xl object-cover" />
        <div className="min-w-0">
          <h3 className="text-xl font-black dark:text-white">{mentor.name}</h3>
          <p className="mt-1 text-sm font-bold text-slate-500 dark:text-slate-400">{mentor.years}+ years experience</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {mentor.expertise.map((item) => (
              <span key={item} className="rounded-full bg-blue-50 px-3 py-1 text-xs font-black text-primary dark:bg-blue-400/10 dark:text-blue-300">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 pt-0">
        <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">{mentor.bio}</p>
        <div className="mt-5 grid grid-cols-2 gap-3">
          <Metric label="Rating" value={`${mentor.rating}/5`} />
          <Metric label="Session" value={`PKR ${mentor.price.toLocaleString("en-PK")}`} />
        </div>
        <button type="button" onClick={() => onBook(mentor)} className="btn-primary mt-5 w-full">
          Book Session
        </button>
      </div>
    </motion.article>
  );
}

function Metric({ label, value }) {
  return (
    <div className="rounded-2xl bg-white p-3 shadow-sm dark:bg-slate-950">
      <p className="text-xs font-black uppercase tracking-wider text-slate-400">{label}</p>
      <p className="mt-1 text-sm font-black text-secondary dark:text-white">{value}</p>
    </div>
  );
}
