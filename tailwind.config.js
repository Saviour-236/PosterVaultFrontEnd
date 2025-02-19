/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '550px',// end point of large width mobiles
      'md': '1000px',//end point of tablet
    },
    extend: {
      fontFamily: {
        sans: ['Comfortaa', 'serif'],
      },
    },
  },
  plugins: [],
}

