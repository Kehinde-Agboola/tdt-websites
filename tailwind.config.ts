import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{ts,tsx,js,jsx}",
    "./src/components/**/*.{ts,tsx,js,jsx}",
    "./src/app/**/*.{ts,tsx,js,jsx}",
    "./src/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-raleway)", "Arial", "Helvetica", "sans-serif"],
        heading: [
          "var(--font-open-sans)",
          "Arial",
          "Helvetica",
          "sans-serif",
        ],
      },
      colors: {
        yellow: "#FFB400",
        // Keep only essential colors
        primary: {
          DEFAULT: "#FFB400",
          foreground: "#000000",
        },
        secondary: {
          DEFAULT: "#000000",
          foreground: "#FFFFFF",
        },
        destructive: {
          DEFAULT: "#ef4444",
          foreground: "#ffffff",
        },
        border: "#d1d5db",
        input: "#d1d5db",
        ring: "#FFB400",
      },
      backgroundImage: {
        // Fixed paths - use absolute paths from public folder
        hero: "url('/assets/home/home-hero.png')",
        whero:
          "linear-gradient(to left, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/assets/who/whero.png')",
        payment: "url('/assets/home/impact.png')",
        community: "url('/assets/home/community.png')",
        navbg:
          "linear-gradient(90deg, rgba(53,53,53,1) 0%, rgba(127,127,127,1) 35%, rgba(255,255,255,1) 100%)",
        mobile:
          "linear-gradient(to right, rgba(53,53,53,1) 17%, rgba(127,127,127,1) 60%, rgba(255,255,255,1) 76%)",
        /** Same asset as `.scholar` in global.css — scholars band */
        scholar: "url('/assets/.scholarship/scholarsbg.png')",
      },
      borderRadius: {
        lg: "0.5rem",
        md: "0.375rem",
        sm: "0.25rem",
      },
      // Added animation configurations for login page
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
