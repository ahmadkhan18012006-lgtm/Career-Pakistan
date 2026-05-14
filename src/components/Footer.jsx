import { Link } from "react-router-dom";
import Icon from "./Icon.jsx";

export default function Footer() {
  return (
    <footer className="bg-secondary py-12 text-slate-300">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1fr]">
          <div>
            <div className="mb-4 flex items-center gap-3 text-white">
              <span className="grid h-10 w-10 place-items-center rounded-2xl bg-primary">
                <Icon name="route" />
              </span>
              <span className="text-lg font-black">CareerPath Pakistan</span>
            </div>
          <p className="max-w-md text-sm leading-7 text-slate-400">
              A smart career guidance platform for BSCS, IT, SE, AI and Data Science students in Pakistan.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-bold text-white">Platform</h3>
            <div className="grid gap-3 text-sm">
              <Link to="/fields" className="hover:text-white">Find Field</Link>
              <Link to="/roadmaps/web-development" className="hover:text-white">Roadmaps</Link>
              <Link to="/insights" className="hover:text-white">Insights</Link>
              <Link to="/compare" className="hover:text-white">Compare Fields</Link>
              <Link to="/dashboard" className="hover:text-white">Dashboard</Link>
              <Link to="/companies" className="hover:text-white">Companies</Link>
              <Link to="/premium" className="hover:text-white">Premium</Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-bold text-white">Students</h3>
            <div className="grid gap-3 text-sm">
              <Link to="/quiz" className="hover:text-white">Career Quiz</Link>
              <Link to="/fields" className="hover:text-white">Companies</Link>
              <Link to="/insights" className="hover:text-white">Salary Guide</Link>
              <Link to="/roadmaps/ai-ml" className="hover:text-white">AI Roadmap</Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-bold text-white">Contact</h3>
            <div className="grid gap-3 text-sm text-slate-400">
              <span>hello@careerpath.pk</span>
              <span>+92 300 0000000</span>
              <span>Lahore, Pakistan</span>
            </div>
            <div className="mt-5 flex gap-3">
              {["in", "f", "ig", "x"].map((item) => (
                <span key={item} className="grid h-9 w-9 place-items-center rounded-2xl border border-white/10 bg-white/5 text-xs font-black text-white">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-sm text-slate-500 md:flex-row">
          <span>Copyright 2026 CareerPath Pakistan. All rights reserved.</span>
          <span>Frontend only prototype with dummy data.</span>
        </div>
      </div>
    </footer>
  );
}
