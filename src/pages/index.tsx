import Head from 'next/head'
import Image from 'next/image'

import { AboutMe, Container, ProfileImageContent } from '../styles/pages/home'

import ProfileImage from '../assets/profile.svg'

export default function Home() {
  return (
    <>
      <Head>
        <title>Matheus da Mata - Portfólio</title>
      </Head>

      <Container>
        <ProfileImageContent>
          <Image src={ProfileImage} width={350} height={350} alt="" />
        </ProfileImageContent>

        <AboutMe>
          <span>Olá! Eu sou</span>
          <h1>
            <strong>MATHEUS</strong> DA MATA
          </h1>
          <p>
            Desenvolvedor <strong>Front-end</strong> apaixonado por criar
            aplicativos e experiências interativas na web.
          </p>
        </AboutMe>
      </Container>
    </>
  )
}
