// module.exports = {
//   purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
//   darkMode: false,
//   theme: {
//     extend: {},
//   },
//   variants: {
//     extend: {},
//   },
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//   },
// };






/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
