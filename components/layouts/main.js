import Head from "next/head";
import Navbar from '../sections/navbar.js'
import { Container, Flex } from '@chakra-ui/react'
import Hero from "../sections/hero.js";

const Main = ({ children, router }) => {
    return(
        <Flex 
        direction="column"
        align="center"
        maxW={{ xl: "1200px" }}
        m="0 auto">
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                <title>Bart Tynior - portfolio</title>
                <meta name="author" content="Bart Tynior" />
            </Head>

            <Navbar path={router.asPath}/>
            <Hero />
            <Container pb={20}>
                {children}
            </Container>
        </Flex>
    )
}

export default Main