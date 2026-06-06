/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', '"Segoe UI"', "system-ui", "sans-serif"],
        display: ['"Space Grotesk"', '"Inter"', "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      colors: {
        // brand = XANH ĐIỆN (electric blue)
        brand: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          950: "#172554",
        },
        // accent cyan neon
        neon: "#22d3ee",
        // nền & bề mặt tối
        night: "#070b16",
        surface: "#0f1626",
        line: "#1e293b",
        // chữ (sáng trên nền tối)
        ink: {
          DEFAULT: "#e8eef9",
          soft: "#aab6cf",
          muted: "#64748b",
        },
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(59,130,246,0.25), 0 18px 50px -18px rgba(59,130,246,0.5)",
        neon: "0 0 24px -2px rgba(34,211,238,0.45)",
        card: "0 14px 40px -18px rgba(0,0,0,0.7)",
        soft: "0 6px 24px -12px rgba(0,0,0,0.6)",
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(to right, rgba(148,163,184,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.06) 1px, transparent 1px)",
        "electric": "linear-gradient(135deg, #3b82f6 0%, #22d3ee 100%)",
      },
      keyframes: {
        floaty: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        pulseLine: {
          "0%,100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        floaty: "floaty 7s ease-in-out infinite",
        pulseLine: "pulseLine 2.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
