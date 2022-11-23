/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'main-100': '#7836CB',
        'main-200': '#6c31b7',
        'main-300': '#602ba2',
        'main-400': '#54268e',
        'main-500': '#48207a',
        'main-600': '#3c1b66',
        'main-700': '#301651',
        'main-800': '#24103d',
        'main-900': '#180b29',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
