import { createStitches } from '@stitches/react'

export const { styled, getCssText, globalCss } = createStitches({
  theme: {
    fontSizes: {
      sm: '1.6rem',
      md: '2.4rem',
      lg: '3.4rem',
    },
  },
  media: {
    bp1: '(max-width: 600px)',
    bp2: '(max-width: 780px)',
    bp3: '(max-width: 900px)',
  },
})
