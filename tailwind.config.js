/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      visibility: ['group-hover'],
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        blob: 'blob 10s infinite',
      },
      keyframes: {
        blob: {
          '0%, 100%': {
            transform: 'translate(0, 0) scale(1)',
          },
          '25%': {
            transform: 'translate(20px, -20px) scale(1)',
          },
          '50%': {
            transform: 'translate(0, 20px) scale(1)',
          },
          '75%': {
            transform: 'translate(-20px, -15px) scale(1)',
          },
        },
      },
    },
    screens: {
      sm: '640px',
      md: '800px',
      lg: '1200px',
    },
  },
  plugins: [],
};
