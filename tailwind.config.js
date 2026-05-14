/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb",
        secondary: "#0f172a",
        accent: "#22c55e",
        background: "#f8fafc"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 20px 55px rgba(15, 23, 42, 0.10)",
        glass: "0 18px 45px rgba(15, 23, 42, 0.08)"
      }
    }
  },
  plugins: []
};
