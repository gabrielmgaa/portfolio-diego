import Link from 'next/link'

import {
  Overlay,
  Trigger,
  Content,
  Close,
  Container,
  NavList,
  List,
  SocialMedias,
  SocialMediaList,
} from '@/styles/components/menu'
import {
  BehanceLogo,
  InstagramLogo,
  LinkedinLogo,
  List as PhosphorList,
  WhatsappLogo,
} from '@phosphor-icons/react'

import * as Dialog from '@radix-ui/react-dialog'

export function Menu() {
  return (
    <Dialog.Root>
      <Trigger>
        <PhosphorList size={35} />
      </Trigger>

      <Dialog.Portal>
        <Overlay />

        <Content>
          <Close>X</Close>

          <Container>
            <NavList>
              <ul>
                <List>
                  <Link href="/galery">Fotografias</Link>
                </List>
                <List>
                  <Link href="/">Home</Link>
                </List>
                <List>
                  <Link href="/galery">Agenda</Link>
                </List>
                <List>
                  <Link href="/biography">Biografia</Link>
                </List>
              </ul>
            </NavList>

            <SocialMedias>
              <ul>
                <SocialMediaList>
                  <a
                    href="https://www.instagram.com/ds_fotografoo/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <InstagramLogo size={30} color="#525252" />
                  </a>
                </SocialMediaList>
                <SocialMediaList>
                  <a
                    href="https://www.linkedin.com/in/diego-santiago-11a141249/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <LinkedinLogo size={30} color="#525252" />
                  </a>
                </SocialMediaList>
                <SocialMediaList>
                  <BehanceLogo size={30} color="#525252" />
                </SocialMediaList>
                <SocialMediaList>
                  <WhatsappLogo size={30} color="#525252" />
                </SocialMediaList>
              </ul>
            </SocialMedias>
          </Container>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
