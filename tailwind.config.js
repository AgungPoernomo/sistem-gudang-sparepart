/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{html,js}", 
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        satoria: {
          light: '#F3F8FF', 
          DEFAULT: '#2563EB', 
          dark: '#1E3A8A', 
          accent: '#3B82F6' 
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}