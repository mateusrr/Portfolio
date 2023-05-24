import React from 'react'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import Header from '@/components/Header/index'
import SocialMedia from '../components/SocialMedia'
import MotionEffect from '@/components/MotionEffect'

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
          <Flex>
            <Box m="auto">
              <Heading
                as="h1"
                fontSize={{ base: '75px', md: '100px' }}
                fontWeight="bold"
                lineHeight={1}
              >
                Mateus Rocha
                <span style={{ color: '#3182CE', fontSize: '3rem' }}>.</span>
              </Heading>

              <Flex
                m={{ base: '', md: '5px' }}
                // direction={{ base: 'column', md: 'row' }}
                justify="center"
                align="center"
              >
                <Text
                  fontSize={{ base: 'md', md: 'lg' }}
                  fontWeight="medium"
                  color="blue.500"
                  mr={5}
                >
                  Desenvolvedor Front-End
                </Text>
              </Flex>
              <SocialMedia />
            </Box>
          </Flex>
        </MotionEffect>
      </Flex>
    </>
  )
}
