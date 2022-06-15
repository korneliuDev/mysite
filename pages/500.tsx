import Head from 'next/head'
import config from '../config'
import Title from '../components/title'
import Container from '../components/container'

export default function NotFoundPage() {
    return (
        <Container>
            <Head>
                <title>500 | {config.title}</title>
            </Head>

            <Title>500 | Server-side error occurred</Title>
        </Container>
    )
}
