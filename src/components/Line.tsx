import { Box } from '@chakra-ui/react'

export const Line = () => (
  <Box
    display="flex"
    justifyContent="center"
    maxW={{ base: '85%', md: '840px' }}
    borderBottom="2px solid"
    color="blue.500"
    margin="auto"
  />
)
