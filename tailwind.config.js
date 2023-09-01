/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'green': '#17ADA8',
        'btn-login': '#0D615E',
      },
      fontFamily: {
        custom: ['Open Sans Condensed', 'sans'],
      },
    },
  },
  plugins: [],
}
