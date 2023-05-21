import {
  Box,
  ListItem,
  SimpleGrid,
  Text,
  UnorderedList,
} from '@chakra-ui/react'
import Languages from './Languages'

const Skills = () => {
  return (
    <SimpleGrid
      templateColumns={{ base: '', md: 'repeat(2, 1fr)' }}
      fontSize={{ base: 'sm', md: 'xl' }}
    >
      <Box>
        <Text
          mt={8}
          mb={3}
          fontWeight="medium"
          borderBottom="2px solid"
          borderBottomColor="blue.500"
          w={{ base: '80px', md: '110px' }}
        >
          Hard Skills
        </Text>

        <Languages />
      </Box>
      <Box>
        <Text
          mt={8}
          mb={3}
          fontWeight="medium"
          borderBottom="2px solid"
          borderBottomColor="blue.500"
          borderRight={110}
          w={{ base: '75px', md: '100px' }}
        >
          Soft Skills
        </Text>
        <UnorderedList>
          <ListItem
            listStyleType="none"
            marginStart={-4}
            fontSize={{ base: 'auto', md: 'md' }}
          >
            Trabalho em equipe | Organização | Proativo | Autogerenciamento |
            Design
          </ListItem>
        </UnorderedList>
      </Box>
    </SimpleGrid>
  )
}
export default Skills
