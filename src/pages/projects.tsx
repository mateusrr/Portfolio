import React, { useState } from 'react'
import { Button, Flex, Image, SimpleGrid, Link, Text } from '@chakra-ui/react'
import { projectsData } from '@/components/Projects/ProjectsData'
import Header from '@/components/Header'
import ButtonsAcess from '@/components/Projects/ButtonsAcess'
import Effect from '@/components/Projects/Effect'

export default function Projects() {
  const [showAll, setShowAll] = useState(false)
  const projects = showAll ? projectsData : projectsData.slice(0, 2)

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
          {projects.map((project) => (
            <React.Fragment key={project.name}>
              <Effect>
                <Image
                  borderRadius={8}
                  src={project.image}
                  alt={project.name}
                  h="100%"
                  w="100%"
                  objectFit="cover"
                />
              </Effect>

              <Flex
                gap={{ base: '0', md: '2' }}
                justify={{ base: 'center', md: 'center' }}
                direction={{ base: 'column', md: 'row' }}
                mb={{ base: '7', md: '0' }}
                textAlign="center"
              >
                {/*
                  <Text mt={1} fontWeight="medium">
                    {project.name}
                  </Text>
                */}
                <ButtonsAcess href={project.deploy}>Deploy</ButtonsAcess>
                <ButtonsAcess href={project.repository}>
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
