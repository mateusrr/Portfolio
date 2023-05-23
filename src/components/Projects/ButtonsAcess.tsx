import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Button } from '@chakra-ui/react'

interface ButtonAcess {
  href?: string
  children: string
}

const ButtonsAcess = ({ href, children }: ButtonAcess) => {
  return (
    <>
      <Button
        borderRadius="10px 15px"
        mb={{ base: 2, md: 20 }}
        bg="blue.500"
        color="gray.100"
        fontWeight="normal"
        _hover={{ bg: 'blue.600', color: 'white' }}
        as="a"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        size={{ base: 'xs', md: 'sm' }}
        // w="auto"
      >
        {children}
        <ExternalLinkIcon ml={1} fontSize={{ base: 'xs', md: 'sm' }} />
      </Button>
    </>
  )
}

export default ButtonsAcess
