/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    extend: {
      colors: {
        teally: '#48BCA0',
        dominant: '#197948',
        mrgray: '#e8e8e8',
        'sale-red': '#e53e3e'
      },
      spacing: {
        tiny: '0.15rem',
        '72': '18rem',
        '80': '20rem',
        '100': '25rem',
        '120': '30rem',
        '140': '35rem',
        '160': '40rem',
        '180': '45rem'
      }
    }
  },
  variants: {
    borderColor: ['responsive', 'hover', 'focus', 'group-hover']
  },
  plugins: []
}
