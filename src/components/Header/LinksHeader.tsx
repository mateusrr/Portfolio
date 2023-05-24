import { Box, ResponsiveValue, LinkProps, Link, Flex } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const Motion = motion(Box)

const linkProps: Omit<LinkProps, 'position'> & {
  pos?: ResponsiveValue<String> | undefined
} = {
  textDecoration: 'none',
  transition: 'all 0.3s',
  pos: 'relative',
  display: 'inline-block',
  marginRight: '3',
  fontWeight: 'medium',
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
  return (
    <Flex fontSize={{ base: 'xs', md: 'sm' }}>
      <Motion whileHover={{ opacity: 0.5 }} whileTap={{ opacity: 0.8 }}>
        <Link {...linkProps} href="/about">
          Sobre
        </Link>
      </Motion>

      <Motion whileHover={{ opacity: 0.5 }} whileTap={{ opacity: 0.8 }}>
        <Link {...linkProps} href="/projects">
          Projetos
        </Link>
      </Motion>

      <Motion whileHover={{ opacity: 0.5 }} whileTap={{ opacity: 0.8 }}>
        <Link {...linkProps} href="/hobby">
          Hobby
        </Link>
      </Motion>
    </Flex>
  )
}
