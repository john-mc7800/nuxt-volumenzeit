/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0c193a', // Define the primary color
        customPurple: '#735CFF',
        customGray: 'rgba(249, 250, 254, 0.8)',
        custombgGray: 'rgba(249, 250, 254)',
        customTextGray: '#939393',
        surface: {
          500: '#4a5568', // Add your desired color for surface-500
          // Add other shades if needed
          100: '#f7fafc',
          200: '#edf2f7',
        },
      },
      spacing: {
        'custom-top': 'calc(50% - 150px)',
      },
      screens: {
        sm375: '375px',
        sm350: '350px',
        sm425: '425px',
      },
      height: {
        'custom-calculated-height': 'calc(43.75rem + -6.25 * (100vw - 20rem) / 22.5)',
      },
      fontFamily: {
        sans: ['poppins', 'sans-serif'],
        spaceAge: ['Space Age'],
      },
      gridTemplateColumns: {
        '70/30': '70/28',
      },
    },
    
  },
  plugins: [],
}

