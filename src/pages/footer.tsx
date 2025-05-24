import { ButtonsAcess } from '@/components/Projects/ButtonsAcess'
import { Flex, Heading, Text, Box, useColorModeValue } from '@chakra-ui/react'
import { PiCursorClickThin } from 'react-icons/pi'

export default function Footer() {
  const contacts = [
    {
      label: 'Envie uma mensagem',
      href: '/contato',
      bg: useColorModeValue('gray.200', 'gray.100'),
      color: useColorModeValue('gray.900', 'gray.900'),
      hover: useColorModeValue('gray.300', 'gray.200'),
      icon: <PiCursorClickThin />,
      external: false,
    },
  ]
  const bgColorFooter = useColorModeValue('gray.100', 'gray.900')
  const ColorFooter = useColorModeValue('gray.900', 'gray.100')
  return (
    <Box
      as="section"
      px={{ base: 3, md: 6 }}
      py={{ base: 5, md: 8 }}
      bg={bgColorFooter}
      m={0}
    >
      <Heading
        as="h2"
        fontSize={{ base: '2xl', md: '5xl' }}
        textAlign="center"
        mb={4}
        fontWeight="700"
        letterSpacing="-0.5px"
        color={ColorFooter}
      >
        Entre em Contato
      </Heading>

      <Flex justify="center">
        {contacts.map((contact, idx) => (
          <ButtonsAcess
            key={idx}
            href={contact.href}
            bg={contact.bg}
            color={contact.color}
            icon={contact.icon}
            hoverBg={contact.hover}
          >
            {contact.label}
          </ButtonsAcess>
        ))}
      </Flex>

      <Text textAlign="center" fontSize="sm" color="gray.800">
        © {new Date().getFullYear()} MRR. Todos os direitos reservados.
      </Text>
    </Box>
  )
}
