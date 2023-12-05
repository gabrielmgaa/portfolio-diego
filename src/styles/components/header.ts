import { styled } from '..'

import ImageNext from 'next/image'

export const Header = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1.5rem 0',
  img: {
    borderRadius: '50%',
  },

  button: {
    lineHeight: 0,
  },
})

export const PageTitle = styled('span', {
  fontWeight: '700',
  fontSize: '2.4rem',
})

export const Image = styled(ImageNext, {
  width: '9rem',
  height: '100%',
})
