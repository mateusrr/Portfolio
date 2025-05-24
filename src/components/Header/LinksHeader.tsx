'use client'

import {
  Flex,
  Link,
  IconButton,
  useColorMode,
  useDisclosure,
  useBreakpointValue,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  VStack,
} from '@chakra-ui/react'
import { FiMenu, FiMoon, FiSun } from 'react-icons/fi'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import React from 'react'

const MotionLink = motion(Link)

const links = [
  { href: '/#inicio', label: 'Início' },
  { href: '/#about', label: 'Sobre' },
  { href: '/#projects', label: 'Projetos' },
  { href: '/#contato', label: 'Contato' },
]

export function LinksHeader() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { colorMode, toggleColorMode } = useColorMode()
  const isMobile = useBreakpointValue({ base: true, md: false })
  const path = usePathname()

  const linkProps = {
    py: 1,
    position: 'relative',
    _hover: {
      textDecoration: 'none',
    },
    _after: {
      content: '""',
      position: 'absolute',
      width: '100%',
      transform: 'scaleX(0)',
      height: '2px',
      bottom: '0',
      left: '0',
      transition: 'transform 0.3s ease-out',
    },
    _hoverAfter: {
      transform: 'scaleX(1)',
      transformOrigin: 'bottom left',
    },
  }

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    const id = href.split('#')[1]

    if (path !== '/') {
      // Se está fora da home, navega normalmente
      return
    }

    e.preventDefault()

    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }

    // Fecha o Drawer se estiver no mobile
    if (isMobile) onClose()
  }

  const renderLinks = () =>
    links.map(({ href, label }) => (
      <MotionLink
        key={href}
        href={href}
        onClick={(e) => handleClick(e, href)}
        {...linkProps}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {label}
      </MotionLink>
    ))

  return (
    <>
      {!isMobile && (
        <Flex align="center" gap={4}>
          {renderLinks()}
          <IconButton
            aria-label="Alternar tema"
            icon={colorMode === 'light' ? <FiMoon /> : <FiSun />}
            onClick={toggleColorMode}
            variant="ghost"
            size="md"
          />
        </Flex>
      )}

      {isMobile && (
        <>
          <IconButton
            aria-label="Abrir menu"
            icon={<FiMenu />}
            onClick={onOpen}
            variant="ghost"
          />
          <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent bg={colorMode === 'light' ? 'white' : 'gray.900'}>
              <DrawerCloseButton />
              <DrawerHeader>Menu</DrawerHeader>
              <DrawerBody>
                <VStack spacing={4} align="start">
                  {renderLinks()}
                  <IconButton
                    aria-label="Alternar tema"
                    icon={colorMode === 'light' ? <FiMoon /> : <FiSun />}
                    onClick={toggleColorMode}
                    variant="ghost"
                  />
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </>
      )}
    </>
  )
}
