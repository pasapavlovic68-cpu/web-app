/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'flowpay-gradient': 'linear-gradient(180deg, rgba(245,246,250,0.9) 0%, rgba(224,226,231,0.96) 100%)',
      },
      colors: {
        flowpay: {
          green: '#34C759',
          'green-light': '#4CD964',
          slate: '#F4F5F7',
        },
      },
      boxShadow: {
        flowpay: '0 12px 24px rgba(52, 199, 89, 0.35)',
        capsule: '0 24px 60px rgba(15, 23, 42, 0.12)',
      },
      animation: {
        'fade-slide-in': 'fadeSlideIn 0.9s ease-out forwards',
      },
      keyframes: {
        fadeSlideIn: {
          '0%': { opacity: 0, transform: 'translateY(-24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
