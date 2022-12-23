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
