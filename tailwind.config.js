/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0CC25F",
        secondary: "#1F2937",
        "general-700": "#374151",
        "general-800": "#1F2937",
      },
      fontFamily: {
        JakartaBold: ["JakartaBold"],
        JakartaRegular: ["JakartaRegular"],
        JakartaMedium: ["JakartaMedium"],
      },
    },
  },
  plugins: [],
};

