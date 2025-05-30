/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Enable dark mode with class strategy
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust if your paths differ
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
