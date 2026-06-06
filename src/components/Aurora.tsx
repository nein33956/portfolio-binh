/** Nền aurora neon trên nền tối */
export default function Aurora() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div
        className="aurora animate-floaty"
        style={{
          width: 460,
          height: 460,
          top: -140,
          left: -100,
          background: "radial-gradient(circle at 30% 30%, #3b82f6, transparent 70%)",
        }}
      />
      <div
        className="aurora animate-floaty"
        style={{
          width: 400,
          height: 400,
          top: 40,
          right: -120,
          animationDelay: "1.5s",
          background: "radial-gradient(circle at 70% 30%, #22d3ee, transparent 70%)",
        }}
      />
      <div
        className="aurora animate-floaty"
        style={{
          width: 380,
          height: 380,
          bottom: -160,
          left: "42%",
          animationDelay: "3s",
          background: "radial-gradient(circle at 50% 50%, #6366f1, transparent 70%)",
        }}
      />
    </div>
  );
}
