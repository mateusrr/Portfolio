import React from 'react'
import { Box, Grid, ListItem, Text, UnorderedList } from '@chakra-ui/react'
import Header from '@/components/Header/index'
import BoxColor from '@/components/BoxColor'
import MotionEffect from '@/components/MotionEffect'
import Languages from '@/components/About/Languages'

const Paragraph = ({ children }: any) => (
  <Text mt={5} textAlign="justify">
    {children}
  </Text>
)

export default function About() {
  return (
    <>
      <Header />
      <MotionEffect>
        <BoxColor>
          <Grid placeItems="center" height="calc(100vh - 82px)">
            <Box maxW="700px" fontSize="md">
              <Paragraph>
                Estou no 7º período de Engenharia da Computação pela Uniceuma em
                São Luís - Maranhão. Meu foco tem sido o Desenvolvimento
                Front-end e tenho me dedicado a estudar as principais
                tecnologias da área.
              </Paragraph>

              <Paragraph>
                Meu objetivo é ingressar na área de programação, contribuindo
                com meus conhecimentos, aprendendo na empresa em que estiver
                para poder crescer pessoalmente e profissionalmente. Acredito
                que posso agregar valor à empresa, além de trabalhar em equipe
                para atingir os objetivos da organização.
              </Paragraph>

              <Box mt={8}>
                <Text
                  fontSize="xl"
                  fontWeight="medium"
                  style={{
                    width: 110,
                    borderBottom: '2px solid',
                    color: 'blue',
                  }}
                >
                  Hard Skills
                </Text>
                <Languages />
                <Text fontSize="xl" mt={8} fontWeight="medium">
                  Soft Skills
                </Text>
                <Box w={110} mb={3} borderBottom="2px solid" color="blue.500" />
                <UnorderedList>
                  <ListItem>Trabalho em equipe</ListItem>
                  <ListItem>Organização</ListItem>
                  <ListItem>Proativo</ListItem>
                  <ListItem>Autogereciamento</ListItem>
                  <ListItem>Design</ListItem>
                </UnorderedList>
              </Box>
            </Box>
          </Grid>
        </BoxColor>
      </MotionEffect>
    </>
  )
}
