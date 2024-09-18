module.exports = {
  content: [
    './src/**/*.{html,js}',   // Adjust this to match your project structure
    './public/**/*.html',
  ],
  theme: {
    screens: {
      'mob': '640px',
      // => @media (min-width: 640px) { ... }

      'tab': '768px',
      // => @media (min-width: 768px) { ... }

      'pc': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desk': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {

      fontfamily:{
        gorg:['Sofadi One']
      }
    },
  },
  plugins: [],
}
