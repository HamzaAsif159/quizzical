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
        'btn': '#4D5B9E',
        'border': '#DBDEF0',
        'selected': '#D6DBF5',
        'correct': '#94D7A2',
        'incorrect': '#F8BCBC'
      },
    },
  },
  plugins: [],
}
