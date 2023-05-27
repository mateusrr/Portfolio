import React from 'react'
import { Box, Flex, Image, Text } from '@chakra-ui/react'
import Header from '@/components/Header/index'
import SocialMedia from '../components/SocialMedia'
import MotionEffect from '@/components/MotionEffect'

export default function Home() {
  return (
    <>
      <Header />
      <MotionEffect>
        <Flex
          justify="center"
          alignItems="center"
          align="center"
          h="85vh"
          gap={{ base: '', md: '7' }}
          direction={{ base: 'column', md: 'row' }}
        >
          <Box fontSize={{ base: '4rem', md: '5rem' }} lineHeight={1}>
            <Text fontWeight="extrabold">Mateus</Text>
            <Text fontWeight="extrabold">
              Rocha
              <span style={{ color: '#DD6B20', fontSize: '3rem' }}>.</span>
            </Text>

            <Flex m={{ base: '', md: '5px' }} align="left">
              <Text
                fontSize={{ base: 'sm', md: 'md' }}
                fontWeight="medium"
                mr={5}
              >
                Desenvolvedor Front-End
              </Text>
            </Flex>
            <SocialMedia />
          </Box>
          <Image
            src="/programming.svg"
            alt={''}
            w={{ base: '225px', md: '450px' }}
          />
        </Flex>
      </MotionEffect>
    </>
  )
}
