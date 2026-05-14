import { motion } from "framer-motion";

export default function DashboardCard({ title, value, label, children, accent = "primary" }) {
  const color = accent === "green" ? "text-accent" : accent === "dark" ? "text-secondary dark:text-white" : "text-primary";

  return (
    <motion.div
      className="glass-card p-6"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.35 }}
    >
      <p className="text-sm font-extrabold text-slate-500 dark:text-slate-400">{title}</p>
      {value && <p className={`mt-3 text-3xl font-black ${color}`}>{value}</p>}
      {label && <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{label}</p>}
      {children && <div className="mt-5">{children}</div>}
    </motion.div>
  );
}
