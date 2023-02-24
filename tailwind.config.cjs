/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "ping-slow": "ping 2s cubic-bezier(0, 0, 0.2, 1) infinite",
        "ping-very-slow": "ping-odd 5s cubic-bezier(0, 0, 0.2, 1) infinite",
        "spin-very-slow": "spin 15s linear infinite",
      },
      keyframes: {
        "ping-odd": {
          "35%, 100%": { transform: "scale(2)", opacity: 0 },
        },
      },
      fontFamily: {
        display: ['"Darker Grotesque"', "sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
