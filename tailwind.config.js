/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'normal_pk': '#735259',
      },
      fontFamily:{
        inter1: ['Inter'],
        roboto1: ['Roboto']
      }
    },
  },
  plugins: [],
}

