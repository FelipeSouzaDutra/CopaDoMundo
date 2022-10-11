/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "lincoln-green": "#14591d",
      "sap-green": "#57822b",
      "olive-drab": "#789632",
      "citron": "#99aa38",
      "light-yellow": "#e1e289",
      "independence": "#4d5061",
      "glaucous": "#5c80bc",
      "light-steel-blue": "#a3b7cd",
      "light-gray": "#c6d2d6",
      "platinum": "#d8e0da",
      "alabaster": "#e1e1dc",
    },

    fontFamily:{
      "sans": ["Product Sans Regular","Helvetica","Arial"]
     },


    extend: {
      spacing: {
        '97': '80rem',
        '100': '32rem',
      },

      backgroundImage: {
        'time-abraçado': "url('/img/time-junto.jpg')",
      }
      
    },
  },
  plugins: [],
}
