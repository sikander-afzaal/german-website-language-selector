module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        14: "repeat(14, minmax(0, 1fr))",
      },
    },
    colors: {
      white: "#fff",
      blue: "#1fb6ff",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#FB5D1E",
      green: "#13ce66",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      gray: "#C7C7C7",
      "gray-light": "#d3dce6",
      black: "#263238",
    },
    textColor: {
      white: "#fff",
      black: "#000",
      orange: "#FB5D1E",
      gray: "gray",
    },
    borderColor: {
      gray: "gray",
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
      serif: ["DM Sans", "serif"],
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
