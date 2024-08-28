import flowbitePlugin from "flowbite/plugin";

import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
  ],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f3faf3",
          100: "#e4f4e5",
          200: "#cae8cc",
          300: "#a0d5a4",
          400: "#6eba75",
          500: "#4a9d52",
          600: "#39803f",
          700: "#35723b",
          800: "#29522e",
          900: "#234427",
          950: "#0f2412",
        },
      },
    },
  },

  plugins: [flowbitePlugin],
} as Config;
