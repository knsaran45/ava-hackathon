export default function ChatBubble({ sender, message }) {
  const isUser = sender === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} my-4`}>
      <div
        className={`max-w-lg rounded-2xl px-5 py-4 ${
          isUser
            ? "bg-cyan-500 text-white"
            : "bg-slate-800 text-white"
        }`}
      >
        {message}
      </div>
    </div>
  );
}