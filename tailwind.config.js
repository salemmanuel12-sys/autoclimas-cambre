/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#e0eeff',
          200: '#c1dfff',
          300: '#a2cfff',
          400: '#0a3b5c',
          500: '#084b77',
          600: '#065b92',
          700: '#046bad',
          800: '#032e4a',
          900: '#001a2e',
        },
        accent: {
          50: '#e0f8ff',
          400: '#00bfff',
          500: '#00a8e8',
          600: '#0091d4',
          700: '#007acc',
        },
        warm: {
          400: '#ff8833',
          500: '#ff7a00',
          600: '#e56800',
          700: '#cc5500',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-blue': '0 0 20px rgba(0, 191, 255, 0.3)',
        'glow-orange': '0 0 20px rgba(255, 122, 0, 0.3)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },
    },
  },
  plugins: [],
}
