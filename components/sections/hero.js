import {
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react"
import { motion } from 'framer-motion'

const variants = {
  hidden: { opacity: 0, x: 0, y: 0 },
  enter: { opacity: 1, x: 0, y: 20 },
  exit: { opacity: 0, x: -0, y: 0 }
}

const Hero = () => {

  return (
    <motion.article
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.4, type: 'easeInOut' }}
      style={{ position: 'relative' }}
    >
      <Flex
        align="center"
        justify={{ base: "center"}}
        minH="100vh"
        minW="100%"
      >
        <Stack
          spacing={4}
          align={"center"}
        >
          <Heading
            as="h1"
            size="xl"
            fontWeight="bold"
            color="primary.800"
            textAlign={"center"}
          >
            Welcome to my page!
          </Heading>
          <Heading
            as="h2"
            size="md"
            color="primary.800"
            opacity="0.8"
            fontWeight="normal"
            lineHeight={1.5}
            textAlign={"center"}
          >
            Nice
          </Heading>
          <Text
            fontSize="xs"
            mt={2}
            textAlign="center"
            color="primary.800"
            opacity="0.6"
          >
            No credit card required.
          </Text>
        </Stack>
      </Flex>
    </motion.article>
  )
}

export default Hero