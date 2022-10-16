import Head from "next/head";
import Navbar from '../sections/navbar.js'
import { Box } from '@chakra-ui/react'
import Hero from "../sections/hero.js";
import Footer from "../sections/footer.js";

const Main = ({ children }) => {
    return(
        <Box as="main">
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                <title>Bart Tynior - portfolio</title>
                <meta name="author" content="Bart Tynior" />
            </Head>

            <Navbar/>

            <Box p="0px 30px 20px">
                <Hero />
                {children}
                <Footer/>
            </Box>
        </Box>
    )
}

export default Main