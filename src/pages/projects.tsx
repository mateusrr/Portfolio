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
import BoxColor from '@/components/BoxColor'
import Footer from '@/components/Footer'
import MotionEffect from '@/components/MotionEffect'

interface ProjectsProps {
  id: string
}

const MotionCard = motion(Card)

export default function Projects({ id }: ProjectsProps) {
  const [showAll, setShowAll] = useState(false)
  const projects = showAll ? projectsData : projectsData.slice(0, 2)

  return (
    <>
      <Header />
      <MotionEffect>
        <BoxColor>
          <Flex direction="column" align="center" justify="center" m="20vh">
            <SimpleGrid mt={8} mx="auto" position="relative">
              {projects.map((project) => (
                // eslint-disable-next-line react/jsx-key
                <Flex flexDir="column">
                  <MotionCard
                    h="50%"
                    w="40rem"
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
                        bg="gray.100"
                        color="gray.900"
                        fontSize="xl"
                        fontWeight="normal"
                        _hover={{ bg: 'gray.700', color: 'white' }}
                      >
                        {project.name}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent
                      flexDirection="row"
                      gap={2}
                      width="40"
                      p="2"
                    >
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
        </BoxColor>
      </MotionEffect>
      <Footer />
    </>
  )
}
