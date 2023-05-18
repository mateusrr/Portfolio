import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Flex,
  useDisclosure,
} from '@chakra-ui/react'
import Languages from './Languages'

const IconModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Flex justify="center" align="center" mt={5} gap={5}>
      <Button onClick={onOpen}>Habilidades</Button>
      <Modal isOpen={isOpen} onClose={onClose} size="2xl">
        <Flex flexWrap="wrap" alignItems="center">
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <ModalBody>
              <Flex justifyContent="space-around">
                <Languages />
              </Flex>
            </ModalBody>
          </ModalContent>
        </Flex>
      </Modal>
      <Button>Baixar CV</Button>
    </Flex>
  )
}

export default IconModal
