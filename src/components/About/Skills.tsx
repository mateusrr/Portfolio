import { Box, SimpleGrid, Text } from '@chakra-ui/react'
import Languages from './Languages'
import React from 'react'
import ListItems from './ListItems'

interface TextSkillsProps {
  children: React.ReactNode
  w: {
    base: string
    md: string
  }
}
const TextSkills = ({ children, w }: TextSkillsProps) => {
  return (
    <Text
      mt={8}
      mb={3}
      fontWeight="medium"
      borderBottom="2px solid"
      borderBottomColor="blue.500"
      w={w}
    >
      {children}
    </Text>
  )
}

const Skills = () => {
  return (
    <SimpleGrid
      templateColumns={{ base: '', md: 'repeat(2, 1fr)' }}
      fontSize={{ base: 'sm', md: 'xl' }}
      gap={{ base: '', md: '8' }}
    >
      <Box>
        <TextSkills w={{ base: '80px', md: '110px' }}>Hard Skills</TextSkills>
        <Languages />
      </Box>

      <Box>
        <TextSkills w={{ base: '70px', md: '100px' }}>Soft Skills</TextSkills>
        <ListItems />
      </Box>
    </SimpleGrid>
  )
}
export default Skills
