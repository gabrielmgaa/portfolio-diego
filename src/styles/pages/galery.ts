import { styled } from '..'

import Link from 'next/link'
import ImageNext from 'next/image'

export const Box = styled('section', {
  display: 'flex',
  flexWrap: 'nowrap',

  variants: {
    size: {
      md: {
        flexDirection: 'column',
      },
    },
  },
})

export const Sectores = styled(Link, {
  textAlign: 'center',
  overflow: 'hidden',
  position: 'relative',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  span: {
    position: 'absolute',
    color: '#fff',
    fontSize: '$md',
  },
})

export const Image = styled(ImageNext, {
  maxWidth: '500px',
  height: '100%',
  cursor: 'pointer',

  transition: 'transform 300ms ease',

  '&:hover': {
    transform: 'scale(1.1)',
  },

  variants: {
    size: {
      md: {
        maxWidth: 'none',
        width: '100%',
      },
    },
  },
})
