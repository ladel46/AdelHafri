/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
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
        Main: "url('https://marketplace.canva.cn/epo1s/MAFME1epo1s/1/wm_tl-1/canva-seamless-monochrome-vector-geometric-pattern.futuristic-seamless-black-vector-texture-from-simple-abstract-shapes.-MAFME1epo1s.png')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [],
};
