import {
  Box,
  Flex,
  Heading,
} from "@chakra-ui/react"
import styled from "@emotion/styled"

const PrimaryColor = styled.span`
    color: #fcd733;
    background-image: -webkit-gradient( linear, left top, right top, from(#fc327c), to(#f430c3) );
    background-image: linear-gradient(to right, #fc327c, #f430c3);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

const SecondaryColor = styled.span`
    color: #156fff;
    background-image: -webkit-gradient( linear, left top, right top, from(#156fff), to(#07b8ff) );
    background-image: linear-gradient(to right, #156fff, #07b8ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

const Hero = () => {
  return (
    <Flex
        align="center"
        justify={{ base: "center"}}
        minH="100vh"
        minW="100%"
      >
        <Box 
        align="left"
        w="50%"
        textAlign="left"
        pl={10}>
          <Heading>
            <PrimaryColor>Designer</PrimaryColor> & <SecondaryColor>Front-End Developer</SecondaryColor> from The Netherlands
          </Heading>
        </Box>
        <Box
        align="center"
        w="50%">
          Right Side
        </Box>
    </Flex>
  )
}

export default Hero