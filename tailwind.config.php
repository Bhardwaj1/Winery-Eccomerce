/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: !{
        segoe: ["Segoe UI", "sans-serif"],
      },
    },
  },
  plugins: [],
}
