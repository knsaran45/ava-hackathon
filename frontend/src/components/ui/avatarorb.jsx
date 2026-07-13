export default function AvatarOrb() {
  return (
    <div className="relative flex items-center justify-center">

      <div className="absolute h-56 w-56 rounded-full bg-cyan-500 opacity-30 blur-3xl animate-pulse"></div>

      <div className="relative h-40 w-40 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-700 shadow-[0_0_80px_rgba(56,189,248,.7)]"></div>

    </div>
  );
}