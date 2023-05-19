import {
  Box,
  ListItem,
  SimpleGrid,
  Text,
  UnorderedList,
} from '@chakra-ui/react'
import Languages from './Languages'

const IconModal = () => {
  return (
    <SimpleGrid templateColumns="repeat(2, 1fr)">
      <Box>
        <Text
          mt={8}
          mb={3}
          fontSize="xl"
          fontWeight="medium"
          borderBottom="2px solid"
          borderBottomColor="blue.500"
          w="110px"
        >
          Hard Skills
        </Text>

        <Languages />
      </Box>
      <Box>
        <Text
          fontSize="xl"
          mt={8}
          mb={3}
          fontWeight="medium"
          borderBottom="2px solid"
          borderBottomColor="blue.500"
          borderRight={110}
          w="100px"
        >
          Soft Skills
        </Text>
        <UnorderedList>
          <ListItem>
            Trabalho em equipe | Organização | Proativo | Autogerenciamento |
            Design
          </ListItem>
        </UnorderedList>
      </Box>
    </SimpleGrid>
  )
}
export default IconModal
