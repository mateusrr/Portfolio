import { Flex, Heading, Icon, IconButton, useColorMode } from '@chakra-ui/react'
import Link from 'next/link'
import { FiMoon, FiSun } from 'react-icons/fi'
import Line from '../Line'
import LinksHeader from './LinksHeader'

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode()

  const handleColorChange = () => {
    toggleColorMode()
  }

  return (
    <>
      <Flex
        as="header"
        align="center"
        justify="space-between"
        h="80px"
        maxW="800px"
        mx="auto"
        transition="background-color 0.2s"
      >
        <Heading as="h1" size="md">
          <Link href="/">MRR</Link>
        </Heading>

        <Flex align="center">
          <LinksHeader />

          <IconButton
            bg={colorMode === 'light' ? 'blue.800' : 'yellow.500'}
            aria-label="Toggle color mode"
            icon={
              colorMode === 'light' ? <Icon as={FiMoon} /> : <Icon as={FiSun} />
            }
            onClick={handleColorChange}
            ml={4}
          />
        </Flex>
      </Flex>

      <Line />
    </>
  )
}
