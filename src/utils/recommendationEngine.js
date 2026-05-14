import { allFields } from "../data/fields.js";

export function generateRecommendations({ quizResult, progress, profile }) {
  const baseField = quizResult?.best?.field || allFields.find((field) => field.id === profile?.selectedCareerPath) || allFields[1];
  const missingSkills = baseField.skills.filter((skill) => !progress.completedSkills.includes(skill)).slice(0, 4);

  return {
    primaryField: baseField,
    skills: missingSkills.length ? missingSkills : baseField.skills.slice(2, 6),
    certifications: baseField.certifications.slice(0, 3),
    projects: baseField.projects.slice(0, 3),
    learningPath: baseField.roadmap.periods.map((period) => `${period.range}: ${period.skills.slice(0, 2).join(", ")}`),
    report: `Based on your ${progress.completedSkills.length} completed skills, ${progress.totalLearningHours} learning hours, and latest quiz data, ${baseField.title} is the strongest next path. Focus on ${missingSkills.slice(0, 2).join(" and ") || baseField.skills.slice(0, 2).join(" and ")} this week.`
  };
}
