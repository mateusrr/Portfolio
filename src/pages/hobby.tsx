import Header from '@/components/Header'
import { Flex } from '@chakra-ui/react'
import Image from 'next/image'

export default function Hobby() {
  return (
    <>
      <Header />

      <Flex
        align="center"
        justify="center"
        m="10%"
        fontWeight="bold"
        fontSize="50px"
        direction="column"
      >
        <h1>Em construção.</h1>
        <Image
          src="/Vector.svg"
          alt={''}
          width="300"
          height={300}
          color="gray.100"
        />
      </Flex>
    </>
  )
}
