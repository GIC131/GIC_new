/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#141A25',
        'secondary': '#1E293B',
        'accent': '#38BDF8',
        'light-text': '#E2E8F0',
        'dark-text': '#94A3B8',
      },
    },
  },
  plugins: [],
}