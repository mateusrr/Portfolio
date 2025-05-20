import { ButtonsAcess } from '@/components/Projects/ButtonsAcess'
import { Effect } from '@/components/Projects/Effect'
import { getPrismicClient } from '@/services/prismic'
import {
  Image,
  Flex,
  Text,
  Box,
  VStack,
  useColorModeValue,
  Button,
} from '@chakra-ui/react'
import { GetStaticProps } from 'next'
import React, { useState } from 'react'
import { PiCursorClickThin } from 'react-icons/pi'

type Project = {
  uid: number
  data: {
    image: { url: string }
    title: Array<{ text: string }>
    deploy: { url: string }
    repository: { url: string }
    description: Array<{ text: string }>
  }
}

interface ProjectProps {
  projects: Project[]
}

export default function Projects({ projects }: ProjectProps) {
  const [showAll, setShowAll] = useState(false)
  const projectsAll = showAll ? projects : projects.slice(0, 3)
  const textColor = useColorModeValue('gray.900', 'gray.200')

  return (
    <>
      {/* <Flex direction="column" align="center" m={{ base: '5vh', md: '20vh' }}>
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={8}
          maxW="1000px"
          w="full"
          px={{ base: 4, md: 0 }}
        >
          {projectsAll.map((projeto) => (
            <Box key={projeto.uid}>
              <Effect>
                <Image
                  src={projeto.data.image.url}
                  alt={projeto.data.title[0].text}
                  borderRadius="md"
                  mb={4}
                />
              </Effect>

              <Box fontSize={{ base: 'sm', md: 'md' }} textAlign="left">
                <Text fontWeight="bold" mb={2}>
                  {projeto.data.title[0].text}
                </Text>
                <Text mb={4}>{projeto.data.description[0].text}</Text>

                <Flex gap="2">
                  <ButtonsAcess href={projeto.data.deploy.url}>
                    Deploy
                  </ButtonsAcess>

                  <ButtonsAcess href={projeto.data.repository.url}>
                    Repositório
                  </ButtonsAcess>
                </Flex>
              </Box>
            </Box>
          ))}
        </SimpleGrid>

        {/* {!showAll && (
          <Button
            mt={8}
            bg="blue.500"
            fontWeight="medium"
            _hover={{ bg: 'blue.600', borderRadius: '10px' }}
            size={{ base: 'sm', md: 'md' }}
            px={{ base: '4', md: 'md' }}
            onClick={() => setShowAll(true)}
          >
            Ver mais
          </Button>
        )}

        {showAll && (
          <Text align="center" mt={8}>
            Para mais projetos
            <Link
              ml={2}
              borderRadius={5}
              p={1}
              h={8}
              bg="blue.500"
              target="_blank"
              href="https://github.com/mateusrr?tab=repositories"
              fontWeight="normal"
              _hover={{
                bg: 'blue.600',
                borderRadius: '10px',
              }}
            >
              Github
            </Link>
          </Text>
        )} */}
      {/* </Flex> */}
      <VStack
        spacing={15}
        align="stretch"
        px={{ base: 4, md: 0 }}
        maxW="3xl"
        mx="auto"
        mt={20}
      >
        {projectsAll.map((projeto) => (
          <Flex key={projeto.uid} align="center">
            <Box flex="1" textAlign={{ base: 'center', md: 'left' }}>
              <Effect>
                <Image
                  src={projeto.data.image.url}
                  alt={projeto.data.title[0].text}
                  borderRadius="md"
                />
              </Effect>

              <Text
                fontSize={{ base: 'xl', md: '4xl' }}
                fontFamily="heading"
                fontWeight="700"
                mt={7}
                color={textColor}
                position="relative"
                zIndex="0"
              >
                {projeto.data.title[0].text}
              </Text>
              <Text color={textColor} fontSize="sm" mb={3}>
                {projeto.data.description[0].text}
              </Text>

              <ButtonsAcess
                href={projeto.data.deploy.url}
                bg="gray.900"
                color="gray.100"
                hoverBg="gray.100"
                hoverColor="gray.900"
                icon={<PiCursorClickThin />}
              >
                Ver projeto
              </ButtonsAcess>
            </Box>
          </Flex>
        ))}

        {!showAll && (
          <Button
            mt={70}
            bg="gray.900"
            color="gray.100"
            _hover={{ bg: 'gray.100', color: 'gray.900' }}
            size={{ base: 'sm', md: 'md' }}
            px={{ base: '4', md: '40' }}
            onClick={() => setShowAll(true)}
          >
            Ver mais
          </Button>
        )}

        {/* {showAll && (
        <Text align="center" mt={8}>
          Para mais projetos
          <Link
            ml={2}
            borderRadius={5}
            p={1}
            h={8}
            bg="blue.500"
            target="_blank"
            href="https://github.com/mateusrr?tab=repositories"
            fontWeight="normal"
            _hover={{
              bg: 'blue.600',
              borderRadius: '10px',
            }}
          >
            Github
          </Link>
        </Text>
      )} */}
      </VStack>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()

  const response = await prismic.getByType('projeto', {
    fetchLinks: [
      'projeto.deploy',
      'projeto.repository',
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
