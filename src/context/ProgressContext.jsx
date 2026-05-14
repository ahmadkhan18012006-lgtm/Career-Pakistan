import { createContext, useContext, useMemo } from "react";
import useLocalStorage from "../hooks/useLocalStorage.js";

const ProgressContext = createContext(null);

const defaultProgress = {
  completedSkills: ["HTML/CSS", "Git/GitHub", "JavaScript"],
  completedRoadmapSteps: ["web-development:Months 1-3"],
  courseProgress: { "React Basics": 72, "Node APIs": 38, "Cloud Deployments": 24 },
  streak: 6,
  totalLearningHours: 86,
  weeklyGoal: 12,
  weeklyHours: 8,
  badges: ["Portfolio Starter", "Quiz Finisher", "7-Day Learner"]
};

export function ProgressProvider({ children }) {
  const [progress, setProgress] = useLocalStorage("careerpath-progress", defaultProgress);

  const value = useMemo(() => {
    function toggleSkill(skill) {
      setProgress((current) => ({
        ...current,
        completedSkills: current.completedSkills.includes(skill)
          ? current.completedSkills.filter((item) => item !== skill)
          : [...current.completedSkills, skill]
      }));
    }

    function toggleRoadmapStep(stepId) {
      setProgress((current) => ({
        ...current,
        completedRoadmapSteps: current.completedRoadmapSteps.includes(stepId)
          ? current.completedRoadmapSteps.filter((item) => item !== stepId)
          : [...current.completedRoadmapSteps, stepId]
      }));
    }

    function addLearningHour(hours = 1) {
      setProgress((current) => ({
        ...current,
        totalLearningHours: current.totalLearningHours + hours,
        weeklyHours: Math.min(current.weeklyGoal, current.weeklyHours + hours)
      }));
    }

    return { progress, toggleSkill, toggleRoadmapStep, addLearningHour };
  }, [progress, setProgress]);

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error("useProgress must be used inside ProgressProvider");
  }
  return context;
}
