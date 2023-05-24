import { Icon, ListItem, UnorderedList } from '@chakra-ui/react'
import { VscCircleFilled } from 'react-icons/vsc'
import React from 'react'

const IconCircleFilld = () => {
  return (
    <>
      <Icon
        as={VscCircleFilled}
        fontSize={{ base: '5px', md: '10px' }}
        mr={1}
      />
    </>
  )
}

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
          Trabalho em equipe <IconCircleFilld />
          Organização <IconCircleFilld />
          Proativo <IconCircleFilld />
          Autogerenciamento <IconCircleFilld />
          Design
        </ListItem>
      </UnorderedList>
    </>
  )
}

export default ListItems
