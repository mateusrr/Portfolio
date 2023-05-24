import { Icon, ListItem, UnorderedList } from '@chakra-ui/react'
import { VscCircleFilled } from 'react-icons/vsc'

const ListItems = () => {
  return (
    <>
      <UnorderedList>
        <ListItem
          listStyleType="none"
          marginStart={-4}
          textAlign="left"
          fontSize={{ base: 'xs', md: 'md' }}
        >
          Trabalho em equipe <Icon as={VscCircleFilled} fontSize={10} mr={1} />
          Organização <Icon as={VscCircleFilled} fontSize={10} mr={1} />
          Proativo <Icon as={VscCircleFilled} fontSize={10} mr={1} />
          Autogerenciamento <Icon as={VscCircleFilled} fontSize={10} mr={1} />
          Design
        </ListItem>
      </UnorderedList>
    </>
  )
}

export default ListItems
