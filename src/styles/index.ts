import { createStitches } from '@stitches/react'

import localFont from 'next/font/local'

const pradock = localFont({
  src: [
    {
      path: '../../fonts/Pradock Regular.otf',
      weight: '400',
    },
    {
      path: '../../fonts/Pradock Bold.otf',
      weight: '700',
    },
    {
      path: '../../fonts/Pradock Thin.otf',
      weight: '200',
    },
    {
      path: '../../fonts/Pradock Light.otf',
      weight: '400',
    },
  ],
})
const tirayuna = localFont({
  src: '../../fonts/Tirayuna.ttf',
})

export const { styled, getCssText, globalCss, keyframes } = createStitches({
  theme: {
    fontSizes: {
      sm: '1.6rem',
      md: '2.4rem',
      lg: '3.4rem',
    },
    fonts: {
      pradock: `${pradock.style.fontFamily}, sans-serif`,
      tirayuna: `${tirayuna.style.fontFamily}, sans-serif`,
    },
  },
  media: {
    bp1: '(max-width: 600px)',
    bp2: '(max-width: 780px)',
    bp3: '(max-width: 900px)',
  },
})
