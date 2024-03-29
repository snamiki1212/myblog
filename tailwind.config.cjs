/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: ["pastel"],
  },
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
