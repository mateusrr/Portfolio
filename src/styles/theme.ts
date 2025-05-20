// styles/theme.js
import { type ThemeConfig, extendTheme } from '@chakra-ui/react'

const config: ThemeConfig = {
  // initialColorMode: 'light',
  useSystemColorMode: false,
}

const theme = extendTheme({
  config,
  styles: {
    global: (props: { colorMode: string }) => ({
      'html, body': {
        padding: 0,
        margin: 0,
        background: props.colorMode === 'light' ? 'white' : 'black',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        color: props.colorMode === 'light' ? 'black' : 'white',
        transition: 'background-color 0.2s',
      },
    }),
  },
  colors: {
    blue: {
      900: '#14204a',
      700: '#173da6',
      500: '#3b82f6',
    },
    gray: {
      100: '#f4f4f5',
      900: '#18181b',
      950: '#111111',
    },
    green: {
      400: '#4ade80',
      500: '#22c55e',
      600: '#16a34a',
    },
    cyan: {
      400: '#22d3ee',
      500: '#06b6d4',
      600: '#0891b2',
    },
  },
  fonts: {
    body: "'Poppins', sans-serif",
    heading: "'Syne', sans-serif",
  },
  fontSizes: {
    xxxs: '8px',
    xxs: '10px',
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
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
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
