/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        education: {
          light: '#E3F2FD',
          DEFAULT: '#2196F3',
          dark: '#1976D2',
        },
        law: {
          light: '#F3E5F5',
          DEFAULT: '#9C27B0',
          dark: '#7B1FA2',
        },
        commerce: {
          light: '#E8F5E9',
          DEFAULT: '#4CAF50',
          dark: '#388E3C',
        },
        humanities: {
          light: '#FFF3E0',
          DEFAULT: '#FF9800',
          dark: '#F57C00',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'pulse': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pattern-slide': 'patternSlide 20s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        patternSlide: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(60px, 60px)' },
        },
      },
    },
  },
  plugins: [],
}

