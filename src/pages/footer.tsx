import { ButtonsAcess } from '@/components/Projects/ButtonsAcess'
import { Flex, Heading, Text, Box, useColorModeValue } from '@chakra-ui/react'
import { PiCursorClickThin } from 'react-icons/pi'

export default function Footer() {
  const contacts = [
    // {
    //   label: 'Fale comigo',
    //   href: 'https://wa.me/5599999999999',
    //   bg: mode('green.400', 'green.400'),
    //   color: mode('green.900', 'green.900'),
    //   hover: mode('green.500', 'green.500'),
    //   icon: <FaWhatsapp />,
    //   external: true,
    // },
    {
      label: 'Envie uma mensagem',
      href: '/contato',
      bg: useColorModeValue('gray.200', 'blue.900'),
      color: useColorModeValue('gray.900', 'gray.200'),
      hover: useColorModeValue('gray.300', 'gray.800'),
      icon: <PiCursorClickThin />,
      external: false,
    },
  ]
  const textColor = useColorModeValue('gray.900', 'gray.200')
  const bgColorFooter = useColorModeValue('gray.100', 'blue.700')
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
        mb={8}
        fontWeight="700"
        letterSpacing="-0.5px"
        color={ColorFooter}
      >
        Entre em Contato
      </Heading>

      <Flex justify="center" flexWrap="wrap" gap={3} mb={-10}>
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

      <Text textAlign="center" fontSize="sm" color={textColor} mt={2}>
        © {new Date().getFullYear()} MRR. Todos os direitos reservados.
      </Text>
    </Box>
  )
}
