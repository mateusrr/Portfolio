import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Flex,
  Icon,
  useDisclosure,
} from '@chakra-ui/react'
import { FaGitSquare } from 'react-icons/fa' // Exemplo de ícones do Font Awesome

const IconModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button onClick={onOpen}>Abrir Modal de Ícones</Button>
      <Modal isOpen={isOpen} onClose={onClose} size="sm">
        <Flex flexWrap="wrap" alignItems="center">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Ícones</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Flex justifyContent="space-around">
                <Icon as={FaGitSquare} boxSize={6} />
              </Flex>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Fechar
              </Button>
            </ModalFooter>
          </ModalContent>
        </Flex>
      </Modal>
    </>
  )
}

export default IconModal
