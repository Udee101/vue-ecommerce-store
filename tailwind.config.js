/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
      colors: {
        'primary': '#3A408C',
        'primary-100': '#484fb1',
        'secondary': '#E2342D',
        'grey': '#F3F3F3'
      },
      maxWidth: {
        'site': '1200px'
      }
    },
  },
  plugins: [],
}
