import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bluetide: {
          blue: "#0ea5e9", // sky-500
          navy: "#0c4a6e", // sky-900
          silver: "#e5e7eb" // gray-200
        }
      }
    },
  },
  plugins: [],
};
export default config;
