import React from 'react'
import { Box, Grid, Highlight, Text } from '@chakra-ui/react'
import Header from '@/components/Header/index'
import MotionEffect from '@/components/MotionEffect'
import Skills from '@/components/About/Skills'

export default function About() {
  return (
    <>
      <Header />
      <MotionEffect>
        <Grid justifyContent="center">
          <Box
            maxW={{ base: 'auto', md: '800px' }}
            fontSize={{ base: '2.5vw', md: 'xl' }}
            m="15vw"
            textAlign="left"
          >
            <Text>
              <Highlight
                query={['Engenharia da Computação', 'Front-end']}
                styles={{ color: 'orange.400' }}
              >
                Estou no 7º período de Engenharia da Computação pela Uniceuma em
                São Luís - Maranhão. Meu foco tem sido o Desenvolvimento
                Front-end e tenho me dedicado a estudar as principais
                tecnologias da área.
              </Highlight>
            </Text>

            <Text mt={4}>
              <Highlight
                query={['objetivo', 'resultados', 'programação']}
                styles={{ color: 'orange.400' }}
              >
                Meu objetivo é ingressar na área de programação, contribuindo
                com meus conhecimentos, aprendendo na empresa em que estiver
                para poder crescer pessoalmente e profissionalmente. Acredito
                que posso agregar valor à empresa para atingir os resultados
                esperados da organização.
              </Highlight>
            </Text>
            <Skills />
          </Box>
        </Grid>
      </MotionEffect>
    </>
  )
}
