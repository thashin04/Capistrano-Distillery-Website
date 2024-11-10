/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkGreen: '#6A7339',
        lightGreen: '#BBC191',
        lightTan: '#E0C9AC',
        offWhite: '#F0ECE1',
        lightBrown: '#724F54',
        darkBrown: '#382828' 
      },
      fontFamily: {
        gabarito: ['Gabarito', 'sans-serif'],
        dongle: ['Dongle', 'serif']
      }
    },
  },
  plugins: [],
}