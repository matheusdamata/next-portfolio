import Head from 'next/head'
import Image from 'next/image'

import {
  Container,
  HomeAboutMe,
  HomeContent,
  ProfileImageContent,
  Socials,
} from '../styles/pages/home'

import ProfileImage from '../assets/profile.svg'
import { AboutMe } from './aboutme'
import { DividingLine } from '../components/DividingLine'
import { LinkedinLogo, GithubLogo, Envelope } from 'phosphor-react'

export default function Home() {
  return (
    <>
      <Head>
        <title>Matheus da Mata - Portfólio</title>
      </Head>

      <Container>
        <HomeContent>
          <ProfileImageContent>
            <Image src={ProfileImage} width={350} height={350} alt="" />
          </ProfileImageContent>

          <HomeAboutMe>
            <span>Olá! Eu sou</span>

            <h1>
              <strong>MATHEUS</strong> DA MATA
            </h1>

            <p>
              Desenvolvedor <strong>Front-end</strong> apaixonado por criar
              aplicativos e experiências interativas na web.
            </p>
          </HomeAboutMe>

          <Socials>
            <LinkedinLogo  size={32} weight="duotone" />
            <GithubLogo size={32} weight="duotone" />
            <Envelope size={32} weight="duotone" />
          </Socials>
        </HomeContent>

        <DividingLine />

        <AboutMe />
      </Container>
    </>
  )
}
