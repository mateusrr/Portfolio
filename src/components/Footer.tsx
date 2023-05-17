import { Flex, Text } from '@chakra-ui/react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import Line from './Line'
import SocialMedia from './SocialMedia'
import BoxColor from './BoxColor'

export default function Footer() {
  return (
    <BoxColor position="relative">
      <Line />

      <Flex
        h="70px"
        ml="2"
        fontSize="xs"
        flexDir="row"
        align="center"
        justify="center"
        gap={2}
      >
        <Text mr={470}>© 2023 &#60;MR&#62; Todos os direitos reservados.</Text>

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
    </BoxColor>
  )
}
