import { allFields } from "../data/fields.js";
import { careerFieldMap, quizCareers } from "../data/quizQuestions.js";

export function calculateQuizResult(answers) {
  const rawScores = Object.fromEntries(quizCareers.map((career) => [career, 0]));
  const categoryScores = {};

  Object.entries(answers).forEach(([questionId, answer]) => {
    if (!answer?.weights) return;
    const questionBoost = answer.questionIndex >= 4 ? 1.25 : 1;
    categoryScores[answer.category] = (categoryScores[answer.category] || 0) + 1;

    Object.entries(answer.weights).forEach(([career, weight]) => {
      rawScores[career] = (rawScores[career] || 0) + weight * questionBoost;
    });
  });

  const maxScore = Math.max(...Object.values(rawScores), 1);
  const ranked = Object.entries(rawScores)
    .map(([career, score]) => {
      const fieldId = careerFieldMap[career];
      const field = allFields.find((item) => item.id === fieldId) || allFields[0];
      const normalized = Math.round((score / maxScore) * 100);
      return {
        career,
        score,
        percentage: Math.max(score > 0 ? 24 : 0, Math.min(98, normalized)),
        confidence: Math.max(38, Math.min(96, Math.round(normalized * 0.82 + field.demand * 0.18))),
        field
      };
    })
    .sort((a, b) => b.percentage - a.percentage || b.field.demand - a.field.demand);

  const best = ranked[0];
  const answeredCount = Object.keys(answers).length;

  return {
    rawScores,
    categoryScores,
    ranked,
    topMatches: ranked.slice(0, 5),
    best,
    answeredCount,
    confidenceScore: best?.confidence || 0,
    completed: answeredCount
  };
}

export function buildPersonalizedRecommendations(result) {
  const field = result.best?.field || allFields[0];

  return {
    career: result.best?.career || field.title,
    field,
    skills: field.skills.slice(0, 5),
    tools: field.tools.slice(0, 5),
    certifications: field.certifications.slice(0, 3),
    projects: field.projects.slice(0, 3),
    companies: field.companies.slice(0, 6),
    roles: field.roles,
    report: `${field.title} is your strongest fit because your answers align with its tools, project style, and career outcomes. Start with ${field.skills.slice(0, 2).join(" and ")} before moving into ${field.tools.slice(0, 2).join(" and ")}.`
  };
}
