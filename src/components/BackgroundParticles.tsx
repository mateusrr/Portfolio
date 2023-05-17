import React from 'react'
import { Particles } from 'react-tsparticles'

const BackgroundParticles = () => {
  const particleOptions = {
    particles: {
      number: {
        value: 80, // Quantidade de partículas
      },
      size: {
        value: 3, // Tamanho das partículas
      },
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: 'repulse', // Efeito ao passar o mouse sobre as partículas
        },
      },
    },
  }

  return (
    <Particles
      id="background-particles"
      options={particleOptions}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
      }}
    />
  )
}

export default BackgroundParticles
