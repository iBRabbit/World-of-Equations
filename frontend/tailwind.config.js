/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Added this path for source files
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f97316", // Tailwind's default primary color
      },
    },
  },
  plugins: [
    require("daisyui"), // DaisyUI plugin
  ],
  daisyui: {
    themes: [
      // "light", // Default light theme
      {
        mytheme: {
          primary: "#f17023",

          secondary: "#f5a623",

          accent: "#333333",

          neutral: "#999999",

          "base-100": "#f8fcff",

          info: "#e5e7eb",

          success: "#2dd4bf",

          warning: "#ffcc33",

          error: "#ff5a5f",
        },
      },
    ],
  },
};
