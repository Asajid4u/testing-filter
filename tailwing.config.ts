import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // 👈 this is the main fix (was 'media' before)
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Optional — add your custom theme colors if needed
        primary: "#F76C6C",
        secondary: "#1E293B",
      },
    },
  },
  plugins: [],
};

export default config;
