import tailwindClipPath from "tailwind-clip-path";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        site: "Roboto",
        title: "Marhiel",
      },
      height: {
        screen: "100dvh",
      },
      boxShadow: {
        multi: "#1b1c1d 0 0 5px",
        "multi-inset": "inset #1b1c1d 0 0 5px",
      },
      clipPath: {
        full: "polygon(0% 100 %, 0% 0 %, 100% 0 %, 100% 100 %)",
        left: "circle(110% at 0% 50%)",
        right: "circle(110% at 100% 50%)",
      },
      colors: {
        multiBrown: {
          DEFAULT: "#914b03",
        },
        multiGreen: {
          dark: {
            DEFAULT: "#49a909",
          },
          mid: {
            DEFAULT: "#b4f200",
          },
          light: {
            DEFAULT: "#83f15e",
          },
          xLight: {
            DEFAULT: "#c8dfab",
          },
        },
        multiGray: {
          light: "#efefef",
          dark: "#1b1c1d",
        },
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [tailwindClipPath],
};
