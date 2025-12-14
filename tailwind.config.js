/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/index.html",
    "./src/App.tsx",
    "./src/index.tsx",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8B4513', // SaddleBrown
        secondary: '#CD853F', // Peru
        accent: '#A52A2A', // Brown/Red
        bg: '#FDF5E6', // OldLace
        surface: '#FFFaf0',
        text: '#333333',
      },
      fontFamily: {
        serif: ['"Noto Serif SC"', 'SimSun', 'serif'],
        sans: ['"Noto Sans SC"', 'Microsoft YaHei', 'sans-serif'],
      },
      backgroundImage: {
        'pattern': "url('https://www.transparenttextures.com/patterns/chinese-style.png')",
      }
    },
  },
  plugins: [],
}

