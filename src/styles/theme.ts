// styles/theme.js
import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  global: {
    'html, body': {
      bg: 'black',
    },
  },
  colors: {
    blue: {
      900: '#1A365D',
      700: '#2C5282',
    },
  },
  fonts: {
    body: "'Poppins', sans-serif",
    heading: "'Poppins', sans-serif",
  },
  fontSizes: {
    xs: '12px',
    sm: '14px',
    md: '18px',
    lg: '30px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '28px',
    '4xl': '36px',
    '5xl': '48px',
    '6xl': '64px',
  },
  fontWeights: {
    normal: 400,
    medium: 600,
    bold: 900,
  },
  lineHeights: {
    normal: '1.5',
    short: '1.25',
    tall: '1.75',
  },
})

export default theme
