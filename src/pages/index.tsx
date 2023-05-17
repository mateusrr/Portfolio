import React from 'react'
import { Box, Flex, Heading, Text, useColorMode } from '@chakra-ui/react'
import Header from '@/components/Header/index'
import { motion } from 'framer-motion'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import SocialMedia from '../components/SocialMedia'

const Motion = motion(Box)
export default function Home() {
  const { colorMode } = useColorMode()

  return (
    <Box
      bg={colorMode === 'light' ? 'white' : 'blackAlpha.900'}
      transition="background-color 0.2s"
      color={colorMode === 'light' ? 'black' : 'gray.100'}
    >
      <Header />

      <Flex
        direction="column"
        align="center"
        justify="center"
        height="calc(100vh - 82px)"
      >
        <Motion
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          align="left"
          justify="center"
        >
          <Box fontWeight="medium">
            <Heading as="h2" size="xl" fontWeight="normal">
              Olá! Eu sou,
            </Heading>
            <Heading as="h1" size="4xl">
              Mateus Rocha.
            </Heading>
            <Text fontSize="md" letterSpacing={2} mt={5} fontWeight="normal">
              Desenvolvedor Front-End.
            </Text>
          </Box>
          <Flex mt={5} gap={2} align="center">
            <SocialMedia
              href="https://github.com/mateusrr"
              icon={BsGithub}
              ariaLabel="Github"
            />
            <SocialMedia
              href="https://linkedin.com/in/mateusrr"
              icon={BsLinkedin}
              ariaLabel="Linkedin"
            />
          </Flex>
        </Motion>
      </Flex>
    </Box>
  )
}
