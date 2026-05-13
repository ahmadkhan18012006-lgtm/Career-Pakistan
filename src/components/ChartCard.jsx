export default function ChartCard({ title, subtitle, children }) {
  return (
    <section className="glass-card p-6">
      <div className="mb-5">
        <h3 className="text-lg font-black tracking-tight text-secondary">{title}</h3>
        {subtitle && <p className="mt-1 text-sm text-slate-500">{subtitle}</p>}
      </div>
      <div className="h-72 w-full">{children}</div>
    </section>
  );
}
