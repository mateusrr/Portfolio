import React from 'react'
import { Box, Flex, Heading, Text, Image } from '@chakra-ui/react'
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
        direction={{ base: 'column', md: 'row' }}
        justify="center"
        alignItems="center"
        h="calc(100vh - 100px)"
      >
        <MotionEffect>
          <Flex gap={{ base: '0', md: '10px' }}>
            <Box m="auto">
              <Heading as="h2" size="md" fontWeight="normal">
                Olá! Eu sou,
              </Heading>
              <Heading
                as="h1"
                fontSize={{ base: '70px', md: '100px' }}
                fontWeight="bold"
                lineHeight={1}
              >
                Mateus
                <span style={{ color: '#3182CE', fontSize: '3rem' }}>.</span>
              </Heading>
              <Text fontSize="md" fontWeight="normal">
                Desenvolvedor Front-End.
              </Text>

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
            </Box>

            <Image
              src="/programmer.svg"
              alt="Foto do Perfil"
              w={{ base: '0', md: '350px' }}
            />
          </Flex>
        </MotionEffect>
        <ParticlesBackground />
      </Flex>
    </>
  )
}
