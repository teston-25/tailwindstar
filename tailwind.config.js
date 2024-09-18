module.exports = {
  content: [
    './src/**/*.{html,js,css}',   // Adjust this to match your project structure
    './public/**/*.html',
  ],
  theme: {
    screens: {
      'mob': '640px',
      'tab': '768px',
      'pc': '1024px',
      'desk': '1280px',
    },
    extend: {
      fontFamily: {
        gorg: ['Sofadi One', 'cursive'], // You may want to add a fallback font here
      },
    },
  },
  plugins: [],
}
