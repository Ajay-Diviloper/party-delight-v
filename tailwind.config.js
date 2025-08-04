/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        grey: "#858585",
        "primary-red": "#920804",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "serif"], // Montaga
        sans: ["var(--font-sans)", "sans-serif"], // Inter
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
        "spin-reverse": "spin 12s linear infinite reverse",
      },
    },
  },
  plugins: [],
};
