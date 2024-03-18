/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./files/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        notosans: ["NotoSans", "sans-serif"],
      },

    },
  },
  plugins: [],
}

