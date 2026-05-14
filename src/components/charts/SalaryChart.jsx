import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import { allFields } from "../../data/fields.js";

const colors = ["#2563eb", "#22c55e", "#f59e0b"];

export default function SalaryChart({ selectedIds, onChange }) {
  const selectedFields = selectedIds.map((id) => allFields.find((field) => field.id === id)).filter(Boolean);
  const levels = ["Intern", "Junior", "Mid", "Senior"];
  const data = levels.map((level) => {
    const row = { level };
    selectedFields.forEach((field) => {
      row[field.title] = field.salaryGrowth.find((item) => item.level === level)?.salary || 0;
    });
    return row;
  });

  function updateField(index, value) {
    onChange(selectedIds.map((id, itemIndex) => (itemIndex === index ? value : id)));
  }

  return (
    <section className="glass-card p-5 sm:p-6">
      <div className="mb-5 flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
        <div>
          <h3 className="text-lg font-black tracking-tight text-secondary dark:text-white">Salary Growth Comparison</h3>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Compare any 3 career fields by level.</p>
        </div>
        <div className="grid gap-2 sm:grid-cols-3">
          {selectedIds.map((id, index) => (
            <select key={`${id}-${index}`} value={id} onChange={(event) => updateField(index, event.target.value)} className="input-control">
              {allFields.map((field) => (
                <option key={field.id} value={field.id}>
                  {field.title}
                </option>
              ))}
            </select>
          ))}
        </div>
      </div>

      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="level" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip formatter={(value) => [`PKR ${Number(value).toLocaleString("en-PK")}`, "Salary"]} />
            <Legend />
            {selectedFields.map((field, index) => (
              <Line
                key={field.id}
                type="monotone"
                dataKey={field.title}
                stroke={colors[index]}
                strokeWidth={3}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
