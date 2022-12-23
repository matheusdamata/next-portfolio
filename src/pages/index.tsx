import Head from 'next/head'
import Image from 'next/image'

import {
  Button,
  Container,
  HomeAboutMe,
  HomeContent,
  HomeSideRight,
  LineAboutMe,
  ProfileImageContent,
} from '../styles/pages/home'

import ProfileImage from '../assets/profile-black.jpg'

export default function Home() {
  return (
    <>
      <Head>
        <title>Matheus da Mata - Portfólio</title>
      </Head>

      <Container>
        <HomeContent>
          <ProfileImageContent>
            <Image src={ProfileImage} alt="" />
          </ProfileImageContent>

          <HomeSideRight>
            <HomeAboutMe>
              <span>Olá! Eu sou</span>

              <h1>
                <strong>MATHEUS</strong> DA MATA
                <LineAboutMe />
              </h1>

              <p>
                Desenvolvedor <strong>Front-end</strong> apaixonado por criar
                aplicativos e experiências interativas na web.
              </p>

              <Button>Entrar em contato</Button>
            </HomeAboutMe>
          </HomeSideRight>
        </HomeContent>
      </Container>
    </>
  )
}
