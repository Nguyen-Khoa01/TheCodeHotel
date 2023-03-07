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
      },
      height:{
        'height-slider':'906px'
      },
      margin: {
        '50px': '-50px',
      }
    },
  },
  plugins: [],
}