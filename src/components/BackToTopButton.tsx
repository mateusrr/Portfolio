import { useState, useEffect } from 'react'
import { Box, IconButton, Spinner } from '@chakra-ui/react'
import { FaArrowUp } from 'react-icons/fa'

const BackToTopButton = () => {
  const [showButton, setShowButton] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })

    // Simulando um tempo de carregamento
    setTimeout(() => {
      setIsLoading(false)
    }, 100)
  }

  return (
    <Box
      display={showButton ? 'block' : 'none'}
      position="fixed"
      bottom="4"
      right="4"
      zIndex="999"
    >
      <IconButton
        icon={<FaArrowUp />}
        aria-label="Voltar ao topo"
        onClick={handleBackToTop}
        size="sm"
        colorScheme="gray"
        isRound
      />
      {isLoading && (
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
        >
          <Spinner size="md" />
        </Box>
      )}
    </Box>
  )
}

export default BackToTopButton
