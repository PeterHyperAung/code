/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        main: ["Poppins"],
      },
      colors: {
        primary: "#D02E83",
        themeColor: "#D02E83",
        secondary: "",
        tertiary: "",
      },
    },
  },
  plugins: [require("daisyui")],
};
