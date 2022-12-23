import { styled } from '..'

export const Container = styled('div', {
  width: '100%',
  maxWidth: 1024,
  height: '100%',

  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',

  span: {
    fontSize: '1rem',
    color: '$pink900',
  },

  h1: {
    fontSize: '$2xl',
  },
})

export const Content = styled('div', {
  borderRadius: '0.75rem',

  textAlign: 'left',
  lineHeight: '1.5',

  padding: '2rem',
  margin: '2rem 0',

  backgroundColor: '$gray800',
  boxShadow: '10px 10px 19px #1c1e22, -10px -10px 19px #262a2e',

  a: {
    textDecoration: 'none',
    fontWeight: 'bold',
    color: '$pink900',
  },

  strong: {
    color: '$pink900',
  },
})
