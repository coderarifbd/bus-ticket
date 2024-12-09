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

      boxShadow: {
        "custom-shadow": "0px 2px 0px 0 #1DD100",
      },
    },
  },
  plugins: [require("daisyui")],
};
