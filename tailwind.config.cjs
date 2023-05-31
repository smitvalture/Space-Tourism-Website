/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      'Barlow': ['Barlow Condensed', 'sans-serif'],
      'Bellefair': ['Bellefair', 'serif'],
    }
  },
  
  plugins: [],
};
