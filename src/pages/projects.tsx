import React, { useState } from 'react'
import {
  Box,
  Button,
  Card,
  Flex,
  Image,
  SimpleGrid,
  Popover,
  Link,
  PopoverTrigger,
  PopoverArrow,
  PopoverContent,
} from '@chakra-ui/react'
import { projectsData } from '../components/Projects/ProjectsData'
import { motion } from 'framer-motion'
import Header from '@/components/Header'

interface ProjectsProps {
  id: string
}

const MotionCard = motion(Card)

export default function Projects({ id }: ProjectsProps) {
  const [showAll, setShowAll] = useState(false)
  const projects = showAll ? projectsData : projectsData.slice(0, 3)

  return (
    <>
      <Header />
      <Box
        id={id}
        position="relative"
        minHeight="calc(100vh - 80px)"
        overflow="hidden"
      >
        <Flex direction="column" align="center" justify="center" m="20vh">
          <SimpleGrid
            templateColumns={{ sm: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }}
            pb="80px"
            gap={8}
            mt={8}
            mx="auto"
            maxW="780px"
            position="relative"
          >
            {projects.map((project) => (
              // eslint-disable-next-line react/jsx-key
              <Flex flexDir="column">
                <MotionCard
                  bg="white"
                  color="white"
                  key={project.id}
                  transition={{ duration: 0.7 }}
                  whileHover={{ scale: 1.05 }}
                  borderWidth="1px"
                  borderRadius="md"
                  overflow="hidden"
                  mb={3}
                  border="1px solid black"
                >
                  <Image
                    objectFit="cover"
                    src={project.image}
                    alt={project.name}
                  />
                </MotionCard>

                <Popover isLazy>
                  <PopoverTrigger>
                    <Button
                      bg="gray.900"
                      color="white"
                      fontSize="sm"
                      fontWeight="normal"
                      _hover={{ bg: 'gray.700', color: 'white' }}
                    >
                      {project.name}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent flexDirection="row" gap={2} width="40" p="2">
                    <PopoverArrow />
                    <Button
                      as="a"
                      rel="noopener noreferrer"
                      href={project.deploy}
                      fontSize="xs"
                      fontWeight="normal"
                      h={7}
                      target="_blank"
                    >
                      Deploy
                    </Button>
                    <Button
                      as="a"
                      rel="noopener noreferrer"
                      href={project.repository}
                      fontSize="xs"
                      fontWeight="normal"
                      h={7}
                      target="_blank"
                    >
                      Repositório
                    </Button>
                  </PopoverContent>
                </Popover>
              </Flex>
            ))}
          </SimpleGrid>

          {!showAll && (
            <Box>
              <Button
                onClick={() => setShowAll(true)}
                bg="yellow.500"
                color="black"
                _hover={{ color: 'white', bg: 'yellow.600' }}
                fontWeight="normal"
              >
                Ver mais
              </Button>
            </Box>
          )}
          {showAll && (
            <Flex align="center" justify="center" fontSize="md" gap={2}>
              Para mais projetos
              <Link
                p={1}
                textDecor="none"
                href="https://github.com/mateusrr?tab=repositories"
                target="_blank"
                bg="yellow.500"
                borderRadius="10px"
                color="black"
                _hover={{ bg: 'yellow.600', color: 'white' }}
              >
                Github
              </Link>
            </Flex>
          )}
        </Flex>
      </Box>
    </>
  )
}
