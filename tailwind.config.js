/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors:{
        background:" hsl(180, 52%, 96%)",
        'filter-tablets':"hsl(180, 31%, 95%)",
        'Dark-Cyan':"hsl(180, 29%, 50%)",
        'Dark-grayish-cyan': "hsl(180, 8%, 52%)",
        'Very-Dark-Grayish-Cyan':"hsl(180, 14%, 20%)"
      },
    },
  },
  plugins: [],
}