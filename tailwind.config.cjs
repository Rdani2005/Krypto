/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'text-color': '#ffffff',
      'light-color': '#A4D9D9',
      'main-color': '#8787D9',
      'secundary-color': '#5151C6',
      'bg-color': '#000235',
    },
    fontFamily: {
      sans: ['Outfit', 'sans-serif'],
      serif: ['Roboto', 'sans-serif'],
    },
    
    fontSize: {
      'header': '5.438rem',
      'subhead': '3.563rem',
      'trihead': '1.25rem',
      'paragraph': '1.125rem'
    },

    extend: {},
  },
  plugins: [],
}