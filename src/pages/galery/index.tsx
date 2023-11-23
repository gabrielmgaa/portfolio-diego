import { Header } from '@/components/Header'
import { Container } from '@/styles/pages/home'

import session from '../../assets/galery/session-photo.png'
import manipulation from '../../assets/galery/image-manipulation.png'
import street from '../../assets/galery/street.png'

import { Box, Image, Sectores } from '@/styles/pages/galery'

export default function Galery() {
  return (
    <Container>
      <Header />

      <Box size={{ '@bp3': 'md' }}>
        <Sectores href="/galery/sector/manipulation" prefetch>
          <Image
            quality={100}
            src={manipulation}
            alt=""
            size={{ '@bp3': 'md' }}
          />
          <span>Manipulação de Imagem</span>
        </Sectores>
        <Sectores href="/galery/sector/session">
          <Image quality={100} src={session} alt="" size={{ '@bp3': 'md' }} />
          <span>Sessão de Fotos</span>
        </Sectores>
        <Sectores href="/galery/sector/street">
          <Image quality={100} src={street} alt="" size={{ '@bp3': 'md' }} />
          <span>Fotografia Urbana</span>
        </Sectores>
      </Box>
    </Container>
  )
}
