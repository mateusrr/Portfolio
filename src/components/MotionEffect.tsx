import { Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'

interface MotionEffectProps {
  align?: string
  children?: React.ReactNode
}
const MotionEffect = ({ align, children }: MotionEffectProps) => {
  const Motion = motion(Box)

  return (
    <Motion
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      align={align}
      justify="center"
    >
      {children}
    </Motion>
  )
}

export default MotionEffect
