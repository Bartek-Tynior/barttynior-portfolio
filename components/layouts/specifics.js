import { Box } from '@chakra-ui/react'
import Head from 'next/head'
import { GridStyle } from '../sections/grid'

const Layout = ({ children, title }) => {
  const t = `${title}`
  return (
      <Box pt={20}>
        {title && (
          <Head>
            <title>{t}</title>
          </Head>
        )}
        
        {children}

        <GridStyle />
      </Box>
  )
}

export default Layout