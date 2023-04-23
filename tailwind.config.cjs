module.exports = {
  content: [
    './src/**/*.{html,js,svelte,ts}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'] 
      },
      colors: {
        primary: '#1F7DB2',
        secondary: '#0951AB',
        white: '#FFFFFF',
        black: '#000000'
      }
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
