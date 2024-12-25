import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "#8E9196",
        input: "#8E9196",
        ring: "#8E9196",
        background: "#FFFFFF",
        foreground: "#8E9196",
        primary: {
          DEFAULT: "#8E9196",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#8E9196",
          foreground: "#FFFFFF",
        },
        destructive: {
          DEFAULT: "#8E9196",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#8E9196",
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#8E9196",
          foreground: "#FFFFFF",
        },
        popover: {
          DEFAULT: "#FFFFFF",
          foreground: "#8E9196",
        },
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#8E9196",
        },
      },
      keyframes: {
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;