'use client'

import { Box, Flex, useColorMode, useColorModeValue } from '@chakra-ui/react'
import Link from 'next/link'
import { LinksHeader } from './LinksHeader'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

export function Header() {
  const { colorMode } = useColorMode()

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
      justify="space-between"
      h="70px"
      w="full"
      px={6}
      mx="auto"
    >
      <MotionBox
        fontSize={{ base: 'lg', md: 'md' }}
        fontWeight="800"
        fontFamily="heading"
        color={textColor}
        _hover={{ opacity: 0.8 }}
        display="flex"
        alignItems="center"
        gap={2}
      >
        <Link href="/">Mateus Rocha</Link>
      </MotionBox>

      <LinksHeader />
    </Flex>
  )
}
