/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        "deep-blue": "#346588",
        blue: "#9bb9d5",
        red: "#f76567",
        yellow: "#e6d4ab",
        grey: "#b1b5b6",
        "dark-grey": "#747474",
        "opaque-black": "rgba(0,0,0,0.35)",
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow":
        "linear-gradient(81.66deg, #9bb9d5 7.21%, #f76567 45.05%, #e6d4ab 78.07%)",

        "gradient-rainblue":
        "linear-gradient(90deg, #9bb9d5 14.53%, #efb9a5 69.36%, #e6d4ab 117.73%)",

      }),
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
      content: {
        brush: "url('./assets/brush.png')",
        person1: "url('./assets/person-1.png')",
        person2: "url('./assets/person-2.png')",
        person3: "url('./assets/person-3.png')",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};