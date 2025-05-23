import { ButtonsAcess } from '@/components/Projects/ButtonsAcess'
import { useColorModeValue } from '@chakra-ui/react'
import { PiCursorClickThin } from 'react-icons/pi'

export default function Mensagem() {
  const contacts = [
    {
      label: 'Envie uma mensagem',
      href: '/contato',
      bg: useColorModeValue('gray.200', 'gray.900'),
      color: useColorModeValue('gray.900', 'gray.100'),
      hover: useColorModeValue('gray.900', 'gray.800'),
      icon: <PiCursorClickThin />,
      external: false,
    },
  ]
  return (
    <>
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
    </>
  )
}
