/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {scale: {
      '103': '1.03',
      '40': '0.4',
      '80':'0.8',
      '30':'0.3',
      '60':'0.6'

    }},
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
  variants: {
    scrollbar: ['rounded']
}
}
