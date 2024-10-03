/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "768px",
      md: "1024px",
      lg: "1280px",
      xl: "1536px",
      "2xl": "1920px",
    },
    extend: {
      colors: {
        primary: "#FB2E86",
        primaryDark: "#F0056A",
        primaryLight: "#FC5FA2",
        secondary: "#F9BA00",
        secondaryLight: "#FFF3CE",
        tertiary: "#7E33E0",

        black: "#101750",
        grey3: "#8a8fb9",
        grey2: "#e5e0fc",
        grey1: "#f8f8fd",
        white: "#ffffff",

        danger: "#fb2448",
        dangerLight: "#feb9c4",
        info: "#603eff",
        success: "#0cc562",
        successDark: "#00994c",
        successLight: "#92f2bf",
        bgCardSlider: "#f2f0ff",
      },
    },
    maxWidth: {
      cardContainer: "80rem",
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),
    }),
    fontFamily: {
      main: ["Josefin Sans", "sans-serif"],
      body: ["Lato", "sans-serif"],
    },
  },
  plugins: [],
};
