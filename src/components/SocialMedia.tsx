import { Button, Flex, IconButton } from '@chakra-ui/react'
import Link from 'next/link'
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
    <Flex direction="row" justify="left" alignItems={'center'} gap={2}>
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
      <Button
        size={'sm'}
        variant={'solid'}
        bg="white"
        color="gray.900"
        fontWeight="bold"
        transition="all 0.2s ease-out"
        _hover={{
          transform: 'scale(1.1)',
          background: 'blue.500',
        }}
      >
        <Link
          href="https://drive.google.com/file/d/18wsQfgTa3pzXbdrPiB4zc4QTZlRMinM_/view?usp=sharing"
          target="_blank"
        >
          CV
        </Link>
      </Button>
    </Flex>
  )
}
