const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: {
    enabled: true,
    content: [
      './src/**/*.js',
      './src/**/*.jsx',
      './src/**/*.html'
    ],
  },
  theme: {
    fontFamily: {
      sans: ['Inter var', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        indigo: '#5c6ac4',
        indigoLight: '#b3bcf5',
        indigoDark: '#202e78',
        blue: '#303f9f',
        blueLight: '#3f51b5',
        blueDark: '#1a237e',
        red: '#e91e62',
        redLight: '#ec4079',
        redDark: '#62155e'
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui')({
      layout: 'sidebar'
    })
  ]
}
