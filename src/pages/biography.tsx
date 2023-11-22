import { Header } from '@/components/Header'

import {
  BoxContent,
  PageWrapper,
  Content,
  Bio,
  Info,
} from '@/styles/pages/biography'
import { Container } from '@/styles/pages/home'

import bio from '../../src/assets/biography/bio.png'

export default function Biography() {
  return (
    <PageWrapper size={{ '@bp1': 'cell' }}>
      <Container>
        <Header showLink={false} namePage="Biografia" />

        <BoxContent
          size={{ '@initial': 'default', '@bp2': 'md', '@bp1': 'sm' }}
        >
          <Content>
            <span>
              Diego Santiago - Capturando a Beleza do Mundo Através das Lentes
            </span>

            <p>
              Nascido em Baturité, interior do Ceará, um amante da fotografia.
              Com um ano de experiência, na área, cativando pessoas com sua
              habilidade em contar histórias e capturar momentos especiais
              através de suas lentes.
            </p>

            <p>
              Um amante da fotografia em todos os sentidos.Acredito que a
              fotografia não apenas congelar momentos no tempo, mas também conta
              histórias profundas, evoca emoções e cria uma conexão genuína
              entre o fotógrafo, o assunto e o espectador.
            </p>

            <p>
              Minha jornada na fotografia começou há um ano, mas minhas
              habilidades e dedicação incansável o levaram a mostrar as emoções
              através da arte. Seu portfólio diversificado abrange desde fotos
              urbanas até retratos que capturam a essência das pessoas. Busco
              constantemente aprimorar suas habilidades e aprender com cada
              disparo, demonstrando um compromisso com a evolução constante.
            </p>

            <p>
              Eu não sou apenas um fotógrafo; Sou um contador de histórias
              visual. Meu trabalho não apenas celebra a beleza do mundo que o
              rodeia, mas também destaca a humanidade, a cultura e a natureza
              que moldam sua identidade.
            </p>

            <p>
              Junte-se a minha jornada fotográfica enquanto eu continuo a
              explorar e compartilhar a beleza do mundo através de suas lentes.
            </p>

            <Info>
              <p>
                <span>Implementação do site:</span> Gabriel Magalhães
              </p>

              <p>
                <span>Web design:</span> Gabriel Magalhães e Diego Santiago
              </p>
            </Info>
          </Content>
        </BoxContent>
      </Container>

      <Bio src={bio} alt="Foto de perfil Diego Santiago" quality={100} />
    </PageWrapper>
  )
}
