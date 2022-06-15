import Head from 'next/head'
import { Home } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import config from '../config'
import Title from '../components/title'
import Container from '../components/container'

export default function NotFoundPage() {
    return (
        <Container>
            <Head>
                <title>404 | {config.title}</title>
            </Head>

            <Title>404 | This page could not be found</Title>

            <IconButton color="inherit" href="/">
                <Home />
            </IconButton>

        </Container>
    )
}
