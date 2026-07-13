import { useState, useEffect } from "react";
import api from "../api/client";

import SpendingChart from "../components/dashboard/SpendingChart";
import SummaryCards from "../components/dashboard/SummaryCards";
import AvatarOrb from "../components/ui/AvatarOrb";


export default function Dashboard() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const [why, setWhy] = useState("");
  const [action, setAction] = useState("");

  const [insights, setInsights] = useState(null);
  const [goals, setGoals] = useState(null);
  const [risk, setRisk] = useState(null);

  // Load dashboard data
  useEffect(() => {
    async function loadDashboard() {
      try {
        const [insightsRes, goalsRes, riskRes] = await Promise.all([
          api.get("/insights/1"),
          api.get("/goals/1"),
          api.get("/risk-profile/1"),
        ]);

        setInsights(insightsRes.data);
        setGoals(goalsRes.data);
        setRisk(riskRes.data);

        console.log("Insights:", insightsRes.data);
        console.log("Goals:", goalsRes.data);
        console.log("Risk:", riskRes.data);
      } catch (err) {
        console.error("Dashboard Load Error:", err);
      }
    }

    loadDashboard();
  }, []);

  // Send chat message
  async function sendMessage(message) {
    if (!message.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        message,
      },
    ]);

    setLoading(true);

    try {
      const res = await api.post("/chat", {
        user_id: 1,
        message,
      });

      setMessages((prev) => [
        ...prev,
        {
          sender: "assistant",
          message: res.data.reply,
        },
      ]);

      setWhy(res.data.why || "");
      setAction(res.data.action || "");
    } catch (err) {
      console.error(err);

      setMessages((prev) => [
        ...prev,
        {
          sender: "assistant",
          message: "Unable to connect to backend.",
        },
      ]);
    }

    setLoading(false);
  }

  return (
    <MainLayout>
      <div className="mx-auto flex max-w-5xl flex-col items-center px-6 pt-16">

        <h1 className="text-5xl font-bold text-white">
          AVA
        </h1>

        <div className="mt-10">
          <AvatarOrb />
        </div>

        <div className="mt-8 w-full max-w-3xl">
          <SearchBar onSend={sendMessage} />
        </div>

        {loading && (
          <p className="mt-5 text-slate-400 animate-pulse">
            AVA is thinking...
          </p>
        )}

        <div className="mt-8 w-full max-w-3xl space-y-4">
          {messages.map((msg, index) => (
            <ChatBubble
              key={index}
              sender={msg.sender}
              message={msg.message}
            />
          ))}
        </div>

        {why && (
          <div className="mt-8 w-full max-w-3xl rounded-xl border border-slate-700 bg-slate-900 p-5">
            <h2 className="text-cyan-400 font-bold text-lg">
              💡 Why
            </h2>

            <p className="mt-2 text-slate-200">
              {why}
            </p>
          </div>
        )}

        {action && (
          <div className="mt-4 w-full max-w-3xl rounded-xl bg-cyan-600 p-5">
            <h2 className="font-bold text-lg">
              🎯 Suggested Action
            </h2>

            <p className="mt-2">
              {action}
            </p>
          </div>
        )}

        <div className="mt-10 w-full">
          <SummaryCards
            insights={insights}
            goals={goals}
            risk={risk}
          />
        </div>
        <SpendingChart insights={insights} />

      </div>
    </MainLayout>
  );
}