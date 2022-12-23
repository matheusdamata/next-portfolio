import { Container, Content } from '../../styles/pages/aboutme'

export default function AboutMe() {
  return (
    <Container>
      <span>HISTÓRIA</span>
      <h1>Sobre mim</h1>

      <Content>
        <p>
          Meu nome é Matheus, moro em Goiânia - Goiás.
          <br />
          <br />
          Sou fundador da{' '}
          <a
            href="https://instagram.com/usesmilebaby"
            target="_blank"
            rel="noreferrer"
          >
            @usesmilebaby
          </a>
          , amante da tecnologia e inovação!
          <br />
          <br />
          Por gostar muito de criar algo, aos 15 anos inicei minha empresa
          pegando um produto já existente e melhorando ele em alguns aspectos,
          com o objetivo em oferecer o menor custo com a melhor qualidade
          possível para o B2B.
          <br />
          <br />
          Aos 10 anos de idade fiz meu primeiro &quot;Hello World&quot; em HTML,
          e me apaixonei por programação, sou um desenvolvedor entusiasta,
          autodidata, que adora inovar, aprender e criar algo novo. Atualmente
          realizo projetos (pessoais) utilizando ReactJS, NextJS, React Native,
          HTML, CSS, JavaScript e TypeScript.
          <br />
          <br />
          Quando não estou trabalhando, estou codando algum projeto pessoal,
          criando conteúdo na{' '}
          <a
            href="http://twitch.tv/matheusdamatag"
            target="_blank"
            rel="noreferrer"
          >
            Twitch
          </a>{' '}
          ou estudando na <strong>@rocketseat.</strong>
        </p>
      </Content>
    </Container>
  )
}
