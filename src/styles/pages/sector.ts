import Image from 'next/image'
import { styled } from '..'
import Link from 'next/link'

export const Section = styled('section', {
  marginTop: '4rem',
})

export const Back = styled(Link, {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  color: '#000',

  fontSize: '$md',
})

export const Content = styled('div', {
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
        margin: 'auto',
      },
    },
  },
})

export const BoxImages = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit,minmax(23rem,1fr))',
  gridGap: '1rem',
  alignItems: 'center',
  justifyItems: 'center',

  overflow: 'hidden',
  overflowY: 'auto',

  maxWidth: '90rem',
  maxHeight: '60rem',
  padding: '0 1rem 3rem',

  img: {
    width: '100%',
    height: '46rem',
    objectFit: 'cover',
  },
})
