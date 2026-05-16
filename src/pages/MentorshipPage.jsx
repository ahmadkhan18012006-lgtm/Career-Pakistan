import { useEffect, useMemo, useState } from "react";
import PageShell from "../components/PageShell.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import Skeleton from "../components/ui/Skeleton.jsx";
import MentorCard from "../components/mentorship/MentorCard.jsx";
import BookingModal from "../components/mentorship/BookingModal.jsx";
import PlanCard from "../components/mentorship/PlanCard.jsx";
import { consultingPlans, mentors } from "../data/mentorship.js";
import { useConsulting } from "../context/ConsultingContext.jsx";

const expertiseOptions = ["All", "AI", "Web Dev", "Data Science", "Cybersecurity", "DevOps", "Cloud", "UI/UX"];

export default function MentorshipPage() {
  const { activePlan, upgradePlan } = useConsulting();
  const [selectedMentor, setSelectedMentor] = useState(null);
  const [filters, setFilters] = useState({ search: "", expertise: "All", rating: "all", price: "all" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 450);
    return () => window.clearTimeout(timer);
  }, []);

  const filteredMentors = useMemo(() => {
    return mentors.filter((mentor) => {
      const haystack = [mentor.name, mentor.bio, ...mentor.expertise].join(" ").toLowerCase();
      const matchesSearch = haystack.includes(filters.search.toLowerCase());
      const matchesExpertise = filters.expertise === "All" || mentor.expertise.includes(filters.expertise);
      const matchesRating = filters.rating === "all" || mentor.rating >= Number(filters.rating);
      const matchesPrice =
        filters.price === "all" ||
        (filters.price === "low" && mentor.price <= 5000) ||
        (filters.price === "mid" && mentor.price > 5000 && mentor.price <= 7000) ||
        (filters.price === "high" && mentor.price > 7000);
      return matchesSearch && matchesExpertise && matchesRating && matchesPrice;
    });
  }, [filters]);

  return (
    <PageShell>
      <section className="page-section">
        <div className="container-page">
          <SectionHeader
            eyebrow="Professional consulting"
            title="Book mentors for career clarity, portfolio reviews and hiring prep"
            description="A realistic mentor marketplace for Pakistani students, powered by dummy data and fully functional UI state."
          />

          <div className="glass-card grid gap-3 p-4 lg:grid-cols-[1.2fr_1fr_0.8fr_0.8fr]">
            <input
              className="input-control"
              value={filters.search}
              onChange={(event) => setFilters({ ...filters, search: event.target.value })}
              placeholder="Search mentor name, skill, or bio..."
            />
            <select className="input-control" value={filters.expertise} onChange={(event) => setFilters({ ...filters, expertise: event.target.value })}>
              {expertiseOptions.map((item) => <option key={item}>{item}</option>)}
            </select>
            <select className="input-control" value={filters.rating} onChange={(event) => setFilters({ ...filters, rating: event.target.value })}>
              <option value="all">Any rating</option>
              <option value="4.5">4.5+ rating</option>
              <option value="4.8">4.8+ rating</option>
              <option value="5">5.0 rating</option>
            </select>
            <select className="input-control" value={filters.price} onChange={(event) => setFilters({ ...filters, price: event.target.value })}>
              <option value="all">Any price</option>
              <option value="low">Under PKR 5k</option>
              <option value="mid">PKR 5k-7k</option>
              <option value="high">PKR 7k+</option>
            </select>
          </div>

          <div className="mt-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
            <p className="text-sm font-bold text-slate-500 dark:text-slate-400">Showing {filteredMentors.length} mentors</p>
            <button type="button" className="btn-secondary" onClick={() => setFilters({ search: "", expertise: "All", rating: "all", price: "all" })}>
              Reset Filters
            </button>
          </div>

          {loading ? (
            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {Array.from({ length: 6 }).map((_, index) => <Skeleton key={index} className="h-80" />)}
            </div>
          ) : (
            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {filteredMentors.map((mentor) => (
                <MentorCard key={mentor.id} mentor={mentor} onBook={setSelectedMentor} />
              ))}
            </div>
          )}

          <section className="mt-14">
            <SectionHeader
              eyebrow="Premium consulting plans"
              title="Choose the level of guidance you need"
              description="Every upgrade button updates the active plan state and shows a current plan badge."
            />
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {consultingPlans.map((plan) => (
                <PlanCard key={plan.id} plan={plan} activePlan={activePlan} onUpgrade={upgradePlan} />
              ))}
            </div>
          </section>
        </div>
      </section>
      <BookingModal mentor={selectedMentor} onClose={() => setSelectedMentor(null)} />
    </PageShell>
  );
}
