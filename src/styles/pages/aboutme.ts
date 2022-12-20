import { styled } from '..'

export const Container = styled('div', {
  width: '100%',
  maxWidth: 1024,
  height: '100vh',

  display: 'flex',
  flexDirection: 'column',

  span: {
    fontSize: '1rem',
    color: '$pink900',
  },

  h1: {
    fontSize: '$2xl',
  },
})
