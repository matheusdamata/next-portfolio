import { keyframes, styled } from '..'

export const Container = styled('main', {
  width: '100%',
  height: '100%',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  backgroundColor: '$gray800',
})

export const HomeContent = styled('div', {
  width: '100%',
  height: '100%',

  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
})

export const ProfileImageAnimate = keyframes({
  '0%': {
    transform: 'scaleX(0)',
    transformOrigin: 'bottom right',
  },
  '100%': {
    transform: 'scaleX(1)',
    transformOrigin: 'bottom right',
  },
})

export const ProfileImageContent = styled('div', {
  width: '45rem',
  height: '100%',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  backgroundColor: '$purpleDark',

  img: {
    width: '45rem',
    height: '100%',
    objectFit: 'cover',
  },
})

export const HomeSideRight = styled('div', {
  height: '100%',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
})

export const HomeAboutMe = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',

  marginLeft: '7.5rem',

  color: '$gray300',

  h1: {
    fontSize: '4.5rem',
    fontWeight: 700,

    marginTop: '1rem',
  },

  span: {
    fontSize: '$md',
  },

  strong: {
    color: '$pink900',
  },

  p: {
    fontSize: '$md',

    marginTop: '1rem',
  },
})

export const LineAboutMe = styled('div', {
  width: '6.25rem',
  height: '5px',

  margin: '1rem 0',

  background: '$pink900',
})

export const Button = styled('button', {
  height: '3.75rem',

  border: 0,

  fontWeight: 'bold',
  color: '$gray100',

  padding: '0 2rem',
  marginTop: '2rem',

  background: '$pink900',
})
