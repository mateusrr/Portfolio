import { ButtonsAcess } from '@/components/Projects/ButtonsAcess'
import { mode } from '@chakra-ui/theme-tools'
import { PiCursorClickThin } from 'react-icons/pi'

export default function Mensagem() {
  const contacts = [
    {
      label: 'Envie uma mensagem',
      href: '/contato',
      bg: mode('gray.200', 'gray.900'),
      color: mode('gray.900', 'gray.200'),
      hover: mode('gray.300', 'gray.800'),
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
