// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      lineHeight: {
        'extra-loose': '2.5',
        'leading-13': '3rem',
        'leading-14': '56px',
      },
      height: {
        'height-slider': '906px'
      },
      margin: {
        '50px': '-50px',
      },
      color: {
        'border-color': '#d9d9d9',
        'border-primary-hover': '#4096ff',
      }
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    },
    screens: {
      'md': { 'max': '767px' },
      // => @media (min-width: 768px and max-width: 1023px) { ... }
      '2md': { 'max': '991px' },

      'lg': { 'min': '768px', 'max': '991px' },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }
      '2lg': { 'min': '768px', 'max': '1300px' },

      'xl': { 'max': '1400px' },

      '2xl': { 'min': '992px', 'max': '1300px' },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }


    }
  },
  plugins: [],
}