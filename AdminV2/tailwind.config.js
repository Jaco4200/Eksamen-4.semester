/** @type {import('tailwindcss').Config} */
module.exports = {
  // purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  content: ['./src/**/*.{html,js,vue}'],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      },

    extend: {
      keyframes: {
        borderani: {
          '0%, 100%': { 
            'border-color': '#fff' 
          },
          '50%': {'border-color': '#000'},
        }
      },
      boxShadow: {
        
      },
      width: {
      },
      height: {
        
      },
    },
    colors: {
      'amberred': '#B64C27',
      'oceanblue': '#5A75C9',
      'sandbeige': '#D7CFA9',
      'brown': '#4B2A23',
      'orange': '#E98D21',
      'white': '#FFF',
      'black': '#000000',
    },
    fontFamily: {
      primary: ['Roboto', 'sans-serif'],
      secondary: ['Open Sans', 'sans-serif']
    },
  },
  plugins: [],
};
