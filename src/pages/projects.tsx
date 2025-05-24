import { ButtonsAcess } from '@/components/Projects/ButtonsAcess'
import { Effect } from '@/components/Projects/Effect'
import { getPrismicClient } from '@/services/prismic'
import {
  Image,
  Text,
  Box,
  useColorModeValue,
  SimpleGrid,
} from '@chakra-ui/react'
import { GetStaticProps } from 'next'
import React from 'react'
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
  // const [showAll, setShowAll] = useState(false)
  // const projectsAll = showAll ? projects : projects.slice(0, 4)
  const projectsAll = projects
  const textColor = useColorModeValue('gray.900', 'gray.200')

  return (
    <>
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={10}
        px={{ base: 4, md: 0 }}
        maxW="6xl"
        mx="auto"
        mt={20}
      >
        {projectsAll.map((projeto) => (
          <Box key={projeto.uid} textAlign={{ base: 'center', md: 'left' }}>
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
        ))}
      </SimpleGrid>
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
