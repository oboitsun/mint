module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1600px",
    },
    extend: {
      colors: {
        lime: "#C9E606",
        orange: "#FCC741",
        ocean: "#036A73",
      },
      maxWidth: {
        864: "864px",
        1080: "1080px",
        1440: "1440px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
