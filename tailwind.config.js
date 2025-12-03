/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
    './**/.css',
    './**/.js'
  ],
  theme: {
    extend: {
      colors: {
        polarBlue: {
          50:  '#E8eaF1',
          200: '#d1ddec',
          500: '#5782B7',
          900: '#0E1620',
        },
      },
    },
  },
  plugins: [],
}
