'use client'

import {
  Box,
  Flex,
  Image,
  Text,
  useColorModeValue,
  Heading,
  VStack,
} from '@chakra-ui/react'
import { PiCursorClickThin } from 'react-icons/pi'
// import { FaWhatsapp } from 'react-icons/fa'
import ScrollReveal from '@/components/ScrollReveal'
import { getPrismicClient } from '@/services/prismic'
import { GetStaticProps } from 'next'
import React from 'react'
import { ButtonsAcess } from '@/components/Projects/ButtonsAcess'
import About from '@/components/About/about'
import { Typewriter } from 'react-simple-typewriter'
import ContactPage from './contato'

type Project = {
  uid: number
  data: {
    image: { url: string }
    title: Array<{ text: string }>
    deploy: { url: string }
    description: Array<{ text: string }>
  }
}

interface ProjectProps {
  projects: Project[]
}

export default function Home({ projects }: ProjectProps) {
  const projectsAll = projects.slice(0, 2)
  const textColor = useColorModeValue('gray.900', 'gray.200')
  const colorText = useColorModeValue('gray.300', 'gray.900')

  return (
    <Box position="relative" overflow="hidden">
      {/* <ScrollReveal>
        <Flex
          as="section"
          direction="column"
          align="center"
          justify="center"
          minH="100vh"
          px={{ base: 4, md: 8 }}
          textAlign="center"
          gap={{ base: '0', md: '3' }}
        >
          <Heading as="h1" fontWeight="black" lineHeight="1">
            <Text
              fontWeight="800"
              fontSize={{ base: '3xl', sm: '5xl', md: '7xl' }}
              display="block"
              color={useColorModeValue('gray.900', 'gray.100')}
            >
              Developer
            </Text>
            <Text
              fontSize={{ base: 'xl', sm: '3xl', md: '5xl' }}
              fontWeight="700"
              display="block"
              color={useColorModeValue('gray.200', 'gray.900')}
            >
              & creative designer.
            </Text>
          </Heading>

          <Text
            fontSize={{ base: 'sm', md: '2xl' }}
            color={textColor}
            maxW={{ base: '300px', md: '600px' }}
            mt={4}
          >
            Foco em criar experiências digitais intuitivas, modernas e de alta
            qualidade.
          </Text>

          <Flex direction={{ base: 'column', sm: 'row' }} gap={4} mt={6}>
            <ButtonsAcess
              bg="gray.900"
              color="gray.100"
              hoverBg="gray.100"
              hoverColor="gray.900"
              icon={<PiCursorClickThin />}
              href="/projects"
            >
              Veja mais projetos
            </ButtonsAcess>

            <Mensagem />
          </Flex>
        </Flex>
      </ScrollReveal> */}
      <ScrollReveal>
        <Flex
          id="inicio"
          as="section"
          direction={{ base: 'column', md: 'row' }}
          align="center"
          justify="center"
          minH="100vh"
          px={{ base: 6, md: 16 }}
          py={7}
          gap={12}
        >
          {/* Texto */}
          <Flex
            direction="column"
            align={{ base: 'center', md: 'flex-start' }}
            textAlign={{ base: 'center', md: 'left' }}
          >
            <Heading
              as="h1"
              fontWeight="bold"
              fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
              // lineHeight="1.2"
              color={useColorModeValue('gray.900', 'gray.100')}
            >
              Olá! Eu sou, Mateus!
              <br />
              <Text as="span" color={colorText}>
                <Typewriter
                  words={['Developer.', '& Creative designer.']}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </Text>
            </Heading>

            <Text
              fontSize={{ base: 'md', md: 'xl' }}
              color={textColor}
              maxW="460px"
              mt={4}
            >
              Crio soluções digitais modernas, responsivas e focadas na
              experiência do usuário.
            </Text>

            <Flex direction={{ base: 'column', sm: 'row' }} gap={4} mt={6}>
              <ButtonsAcess
                bg="gray.100"
                color="gray.900"
                hoverBg="gray.900"
                hoverColor="white"
                border="1px solid"
                borderColor="gray.900"
                icon={<PiCursorClickThin />}
                href="/projects"
              >
                Ver projetos
              </ButtonsAcess>

              <ButtonsAcess
                bg="gray.100"
                color="gray.900"
                hoverBg="gray.900"
                border="1px solid"
                borderColor="gray.900"
                hoverColor="white"
                icon={<PiCursorClickThin />}
                href="#contato"
              >
                Contato
              </ButtonsAcess>
            </Flex>
          </Flex>
        </Flex>
      </ScrollReveal>

      <About />

      {/* Projetos Recentes */}
      <ScrollReveal>
        <Box py={{ base: 20, md: 28 }} id="projects">
          <Heading
            as="h2"
            fontSize={{ base: '2xl', md: '4xl' }}
            fontWeight="700"
            textAlign="center"
            mb={16}
          >
            Projetos Recentes
          </Heading>

          <VStack
            spacing={24}
            align="stretch"
            px={{ base: 2, md: 0 }}
            maxW="6xl"
            mx="auto"
          >
            {projectsAll.map((projeto, index) => {
              const isEven = index % 2 === 0

              return (
                <Flex
                  key={projeto.uid}
                  direction={{
                    base: 'column',
                    md: isEven ? 'row' : 'row-reverse',
                  }}
                  align="center"
                  justify="space-between"
                  gap={12}
                >
                  {/* Texto */}
                  <Box flex="1" textAlign={{ base: 'center', md: 'left' }}>
                    <Text
                      fontSize={{ base: '3xl', md: '6xl' }}
                      fontWeight="700"
                      fontFamily="heading"
                      color={textColor}
                      position="relative"
                      zIndex="0"
                      _before={{
                        content: `"${String(index + 1).padStart(2, '0')}"`,
                        position: 'absolute',
                        fontSize: '8xl',
                        opacity: 0.1,
                        top: '-40px',
                        left: { base: '50%', md: '0' },
                        transform: { base: 'translateX(-50%)', md: 'none' },
                        zIndex: -1,
                      }}
                    >
                      {projeto.data.title[0].text}
                    </Text>

                    <Text color={textColor} fontSize="sm" mt={2} mb={6}>
                      {projeto.data.description[0].text}
                    </Text>

                    <ButtonsAcess
                      href={projeto.data.deploy.url}
                      bg="gray.100"
                      color="gray.900"
                      hoverBg="gray.900"
                      hoverColor="gray.100"
                      border="1px solid"
                      borderColor="gray.900"
                      icon={<PiCursorClickThin />}
                    >
                      Ver projeto
                    </ButtonsAcess>
                  </Box>

                  {/* Imagem */}
                  <Box
                    flex="1"
                    position="relative"
                    display={{ base: 'none', md: 'block' }}
                    borderRadius="xl"
                    overflow="hidden"
                    transition="transform 0.4s ease"
                    _hover={{ transform: 'scale(1.03)' }}
                    boxShadow="2xl"
                  >
                    <Image
                      src={projeto.data.image.url}
                      alt={projeto.data.title[0].text}
                      w="100%"
                      h="auto"
                      objectFit="cover"
                    />
                  </Box>
                </Flex>
              )
            })}
            <Box textAlign="left" mt={10}>
              <Flex
                as="a"
                href="/projects"
                align="center"
                justify="center"
                direction="row"
                role="group"
                cursor="pointer"
                transition="all 0.3s"
                gap={10}
              >
                <ButtonsAcess
                  bg="gray.100"
                  color="gray.900"
                  hoverBg="gray.900"
                  hoverColor="gray.100"
                  border="1px solid"
                  borderColor="gray.900"
                  icon={<PiCursorClickThin />}
                >
                  Veja mais projetos
                </ButtonsAcess>
              </Flex>
            </Box>
          </VStack>
        </Box>
      </ScrollReveal>

      <ContactPage />
    </Box>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()

  const response = await prismic.getByType('projeto', {
    fetchLinks: [
      'projeto.deploy',
      'projeto.image',
      'projeto.title',
      'projeto.description',
    ],
  })
  const projects = response.results
  projects.sort((a, b) => Number(b.uid) - Number(a.uid))

  return {
    props: {
      projects,
    },
  }
}
