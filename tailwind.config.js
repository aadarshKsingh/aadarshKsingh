/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'profile-bg': '#1A1D23',
        'profile-fg': '#E9F1F7'
      },
    },
  },
  plugins: [
    // require('@tailwindcss/line-clamp'),
  ],
}
