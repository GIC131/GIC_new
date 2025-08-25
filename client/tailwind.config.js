// client/tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#141A25", // Main background
        secondary: "#1E293B", // Cards & sections
        accent: "#38BDF8", // Buttons & links
        "light-text": "#E2E8F0", // Main text
        "dark-text": "#94A3B8", // Secondary text
      },
    },
  },
  plugins: [],
};