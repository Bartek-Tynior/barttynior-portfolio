// import Link from 'next/link'
import { Box, useColorModeValue } from '@chakra-ui/react'
import Layout from '../components/layouts/article'

const Home = () => {
    return(
        <Layout >
                <Box
                    borderRadius="lg"
                    textAlign="center"
                    bg={useColorModeValue('black', 'whiteAlpha.200')}
                    css={{ backdropFilter: 'blur(10px)' }}
                >
                    Hey ]
                </Box>
        </Layout>
    )
}

export default Home