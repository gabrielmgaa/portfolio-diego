import Image from 'next/image'

import { styled } from '..'

export const PageWrapper = styled('div', {
  height: '100vh',
  backgroundColor: '#232323',
  color: '#fff',
  position: 'relative',

  variants: {
    size: {
      cell: {
        height: 'auto',
      },
    },
  },
})

export const BoxContent = styled('section', {
  textAlign: 'justify',

  variants: {
    size: {
      sm: {
        width: '100%',
      },
      md: {
        width: '85%',
      },
      default: {
        marginTop: '5rem',
        width: '55%',
      },
    },
  },
})

export const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  fontSize: '2rem',
  fontWeight: '300',
  zIndex: '2',
  position: 'relative',

  p: {
    color: '#dddddd',
  },

  span: {
    fontWeight: '600',
  },
})

export const Bio = styled(Image, {
  position: 'absolute',
  bottom: '0',
  right: '0',

  width: '500px',
  height: 'auto',
})

export const Info = styled('div', {
  margin: '1.5rem 0',
})
