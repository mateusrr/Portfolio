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
                query={[
                  'Engenharia da Computação',
                  'Desenvolvimento',
                  'estou a procura',
                ]}
                styles={{ color: 'blue.600' }}
              >
                Sou formado em Engenharia da Computação e já atuei na área de
                Desenvolvimento, além de ter adquirido alguma experiência em
                Suporte Técnico e, estou a procura de oportunidades na área de
                TI.
              </Highlight>
            </Text>

            <Text mt={4}>
              <Highlight
                query={[
                  'conhecimentos',
                  'investindo',
                  'adaptabilidade',
                  'paixão',
                  'novas competências',
                ]}
                styles={{ color: 'blue.600' }}
              >
                Para expandir meus conhecimentos, venho investindo em cursos e
                capacitações, reforçando meu compromisso com o aprendizado
                contínuo e minha adaptabilidade. Minha paixão pela tecnologia me
                motiva a aprimorar constantemente minhas habilidades e a
                aprender novas competências.
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

            <Text mt={4}>
              Áreas de interesse: Analista de TI, Desenvolvedor Front-end,
              Suporte técnico.
            </Text>

            <Skills />
          </Box>
        </Grid>
      </EffectFade>
    </>
  )
}
