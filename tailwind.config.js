/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      body: ['Figtree', 'ui-sans-serif', 'system-ui']
    },
    extend: {
      colors: {
        ashby: {
          50: '#F8F7FC',
          100: '#E3E3FF',
          700: '#5246D8'
        }
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
