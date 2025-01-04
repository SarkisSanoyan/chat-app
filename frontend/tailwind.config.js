/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        customBlue: '#0866ff', 
      },
    },
  },
  plugins: [require("daisyui")],
}

