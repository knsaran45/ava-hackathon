import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const COLORS = [
  "#06b6d4",
  "#3b82f6",
  "#22c55e",
  "#f59e0b",
  "#ef4444",
];

export default function SpendingChart({ insights }) {
  if (!insights || !insights.categories) return null;

  const data = Object.entries(insights.categories).map(
    ([name, value]) => ({
      name,
      value,
    })
  );

  return (
    <div className="mt-10 w-full max-w-5xl rounded-2xl bg-slate-900 p-6 border border-slate-700">
      <h2 className="text-2xl font-bold mb-6 text-cyan-400">
        📊 Spending Breakdown
      </h2>

      <div style={{ width: "100%", height: 350 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              outerRadius={120}
              label
            >
              {data.map((entry, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}