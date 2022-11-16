/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        qiita: "#54C400",
        baseColor01: "#1f1f1f",
        baseColor02: "#4d4d4d",
        baseColor03: "#ebebeb",
        accentColor01: "#80a8ff",
        accentColor02: "#296dff",
      },
      fontFamily: {
        sans: [
          '"Noto Sans JP"',
          '"sans-serif"',
          '"Inter"',
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          '"Noto Sans"',
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
    },
  },
  plugins: [],
};
