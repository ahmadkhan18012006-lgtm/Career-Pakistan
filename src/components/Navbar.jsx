import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Icon from "./Icon.jsx";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Find Field", path: "/fields" },
  { label: "Roadmaps", path: "/roadmaps/web-development" },
  { label: "Insights", path: "/insights" },
  { label: "Compare", path: "/compare" },
  { label: "Dashboard", path: "/dashboard" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `rounded-2xl px-3 py-2 text-sm font-bold transition ${
      isActive ? "bg-blue-50 text-primary" : "text-slate-600 hover:bg-slate-100 hover:text-secondary"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-white/70 bg-background/85 backdrop-blur-xl">
      <div className="container-page">
        <div className="flex min-h-20 items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-primary to-accent text-white shadow-lg shadow-blue-600/20">
              <Icon name="route" />
            </span>
            <span>
              <span className="block text-lg font-black leading-tight tracking-tight">CareerPath</span>
              <span className="block text-xs font-bold uppercase tracking-widest text-primary">Pakistan</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <NavLink key={item.path} to={item.path} className={linkClass}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link to="/quiz" className="btn-secondary">
              Take Career Quiz
            </Link>
            <Link to="/fields" className="btn-primary">
              Explore Fields
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>

          <button
            className="grid h-11 w-11 place-items-center rounded-2xl border border-slate-200 bg-white text-secondary shadow-sm lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>

        {open && (
          <div className="pb-4 lg:hidden">
            <nav className="glass-card grid gap-1 p-2">
              {navItems.map((item) => (
                <NavLink key={item.path} to={item.path} className={linkClass} onClick={() => setOpen(false)}>
                  {item.label}
                </NavLink>
              ))}
              <Link to="/quiz" className="btn-primary mt-2" onClick={() => setOpen(false)}>
                Take Career Quiz
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
