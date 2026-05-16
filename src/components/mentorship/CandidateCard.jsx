export default function CandidateCard({ candidate, shortlisted, onShortlist, onView }) {
  return (
    <article className="glass-card p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-xl font-black dark:text-white">{candidate.name}</h3>
          <p className="mt-1 text-sm font-bold text-slate-500 dark:text-slate-400">{candidate.education}</p>
        </div>
        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-black text-primary dark:bg-blue-400/10 dark:text-blue-300">
          {candidate.match}% match
        </span>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {candidate.skills.map((skill) => (
          <span key={skill} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-600 dark:bg-white/10 dark:text-slate-300">
            {skill}
          </span>
        ))}
      </div>
      <p className="mt-4 text-sm font-bold text-slate-500 dark:text-slate-400">Experience level: {candidate.level}</p>
      <div className="mt-5 flex flex-col gap-2 sm:flex-row">
        <button type="button" onClick={() => onShortlist(candidate.id)} className={shortlisted ? "btn-secondary flex-1" : "btn-primary flex-1"}>
          {shortlisted ? "Shortlisted" : "Shortlist"}
        </button>
        <button type="button" onClick={() => onView(candidate)} className="btn-secondary flex-1">
          View Profile
        </button>
      </div>
    </article>
  );
}
