import type { Config } from "tailwindcss";

const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  darkMode: ["class"],
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
        Green: "#3BC88C",
        Peach: "#FEBD81",
        Grass: "#BFF4A6",
        Red: "#FF4646",
        Berry: "#FF9486",
        Pink: "#FDBEEF",
        background: "#000000",
        foreground: "#F5F5F5",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", ...defaultTheme.fontFamily.sans],
        mono: ["var(--font-space-mono)", ...defaultTheme.fontFamily.mono],
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
          },
          "100%": {
            transforn: "translateY(0)",
          },
        },
      },
      animation: {
        flashy: "flashy 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        rflashy: "rflashy 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        line: "line 3s linear",
      },
      theme: {
        screens: {
          xs: "320px",
          ...defaultTheme.screens,
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [
    require("tailwindcss-debug-screens"),
    require("tailwindcss-animate"),
  ],
};
export default config;
