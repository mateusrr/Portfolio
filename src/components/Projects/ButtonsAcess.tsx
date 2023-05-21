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
        mb={{ base: 4, md: 20 }}
        bg="blue.500"
        color="gray.100"
        fontWeight="normal"
        _hover={{ bg: 'blue.600', color: 'white' }}
        as="a"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        size="sm"
      >
        {children} <ExternalLinkIcon ml={1} fontSize="sm" />
      </Button>
    </>
  )
}

export default ButtonsAcess
