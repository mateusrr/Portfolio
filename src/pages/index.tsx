import React from 'react'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import Header from '@/components/Header/index'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import SocialMedia from '../components/SocialMedia'
import MotionEffect from '@/components/MotionEffect'
import ParticlesBackground from '../components/ParticlesBackground'
// ajustar responsive mobile home

export default function Home() {
  return (
    <>
      <Header />
      <Flex
        direction="column"
        align="center"
        justify="center"
        h="calc(100vh - 100px)"
      >
        <MotionEffect>
          <Box fontWeight="medium">
            <Heading as="h2" size={{ base: '', md: 'xl' }} fontWeight="normal">
              Olá! Eu sou,
            </Heading>
            <Heading as="h1" m="0.275rem 0" size={{ base: '3xl', md: '4xl' }}>
              Mateus Rocha
              <span style={{ color: '#3182CE', fontSize: '3rem' }}>.</span>
            </Heading>
            <Text
              fontSize={{ base: 'sm', md: 'md' }}
              letterSpacing={2}
              fontWeight="normal"
            >
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
        </MotionEffect>
        <ParticlesBackground />
      </Flex>
    </>
  )
}
