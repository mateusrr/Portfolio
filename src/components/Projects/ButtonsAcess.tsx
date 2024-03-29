import { Button } from '@chakra-ui/react'

// Component usado para os buttons de Deploy e Repository
interface ButtonAcess {
  href?: string
  children: string
}

export const ButtonsAcess = ({ href, children }: ButtonAcess) => {
  return (
    <>
      <Button
        _hover={{ bg: 'blue.600', borderRadius: '10px' }}
        mb={{ base: 2, md: 20 }}
        bg="blue.500"
        color="gray.100"
        fontWeight="medium"
        as="a"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        size={{ base: 'xs', md: 'sm' }}
        p="3px"
      >
        {children}
      </Button>
    </>
  )
}
