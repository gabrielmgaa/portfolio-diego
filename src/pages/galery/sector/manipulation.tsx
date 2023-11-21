import Image from 'next/image'

import { Header } from '@/components/Header'
import { Container } from '@/styles/pages/home'

import manipulation from '@/assets/galery/image-manipulation.png'

import {
  barbie,
  firstClass,
  heinz,
  life,
  netflix,
  sherlock,
  snake,
  yogurt,
} from '@/assets/galery/manipulation/index'

import { Banner, BoxImages, Section } from '@/styles/pages/sector'

const images = [
  { id: 1, url: barbie },
  { id: 2, url: firstClass },
  { id: 3, url: heinz },
  { id: 4, url: life },
  { id: 5, url: netflix },
  { id: 6, url: sherlock },
  { id: 7, url: snake },
  { id: 8, url: yogurt },
]

export default function Manipulation() {
  return (
    <Container>
      <Header />

      <Section size={{ '@bp2': 'column' }}>
        <Banner
          src={manipulation}
          alt=""
          size={{ '@bp2': 'column' }}
          priority
        />

        <BoxImages>
          {images.map((image) => (
            <Image src={image.url} key={image.id} alt="" />
          ))}
        </BoxImages>
      </Section>
    </Container>
  )
}
