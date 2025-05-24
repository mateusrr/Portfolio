// pages/_app.js
import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import theme from '../styles/theme'
import { Analytics } from '@vercel/analytics/react'
import { Header } from '@/components/Header'

export default function Portfolio({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
      <Analytics />
    </ChakraProvider>
  )
}
