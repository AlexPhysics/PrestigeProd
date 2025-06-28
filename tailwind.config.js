/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: '#2997FF',
        gray: {
          DEFAULT: '#86868b',
          100: '#94928d',
          200: '#afafaf',
          300: '#42424570',
        },
        zinc: '#101010',
        // Prestige Production Brand Colors
        'pp-charcoal': '#231F20',
        'pp-grey': '#7B7E7E',
        'pp-ice': '#EAEBEC',
        'pp-sage': '#9EB6A9',
        'pp-teal': '#205C57',
        // Tailwind aliases for brand colors
        teal: {
          400: '#14b8a6', // For focus states
          500: '#205C57', // Brand teal
        },
        sage: {
          500: '#9EB6A9', // Brand sage
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
    },
    plugins: [],
    animation: {
      'spin-slow': 'spin 12s linear infinite',
    },
  },
};
