import { ListItem, UnorderedList } from '@chakra-ui/react'
import React from 'react'

export const ListCursos = () => {
  return (
    <UnorderedList textAlign="left" fontSize={{ base: 'xs', md: 'md' }}>
      <ListItem>Trilha Ignite - React.js (Rocketseat)</ListItem>
      <ListItem>Zabbix 6 (Udemy)</ListItem>
      <ListItem> Central de serviços com GLPI (Udemy)</ListItem>
      <ListItem> Javascript e Typescript (Udemy)</ListItem>
      <ListItem> Bootcamp Linux (DIO)</ListItem>
      <ListItem> Engenharia de Dados com Python (DIO)</ListItem>
      <ListItem> Power BI (Prime Cursos)</ListItem>
    </UnorderedList>
  )
}
