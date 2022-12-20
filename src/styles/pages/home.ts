import { keyframes, styled } from '..'

export const Container = styled('main', {
  width: '100%',
  maxWidth: 1024,

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
})

export const HomeContent = styled('div', {
  height: 'calc(100vh - 3rem)',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
})

export const ProfileImageBorderAnimate = keyframes({
  '0%': {
    backgroundColor: 'rgba(252,70,107,1)',
  },
  '50%': {
    backgroundColor: 'rgba(213,94,251,1)',
  },
  '75%': {
    backgroundColor: 'rgba(222,44,151,1)',
  },
  '100%': {
    backgroundColor: 'rgba(252,70,107,1)',
  },
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
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  borderRadius: '100%',

  boxShadow: '10px 10px 19px #1c1e22, -10px -10px 19px #262a2e',

  animation: `${ProfileImageBorderAnimate} 2s infinite`,

  img: {
    borderRadius: '50%',
    padding: '0.625rem',

    animation: `${ProfileImageAnimate} .5s ease`,
  },
})

export const HomeAboutMe = styled('div', {
  width: 550,

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',

  marginTop: '3.5rem',

  color: '$gray300',

  h1: {
    fontSize: '3rem',
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

export const Socials = styled('div', {
  width: '100%',
  height: 150,

  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-end',
  justifyContent: 'center',

  gap: '1rem',

  svg: {
    color: '$pink900',
  },

  'svg:hover': {
    transition: 'color .5s ease',
    color: '$purpleDark',

    transform: 'scale(1.1)',
  },
})
