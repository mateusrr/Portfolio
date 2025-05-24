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

  const textColor = useColorModeValue('gray.800', 'gray.100')
  const subtitleColor = useColorModeValue('gray.600', 'gray.400')
  const colorBg = useColorModeValue('gray.100', 'gray.900')

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
    <Box minH="100vh" py={{ base: 12, md: 20 }} bg={colorBg} id="contato">
      <Container maxW="2xl">
        <VStack spacing={10} align="stretch">
          <Box textAlign="center">
            <Heading
              as="h1"
              fontSize={{ base: '2xl', md: '4xl' }}
              fontWeight="bold"
              color={textColor}
              mb={2}
              lineHeight="shorter"
            >
              Vamos desenvolver um projeto?
            </Heading>
            <Text fontSize="md" color={subtitleColor}>
              Preencha o formulário abaixo e em breve irei retornar.
            </Text>
          </Box>

          <Box
            as="form"
            bg="gray.100"
            color="gray.900"
            p={{ base: 8, md: 10 }}
            borderRadius="2xl"
            boxShadow="xl"
            border="1px solid"
            borderColor="gray.900"
            onSubmit={handleSubmit}
          >
            <VStack spacing={5}>
              <FormControl isRequired>
                <FormLabel>Nome</FormLabel>
                <Input
                  name="name"
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={handleChange}
                  borderColor="gray.900"
                  _placeholder={{ color: 'gray.800' }}
                  _hover={{ borderColor: 'gray.900' }}
                  _focus={{ borderColor: 'gray.500', boxShadow: 'md' }}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Telefone</FormLabel>
                <Input
                  name="telefone"
                  placeholder="(00) 00000-0000"
                  value={formData.telefone}
                  onChange={handleChange}
                  // bg="gray.100"
                  borderColor="gray.900"
                  _placeholder={{ color: 'gray.800' }}
                  _hover={{ borderColor: 'gray.900' }}
                  _focus={{ borderColor: 'gray.500', boxShadow: 'md' }}
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
                  borderColor="gray.900"
                  _placeholder={{ color: 'gray.800' }}
                  _hover={{ borderColor: 'gray.900' }}
                  _focus={{ borderColor: 'gray.500', boxShadow: 'md' }}
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
                  borderColor="gray.900"
                  _placeholder={{ color: 'gray.800' }}
                  _hover={{ borderColor: 'gray.900' }}
                  _focus={{ borderColor: 'gray.500', boxShadow: 'md' }}
                />
              </FormControl>

              <Button
                type="submit"
                w="full"
                isLoading={isLoading}
                loadingText="Enviando..."
                bg="gray.900"
                color="white"
                _hover={{ bg: 'gray.800' }}
                size="md"
                borderRadius="md"
                fontWeight="medium"
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
