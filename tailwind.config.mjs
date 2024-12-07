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
        aqua: "#07baae",
        blue: "#0785bd",
        yellow: "#a2ba0b",
        lua: "#000080",
        csharp: "#68217A",
        javascript: "#F7DF1E"

      },
    },
  },
  plugins: [],
};
