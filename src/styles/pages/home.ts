import { keyframes, styled } from '..'

export const Container = styled('main', {
  width: '100%',
  maxWidth: 1024,
  height: '100vh',

  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
})

export const ProfileImageBorderAnimate = keyframes({
  '0%': {
    backgroundColor: 'rgba(252,70,107,1)',
  },
  '50%': {
    backgroundColor: 'rgba(63,94,251,1)',
  },
  '75%': {
    backgroundColor: 'rgba(222,44,151,1)',
  },
  '100%': {
    backgroundColor: 'rgba(252,70,107,1)',
  },
})

export const ProfileImageContent = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  borderRadius: '100%',

  boxShadow: '0px 2px 35px -7px rgba(0,0,0,0.9)',

  animation: `${ProfileImageBorderAnimate} 2s infinite`,

  img: {
    borderRadius: '50%',
    marginRight: '0.5rem',
    marginBottom: '0.5rem',
  },
})

export const AboutMe = styled('div', {
  width: 550,

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',

  marginLeft: '4rem',

  color: '$gray300',

  h1: {
    fontSize: '2.5rem',

    marginTop: '1rem',
  },

  span: {
    fontSize: '$md',
  },

  strong: {
    backgroundImage:
      '-webkit-linear-gradient(45deg, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)',
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',
  },

  p: {
    fontSize: '$md',

    marginTop: '1rem',
  },
})
