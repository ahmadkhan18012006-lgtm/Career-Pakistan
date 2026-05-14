import { useState } from "react";
import PageShell from "../components/PageShell.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import { useAuth } from "../context/AuthContext.jsx";
import { useCareer } from "../context/CareerContext.jsx";
import { useProgress } from "../context/ProgressContext.jsx";

export default function ProfilePage() {
  const { currentUser, updateProfile, logout } = useAuth();
  const { bookmarkedFields, quizResult } = useCareer();
  const { progress } = useProgress();
  const [form, setForm] = useState({
    name: currentUser.name,
    bio: currentUser.profile.bio,
    interests: currentUser.profile.interests.join(", "),
    goals: currentUser.profile.goals,
    selectedCareerPath: currentUser.profile.selectedCareerPath
  });
  const [saved, setSaved] = useState(false);

  function submit(event) {
    event.preventDefault();
    updateProfile({
      ...form,
      interests: form.interests.split(",").map((item) => item.trim()).filter(Boolean)
    });
    setSaved(true);
    window.setTimeout(() => setSaved(false), 1800);
  }

  return (
    <PageShell>
      <section className="page-section">
        <div className="container-page">
          <SectionHeader eyebrow="Profile" title="Manage your career profile" description="Your profile powers recommendations, progress tracking and saved careers." />
          <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
            <form onSubmit={submit} className="glass-card grid gap-4 p-6">
              <input className="input-control" value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} placeholder="Name" />
              <textarea className="input-control min-h-28" value={form.bio} onChange={(event) => setForm({ ...form, bio: event.target.value })} placeholder="Bio" />
              <input className="input-control" value={form.interests} onChange={(event) => setForm({ ...form, interests: event.target.value })} placeholder="Interests comma separated" />
              <input className="input-control" value={form.goals} onChange={(event) => setForm({ ...form, goals: event.target.value })} placeholder="Career goal" />
              <div className="flex flex-col gap-3 sm:flex-row">
                <button type="submit" className="btn-primary">{saved ? "Saved" : "Save Profile"}</button>
                <button type="button" className="btn-secondary" onClick={logout}>Logout</button>
              </div>
            </form>
            <div className="grid gap-4">
              <Stat title="Saved careers" value={bookmarkedFields.length} />
              <Stat title="Completed skills" value={progress.completedSkills.length} />
              <Stat title="Learning hours" value={progress.totalLearningHours} />
              <Stat title="Latest quiz match" value={quizResult?.best?.career || "Not completed"} />
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function Stat({ title, value }) {
  return (
    <div className="glass-card p-5">
      <p className="text-sm font-black text-slate-500 dark:text-slate-400">{title}</p>
      <p className="mt-2 text-3xl font-black text-primary dark:text-blue-300">{value}</p>
    </div>
  );
}
