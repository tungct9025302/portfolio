import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // screens: {
      //   sm: "480px",
      //   md: "768px",
      //   lg: "976px",
      //   xl: "1440px",
      // },
      // fontFamily: {
      //   sans: ["Abril Fatface", "Arial"],
      //   helvetica: ["Helvetica Neue", "Helvetica"],
      // },
    },
  },
  plugins: [],
};
export default config;
