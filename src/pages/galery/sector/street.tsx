import Image from 'next/image'

import { Header } from '@/components/Header'
import { Container } from '@/styles/pages/home'

import street from '../../../assets/galery/street.png'

import {
  Back,
  Banner,
  BoxImages,
  Content,
  Section,
} from '@/styles/pages/sector'

import {
  ball,
  emporio,
  feira,
  feiraVersion,
  feiraVersion2,
  littehouse,
  oldman,
  oldtimes,
  sax,
  work,
} from '@/assets/galery/street/index'

const images = [
  { id: 1, url: ball },
  { id: 2, url: emporio },
  { id: 3, url: feira },
  { id: 4, url: feiraVersion },
  { id: 5, url: feiraVersion2 },
  { id: 6, url: littehouse },
  { id: 7, url: oldman },
  { id: 8, url: oldtimes },
  { id: 9, url: sax },
  { id: 10, url: work },
]

export default function Street() {
  return (
    <Container>
      <Header />

      <Section>
        <Back href="/galery">Voltar</Back>

        <Content size={{ '@bp2': 'column' }}>
          <Banner src={street} alt="" size={{ '@bp2': 'column' }} />

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
