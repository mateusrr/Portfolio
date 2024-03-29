import { Box, Flex, Icon } from '@chakra-ui/react'
import Link from 'next/link'
import { FaLaptopCode } from 'react-icons/fa'
import { Line } from '../Line'
import { LinksHeader } from './LinksHeader'

export function Header() {
  return (
    <>
      <Flex
        as="header"
        align="center"
        justify="space-between"
        direction="row"
        h="80px"
        maxW={{ base: '80%', md: '800px' }}
        m="auto"
        transition="background-color 0.2s"
      >
        <Box
          fontSize={{ base: 'md', md: 'xl' }}
          fontWeight="bold"
          display="flex"
          alignItems="center"
          gap={1}
        >
          <Link href="/">MR</Link>
          <Icon as={FaLaptopCode} color="blue.600" />
        </Box>

        <LinksHeader />
      </Flex>

      <Line />
    </>
  )
}
