module.exports = {
  content: ['./src/**/*.{html,js,tsx,ts}', './node_modules/tw-elements/dist/js/**/*.js'],
  plugins: [
    require('tw-elements/dist/plugin')
  ],
  theme: {
    extend: {
      colors: {
        lightBlack: '#5c5c5c',
      },
    },
    fontFamily: {
      'roboto': ['roboto', 'sans-serif'],
      'dancing': ['Dancing Script', 'sans-serif']
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1140px',
    },
  }
}