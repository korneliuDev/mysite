import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import AvatarSvg from '../static/avatar.svg'

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.primary};
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
`

const Title = styled.h1`
  font-size: 50px;
`

const Avatar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 3.5cm;
  margin-left: auto;
  margin-right: auto;
`

const RoundImage = styled(Image)`
  border-radius: 50%;
`

export default function Home() {
  return (
    <Container>
      <Head>
        <title>MedzikUser</title>
      </Head>

      <Avatar>
        <RoundImage src={AvatarSvg} alt="my profile picture" />
      </Avatar>

      <Title>Hello, I&apos;m Oskar</Title>

    </Container>
  )
}
