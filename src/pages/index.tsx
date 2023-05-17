import React from 'react'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import Header from '@/components/Header/index'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import SocialMedia from '../components/SocialMedia'
import Footer from '@/components/Footer'
import BoxColor from '@/components/BoxColor'
import MotionEffect from '@/components/MotionEffect'

export default function Home() {
  return (
    <BoxColor>
      <Header />

      <Flex
        direction="column"
        align="center"
        justify="center"
        height="calc(100vh - 82px)"
      >
        <MotionEffect align="left">
          <Box fontWeight="medium">
            <Heading as="h2" size="xl" fontWeight="normal">
              Olá! Eu sou,
            </Heading>
            <Heading as="h1" m="0.275rem 0" size="4xl">
              Mateus Rocha
              <span style={{ color: 'blue', fontSize: '3rem' }}>.</span>
            </Heading>
            <Text fontSize="md" letterSpacing={2} fontWeight="normal">
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
      </Flex>

      <Footer />
    </BoxColor>
  )
}
