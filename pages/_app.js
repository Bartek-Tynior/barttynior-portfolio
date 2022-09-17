import { ChakraProvider } from '@chakra-ui/react'
import MainLayout from '../components/layouts/main'
import Fonts from '../lib/Fonts'
import theme from '../lib/theme'

const App = ({ Component, pageProps, router}) => {
    return(
        <ChakraProvider theme={theme}>
            <Fonts />
            <MainLayout router={router}>
                <Component {...pageProps} key={router.route} />
            </MainLayout>
        </ChakraProvider>
    )
}

export default App