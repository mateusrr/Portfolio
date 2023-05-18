import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  Flex,
  useDisclosure,
  Link,
  Text,
} from '@chakra-ui/react'
import Languages from './Languages'

const IconModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Flex gap={2} mt={4}>
      <Button onClick={onOpen}>Habilidades</Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay
          bg="blackAlpha.300"
          backdropFilter="blur(5px) hue-rotate(90deg)"
        />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Flex direction="column">
              <Text>Hard Skills</Text>

              <Languages />
              <Text mt={8}>Soft Skills</Text>
              <Text>
                Trabalho em equipe; Organização; Proativo; Autogerenciamento;
                Design
              </Text>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>

      <Button>
        <Link target="_blank" href="/Curriculo-Mateus.pdf">
          CV
        </Link>
      </Button>
    </Flex>
  )
}

export default IconModal
