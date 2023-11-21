import { keyframes, styled } from '@stitches/react'

import * as Dialog from '@radix-ui/react-dialog'

// transitions

const slideIn = keyframes({
  from: { transform: 'translateX(calc(100% + 5rem))' },
  to: { transform: 'translateX(0)' },
})

const slideOut = keyframes({
  from: { transform: 'translateX(0)' },
  to: { transform: 'translateX(calc(100% + 5rem))' },
})

// Components

export const Trigger = styled(Dialog.Trigger, {
  all: 'unset',

  cursor: 'pointer',
})

export const Overlay = styled(Dialog.Overlay, {
  position: 'fixed',
  inset: 0,
  backgroundColor: 'rgba(0,0,0,0.5)',
})

export const Content = styled(Dialog.Content, {
  display: 'flex',
  flexDirection: 'column',
  fontFamily: 'Tirayuna',
  zIndex: '2',
  overflowY: 'auto',

  width: '500px',
  backgroundColor: '#fff',

  position: 'fixed',
  top: 0,
  right: 0,
  padding: '2rem',
  height: '100vh',

  '&[data-state="open"]': {
    animation: `${slideIn} 400ms ease-out`,
  },

  '&[data-state="closed"]': {
    animation: `${slideOut} 400ms ease-out`,
  },

  [`@media (max-width: 1024px)`]: {
    width: '400px',
  },

  [`@media (max-width: 690px)`]: {
    width: '350px',
  },

  [`@media (max-width: 500px)`]: {
    width: '100%',
  },
})

export const Close = styled(Dialog.Close, {
  all: 'unset',
  fontSize: '$lg',
  alignSelf: 'flex-end',

  cursor: 'pointer',
})

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  height: '100%',
})

export const NavList = styled('div', {
  flex: '1',
  display: 'flex',
  alignItems: 'center',
})

export const List = styled('li', {
  listStyle: 'none',
  color: '#525252',
  fontSize: '$md',
  textAlign: 'center',

  marginTop: '2rem',

  '&::after': {
    content: '',

    display: 'flex',
    width: '20px',
    height: '1px',
    backgroundColor: '#525252',

    margin: 'auto',
    marginTop: '2rem',
  },

  a: {
    transition: 'all 500ms',
  },

  'a:hover': {
    color: '#dd2a2a',
  },
})

export const SocialMedias = styled('div', {
  ul: {
    display: 'flex',
    gap: '1.5rem',
  },
})

export const SocialMediaList = styled('li', {
  listStyle: 'none',
})
