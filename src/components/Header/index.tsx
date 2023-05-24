import { Box, Flex, Icon, IconButton, useColorMode } from '@chakra-ui/react'
import Link from 'next/link'
import { FaLaptopCode } from 'react-icons/fa'
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
        justify={{ base: 'center', md: 'space-between' }}
        direction={{ base: 'column', md: 'row' }}
        h="80px" // Altura responsiva para mobile e desktop
        maxW={{ base: '50%', md: '800px' }}
        m="auto"
        transition="background-color 0.2s"
      >
        <Box
          fontSize={{ base: 'md', md: 'xl' }} // Tamanho da fonte responsiva para mobile e desktop
          fontWeight="bold"
          display="flex"
          alignItems="center"
          gap={1}
        >
          <Link href="/">MR</Link>
          <Icon as={FaLaptopCode} color="orange.400" />
        </Box>

        <Flex align="center">
          <LinksHeader />

          <IconButton
            fontSize={{ base: 'sm', md: 'md' }}
            bg="transparent"
            aria-label="Toggle color mode"
            icon={
              colorMode === 'light' ? <Icon as={FiMoon} /> : <Icon as={FiSun} />
            }
            onClick={handleColorChange}
          />
        </Flex>
      </Flex>

      <Line />
    </>
  )
}
