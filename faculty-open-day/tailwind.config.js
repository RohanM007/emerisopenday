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
          light: '#F3E5F5',
          DEFAULT: '#9C27B0',
          dark: '#7B1FA2',
        },
        law: {
          light: '#E3F2FD',
          DEFAULT: '#2196F3',
          dark: '#1976D2',
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
          burgundy: '#8B1538',
          gold: '#D4AF37',
          cream: '#F4F1DE',
          forest: '#2D6A4F',
          coral: '#E76F51',
          purple: '#6B46C1',
        },
      },
      fontFamily: {
        'playfair': ['"Playfair Display"', 'serif'],
        'crimson': ['"Crimson Text"', 'serif'],
        'quicksand': ['Quicksand', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'pulse': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pattern-slide': 'patternSlide 20s linear infinite',
        'typewriter': 'typewriter 2s steps(40) forwards',
        'page-turn': 'pageTurn 0.8s ease-in-out forwards',
        'ink-splatter': 'inkSplatter 0.6s ease-out forwards',
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
        typewriter: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        pageTurn: {
          '0%': { transform: 'rotateY(0deg)', opacity: '1' },
          '50%': { transform: 'rotateY(90deg)', opacity: '0.5' },
          '100%': { transform: 'rotateY(0deg)', opacity: '1' },
        },
        inkSplatter: {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '50%': { transform: 'scale(1.2)', opacity: '0.8' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

