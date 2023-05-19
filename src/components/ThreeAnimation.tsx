import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

const ThreeAnimation = () => {
  const canvasRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return
    // Configuração da cena
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    )
    camera.position.z = 5

    // Renderizador
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0x000000, 0) // Define o fundo transparente
    canvasRef.current.appendChild(renderer.domElement)

    // Geometria e material
    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
    const cube = new THREE.Mesh(geometry, material)
    scene.add(cube)

    // Animação
    const animate = () => {
      requestAnimationFrame(animate)

      cube.rotation.x += 0.01
      cube.rotation.y += 0.01

      renderer.render(scene, camera)
    }

    animate()

    // Limpeza
    return () => {
      renderer.dispose()
    }
  }, [])

  return (
    <div
      ref={canvasRef}
      style={{ position: 'absolute', width: 0, height: 0 }}
    />
  )
}

export default ThreeAnimation
