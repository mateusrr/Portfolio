'use client'

import {
  Flex,
  Box,
  Heading,
  Text,
  Button,
  useColorModeValue,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { PiCursorClickThin } from 'react-icons/pi'
import { Typewriter } from 'react-simple-typewriter'

const MotionFlex = motion(Flex)
const MotionBox = motion(Box)

export default function Hero() {
  const bgGradient = useColorModeValue(
    'linear(to-br, gray.50, gray.100, white)',
    'linear(to-br, gray.900, black)',
  )

  return (
    <Flex
      as="section"
      id="inicio"
      minH="100vh"
      align="center"
      justify="center"
      px={{ base: 6, md: 16 }}
      py={10}
      bgGradient={bgGradient}
      position="relative"
      overflow="hidden"
    >
      {/* Glow futurista no fundo */}
      <Box
        position="absolute"
        top="-20%"
        left="-20%"
        w="60%"
        h="60%"
        bgGradient="radial(teal.400, transparent)"
        opacity={0.3}
        filter="blur(120px)"
        zIndex={0}
      />
      <Box
        position="absolute"
        bottom="-20%"
        right="-20%"
        w="60%"
        h="60%"
        bgGradient="radial(blue.500, transparent)"
        opacity={0.3}
        filter="blur(120px)"
        zIndex={0}
      />

      {/* Container */}
      <Flex
        direction={{ base: 'column', md: 'row' }}
        align="center"
        justify="space-between"
        maxW="7xl"
        w="full"
        zIndex={1}
        gap={12}
      >
        {/* Texto */}
        <MotionFlex
          direction="column"
          align={{ base: 'center', md: 'flex-start' }}
          textAlign={{ base: 'center', md: 'left' }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          flex="1"
        >
          <Heading
            as="h1"
            fontWeight="bold"
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
            lineHeight="1.2"
            color={useColorModeValue('gray.900', 'gray.100')}
          >
            Olá! Eu sou{' '}
            <Text
              as="span"
              bgGradient="linear(to-r, teal.400, blue.500)"
              bgClip="text"
            >
              Mateus
            </Text>
            <br />
            <Text as="span" color="teal.300" fontWeight="semibold">
              <Typewriter
                words={['Developer.', 'Creative Designer.']}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </Text>
          </Heading>

          <Text
            fontSize={{ base: 'md', md: 'xl' }}
            color={useColorModeValue('gray.700', 'gray.300')}
            maxW="500px"
            mt={4}
          >
            Crio soluções digitais{' '}
            <Text
              as="span"
              fontWeight="semibold"
              color={useColorModeValue('gray.900', 'white')}
            >
              modernas
            </Text>
            ,{' '}
            <Text
              as="span"
              fontWeight="semibold"
              color={useColorModeValue('gray.900', 'white')}
            >
              responsivas
            </Text>{' '}
            e focadas na{' '}
            <Text
              as="span"
              fontWeight="semibold"
              color={useColorModeValue('gray.900', 'white')}
            >
              experiência do usuário
            </Text>
            .
          </Text>

          {/* Botões */}
          <Flex direction={{ base: 'column', sm: 'row' }} gap={4} mt={6}>
            <Button
              as="a"
              href="/projects"
              leftIcon={<PiCursorClickThin />}
              size="lg"
              bgGradient="linear(to-r, teal.400, blue.600)"
              color="white"
              _hover={{
                transform: 'scale(1.05)',
                bgGradient: 'linear(to-r, blue.500, teal.400)',
              }}
              transition="all 0.3s"
              shadow="lg"
            >
              Ver projetos
            </Button>

            <Button
              as="a"
              href="#contato"
              leftIcon={<PiCursorClickThin />}
              size="lg"
              variant="outline"
              borderColor="teal.400"
              color="teal.300"
              bg="whiteAlpha.50"
              _hover={{
                bg: 'teal.400',
                color: 'white',
                transform: 'scale(1.05)',
              }}
              transition="all 0.3s"
              backdropFilter="blur(10px)"
            >
              Contato
            </Button>
          </Flex>
        </MotionFlex>

        {/* Espaço para avatar/ilustração */}
        <MotionBox
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          flex="1"
          display="flex"
          justifyContent="center"
        >
          <Box
            w={{ base: '220px', md: '320px' }}
            h={{ base: '220px', md: '320px' }}
            borderRadius="full"
            bgGradient="linear(to-tr, teal.500, blue.700)"
            p="3px"
          >
            <Flex
              w="full"
              h="full"
              borderRadius="full"
              bg={useColorModeValue('gray.50', 'gray.900')}
              align="center"
              justify="center"
              color="gray.400"
              fontSize="sm"
            >
              {/* Aqui pode ir sua foto, avatar ou uma ilustração tech */}
              Futuristic Avatar
            </Flex>
          </Box>
        </MotionBox>
      </Flex>
    </Flex>
  )
}
