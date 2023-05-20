import React, { useState } from 'react'
import { Button, Flex, Image, SimpleGrid, Link, Text } from '@chakra-ui/react'
import { projectsData } from '@/components/Projects/ProjectsData'
import Header from '@/components/Header'
import ButtonsAcess from '@/components/Projects/ButtonsAcess'
import Effect from '@/pages/effect'

export default function Projects() {
  const [showAll, setShowAll] = useState(false)
  const projects = showAll ? projectsData : projectsData.slice(0, 2)

  return (
    <>
      <Header />
      <Flex direction="column" align="center" justify="center" m="20vh">
        <SimpleGrid maxWidth="700px" gap={7}>
          {projects.map((project) => (
            <>
              <Effect>
                <Image
                  borderRadius={8}
                  src={project.image}
                  alt={project.name}
                  h="400px"
                  objectFit="cover"
                />
              </Effect>

              <Flex gap={2}>
                <ButtonsAcess href={project.deploy}>Deploy</ButtonsAcess>
                <ButtonsAcess href={project.repository}>
                  Repositório
                </ButtonsAcess>
              </Flex>
            </>
          ))}
        </SimpleGrid>

        {!showAll && (
          <Button
            mt={8}
            bg="orange.400"
            color="black"
            fontWeight="normal"
            _hover={{ color: 'white', bg: 'orange.500' }}
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
              _hover={{ color: 'white', bg: 'orange.500' }}
            >
              Github
            </Link>
          </Text>
        )}
      </Flex>
    </>
  )
}
