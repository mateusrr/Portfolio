'use client'

// import { chakra } from '@chakra-ui/react'
import { motion, useAnimation, useInView } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'

interface ScrollRevealProps {
  children: React.ReactNode
}

export default function ScrollReveal({ children }: ScrollRevealProps) {
  // const MotionBox = chakra(motion.div)
  const ref = useRef(null)
  const controls = useAnimation()
  const isInView = useInView(ref, { once: false })

  const [scrollDir, setScrollDir] = useState<'up' | 'down'>('down')
  const lastScrollY = useRef(0)

  useEffect(() => {
    const updateScrollDir = () => {
      const currentScrollY = window.scrollY
      const direction = currentScrollY > lastScrollY.current ? 'down' : 'up'
      setScrollDir(direction)
      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', updateScrollDir)
    return () => window.removeEventListener('scroll', updateScrollDir)
  }, [])

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    } else {
      controls.set('hidden')
    }
  }, [isInView, controls, scrollDir])

  const variants = {
    hidden: {
      opacity: 0,
      y: scrollDir === 'down' ? 50 : -50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      // px={{ base: 4, md: 0 }}
    >
      {children}
    </motion.div>
  )
}
