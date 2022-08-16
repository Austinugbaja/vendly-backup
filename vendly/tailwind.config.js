/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        backgroundLight: "#f7f2f2",
        primary: "#0055D4",
        secondary: "#4F4F4F",
        tetiary: "#2B2B2B",
        nursery: "#033580",
      },
      fontFamily: {
        "Raleway": [
          "Raleway",
          "sans-serif",
          "sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
        ],
        "Poppins": [
          "Poppins",
          "sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
        ],
      },
      fontSize: {
        "base": "15px",
        "sm": "12px",
      },
    },
  },
  plugins: [],
};
