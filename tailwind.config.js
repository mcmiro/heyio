/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      fontWeight: {
        'headline-light': 200,
        'headline-normal': 400,
        'headline-medium': 500,
        'headline-bold': 700,
      },
      fontSize: {
        xxl: '10rem',
        '2xxl': '12rem',
      },
    },
  },
  plugins: [],
};
