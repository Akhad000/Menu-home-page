/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        whitesmoke: {
          "100": "#f4f0ec",
          "200": "rgba(244, 240, 236, 0.95)",
        },
        darkslategray: "#233049",
        sienna: "#885133",
        white: "#fff",
        antiquewhite: "#f0e6d7",
      },
      spacing: {},
      fontFamily: {
        comfortaa: "Comfortaa",
      },
      borderRadius: {
        "3xs": "10px",
      },
    },
    fontSize: {
      xl: "20px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
