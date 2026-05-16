import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import PageShell from "../components/PageShell.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import CandidateCard from "../components/mentorship/CandidateCard.jsx";
import { candidates, jobs } from "../data/mentorship.js";
import { useConsulting } from "../context/ConsultingContext.jsx";
import { useCareer } from "../context/CareerContext.jsx";
import { useProgress } from "../context/ProgressContext.jsx";

export default function HiringEcosystemPage() {
  const { savedJobs, toggleSavedJob, shortlistedCandidates, toggleShortlist } = useConsulting();
  const { bookmarkedFields, quizResult } = useCareer();
  const { progress } = useProgress();
  const [skillFilter, setSkillFilter] = useState("all");
  const [viewCandidate, setViewCandidate] = useState(null);
  const [appliedMessage, setAppliedMessage] = useState("");

  const skillOptions = [...new Set(candidates.flatMap((candidate) => candidate.skills))];
  const filteredCandidates = useMemo(() => {
    return candidates.filter((candidate) => skillFilter === "all" || candidate.skills.includes(skillFilter));
  }, [skillFilter]);

  const profileCompletion = Math.min(100, 45 + progress.completedSkills.length * 7 + bookmarkedFields.length * 5);
  const careerMatch = quizResult?.best?.percentage || 82;

  function applyToCompanies() {
    setAppliedMessage("Applications prepared for selected companies. This is a UI-only hiring workflow.");
    window.setTimeout(() => setAppliedMessage(""), 2600);
  }

  return (
    <PageShell>
      <section className="page-section">
        <div className="container-page">
          <SectionHeader
            eyebrow="Hiring ecosystem"
            title="Student applications and company candidate discovery"
            description="A dual dashboard for students and dummy company admins, with working save, shortlist and profile modal interactions."
          />

          <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
            <section className="glass-card p-6">
              <span className="eyebrow">Student side</span>
              <h2 className="mt-4 text-2xl font-black dark:text-white">Application readiness</h2>
              <div className="mt-5 grid gap-4">
                <Progress label="Profile completion" value={profileCompletion} />
                <Progress label="Career match score" value={careerMatch} />
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {progress.completedSkills.map((skill) => (
                  <span key={skill} className="rounded-full bg-blue-50 px-3 py-1 text-xs font-black text-primary dark:bg-blue-400/10 dark:text-blue-300">
                    {skill}
                  </span>
                ))}
              </div>
              <button type="button" className="btn-primary mt-6" onClick={applyToCompanies}>
                Apply to Companies
              </button>
              {appliedMessage && <p className="mt-3 rounded-2xl bg-green-50 p-3 text-sm font-bold text-green-700 dark:bg-green-400/10 dark:text-green-300">{appliedMessage}</p>}

              <h3 className="mt-8 text-xl font-black dark:text-white">Saved jobs</h3>
              <div className="mt-4 grid gap-3">
                {jobs.map((job) => (
                  <div key={job.id} className="rounded-2xl bg-white p-4 shadow-sm dark:bg-slate-950">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-black dark:text-white">{job.title}</p>
                        <p className="text-sm text-slate-500 dark:text-slate-400">{job.company} • {job.match}% match</p>
                      </div>
                      <button type="button" className={savedJobs.includes(job.id) ? "btn-secondary" : "btn-primary"} onClick={() => toggleSavedJob(job.id)}>
                        {savedJobs.includes(job.id) ? "Saved" : "Save"}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="glass-card p-6">
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
                <div>
                  <span className="eyebrow">Company side</span>
                  <h2 className="mt-4 text-2xl font-black dark:text-white">Candidate pipeline</h2>
                </div>
                <select className="input-control" value={skillFilter} onChange={(event) => setSkillFilter(event.target.value)}>
                  <option value="all">All skills</option>
                  {skillOptions.map((skill) => <option key={skill}>{skill}</option>)}
                </select>
              </div>

              <div className="mt-6 grid gap-4 lg:grid-cols-2">
                {filteredCandidates.map((candidate) => (
                  <CandidateCard
                    key={candidate.id}
                    candidate={candidate}
                    shortlisted={shortlistedCandidates.includes(candidate.id)}
                    onShortlist={toggleShortlist}
                    onView={setViewCandidate}
                  />
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {viewCandidate && (
          <motion.div className="fixed inset-0 z-[80] grid place-items-center bg-slate-950/70 p-4 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div className="glass-card w-full max-w-lg p-6" initial={{ y: 20, scale: 0.96 }} animate={{ y: 0, scale: 1 }} exit={{ y: 20, scale: 0.96 }}>
              <h2 className="text-3xl font-black dark:text-white">{viewCandidate.name}</h2>
              <p className="mt-2 text-slate-500 dark:text-slate-400">{viewCandidate.education}</p>
              <p className="mt-4 text-sm font-bold text-slate-600 dark:text-slate-300">Experience: {viewCandidate.level}</p>
              <p className="mt-2 text-sm font-bold text-slate-600 dark:text-slate-300">Match score: {viewCandidate.match}%</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {viewCandidate.skills.map((skill) => (
                  <span key={skill} className="rounded-full bg-blue-50 px-3 py-1 text-xs font-black text-primary dark:bg-blue-400/10 dark:text-blue-300">{skill}</span>
                ))}
              </div>
              <button type="button" className="btn-primary mt-6" onClick={() => setViewCandidate(null)}>
                Close Profile
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageShell>
  );
}

function Progress({ label, value }) {
  return (
    <div>
      <div className="mb-2 flex justify-between text-sm font-black text-slate-500 dark:text-slate-400">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="h-3 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
        <div className="h-full rounded-full bg-gradient-to-r from-primary to-accent" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}
