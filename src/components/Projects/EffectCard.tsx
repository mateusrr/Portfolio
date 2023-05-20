import { motion, useMotionValue } from 'framer-motion'
import * as React from 'react'
// import ReactDOM from 'react-dom'
// import { Frame, useAnimation, transform } from 'framer'

// const defaultShadow = '0px 10px 30px -5px rgba(0, 0, 0, 0.3)'
// const cardWidth = 500
// const cardHeight = (cardWidth * 1080) / 1920
/* const style = {
  backgroundColor: 'blue',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  boxShadow: defaultShadow,
  border: '15px solid white',
} */

interface CustomCardProps {
  children: React.ReactNode
}

export default function CardEffect({ children }: CustomCardProps) {
  const cardAnimX = useMotionValue(0)
  const cardAnimY = useMotionValue(0)

  const shadowX = cardAnimX.interpolate([-250, 0, 250], [25, 0, -25])
  const shadowY = cardAnimY.interpolate([-150, 0, 150], [25, 0, -25])

  return (
    <motion.div
      style={{
        backgroundColor: 'blue',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        boxShadow: '0px 10px 30px -5px rgba(0, 0, 0, 0.3)',
        border: '15px solid white',
        width: '500px',
        height: 'calc((500px * 1080px) / 1920px)',
        borderRadius: '20px',
        position: 'relative',
        overflow: 'hidden',
        rotateX: cardAnimY.interpolate((y) => -y / 20),
        rotateY: cardAnimX.interpolate((x) => x / 20),
        scale: 1.2,
        boxShadow: shadowX.interpolate(
          (x, y) => `${x}px ${y}px 40px rgba(0, 0, 0, 0.5)`,
        ),
      }}
      onMouseMove={(e) => {
        cardAnimX.set(e.clientX - window.innerWidth / 2)
        cardAnimY.set(e.clientY - window.innerHeight / 2)
      }}
      onMouseLeave={() => {
        cardAnimX.set(0)
        cardAnimY.set(0)
      }}
    >
      {children}
    </motion.div>
  )
}

// todas as linhas comentadas são do card em movimento
// atualizar para adaptar ao projeto
// tag Frame is deprecated.

// other effect
// https://dev.to/arielbk/how-to-make-a-3d-shiny-card-animation-react-ts-and-framer-motion-ijf
// https://codesandbox.io/s/tracking-the-cursor-3d-card-on-hover-forked-dtd4zl?file=/src/Example.jsx
