import { Box, useColorMode } from '@chakra-ui/react'

const BoxColor = ({ children }: any) => {
  const { colorMode } = useColorMode()

  return (
    <Box
      bg={colorMode === 'light' ? 'white' : 'gray.800'}
      transition="background-color 0.2s"
      color={colorMode === 'light' ? 'gray.800' : 'gray.100'}
    >
      {children}
    </Box>
  )
}

export default BoxColor
