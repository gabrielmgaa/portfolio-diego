import { Header } from '@/components/Header'
import { Slider } from '@/components/Slider'

import { ArrowLeft, ArrowRight } from '@phosphor-icons/react'

import {
  Bolder,
  Box,
  Container,
  Content,
  Text,
  TitleImage,
} from '@/styles/pages/home'

import 'keen-slider/keen-slider.min.css'

export default function Home() {
  return (
    <Container>
      <Header />
      <Content>
        <TitleImage>
          <ArrowLeft />

          <span>Fotografia | Principais trabalhos</span>

          <ArrowRight />
        </TitleImage>

        <Slider />

        <Box>
          <div>
            <Text>
              <Bolder>Foto:</Bolder> Diego Santiago
            </Text>
            <Text>
              <Bolder>Edição:</Bolder> Diego Santiago
            </Text>
          </div>
          <Text style="italic" size={{ '@bp1': 'sm' }}>
            Fotos para extrair do mundo um{' '}
            <Bolder style="italic">ângulo</Bolder> diferente!
          </Text>
        </Box>
      </Content>
    </Container>
  )
}
