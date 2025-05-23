'use client'

import { Box, Flex, useColorModeValue } from '@chakra-ui/react'
import { LinksHeader } from './LinksHeader'
import { motion } from 'framer-motion'
import Image from 'next/image'

const MotionBox = motion(Box)

export function Header() {
  const bgBlur = useColorModeValue(
    'rgba(255, 255, 255, 0.7)',
    'rgba(18, 18, 18, 0.6)',
  )
  const textColor = useColorModeValue('gray.900', 'gray.100')

  return (
    <Flex
      as="header"
      position="sticky"
      top="0"
      zIndex="100"
      backdropFilter="saturate(180%) blur(20px)"
      bg={bgBlur}
      boxShadow="sm"
      transition="all 0.3s ease-in-out"
      align="center"
      justify="center"
      h="70px"
      px={6}
    >
      <Flex
        align="center"
        justify="space-between"
        w="full"
        maxW="1000px"
        mx="auto"
        px={{ base: 4, md: 8 }}
      >
        <MotionBox
          fontSize={{ base: 'lg', md: 'md' }}
          fontWeight="bold"
          fontFamily="heading"
          color={textColor}
          _hover={{ opacity: 0.8 }}
          display="flex"
          alignItems="center"
          // gap={2}
        >
          <Image src="/logo.png" height={100} width={100} alt="Logo" />
        </MotionBox>

        <LinksHeader />
      </Flex>
    </Flex>
  )
}
