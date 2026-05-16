import { consultingPlans } from "../../data/mentorship.js";

export default function PlanCard({ plan, activePlan, onUpgrade }) {
  const isActive = activePlan === plan.id;

  return (
    <article className={`glass-card flex h-full flex-col p-6 ${isActive ? "ring-2 ring-primary" : ""}`}>
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-2xl font-black dark:text-white">{plan.name}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">{plan.description}</p>
        </div>
        {isActive && (
          <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-black text-green-700 dark:bg-green-400/10 dark:text-green-300">
            Current Plan
          </span>
        )}
      </div>
      <p className="mt-5 text-4xl font-black text-primary dark:text-blue-300">
        {plan.price === 0 ? "Free" : `PKR ${plan.price.toLocaleString("en-PK")}`}
        {plan.price > 0 && <span className="text-sm font-bold text-slate-500 dark:text-slate-400">/month</span>}
      </p>
      <div className="mt-5 grid gap-3">
        {plan.features.map((feature) => (
          <div key={feature} className="flex gap-2 text-sm font-semibold text-slate-600 dark:text-slate-300">
            <span className="text-accent">✓</span>
            {feature}
          </div>
        ))}
      </div>
      <button type="button" onClick={() => onUpgrade(plan.id)} className={isActive ? "btn-secondary mt-auto w-full" : "btn-primary mt-auto w-full"}>
        {isActive ? "Current Plan" : "Upgrade Now"}
      </button>
    </article>
  );
}

export function PlanComparison() {
  return consultingPlans;
}
