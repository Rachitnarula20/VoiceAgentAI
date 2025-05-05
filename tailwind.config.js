/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cyan: {
          400: '#00FFFF',
          500: '#00E5E5',
          600: '#00CCCC',
        },
        emerald: {
          400: '#00FF88',
          500: '#00E57A',
          600: '#00CC6B',
        },
        violet: {
          400: '#C084FC',
          500: '#AC68FA',
          600: '#9747FF',
        },
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
    },
  },
  plugins: [],
};