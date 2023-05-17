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
  useDisclosure,
} from '@chakra-ui/react'
import Languages from './Languages'

const IconModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button onClick={onOpen}>Abrir Modal de Ícones</Button>
      <Modal isOpen={isOpen} onClose={onClose} size="2xl">
        <Flex flexWrap="wrap" alignItems="center">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Hard skills</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Flex justifyContent="space-around">
                <Languages />
              </Flex>
            </ModalBody>

            <ModalHeader>Hard skills</ModalHeader>
            <ModalBody>
              <Flex justifyContent="space-around">
                <Languages />
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
