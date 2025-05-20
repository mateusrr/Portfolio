'use client'

import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  Textarea,
  useColorModeValue,
  useToast,
  VStack,
} from '@chakra-ui/react'
import React, { useState } from 'react'

export default function ContactPage() {
  const toast = useToast()
  const cardBg = useColorModeValue('white', 'gray.900')
  const text = useColorModeValue('gray.800', 'gray.100')
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  const btnBg = useColorModeValue('gray.900', 'gray.100')
  const btnColor = useColorModeValue('gray.100', 'gray.900')
  const btnHover = useColorModeValue('gray.800', 'gray.200')

  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    telefone: '',
    email: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: 'Mensagem enviada!',
        description: 'Obrigado por entrar em contato.',
        status: 'success',
        duration: 3000,
        isClosable: true,
        position: 'top',
      })

      setFormData({ name: '', telefone: '', email: '', message: '' })
    }, 1000)
  }

  return (
    <Box minH="100vh" py={{ base: 12, md: 20 }}>
      <Container maxW="2xl">
        <VStack spacing={10} align="stretch">
          <Box textAlign="center">
            <Heading
              as="h1"
              fontSize={{ base: '3xl', md: '4xl' }}
              fontWeight="bold"
              color={text}
              mb={2}
            >
              Envie uma mensagem
            </Heading>
            <Text fontSize="md" color="gray.500">
              Preencha o formulário abaixo e em breve irei retornar.
            </Text>
          </Box>

          <Box
            as="form"
            bg={cardBg}
            color={text}
            p={{ base: 8, md: 10 }}
            borderRadius="xl"
            boxShadow="lg"
            border="1px solid"
            borderColor={borderColor}
            onSubmit={handleSubmit}
            transition="all 0.3s ease"
          >
            <VStack spacing={6}>
              <FormControl isRequired>
                <FormLabel>Nome</FormLabel>
                <Input
                  name="name"
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={handleChange}
                  focusBorderColor="gray.100"
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Telefone</FormLabel>
                <Input
                  name="telefone"
                  type="telefone"
                  placeholder="(00) 00000-0000"
                  value={formData.telefone}
                  onChange={handleChange}
                  focusBorderColor="gray.100"
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  name="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  focusBorderColor="gray.100"
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Mensagem</FormLabel>
                <Textarea
                  name="message"
                  placeholder="Escreva sua mensagem..."
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  focusBorderColor="gray.100"
                />
              </FormControl>

              <Button
                type="submit"
                width="full"
                isLoading={isLoading}
                loadingText="Enviando..."
                bg={btnBg}
                color={btnColor}
                _hover={{ bg: btnHover }}
                size="md"
                borderRadius="md"
              >
                Enviar mensagem
              </Button>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}
