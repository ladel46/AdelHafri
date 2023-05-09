/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "780px",
      lg: "980px",
      xlg: "1398px",
      xl: "1800px",
    },
    extend: {
      colors: {
        blueM: "#021621",
        greenM: "#56DBC3",
        grayD: "#6B989C",
        grayL: "#BAD7E9",
        purpleL: "#E1D7E9",
        purpleD: "#882D85",
      },
      fontFamily: {
        primary: ["Turret Road"],
        secondary: ["Major Mono Display"],
      },
      backgroundImage: {
        Main: "url('./images/ChatBox.png')",
        Main2: "url('./images/ChatBoxF.png')",
      },
      scale: {
        "-100": "-1",
      },
    },
  },
  plugins: [],
};
