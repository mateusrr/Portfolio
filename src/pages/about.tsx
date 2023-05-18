import React from 'react'
import { Box, Grid, Text } from '@chakra-ui/react'
import Header from '@/components/Header/index'
import IconModal from '@/components/About/Modal'
import Footer from '@/components/Footer'
import BoxColor from '@/components/BoxColor'
import MotionEffect from '@/components/MotionEffect'

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

              <IconModal />
            </Box>
          </Grid>
        </BoxColor>
      </MotionEffect>
      <Footer />
    </>
  )
}
