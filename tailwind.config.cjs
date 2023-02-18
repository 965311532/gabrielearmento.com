/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "ping-slow": "ping 2s cubic-bezier(0, 0, 0.2, 1) infinite",
        "spin-very-slow": "spin 15s linear infinite",
      },
      fontFamily: {
        display: ['"Fira Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
