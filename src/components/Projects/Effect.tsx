import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Box } from '@chakra-ui/react'
import React from 'react'
// import { projectsData } from '@/components/Projects/ProjectsData'

interface EffectProps {
  children?: React.ReactNode
}
export default function Effect({ children }: EffectProps) {
  // const projects = projectsData

  const x = useMotionValue(250)
  const y = useMotionValue(150)

  const centeredX = useSpring(
    useTransform(x, (n) => n - 600),
    {
      bounce: 1,
      stiffness: 800,
      damping: 80,
    },
  )
  const centeredY = useSpring(
    useTransform(y, (n) => n - 600),
    {
      bounce: 1,
      stiffness: 800,
      damping: 80,
    },
  )

  const hoverState = useMotionValue(0)
  const hoverOpacity = useSpring(hoverState)

  const rotateX = useSpring(useTransform(y, [0, 300], [-5, 5]), {
    bounce: 1,
    stiffness: 800,
    damping: 80,
  })
  const rotateY = useSpring(useTransform(x, [0, 500], [5, -5]), {
    bounce: 1,
    stiffness: 800,
    damping: 80,
  })

  function handleMouse(event: any) {
    const rect = event.currentTarget.getBoundingClientRect()

    hoverState.set(1)
    x.set(event.clientX - rect.left)
    y.set(event.clientY - rect.top)
  }

  function mouseLeave(event: any) {
    hoverState.set(0)
    x.set(250)
    y.set(150)
  }

  return (
    <Box
      style={{
        display: 'flex',
        placeItems: 'center',
        placeContent: 'center',
        perspective: 400,
      }}
    >
      <motion.div
        onMouseLeave={mouseLeave}
        onMouseMove={handleMouse}
        whileHover={{
          scale: 1.05,
        }}
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: 700,
          height: 400,
          borderRadius: 30,
          backgroundColor: 'transparent',
          boxShadow: '5px 8px 10px rgba(0, 0, 0, 0.1)',
          transition: 'box-shadow 0.2s',
          rotateX,
          rotateY,
          overflow: 'hidden',
        }}
      >
        {children}
        <motion.div
          style={{
            width: 1000,
            height: 600,
            background:
              'radial-gradient(closest-side, rgba(255,255,255,0.2), rgba(255,255,255,0)) 60%',
            opacity: hoverOpacity,
            x: centeredX,
            y: centeredY,
          }}
        ></motion.div>
      </motion.div>
    </Box>
  )
}