module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {

      spacing: {
 
        '100': '45rem',

      }
     }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
