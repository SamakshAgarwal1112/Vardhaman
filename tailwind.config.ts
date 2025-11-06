// tailwind.config.ts
import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Existing palette
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
          950: '#4a1829',
        },
        cream: {
          50: '#fefdfb',
          100: '#fdfaf5',
          200: '#fbf4e9',
          300: '#f8ebdb',
          400: '#f4dfc9',
          500: '#efd3b7',
        },
        gold: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        champagne: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
        },

        // 🆕 Add semantic color tokens
        border: "#E5E7EB",
        background: "#FFFFFF",
        foreground: "#1A202C",

        // Optional: dark mode variants
        "background-dark": "#1A202C",
        "foreground-dark": "#F9FAFB",
        "border-dark": "#374151",
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
