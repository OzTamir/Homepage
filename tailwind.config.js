/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        golden: "#FFB300",
        darkGolden: "#FFA000",
      },
    },
  },
  plugins: [],
};
