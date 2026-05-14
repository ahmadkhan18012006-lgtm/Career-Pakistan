import { allFields, companies as companyNames } from "./fields.js";

const statusCycle = ["Remote-friendly", "Hybrid", "On-site", "Internships"];
const demandCycle = ["Hiring", "Growing", "Selective", "Internship-ready"];

export const companyDatabase = companyNames.map((name, index) => {
  const matchedFields = allFields
    .filter((field, fieldIndex) => (fieldIndex + index) % 3 === 0 || field.demand > 84)
    .slice(0, 6);

  return {
    id: name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
    name,
    logo: name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .slice(0, 2)
      .toUpperCase(),
    fields: matchedFields.map((field) => field.id),
    hiringRoles: [...new Set(matchedFields.flatMap((field) => field.roles))].slice(0, 4),
    technologies: [...new Set(matchedFields.flatMap((field) => field.tools))].slice(0, 6),
    internship: index % 2 === 0 || index % 5 === 0,
    workMode: statusCycle[index % statusCycle.length],
    demandBadge: demandCycle[index % demandCycle.length]
  };
});

export function companiesForField(fieldId, limit = 8) {
  const ranked = companyDatabase
    .map((company, index) => ({
      ...company,
      score: company.fields.includes(fieldId) ? 2 : 1,
      order: (index * 17 + fieldId.length * 11) % companyDatabase.length
    }))
    .sort((a, b) => b.score - a.score || a.order - b.order);

  return ranked.slice(0, limit);
}
