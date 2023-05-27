import {
  Box,
  ResponsiveValue,
  LinkProps,
  Link,
  Flex,
  IconButton,
  useColorMode,
  Icon,
  useDisclosure,
  useBreakpointValue,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FiMenu, FiMoon, FiSun } from 'react-icons/fi'

const Motion = motion(Box)

const linkProps: Omit<LinkProps, 'position'> & {
  pos?: ResponsiveValue<String> | undefined
} = {
  textDecoration: 'none',
  transition: 'all 0.3s',
  pos: 'relative',
  display: 'inline-block',
  marginRight: '2',
  fontWeight: 'normal',
  _hover: {
    _before: {
      width: '100%',
      height: '0.5px',
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: 0,
      backgroundColor: 'orange.400',
      transition: 'all 0.3s',
    },
  },
}

export default function LinksHeader() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { colorMode, toggleColorMode } = useColorMode()
  const isMobile = useBreakpointValue({ base: '768px', md: '' })

  const handleColorChange = () => {
    toggleColorMode()
  }

  return (
    <Flex as="header" justify="space-between" align="center">
      {!isMobile && (
        <>
          <Motion whileHover={{ opacity: 0.5 }} whileTap={{ opacity: 0.8 }}>
            <Link {...linkProps} href="/" onClick={onClose}>
              Início
            </Link>
          </Motion>

          <Motion whileHover={{ opacity: 0.5 }} whileTap={{ opacity: 0.8 }}>
            <Link {...linkProps} href="/about" onClick={onClose}>
              Sobre
            </Link>
          </Motion>

          <Motion whileHover={{ opacity: 0.5 }} whileTap={{ opacity: 0.8 }}>
            <Link {...linkProps} href="/projects" onClick={onClose}>
              Projetos
            </Link>
          </Motion>

          <IconButton
            fontSize={{ base: 'sm', md: 'md' }}
            bg="transparent"
            aria-label="Toggle color mode"
            icon={
              colorMode === 'light' ? <Icon as={FiMoon} /> : <Icon as={FiSun} />
            }
            onClick={handleColorChange}
          />
        </>
      )}

      {isMobile && (
        <>
          {isOpen && (
            <Flex fontSize="10px" align="center" direction="row">
              <Link {...linkProps} href="/" onClick={onClose}>
                Início
              </Link>

              <Link {...linkProps} href="/about" onClick={onClose}>
                Sobre
              </Link>

              <Link {...linkProps} href="/projects" onClick={onClose}>
                Projetos
              </Link>

              <IconButton
                minW="0"
                fontSize={{ base: 'sm', md: 'md' }}
                bg="transparent"
                aria-label="Toggle color mode"
                icon={
                  colorMode === 'light' ? (
                    <Icon as={FiMoon} />
                  ) : (
                    <Icon as={FiSun} />
                  )
                }
                onClick={handleColorChange}
              />
            </Flex>
          )}
          <IconButton
            p="none"
            fontSize={{ base: 'xs', md: 'md' }}
            bg="transparent"
            aria-label="Toggle menu"
            icon={<Icon as={FiMenu} />}
            onClick={isOpen ? onClose : onOpen}
          />
        </>
      )}
    </Flex>
  )
}
