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
        justify="space-between"
        h="80px"
        maxW="800px"
        mx="auto"
        transition="background-color 0.2s"
      >
        <Box
          fontSize="xl"
          fontWeight="medium"
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
