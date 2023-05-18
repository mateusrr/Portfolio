import React, { useState } from 'react'
import { Button, Flex, Image, SimpleGrid, Icon } from '@chakra-ui/react'
import { projectsData } from '@/components/Projects/ProjectsData'
import { FiExternalLink } from 'react-icons/fi'
import CardEffect from '@/components/Projects/CardEffect'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Projects() {
  const [showAll, setShowAll] = useState(false)

  const projects = showAll ? projectsData : projectsData.slice(0, 2)

  return (
    <>
      <Header />
      <Flex direction="column" align="center" justify="center" m="20vh">
        <SimpleGrid columns={1} spacing={10} maxWidth="700px">
          {projects.map((project) => (
            <>
              <CardEffect key={project.id}>
                <Image
                  borderRadius={20}
                  src={project.image}
                  alt={project.name}
                  h="400px"
                  objectFit="cover"
                />
              </CardEffect>
              <Flex justify="center" gap={5}>
                <Button
                  bg="blue.500"
                  color="gray.100"
                  fontWeight="normal"
                  _hover={{ bg: 'gray.700', color: 'white' }}
                  as="a"
                  href={project.deploy}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Deploy <Icon ml={1} as={FiExternalLink} />
                </Button>

                <Button
                  bg="blue.500"
                  color="gray.100"
                  fontWeight="normal"
                  _hover={{ bg: 'gray.700', color: 'white' }}
                  as="a"
                  href={project.repository}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Repositório <Icon ml={1} as={FiExternalLink} />
                </Button>
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
      </Flex>
      <Footer />
    </>
  )
}
