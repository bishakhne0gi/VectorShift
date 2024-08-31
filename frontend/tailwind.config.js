/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark_grey: "#181622",
        dark_purple: "#52297A",
        light_purple: "#BF93EC",
        highlight_purple: "#260F3C",
        white: "#FFFFFF",
        highlight_grey: "#1E293B",
        grey: "#262334",
      },
      fontFamily: {
        space_grotesk: ["Space Grotesk", "sans-serif"],
      },
      keyframes: {
        "color-shift": {
          "0%, 100%": { color: "#BF93EC" },
          "50%": { color: "#FFFFFF" },
        },
      },
      animation: {
        "color-shift": "color-shift 2s ease-in-out infinite",
      },
    },
  },

  plugins: [],
};
