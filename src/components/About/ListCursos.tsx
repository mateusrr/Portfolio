import { Icon, ListItem, UnorderedList } from '@chakra-ui/react'
import { VscCircleFilled } from 'react-icons/vsc'
import React from 'react'

// Softskills
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

export const ListCursos = () => {
  return (
    <UnorderedList>
      <ListItem
        listStyleType="none"
        marginStart={-4}
        textAlign="left"
        fontSize={{ base: 'xs', md: 'md' }}
      >
        Trilha Ignite (Rocketseat) <IconCircleFilld />
        Zabbix (Udemy) <IconCircleFilld />
        Central de serviços com GLPI (Udemy) <IconCircleFilld />
        Javascript (Udemy) <IconCircleFilld />
        Bootcamp Linux (DIO)
      </ListItem>
    </UnorderedList>
  )
}
