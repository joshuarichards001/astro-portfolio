/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        accent: "rgb(136, 58, 234)",
        accentLight: "rgb(224, 204, 250)",
        accentDark: "rgb(49, 10, 101)",
      },
    },
  },
  plugins: [],
};
