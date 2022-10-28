/** @type {import('tailwindcss').Config} */
module.exports = {
  content:[
    "./src/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
],
  theme: {
    fontFamily: {
      'karla': ['Karla', 'sans-serif'],
      'inter': ['Inter', 'sans-serif']
    },
    extend: {
      colors: {
        'main': '#F5F7FB',
        'primary': '#293264',
        'btn': '#4D5B9E'
      },
    },
  },
  plugins: [],
}
