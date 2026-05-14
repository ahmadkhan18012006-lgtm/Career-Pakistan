import PageShell from "../components/PageShell.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import { useAuth } from "../context/AuthContext.jsx";

const premiumFeatures = [
  "Advanced analytics",
  "AI-generated career report",
  "Resume review",
  "Mentorship access",
  "Deep skill analysis",
  "Personalized dashboard"
];

export default function PremiumPage() {
  const { currentUser, upgradeToPremium } = useAuth();

  return (
    <PageShell>
      <section className="page-section">
        <div className="container-page">
          <SectionHeader
            eyebrow="Premium architecture"
            title="Subscription-ready premium experience"
            description="Locked premium modules show how the platform can scale into advanced paid guidance."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {premiumFeatures.map((feature) => (
              <div key={feature} className="glass-card p-6">
                <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-black text-amber-700 dark:bg-amber-400/10 dark:text-amber-300">
                  {currentUser?.premium ? "Unlocked" : "Premium"}
                </span>
                <h3 className="mt-4 text-xl font-black dark:text-white">{feature}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {currentUser?.premium ? "Available in your account." : "Locked until the student upgrades."}
                </p>
              </div>
            ))}
          </div>
          {!currentUser?.premium && (
            <button type="button" onClick={upgradeToPremium} className="btn-primary mt-8">
              Upgrade Prototype Account
            </button>
          )}
        </div>
      </section>
    </PageShell>
  );
}
