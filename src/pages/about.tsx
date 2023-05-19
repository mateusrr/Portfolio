import React from 'react'
import { Box, Grid, Text } from '@chakra-ui/react'
import Header from '@/components/Header/index'
import BoxColor from '@/components/BoxColor'
import MotionEffect from '@/components/MotionEffect'
import IconModal from '@/components/About/Modal'

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
                Estou no 7º período de{' '}
                <Text as="span" color="blue.500">
                  Engenharia da Computação
                </Text>{' '}
                pela Uniceuma em São Luís - Maranhão. Meu foco tem sido o{' '}
                <Text
                  as="span"
                  borderBottom="1px"
                  borderBottomColor="yellow.500"
                >
                  Desenvolvimento Front-end
                </Text>{' '}
                e tenho me dedicado a estudar as principais tecnologias da área.
              </Paragraph>

              <Paragraph>
                Meu{' '}
                <Text as="span" color="blue.500">
                  objetivo
                </Text>{' '}
                é ingressar na área de programação, contribuindo com meus
                conhecimentos, aprendendo na empresa em que estiver para poder
                crescer pessoalmente e profissionalmente. Acredito que posso
                agregar valor à empresa, além de trabalhar em equipe para
                atingir os{' '}
                <Text
                  as="span"
                  borderBottom="1px"
                  borderBottomColor="yellow.500"
                  p={0.5}
                >
                  objetivos da organização.
                </Text>{' '}
              </Paragraph>
              <IconModal />
            </Box>
          </Grid>
        </BoxColor>
      </MotionEffect>
    </>
  )
}
