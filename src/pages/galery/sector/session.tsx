import Image from 'next/image'

import { Header } from '@/components/Header'
import { Container } from '@/styles/pages/home'

import session from '../../../assets/galery/session-photo.png'

import {
  casal,
  eye,
  me,
  nailson,
  street,
  women,
  yan,
} from '@/assets/galery/session/index'

import {
  Banner,
  BoxImages,
  Section,
  Content,
  Back,
} from '@/styles/pages/sector'

const images = [
  { id: 1, url: casal },
  { id: 2, url: eye },
  { id: 3, url: me },
  { id: 4, url: nailson },
  { id: 5, url: women },
  { id: 6, url: yan },
  { id: 7, url: street },
]

export default function Manipulation() {
  return (
    <Container>
      <Header />

      <Section>
        <Back href="/galery">Voltar</Back>
        <Content size={{ '@bp2': 'column' }}>
          <Banner src={session} alt="" size={{ '@bp2': 'column' }} priority />

          <BoxImages>
            {images.map((image) => (
              <Image src={image.url} key={image.id} alt="" />
            ))}
          </BoxImages>
        </Content>
      </Section>
    </Container>
  )
}
