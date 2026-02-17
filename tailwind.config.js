/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sb-navy': '#253551',
        'sb-gold': '#9f8347',
      },
    },
  },
  plugins: [],
}
