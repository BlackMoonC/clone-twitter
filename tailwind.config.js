/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "purple-lightshade": "#B1B2FF",
        "blue-lightshade": "#AAC4FF",
      },
    },
  },
  plugins: [],
};
