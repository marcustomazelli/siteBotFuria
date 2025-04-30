/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFFFFF', // Changed from gold to white
        secondary: '#1F2937',
        accent: '#10B981',
        dark: {
          DEFAULT: '#0A0A0A',
          100: '#171717',
          200: '#1F1F1F',
          300: '#2D2D2D',
        }
      },
      fontFamily: {
        sans: ['var(--font-ibm-plex-mono)'],
      },
    },
  },
  plugins: [],
} 