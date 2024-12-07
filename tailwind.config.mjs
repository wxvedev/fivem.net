/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        inter: "Inter Variable",
      },
      colors: {
        light: "#fff",
        main: "#111116",
        red: "#e60a53",
        orange: "#fe9040",
        green: "#44714c",
      },
    },
  },
  plugins: [],
};
