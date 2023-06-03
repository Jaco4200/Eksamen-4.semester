/** @type {import('tailwindcss').Config} */
module.exports = {
  // purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  content: ['./src/**/*.{html,js,vue}'],
  theme: {
    screens: {

      'xs': '350px',

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
      '3xl': '1920px',
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
      backgroundImage: {
        'testies2': "url('/src/assets/billeder/booklokaleoptimeret.png')",
        'testies3': "url('/src/assets/billeder/booklokalealpha.png')",
        'testies': "url('/src/assets/billeder/kundeudtalelsev2.png')",
        'testiesmobil': "url('/src/assets/billeder/kundeudtalelsemobil.png')",
        'kalender': "url('/src/assets/billeder/kalenderbanner.svg)",
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
      'oceanblue': '#45749F',
      'sandbeige': '#D7CFA9',
      'brown': '#4B2A23',
      'orange': '#E98D21',
      'whitebronx': '#F9F9F9',
      'black': '#1D1D1D',
      'dangerred': '#F32013',
      'successgreen': '#4BB543',
      'darkblue': '#325575',
      'footer': '#211F2B',
      'darken': '#747474',
      'white': '#FFF'
    },
    fontFamily: {
      primary: ['poppins', 'sans-serif'],
      secondary: ['Open Sans', 'sans-serif']
    },
  },
  plugins: [],
};
