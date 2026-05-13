import { motion } from "framer-motion";

export default function SectionHeader({ eyebrow, title, description, align = "left" }) {
  return (
    <motion.div
      className={`mb-10 max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45 }}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="mt-4 text-3xl font-black tracking-tight text-secondary sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">{description}</p>}
    </motion.div>
  );
}
