import React, { useState } from 'react'
import { Button, Flex, Image, SimpleGrid, Link, Text } from '@chakra-ui/react'
import { projectsData } from '@/components/Projects/ProjectsData'
import CardEffect from '@/components/Projects/CardEffect'
import Header from '@/components/Header'
import ButtonsAcess from '@/components/Projects/ButtonsAcess'

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
              <CardEffect key={project.id}>
                <Image
                  borderRadius={8}
                  src={project.image}
                  alt={project.name}
                  h="400px"
                  objectFit="cover"
                />
              </CardEffect>

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
            bg="yellow.500"
            color="black"
            fontWeight="normal"
            _hover={{ color: 'white', bg: 'yellow.600' }}
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
              bg="yellow.500"
              target="_blank"
              href="https://github.com/mateusrr?tab=repositories"
              color="black"
              fontWeight="normal"
              _hover={{ color: 'white', bg: 'yellow.600' }}
            >
              Github
            </Link>
          </Text>
        )}
      </Flex>
    </>
  )
}
