/** @type {import('tailwindcss').Config} */
const config = {
  theme: {
    extend: {
      fontFamily: {
        page: "Reddit Sans Condensed",
        title: "Roboto",
      },
      height: {
        screen: "100dvh",
      },
      boxShadow: {
        multi: "#1b1c1d 0 0 5px",
      },
      colors: {
        "multi-brown": {
          DEFAULT: "#914b03",
        },
        "multi-green": {
          dark: "#49a909",
          mid: "#b4f200",
          DEFAULT: "#83f15e",
          light: "#c8dfab",
        },
        "multi-gray": {
          DEFAULT: "#cececece",
        },
        "multi-white": {
          DEFAULT: "#efefef",
        },
        "multi-black": {
          DEFAULT: "#1b1c1d",
        },
      },
    },
  },
};

const logo =
  "https://raw.githubusercontent.com/Multiplusgroup/multiplusgroup.github.io/refs/heads/main/public/Site_Extendida.png";

export { logo };

export default config;
