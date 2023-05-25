import { Flex, IconButton } from '@chakra-ui/react'
import React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'

interface ZoomIconProps {
  href: string
  icon: React.ElementType
  ariaLabel: string
}

const ButtonSocialMedia = ({ href, icon, ariaLabel }: ZoomIconProps) => {
  const Icon = icon

  return (
    <>
      <IconButton
        transition="all 0.2s ease-out"
        _hover={{
          transform: 'scale(1.1)',
          color: 'blue.500',
        }}
        as="a"
        minW={0}
        href={href}
        aria-label={ariaLabel}
        icon={<Icon />}
        fontSize={{ base: '20px', md: '30px' }}
        target="_blank"
        bg="none"
        m={1}
      />
    </>
  )
}

export default function ZoomIcon() {
  return (
    <Flex direction="row" justify="left">
      <ButtonSocialMedia
        href="https://github.com/mateusrr"
        icon={BsGithub}
        ariaLabel="Github"
      />
      <ButtonSocialMedia
        href="https://linkedin.com/in/mateusrr"
        icon={BsLinkedin}
        ariaLabel="Linkedin"
      />
    </Flex>
  )
}
