export default function SummaryCards({
  insights,
  goals,
  risk,
}) {
  if (!insights || !goals || !risk) {
    return (
      <div className="mt-10 text-center text-slate-400">
        Loading Dashboard...
      </div>
    );
  }

  return (
    <div className="grid gap-6 mt-10 w-full max-w-5xl md:grid-cols-3">

      <div className="rounded-2xl bg-slate-900 p-6 border border-slate-700">
        <h2 className="text-cyan-400 font-bold text-xl">
          💳 Spending
        </h2>

        <p className="text-4xl font-bold mt-4">
          ₹{insights.total}
        </p>

        <p className="mt-2 text-slate-400">
          Shopping ₹{insights.categories.Shopping || 0}
        </p>
      </div>

      <div className="rounded-2xl bg-slate-900 p-6 border border-slate-700">
        <h2 className="text-green-400 font-bold text-xl">
          🎯 Goal
        </h2>

        <p className="mt-4 font-semibold">
          {goals.goal_name}
        </p>

        <div className="w-full bg-slate-700 rounded-full h-3 mt-4">
          <div
            className="bg-green-500 h-3 rounded-full"
            style={{
              width: `${goals.completion}%`,
            }}
          />
        </div>

        <p className="mt-3">
          {goals.completion}%
        </p>
      </div>

      <div className="rounded-2xl bg-slate-900 p-6 border border-slate-700">
        <h2 className="text-orange-400 font-bold text-xl">
          📈 Risk
        </h2>

        <p className="text-3xl mt-4">
          {risk.risk}
        </p>

        <p className="text-slate-400 mt-2">
          Risk Score: {risk.score}/100
        </p>
      </div>

    </div>
  );
}
