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
        darkslategray: {
          "100": "#233049",
          "200": "#013f25",
        },
        white: "#fff",
        silver: "#b9b9b9",
        gainsboro: "#d9d9d9",
      },
      spacing: {},
      fontFamily: {
        comfortaa: "Comfortaa",
      },
      borderRadius: {
        mini: "15px",
        "10xs": "3px",
      },
    },
    fontSize: {
      xl: "20px",
      mini: "15px",
      "3xs": "10px",
      xs: "12px",
      "11xl": "30px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
