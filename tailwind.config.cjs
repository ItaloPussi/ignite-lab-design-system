/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
	  './src/**/*.tsx',
  ],
  theme: {
    extend: {
      colors: {
        'gray': {
          100: 'C4C4C4',
          200: '#E1E1E6',
          400: '#7C7C8A',
          800: '#202024',
          900: '#121214'
        },
        'cyan': {
          300: '#9BE1FB',
          500: '#81D8F7'
        }
      },
      fontFamily: {
        sans: 'Inter, sans-serif'
      },
      fontSize: {
        xs: 14,
        sm: 16,
        md: 18,
        lg: 20,
        xl: 24,
        '2xl': 32,
      }
    },
  },
  plugins: [],
}
