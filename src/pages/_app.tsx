import Link from 'next/link'
import type { AppProps } from 'next/app'

import { globalStyles } from '../styles/global'
import { Container, Header, HeaderMenu, Socials } from '../styles/pages/app'

import { LinkedinLogo, GithubLogo, Envelope } from 'phosphor-react'
import { useRouter } from 'next/router'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return (
    <Container>
      <Header>
        <HeaderMenu>
          <Link href="/" className={router.pathname === '/' ? 'active' : ''}>
            Início
          </Link>
          <Link
            href="/sobre"
            className={router.pathname === '/sobre' ? 'active' : ''}
          >
            Sobre mim
          </Link>
          <Link
            href="/contato"
            className={router.pathname === '/contato' ? 'active' : ''}
          >
            Contato
          </Link>
        </HeaderMenu>
      </Header>

      <Component {...pageProps} />

      <footer>
        <p>Copyright 2022</p>

        <Socials>
          <LinkedinLogo size={24} weight="duotone" />
          <GithubLogo size={24} weight="duotone" />
          <Envelope size={24} weight="duotone" />
        </Socials>
      </footer>
    </Container>
  )
}
