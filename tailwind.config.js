/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: { 350: '#79b37a' },
        sea: { 350: '#79b3b0' }
      },
      spacing: {
        '35-percentage': '35.333333%',
        '16-percentage': '16.333333%'
      },
      fontSize: {
        xxs: ['0.62rem', '0.75rem']
      }
    },
  },
  plugins: [],
}

