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
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

export default function ContactPage() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const toast = useToast()

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!name || !phone || !email || !message) {
      toast({
        title: 'Por favor, preencha todos os campos obrigatórios.',
        status: 'warning',
        duration: 3000,
        isClosable: true,
      })
      return
    }

    if (!validateEmail(email)) {
      toast({
        title: 'Email inválido.',
        description: 'Digite um e-mail válido para contato.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
      return
    }

    setIsLoading(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, phone, email, message }),
      })

      if (response.ok) {
        toast({
          title: 'Mensagem enviada!',
          description: 'Entrarei em contato em breve.',
          status: 'success',
          duration: 3000,
          isClosable: true,
        })
        setName('')
        setPhone('')
        setEmail('')
        setMessage('')
      } else {
        throw new Error()
      }
    } catch (err) {
      toast({
        title: 'Erro ao enviar mensagem.',
        description: 'Tente novamente mais tarde.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
    } finally {
      setIsLoading(false)
    }
  }

  const textColor = useColorModeValue('gray.800', 'gray.100')
  const subtitleColor = useColorModeValue('gray.600', 'gray.400')
  const colorBg = useColorModeValue('gray.100', 'gray.900')

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

          <MotionBox
            as="form"
            bg="gray.100"
            color="gray.900"
            p={{ base: 8, md: 10 }}
            borderRadius="2xl"
            boxShadow="xl"
            border="1px solid"
            borderColor="gray.900"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <VStack spacing={5}>
              <FormControl isRequired>
                <FormLabel>Nome</FormLabel>
                <Input
                  name="name"
                  placeholder="Seu nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  borderColor="gray.900"
                  _placeholder={{ color: 'gray.800' }}
                  _hover={{ borderColor: 'gray.900' }}
                  _focus={{ borderColor: 'gray.500', boxShadow: 'md' }}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Telefone</FormLabel>
                <Input
                  name="phone"
                  placeholder="(00) 00000-0000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
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
          </MotionBox>
        </VStack>
      </Container>
    </Box>
  )
}
