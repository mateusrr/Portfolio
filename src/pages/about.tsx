import React from 'react'
import { Box, Flex, Grid, Text } from '@chakra-ui/react'
import Languages from '../components/About/Languages'
import Header from '@/components/Header/index'
import IconModal from '@/components/About/Modal'
import Footer from '@/components/Footer'

const Paragraph = ({ children }: any) => (
  <Text mt={5} textAlign="justify">
    {children}
  </Text>
)

export default function About() {
  return (
    <>
      <Header />
      <Box>
        <Grid placeItems="center" height="calc(100vh - 82px)">
          <Box maxW="700px" fontSize="md" mt={8}>
            <Paragraph>
              Estou no 7º período de Engenharia da Computação pela Uniceuma em
              São Luís - Maranhão. Meu foco tem sido o Desenvolvimento Front-end
              e tenho me dedicado a estudar as principais tecnologias da área.
            </Paragraph>

            <Paragraph>
              Meu objetivo é ingressar na área de programação, contribuindo com
              meus conhecimentos, aprendendo na empresa em que estiver para
              poder crescer pessoalmente e profissionalmente. Acredito que posso
              agregar valor à empresa, além de trabalhar em equipe para atingir
              os objetivos da organização.
            </Paragraph>

            <Paragraph>
              Gostaria de aproveitar essa oportunidade para destacar minhas
              habilidades em programação, incluindo:
            </Paragraph>
            <Languages />

            <IconModal />
          </Box>
        </Grid>

        <Footer />
      </Box>
    </>
  )
}
