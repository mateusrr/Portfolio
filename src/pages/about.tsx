import React from 'react'
import {
  Box,
  Grid,
  Highlight,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'
import { EffectFade } from '@/components/EffectFade'
import { Skills } from '@/components/About/Skills'

export default function About() {
  const maxBoxWidth = useBreakpointValue({ base: 'auto', md: '800px' })
  const fontSize = useBreakpointValue({ base: '0.70rem', md: '1.04rem' })
  const margin = useBreakpointValue({ base: '10vw', md: '5vw' })

  return (
    <>
      <EffectFade>
        <Grid justifyContent="center">
          <Box
            maxW={maxBoxWidth}
            fontSize={fontSize}
            m={margin}
            textAlign="left"
          >
            <Text>
              <Highlight
                query={['Engenharia da Computação', 'especializado']}
                styles={{ color: 'blue.600' }}
              >
                Sou graduado em Engenharia da Computação, além disso tenho me
                especializado em Desenvolvimento Front-end, explorando as
                principais tecnologias dessa área e desenvolvendo projetos
                práticos com os conhecimentos adquiridos até então.
              </Highlight>
            </Text>

            <Text mt={4}>
              <Highlight
                query={['compromisso', 'oportunidades']}
                styles={{ color: 'blue.600' }}
              >
                Busco ingressar nas oportunidades que surgir no campo da
                tecnologia, mantendo um compromisso de aprimorar as minhas
                habilidades, onde poderei não apenas contribuir com meu
                conhecimento, mas também aprender ativamente.
              </Highlight>
            </Text>

            <Text mt={4}>
              <Highlight
                query={['resultados', 'programação']}
                styles={{ color: 'blue.600' }}
              >
                Acredito que posso agregar valor à empresa para atingir os
                resultados esperados da organização, assim espero crescer
                pessoalmente e profissionalmente.
              </Highlight>
            </Text>

            <Skills />
          </Box>
        </Grid>
      </EffectFade>
    </>
  )
}
