import NextLink from 'next/link'
import {
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react'
import ThemeToggleButton from '../utils/themeButton.js'
// fff
const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
  return (
    <NextLink href={href} passHref scroll={false}>
      <Link
        p={2}
        bg={active ? 'grassTeal' : undefined}
        color={active ? '#202023' : inactiveColor}
        target={target}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = props => {
  const { path } = props

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      css={{ backdropFilter: 'blur(30px)' }}
      zIndex={2}
      {...props}
    >
        <Flex m={3}>
          <Heading as="h1" fontSize={25} letterSpacing={'tighter'}>
            <span>Bart</span>
            <br/>
            <span>Tynior.</span>
          </Heading>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          justifyContent="right"
          align="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
            <LinkItem href="/works" path={path}>
            Works
          </LinkItem>
          <LinkItem href="/about" path={path}>
            About
          </LinkItem>
          <LinkItem href="/posts" path={path}>
            Posts
          </LinkItem>
          <ThemeToggleButton />
        </Stack>
        </Flex>
    </Box>
  )
}

export default Navbar