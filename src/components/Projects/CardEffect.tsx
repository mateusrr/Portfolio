import { Card } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'

const MotionCard = motion(Card)

interface CustomCardProps {
  children: React.ReactNode
}

export default function CardEffect({ children }: CustomCardProps) {
  return (
    <MotionCard
      border="1px solid black"
      whileHover={{
        scale: 1.1,
        rotateX: 10,
        rotateY: 10,
        rotateZ: -2,
        transition: { duration: 0.5 },
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      }}
    >
      {children}
    </MotionCard>
  )
}
