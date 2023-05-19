import { Card } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import * as React from 'react'
// import ReactDOM from 'react-dom'
// import { Frame, useAnimation, transform } from 'framer'

const MotionCard = motion(Card)

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
  // const cardAnim = useAnimation()
  return (
    /* <div className="App">
      <Frame perspective={1000} center background={null}>
        <Frame
          style={style}
          width={cardWidth}
          height={cardHeight}
          animate={cardAnim}
          center
          borderRadius={20}
          onMouseMove={function(e: { clientX: any; clientY: any }) {
            const { clientX, clientY } = e
            const offsetX = clientX - window.innerWidth / 2
            const offsetY = clientY - window.innerHeight / 2
            const shadowx = transform(offsetX, [-250, 0, 250], [25, 0, -25])
            const shadowy = transform(offsetY, [-150, 0, 150], [25, 0, -25])
            cardAnim.start({
              rotateX: -offsetY / 20,
              rotateY: offsetX / 20,
              scale: 1.2,
              boxShadow: `${shadowx}px ${shadowy}px 40px rgba(0, 0, 0, 0.5)`
            })
          }}
          onMouseLeave={function() {
            cardAnim.start({
              rotateX: 0,
              rotateY: 0,
              scale: 1,
              boxShadow: defaultShadow
            })
          }}
        />
      </Frame>
    </div> */

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

// todas as linhas comentadas são do card em movimento
// atualizar para adaptar ao projeto
// tag Frame is deprecated.

// other effect
// https://dev.to/arielbk/how-to-make-a-3d-shiny-card-animation-react-ts-and-framer-motion-ijf
// https://codesandbox.io/s/tracking-the-cursor-3d-card-on-hover-forked-dtd4zl?file=/src/Example.jsx
