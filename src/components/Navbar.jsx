import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import Icon from "./Icon.jsx";
import ThemeToggle from "./ui/ThemeToggle.jsx";
import { useAuth } from "../context/AuthContext.jsx";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Dashboard", path: "/dashboard" },
  { label: "Career Quiz", path: "/quiz" },
  { label: "Roadmaps", path: "/roadmaps/web-development" },
  { label: "Insights", path: "/insights" },
  { label: "Companies", path: "/companies" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { currentUser, isAuthenticated, logout } = useAuth();

  const linkClass = ({ isActive }) =>
    `rounded-2xl px-3 py-2 text-sm font-bold transition ${
      isActive
        ? "bg-blue-50 text-primary dark:bg-blue-400/10 dark:text-blue-300"
        : "text-slate-600 hover:bg-slate-100 hover:text-secondary dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-white/70 bg-background/85 backdrop-blur-xl transition-colors duration-300 dark:border-white/10 dark:bg-slate-950/85">
      <div className="container-page">
        <div className="flex min-h-20 items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-primary to-accent text-white shadow-lg shadow-blue-600/20">
              <Icon name="route" />
            </span>
            <span>
              <span className="block text-lg font-black leading-tight tracking-tight dark:text-white">CareerPath</span>
              <span className="block text-xs font-bold uppercase tracking-widest text-primary dark:text-blue-300">Pakistan</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 xl:flex">
            {navItems.map((item) => (
              <NavLink key={item.path} to={item.path} className={linkClass}>
                {item.label}
              </NavLink>
            ))}
            <NavLink to="/compare" className={linkClass}>
              Compare
            </NavLink>
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <ThemeToggle />
            {isAuthenticated ? (
              <>
                <Link to="/profile" className="btn-secondary">
                  {currentUser.name.split(" ")[0]}
                </Link>
                <button type="button" onClick={logout} className="btn-secondary">
                  Logout
                </button>
              </>
            ) : (
              <Link to="/login" className="btn-secondary">
                Login
              </Link>
            )}
            <Link to="/quiz" className="btn-primary">
              Start Quiz
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              className="grid h-11 w-11 place-items-center rounded-2xl border border-slate-200 bg-white text-secondary shadow-sm dark:border-white/10 dark:bg-slate-900 dark:text-white"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
            >
              <Icon name={open ? "close" : "menu"} />
            </button>
          </div>
        </div>
      </div>

      {open && (
        <motion.div
          className="fixed inset-x-3 top-24 z-50 rounded-2xl border border-slate-200 bg-white p-3 shadow-soft dark:border-white/10 dark:bg-slate-900 xl:hidden"
          initial={{ opacity: 0, y: -10, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.98 }}
        >
          <nav className="grid gap-1">
            {navItems.map((item) => (
              <NavLink key={item.path} to={item.path} className={linkClass} onClick={() => setOpen(false)}>
                {item.label}
              </NavLink>
            ))}
            <NavLink to="/compare" className={linkClass} onClick={() => setOpen(false)}>
              Compare
            </NavLink>
            <NavLink to="/premium" className={linkClass} onClick={() => setOpen(false)}>
              Premium
            </NavLink>
            {isAuthenticated ? (
              <>
                <NavLink to="/profile" className={linkClass} onClick={() => setOpen(false)}>
                  Profile
                </NavLink>
                <button type="button" className="btn-secondary mt-2" onClick={() => { logout(); setOpen(false); }}>
                  Logout
                </button>
              </>
            ) : (
              <Link to="/login" className="btn-secondary mt-2" onClick={() => setOpen(false)}>
                Login
              </Link>
            )}
            <Link to="/quiz" className="btn-primary mt-2" onClick={() => setOpen(false)}>
              Start Quiz
            </Link>
          </nav>
        </motion.div>
      )}
    </header>
  );
}
