import { ButtonsAcess } from '@/components/Projects/ButtonsAcess'
import { Effect } from '@/components/Projects/Effect'
import { getPrismicClient } from '@/services/prismic'
import {
  Image,
  Link,
  Flex,
  SimpleGrid,
  Text,
  Button,
  Box,
} from '@chakra-ui/react'
import { GetStaticProps } from 'next'
import React, { useState } from 'react'

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
  const projectsAll = showAll ? projects : projects.slice(0, 2)

  return (
    <>
      <Flex
        direction="column"
        align="center"
        // justify="center"
        m={{ base: '5vh', md: '20vh' }}
      >
        <SimpleGrid
          maxW={{ base: '500px', md: '700px' }}
          // gap={{ base: '4', md: '7' }}
          px={{ base: 4, md: 0 }}
        >
          {projectsAll.map((projeto) => (
            <React.Fragment key={projeto.uid}>
              <Effect>
                <Image
                  src={projeto.data.image.url}
                  alt={projeto.data.title[0].text}
                  marginBottom="10px"
                />
              </Effect>

              <Box fontSize={{ base: 'xxxs', md: 'md' }} m={4} textAlign="left">
                <Text fontWeight="bold">{projeto.data.title[0].text}</Text>
                <Text>{projeto.data.description[0].text}</Text>

                <Flex gap="2" justify="left" mb={{ base: '7', md: '0' }} mt={2}>
                  <ButtonsAcess href={projeto.data.deploy.url}>
                    Deploy
                  </ButtonsAcess>

                  <ButtonsAcess href={projeto.data.repository.url}>
                    Repositório
                  </ButtonsAcess>
                </Flex>
              </Box>
            </React.Fragment>
          ))}
        </SimpleGrid>

        {!showAll && (
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
        )}
      </Flex>
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
