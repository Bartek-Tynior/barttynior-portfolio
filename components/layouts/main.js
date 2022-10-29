import Head from "next/head";
import Navbar from '../sections/navbar.js'
import { Box } from '@chakra-ui/react'
import Footer from "../sections/footer.js";

const Main = ({ children }) => {
    return(
        <Box as="main" pb={10}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                <title>Bart Tynior - portfolio</title>
                <meta name="author" content="Bart Tynior" />
            </Head>

            <Navbar/>

            <Box p="0px 30px 0px">
                {children}
            </Box>

            <Footer/>
        </Box>
    )
}

export default Main