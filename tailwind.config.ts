// tailwind.config.ts
import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        burgundy: {
          50: '#fdf4f5',
          100: '#fbe8ea',
          200: '#f6d5da',
          300: '#eeb3bc',
          400: '#e38697',
          500: '#d45975',
          600: '#bd3a5c',
          700: '#9f2d4c',
          800: '#862844',
          900: '#72263f',
        },
        cream: {
          50: '#fefdfb',
          100: '#fdfaf5',
          200: '#fbf4e9',
          300: '#f8ebdb',
          400: '#f4dfc9',
          500: '#efd3b7',
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
    animate,
  ],
};

export default config;
