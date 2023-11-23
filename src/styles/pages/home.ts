import { styled } from '..'

export const Container = styled('div', {
  width: '90%',
  margin: 'auto',
  maxWidth: '1500px',
})

export const Content = styled('div', {
  marginTop: '8rem',

  maxWidth: '1000px',
})

export const TitleImage = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontSize: '$md',
  fontWeight: '300',

  marginBottom: '2rem',
})

export const Box = styled('div', {
  margin: '4rem 0',

  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
})

export const Bolder = styled('span', {
  fontWeight: '500',

  variants: {
    style: {
      italic: {
        fontStyle: 'italic',
        fontWeight: '400',
      },
    },
  },
})

export const Text = styled('p', {
  fontSize: '$md',
  fontWeight: '300',

  variants: {
    size: {
      sm: {
        fontSize: '$md',
      },
    },
    style: {
      italic: {
        fontWeight: '200',
        fontSize: '$lg',
      },
    },
  },
})
