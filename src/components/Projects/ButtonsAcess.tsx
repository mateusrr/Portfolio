import { Button, Link as ChakraLink } from '@chakra-ui/react'
import { ReactElement } from 'react'

interface ButtonAcess {
  href?: string
  children: string
  icon?: ReactElement
  bg?: string
  color?: string
  hoverBg?: string
  hoverColor?: string
  iconPosition?: 'left' | 'right'
}

export const ButtonsAcess = ({
  href,
  children,
  icon,
  bg,
  color,
  hoverBg,
  hoverColor,
  iconPosition = 'left',
}: ButtonAcess) => {
  return (
    <Button
      as={ChakraLink}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      bg={bg}
      color={color}
      _hover={{
        bg: hoverBg,
        color: hoverColor,
        borderRadius: '10px',
        textDecoration: 'none',
        transform: 'scale(1.03)',
      }}
      transition="transform 0.3s ease"
      mb={{ base: 2, md: 20 }}
      fontWeight="medium"
      size={{ base: 'sm', md: 'md' }}
      p="3px"
      {...(icon && iconPosition === 'right' ? { rightIcon: icon } : {})}
      {...(icon && iconPosition === 'left' ? { leftIcon: icon } : {})}
    >
      {children}
    </Button>
  )
}
