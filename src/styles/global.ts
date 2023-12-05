import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
  },

  html: {
    fontSize: '62.5%',
  },

  'body,input,textarea': {
    fontFamily: '$pradock',
    fontSize: '$sm',
  },

  a: {
    textDecoration: 'none',
    color: '#525252',
  },

  [`@media (max-width: 500px)`]: {
    html: {
      fontSize: '57%',
    },
  },

  [`@media (max-width: 400px)`]: {
    html: {
      fontSize: '52%',
    },
  },

  '@font-face': {
    fontFamily: 'Padrock Sans',
    src: 'local("../../fonts/Pradock Regular.otf") format("otf")',
  },
})
