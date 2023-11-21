import { styled } from '..'

import Link from 'next/link'

export const Box = styled('section', {
  display: 'flex',
  flexWrap: 'nowrap',
  // [`@media (max-width:`]
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

  img: {
    maxWidth: '500px',
    height: '100%',
    cursor: 'pointer',

    transition: 'transform 300ms ease',

    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
})
