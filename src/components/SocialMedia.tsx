import { Box, IconButton } from '@chakra-ui/react'
import React from 'react'

interface ZoomIconProps {
  href: string
  icon: React.ElementType
  ariaLabel: string
}

export default function ZoomIcon({ href, icon, ariaLabel }: ZoomIconProps) {
  const Icon = icon

  return (
    <Box>
      <IconButton
        transition="all 0.2s ease-out"
        _hover={{
          transform: 'scale(1.1)',
          color: 'yellow.500',
        }}
        as="a"
        minW={0}
        href={href}
        aria-label={ariaLabel}
        icon={<Icon />}
        fontSize={27}
        target="_blank"
        bg="none"
        gap={4}
      />
    </Box>
  )
}
