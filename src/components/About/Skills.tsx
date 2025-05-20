import { Box, SimpleGrid, Text } from '@chakra-ui/react'
import { Languages } from './Languages'
import React from 'react'
// import { ListItems } from './ListItems'
// import { ListCursos } from './ListCursos'

// junção dos componentes Languages e ListItems
interface TextSkillsProps {
  children: React.ReactNode
  w: {
    base: string
    md: string
  }
}
const TextSkills = ({ children, w }: TextSkillsProps) => {
  return (
    <Text mt={8} mb={3} fontWeight="bold" w={w}>
      {children}
    </Text>
  )
}

export const Skills = () => {
  return (
    <SimpleGrid
      // templateColumns={{ base: '', md: 'repeat(1fr)' }}
      fontSize={{ base: 'sm', md: 'xl' }}
      gap={{ base: '', md: '2' }}
    >
      <Box>
        <TextSkills w={{ base: '80px', md: '150px' }}>Tecnologias</TextSkills>
        <Languages />
      </Box>
    </SimpleGrid>
  )
}
