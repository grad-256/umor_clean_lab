module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    borderColor: (theme) => ({
      default: theme('colors.gray.300', 'currentColor'),
      primary: '#35478C',
      darken: '#16193B',
      lawguebase: '#F6F4EF',
      lawguebg: '#FCFBF9',
      white: '#ffffff',
      centerborder: '#CECECE',
      gray: '#EDEDED',
      secondary: '#4E7AC7',
      darkgray: '#A8A8A8',
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
