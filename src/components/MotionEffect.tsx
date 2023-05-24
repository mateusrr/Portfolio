import { Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'

interface MotionEffectProps {
  children?: React.ReactNode
}
const MotionEffect = ({ children }: MotionEffectProps) => {
  const Motion = motion(Box)
  // ajustar responsive mobile home
  return (
    <Motion
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      justify="center"
      textAlign="center"
    >
      {children}
    </Motion>
  )
}

export default MotionEffect
