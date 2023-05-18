import { Button, Icon } from '@chakra-ui/react'
import { FiExternalLink } from 'react-icons/fi'

interface ProjectsData {
  href?: string
  children: string
}

const ButtonsAcess = ({ href, children }: ProjectsData) => {
  return (
    <>
      <Button
        mb={20}
        bg="blue.500"
        color="gray.100"
        fontWeight="normal"
        _hover={{ bg: 'gray.700', color: 'white' }}
        as="a"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        size="sm"
      >
        {children} <Icon ml={1} fontSize="sm" as={FiExternalLink} />
      </Button>
    </>
  )
}

export default ButtonsAcess
