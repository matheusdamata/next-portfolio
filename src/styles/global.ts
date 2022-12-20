import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  html: {
    scrollBehavior: 'smooth',
    '-webkit-font-smoothing': 'antialiased',
  },

  ':focus': {
    outline: 0,
  },

  body: {
    backgroundColor: '$gray800',
    color: '$gray100',
    'webkit-font-smoothing': 'antialiased',
  },

  'body, input, textarea, button': {
    fontFamily: 'Montserrat',
    fontSize: '1rem',
    fontWeight: 400,
  },

  button: {
    cursor: 'pointer',
  },

  '::-webkit-scrollbar': {
    width: 10,
  },

  '::-webkit-scrollbar-track': {
    background: '$gray700',
    borderRadius: 10,
  },

  '::-webkit-scrollbar-thumb': {
    background: '$gray900',
    borderRadius: 10,
  },

  '::-webkit-scrollbar-thumb:hover': {
    background: '$purpleDark',
  },
})
