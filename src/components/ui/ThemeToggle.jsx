import { useTheme } from "../../context/ThemeContext.jsx";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex h-11 items-center gap-2 rounded-2xl border border-slate-200 bg-white px-3 text-sm font-black text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 dark:border-white/10 dark:bg-slate-900 dark:text-slate-100"
      aria-label="Toggle dark mode"
    >
      <span className="grid h-7 w-7 place-items-center rounded-xl bg-blue-50 text-primary dark:bg-blue-400/10 dark:text-blue-300">
        {isDark ? "D" : "L"}
      </span>
      <span className="hidden sm:inline">{isDark ? "Dark" : "Light"}</span>
    </button>
  );
}
