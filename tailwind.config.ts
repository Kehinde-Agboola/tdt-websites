import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        yellow: "#FFB400",
      },
      backgroundImage: {
        hero: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('./../assets/home/home-hero.png')",
        payment: "url('./../assets/home/impact.png')",
        navbg:
          "linear-gradient(90deg, rgba(53,53,53,1) 0%, rgba(127,127,127,1) 35%, rgba(255,255,255,1) 100%);",
        mobile:
          "linear-gradient(to right, rgba(53,53,53,1) 17%, rgba(127,127,127,1) 60%, rgba(255,255,255,1) 76%);",
      },
    },
  },
  plugins: [],
};
export default config;
