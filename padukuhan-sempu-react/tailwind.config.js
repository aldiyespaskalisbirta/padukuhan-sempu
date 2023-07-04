/* eslint-env node */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["light", "dark", "cupcake", "garden"],
  },
  plugins: [
    require("daisyui"),
    require("flowbite/plugin"),
    require("tailwind-scrollbar-hide"),
  ],
};
