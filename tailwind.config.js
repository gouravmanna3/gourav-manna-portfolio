/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        space:
          "radial-gradient(circle, #0e2954, #0a2a53, #082c51, #072d50, #072e4e);",
        light:
          "radial-gradient(circle, #f6f6f6, #f6f6f6, #f7f5f5, #f7f5f3, #f6f5f2);",
      },
      fontFamily: {
        notoSerif: ["Noto Serif", "serif"],
        permanentMarker: ["Permanent Marker", "cursive"],
        robotoSlab: ["Roboto Slab", "serif"],
        montserrat: ["Montserrat", "sans-serif"],
        dancingScript: ["Dancing Script", "cursive"],
      },
      height: {
        inherit: "inherit",
      },
      colors: {
        //turquoise: "#48D1CC",
        turquoise: "#9df9ef",
      },
    },
  },
  plugins: [],
};
