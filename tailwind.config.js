/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
      },
      colors: {
        green: "#1DD100",
      },
      BackgroundImage: {
        "hero-bg": "url(./images/banner.png)",
      },
    },
  },
  plugins: [require("daisyui")],
};
