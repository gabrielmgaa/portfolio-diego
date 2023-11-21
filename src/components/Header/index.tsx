import Link from 'next/link'

import { Menu } from '../Menu'

import diego from '@/assets/avatar/diego.png'

import {
  Header as HeaderStyle,
  Image,
  PageTitle,
} from '../../styles/components/header'

interface HeaderProps {
  namePage?: string
  showLink?: boolean
}

export function Header({
  namePage = 'Diego Santiago',
  showLink = true,
}: HeaderProps) {
  return (
    <HeaderStyle>
      {showLink && (
        <Link href="/">
          <Image src={diego} width={90} height={90} alt="" />
        </Link>
      )}

      <PageTitle>{namePage}</PageTitle>

      <Menu />
    </HeaderStyle>
  )
}
