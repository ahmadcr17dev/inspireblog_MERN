/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        prompt: ['Prompt', 'sans-serif'],
      },
      fontSize: {
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.90rem',
        '4xl': '3.0rem',
        '5xl': '3.5rem',
      },
    },
  },
  plugins: [],
}