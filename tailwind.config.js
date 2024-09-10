/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      colors: {
        'yellow-primary': '#FECA2F',
        'blue-primary': '#190F40',
      },
    },
    fontFamily: {
      'BebasNeue': ['BebasNeue', 'sans-serif'],
      'Poppins': ['Poppins', 'sans-serif'],
    },
  },
  plugins: [],
}
