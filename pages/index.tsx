import { GitHub, Reddit } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import Head from 'next/head'
import { links } from '../config'
import AvatarSvg from '../public/avatar.svg'
import Discord from '../components/icons/discord'
import GitLab from '../components/icons/gitlab'
import RoundImage from '../components/round-image'
import Footer from '../components/footer'
import Avatar from '../components/avatar'
import Description from '../components/description'
import Title from '../components/title'
import Container from '../components/container'

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

      <Description>
        I&apos;m a self-taught programmer. I use Arch Linux and I like open source software.
      </Description>

      <Footer>
        {/* GitHub */}
        <IconButton color="inherit" href={links.github} target="_blank">
          <GitHub />
        </IconButton>

        {/* GitLab */}
        <IconButton color="inherit" href={links.gitlab} target="_blank">
          <GitLab />
        </IconButton>

        {/* Discord */}
        <IconButton color="inherit" href={links.discord} target="_blank">
          <Discord />
        </IconButton>

        {/* Reddit */}
        <IconButton color="inherit" href={links.reddit} target="_blank">
          <Reddit />
        </IconButton>
      </Footer>

    </Container>
  )
}
