import { ListItem, UnorderedList } from '@chakra-ui/react'
import React from 'react'

export const ListItems = () => {
  return (
    <>
      <UnorderedList textAlign="left" fontSize={{ base: 'xs', md: 'md' }}>
        <ListItem>Trabalho em equipe</ListItem>
        <ListItem>Organização</ListItem>
        <ListItem>Proatividade</ListItem>
        <ListItem>Gestão do tempo</ListItem>
        <ListItem>Adaptabilidade</ListItem>
        <ListItem>Resiliência</ListItem>
        <ListItem>Design</ListItem>
      </UnorderedList>
    </>
  )
}
