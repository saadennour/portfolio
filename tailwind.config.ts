import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        Grape: "#A981FE",
        Violet: "#DBA6F4",
        Lime: "#AAFF82",
        Citron: "#FFE597",
        Sky: "#82B4FF",
        LightSky: "#BFF0FF",
        Gray: "#282828",
        Peach: "#FEBD81",
        Grass: "#BFF4A6",
        Red: "#FF4646",
        Berry: "#FF9486",
        Pink: "#FDBEEF",
      },
      keyframes: {
        flashy: {
          "0%": {
            transform: "scale(0)",
          },
          "50%": {
            transform: "scale(1)",
          },
          "100%": {
            transform: "scale(0)",
          },
        },
        rflashy: {
          "0%": {
            transform: "scale(1)",
          },
          "50%": {
            transform: "scale(0)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
        line: {
          "0%": {
            transforn: "translateY(-100)",
            // width: "100%",
          },
          "100%": {
            transforn: "translateY(0)",
            // width: "100%",
          },
        },
      },
      animation: {
        flashy: "flashy 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        rflashy: "rflashy 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        line: "line 3s linear",
      },
    },
  },
  plugins: [require("tailwindcss-debug-screens")],
};
export default config;
