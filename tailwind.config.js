/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Righteous:['Righteous'],
        Roboto:['Roboto'],
        Sassy:['Sassy+Frass']
      },
      fontSize:{
        xSmall:'6px',
        small:'10px'

      },
    },
  },
  plugins: [],
}