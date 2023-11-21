import Image from 'next/image'
import { styled } from '..'

export const Section = styled('section', {
  marginTop: '4rem',

  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  gap: '2rem',

  variants: {
    size: {
      column: {
        flexDirection: 'column',
      },
    },
  },
})

export const Banner = styled(Image, {
  maxWidth: '40rem',
  height: 'auto',

  variants: {
    size: {
      column: {
        maxWidth: '33rem',
        margin: 'auto',
      },
    },
  },
})

export const BoxImages = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit,minmax(24.5rem,1fr))',
  gridGap: '1rem',
  alignItems: 'center',
  justifyItems: 'center',

  overflow: 'hidden',
  overflowY: 'auto',

  maxWidth: '95rem',
  maxHeight: '60rem',
  padding: '0 1rem 3rem',

  img: {
    width: '100%',
    height: '40rem',
    objectFit: 'cover',
  },
})
