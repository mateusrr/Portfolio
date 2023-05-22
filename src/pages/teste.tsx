import Header from '@/components/Header'
import ButtonsAcess from '@/components/Projects/ButtonsAcess'
import Effect from '@/components/Projects/Effect'
import { Image, Link, Flex, SimpleGrid, Text, Button } from '@chakra-ui/react'
import Prismic from 'prismic-javascript'
import React, { useState } from 'react'

const apiEndpoint = 'https://mr-portfolio.cdn.prismic.io/api/v2'
const accessToken =
  'MC5aR3EweXhBQUFDSUFmLU0z.77-977-9SVt577-977-977-977-977-9Mkcccu-_vQfvv71077-9Ou-_vTvvv73vv73vv70177-9c--_ve-_vW5r'

type Project = {
  uid: string
  data: {
    image: { url: string }
    title: Array<{ text: string }>
    deploy: { url: string }
    repository: { url: string }
  }
}

interface ProjectProps {
  projetos: Project[]
}

export default function Teste({ projetos }: ProjectProps) {
  const [showAll, setShowAll] = useState(false)
  const projectsAll = showAll ? projetos : projetos.slice(0, 2)

  return (
    <>
      <Header />
      <Flex
        direction="column"
        align="center"
        justify="center"
        m={{ base: '10vh', md: '20vh' }}
      >
        <SimpleGrid
          maxWidth="700px"
          gap={{ base: '4', md: '7' }}
          px={{ base: 4, md: 0 }}
          w="100%"
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

              <Flex
                gap={{ base: '0', md: '2' }}
                justify={{ base: 'center', md: 'center' }}
                direction={{ base: 'column', md: 'row' }}
                mb={{ base: '7', md: '0' }}
                textAlign="center"
              >
                <ButtonsAcess href={projeto.data.deploy.url}>
                  Deploy
                </ButtonsAcess>

                <ButtonsAcess href={projeto.data.repository.url}>
                  Repositório
                </ButtonsAcess>
              </Flex>
            </React.Fragment>
          ))}
        </SimpleGrid>

        {!showAll && (
          <Button
            mt={8}
            bg="orange.400"
            color="black"
            fontWeight="normal"
            _hover={{ color: 'white', bg: 'orange.500', borderRadius: '10px' }}
            size={{ base: '100%', md: 'md' }}
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
              bg="orange.400"
              target="_blank"
              href="https://github.com/mateusrr?tab=repositories"
              color="black"
              fontWeight="normal"
              _hover={{
                color: 'white',
                bg: 'orange.500',
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

export async function getStaticProps() {
  const api = await Prismic.api(apiEndpoint, { accessToken })
  const response = await api.query(
    Prismic.Predicates.at('document.type', 'projeto'),
    { orderings: '[projeto.,data.uid]' },
  )
  const projetos = response.results

  return {
    props: {
      projetos,
    },
  }
}
