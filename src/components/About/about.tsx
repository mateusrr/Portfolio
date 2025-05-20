'use client'

import {
  Box,
  Grid,
  Text,
  Highlight,
  useBreakpointValue,
  Stack,
  Heading,
  useColorModeValue,
  Container,
} from '@chakra-ui/react'
import ScrollReveal from '@/components/ScrollReveal'
import { Skills } from '@/components/About/Skills'

export default function About() {
  const fontSize = useBreakpointValue({ base: '0.95rem', md: '1.1rem' })
  const textColor = useColorModeValue('gray.700', 'gray.300')
  const highlightColor = useColorModeValue('gray.900', 'gray.100')

  return (
    <ScrollReveal>
      <Box
        as="section"
        id="about"
        py={{ base: 20, md: 28 }} // Espaçamento vertical padronizado
        px={4}
      >
        <Container maxW="7xl">
          <Heading
            as="h2"
            fontSize={{ base: '2xl', md: '4xl' }}
            fontWeight="bold"
            textAlign="center"
            mb={12}
            color={highlightColor}
          >
            Sobre mim
          </Heading>

          <Grid justifyContent="center">
            <Box maxW="3xl" mx="auto" textAlign="left">
              <Stack
                spacing={6}
                fontSize={fontSize}
                color={textColor}
                lineHeight="1.8"
              >
                <Text>
                  <Highlight
                    query={['Engenharia da Computação', 'soluções digitais']}
                    styles={{ color: highlightColor, fontWeight: 'semibold' }}
                  >
                    Formado em Engenharia da Computação, utilizo minha base
                    técnica e criativa para entregar soluções digitais que se
                    conectam com pessoas e objetivos reais.
                  </Highlight>
                </Text>

                <Text>
                  <Highlight
                    query={['experiência prática', 'visão estratégica']}
                    styles={{ color: highlightColor, fontWeight: 'semibold' }}
                  >
                    Através de experiência prática e constante atualização,
                    ofereço não apenas desenvolvimento, mas visão estratégica
                    para transformar ideias em produtos modernos, funcionais e
                    com forte presença digital.
                  </Highlight>
                </Text>

                <Text>
                  <Highlight
                    query={['compromisso', 'detalhe', 'soluções sob medida']}
                    styles={{ color: highlightColor, fontWeight: 'semibold' }}
                  >
                    Com atenção ao detalhe, comunicação clara e compromisso com
                    o resultado, crio soluções sob medida para cada cliente —
                    alinhando identidade, performance e propósito.
                  </Highlight>
                </Text>
              </Stack>

              <Box mt={12}>
                <Skills />
              </Box>
            </Box>
          </Grid>
        </Container>
      </Box>
    </ScrollReveal>
  )
}
