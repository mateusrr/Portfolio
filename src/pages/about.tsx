import React from 'react'
import {
  Box,
  Grid,
  Highlight,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'
import Header from '@/components/Header/index'
import MotionEffect from '@/components/MotionEffect'
import Skills from '@/components/About/Skills'

export default function About() {
  const maxBoxWidth = useBreakpointValue({ base: 'auto', md: '800px' })
  const fontSize = useBreakpointValue({ base: '0.70rem', md: '1.04rem' })
  const margin = useBreakpointValue({ base: '10vw', md: '5vw' })

  return (
    <>
      <Header />
      <MotionEffect>
        <Grid justifyContent="center">
          <Box
            maxW={maxBoxWidth}
            fontSize={fontSize}
            m={margin}
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
                Tenho por objetivo ingressar na área de programação,
                contribuindo com meus conhecimentos, aprendendo na empresa em
                que estiver para poder crescer pessoalmente e profissionalmente.
              </Highlight>
            </Text>

            <Text mt={4}>
              <Highlight
                query={['resultados', 'programação']}
                styles={{ color: 'orange.400' }}
              >
                Acredito que posso agregar valor à empresa para atingir os
                resultados esperados da organização.
              </Highlight>
            </Text>

            <Skills />
          </Box>
        </Grid>
      </MotionEffect>
    </>
  )
}
