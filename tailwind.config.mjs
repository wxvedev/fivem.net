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
        darkBlue: "#11131c",
        lightBlue: "#1d212e",
        red: "#e60a53",
        orange: "#"
      },
    },
  },
  plugins: [],
};
