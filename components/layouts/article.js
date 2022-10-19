import Head from 'next/head'
import { GridStyle } from '../sections/grid'

const Layout = ({ children, title }) => {
  const t = `${title}`
  return (
      <>
        {title && (
          <Head>
            <title>{t}</title>
          </Head>
        )}
        {children}

        <GridStyle />
      </>
  )
}

export default Layout