import { Box, Flex, Text } from '@chakra-ui/react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import Line from '../components/Line'
import SocialMedia from '../components/SocialMedia'

export default function Footer() {
  return (
    <Box position="relative" color="white">
      <Line />

      <Flex
        h="70px"
        ml="2"
        fontSize="xs"
        flexDir="row"
        align="center"
        color="gray.500"
        justify="center"
        gap={2}
      >
        <Text mr={470}>© 2023 MRR. Todos os direitos reservados.</Text>

        <SocialMedia
          href="https://github.com/mateusrr"
          icon={FaGithub}
          ariaLabel="Github"
        />
        <SocialMedia
          href="https://linkedin.com/in/mateusrr"
          icon={FaLinkedin}
          ariaLabel="Linkedin"
        />
      </Flex>
    </Box>
  )
}
