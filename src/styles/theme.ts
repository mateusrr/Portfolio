// styles/theme.js
import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  styles: {
    global: (props: { colorMode: string }) => ({
      'html, body': {
        background: props.colorMode === 'light' ? 'white' : 'gray.900',
        color: props.colorMode === 'light' ? 'gray.800' : 'gray.100',
        transition: 'background-color 0.2s',
      },
    }),
  },
  colors: {
    blue: {
      900: '#1A365D',
      700: '#2C5282',
      500: '#3182CE',
    },
    gray: {
      100: '#EDF2F7',
      900: '#171923',
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
  breakpoints: {
    sm: '320px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
    '2xl': '1536px',
  },
})

export default theme
