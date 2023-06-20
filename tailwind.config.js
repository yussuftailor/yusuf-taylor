/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    colors: {
      // transparent: 'transparent',
      // current: 'currentColor',
      'brand': '#3E5DA8',
      'white' : '#ffffff',
      'brand-black' : '#212121',
      'brand-gray' : '#F9F6F2',
      'shopee' : '#EA501F',
      'tokopedia' : '#4A9E4B',
      'zalora' : '#1E1E1E',
      'blue-donker' :'#162A58',
    },
    extend: {
      fontFamily: {
        'philosopher': ['Philosopher']
      },
    },
  },
  plugins: [

    // require('@tailwindcss/aspect-ratio')
  ],
}

