import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";

export default function ChartComponent({ data, bars, xKey = "field", title, subtitle }) {
  return (
    <section className="glass-card p-6">
      {(title || subtitle) && (
        <div className="mb-5">
          {title && <h3 className="text-lg font-black tracking-tight text-secondary">{title}</h3>}
          {subtitle && <p className="mt-1 text-sm text-slate-500">{subtitle}</p>}
        </div>
      )}
      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey={xKey} tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip />
            <Legend />
            {bars.map((bar) => (
              <Bar key={bar.key} dataKey={bar.key} name={bar.name} fill={bar.color} radius={[10, 10, 0, 0]} />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
