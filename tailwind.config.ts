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
        hero: "url('./../../public/assets/home/home-hero.png')",
        whero:
          "linear-gradient(to left, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('./../../public/assets/who/whero.png')",
        payment: "url('./../../public/assets/home/impact.png')",
        community: "url('./../../public/assets/home/community.png')",
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
