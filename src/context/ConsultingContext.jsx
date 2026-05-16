import { createContext, useContext, useMemo, useState } from "react";
import { consultingPlans, jobs } from "../data/mentorship.js";
import useLocalStorage from "../hooks/useLocalStorage.js";

const ConsultingContext = createContext(null);

export function ConsultingProvider({ children }) {
  const [bookings, setBookings] = useLocalStorage("careerpath-mentor-bookings", []);
  const [activePlan, setActivePlan] = useLocalStorage("careerpath-consulting-plan", "free");
  const [savedJobs, setSavedJobs] = useLocalStorage("careerpath-saved-jobs", [jobs[0].id]);
  const [shortlistedCandidates, setShortlistedCandidates] = useLocalStorage("careerpath-shortlisted-candidates", []);
  const [successMessage, setSuccessMessage] = useState("");

  const value = useMemo(() => {
    function bookSession({ mentor, date, slot }) {
      const booking = {
        id: crypto.randomUUID(),
        mentorId: mentor.id,
        mentorName: mentor.name,
        expertise: mentor.expertise.join(", "),
        price: mentor.price,
        date,
        slot,
        status: "Confirmed",
        createdAt: new Date().toISOString()
      };
      setBookings((current) => [booking, ...current]);
      setSuccessMessage("Booking Confirmed Successfully");
      return booking;
    }

    function upgradePlan(planId) {
      setActivePlan(planId);
      setSuccessMessage(`${consultingPlans.find((plan) => plan.id === planId)?.name} activated`);
    }

    function toggleSavedJob(jobId) {
      setSavedJobs((current) => current.includes(jobId) ? current.filter((id) => id !== jobId) : [...current, jobId]);
    }

    function toggleShortlist(candidateId) {
      setShortlistedCandidates((current) =>
        current.includes(candidateId) ? current.filter((id) => id !== candidateId) : [...current, candidateId]
      );
    }

    return {
      bookings,
      activePlan,
      activePlanDetails: consultingPlans.find((plan) => plan.id === activePlan) || consultingPlans[0],
      savedJobs,
      shortlistedCandidates,
      successMessage,
      setSuccessMessage,
      bookSession,
      upgradePlan,
      toggleSavedJob,
      toggleShortlist
    };
  }, [activePlan, bookings, savedJobs, shortlistedCandidates, setActivePlan, setBookings, setSavedJobs, setShortlistedCandidates]);

  return <ConsultingContext.Provider value={value}>{children}</ConsultingContext.Provider>;
}

export function useConsulting() {
  const context = useContext(ConsultingContext);
  if (!context) {
    throw new Error("useConsulting must be used inside ConsultingProvider");
  }
  return context;
}
