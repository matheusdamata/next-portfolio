import { styled } from '..'

export const Container = styled('div', {
  width: '100%',
  // maxWidth: 1600,
  height: '100vh',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  margin: '0 auto',
  padding: '0 5rem',

  footer: {
    width: '100%',
    height: 80,

    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
})

export const Header = styled('div', {
  width: '100%',
  height: 80,

  display: 'flex',
  flexDirection: 'row',
  alignContent: 'center',
  justifyContent: 'flex-end',
})

export const HeaderMenu = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignContent: 'center',
  justifyContent: 'center',

  gap: '2rem',

  a: {
    display: 'flex',
    alignItems: 'center',

    textDecoration: 'none',
    color: '$white',

    padding: '0 1rem',
  },

  '.active': {
    fontWeight: 'bold',
    backgroundColor: '$gray800',
  },
})

export const Socials = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-end',
  justifyContent: 'center',

  gap: '1rem',

  svg: {
    color: '$pink900',
    cursor: 'pointer',
  },

  'svg:hover': {
    transition: 'color .5s ease',
    color: '$purpleDark',

    transform: 'scale(1.1)',
  },
})
