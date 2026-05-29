'use client'

import { useEffect, useRef } from 'react'

export default function CinematicLayer() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    let renderer: any, scene: any, camera: any, particles: any
    let animId: number
    let mouse = { x: 0, y: 0 }
    let targetCamera = { x: 0, y: 0 }
    let THREE: any

    const init = async () => {
      const threeModule = await import('three')
      THREE = threeModule

      const canvas = canvasRef.current
      if (!canvas) return

      const W = canvas.offsetWidth || window.innerWidth
      const H = canvas.offsetHeight || window.innerHeight

      // Renderer
      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: false,
        powerPreference: 'high-performance'
      })
      renderer.setSize(W, H)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
      renderer.setClearColor(0x000000, 0)

      // Scene + Camera
      scene = new THREE.Scene()
      camera = new THREE.PerspectiveCamera(60, W / H, 0.1, 1000)
      camera.position.z = 80

      // ── PARTICLE SYSTEM ──
      const COUNT = 280
      const positions = new Float32Array(COUNT * 3)
      const colors = new Float32Array(COUNT * 3)
      const sizes = new Float32Array(COUNT)
      const phases = new Float32Array(COUNT)
      const speeds = new Float32Array(COUNT)

      // Color palette: warm amber, soft white, pale gold
      const palette = [
        new THREE.Color('#F4A135'),   // amber
        new THREE.Color('#FFD580'),   // pale gold
        new THREE.Color('#F0EDE6'),   // warm white
        new THREE.Color('#C4781A'),   // deep amber
        new THREE.Color('#E8C878'),   // champagne
        new THREE.Color('#4A90B8'),   // monitor blue (rare)
      ]

      for (let i = 0; i < COUNT; i++) {
        const i3 = i * 3
        // Spread across a wide 3D volume
        positions[i3]     = (Math.random() - 0.5) * 180
        positions[i3 + 1] = (Math.random() - 0.5) * 110
        positions[i3 + 2] = (Math.random() - 0.5) * 80

        // Color selection — mostly warm, occasionally blue
        const colorIdx = Math.random() < 0.08 ? 5 : Math.floor(Math.random() * 5)
        const c = palette[colorIdx]
        colors[i3]     = c.r
        colors[i3 + 1] = c.g
        colors[i3 + 2] = c.b

        // Varied sizes — most tiny, some larger bokeh
        sizes[i] = Math.random() < 0.15
          ? 2.5 + Math.random() * 3.5   // large bokeh
          : 0.4 + Math.random() * 1.2   // fine particles

        phases[i] = Math.random() * Math.PI * 2
        speeds[i] = 0.12 + Math.random() * 0.25
      }

      const geo = new THREE.BufferGeometry()
      geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
      geo.setAttribute('color', new THREE.BufferAttribute(colors, 3))
      geo.setAttribute('size', new THREE.BufferAttribute(sizes, 1))

      // Create a soft circle texture
      const texSize = 64
      const texCanvas = document.createElement('canvas')
      texCanvas.width = texSize
      texCanvas.height = texSize
      const ctx = texCanvas.getContext('2d')!
      const grad = ctx.createRadialGradient(
        texSize / 2, texSize / 2, 0,
        texSize / 2, texSize / 2, texSize / 2
      )
      grad.addColorStop(0, 'rgba(255,255,255,1)')
      grad.addColorStop(0.3, 'rgba(255,255,255,0.8)')
      grad.addColorStop(0.6, 'rgba(255,255,255,0.3)')
      grad.addColorStop(1, 'rgba(255,255,255,0)')
      ctx.fillStyle = grad
      ctx.fillRect(0, 0, texSize, texSize)
      const texture = new THREE.CanvasTexture(texCanvas)

      const mat = new THREE.PointsMaterial({
        size: 2,
        sizeAttenuation: true,
        vertexColors: true,
        map: texture,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        opacity: 0.65
      })

      particles = new THREE.Points(geo, mat)
      scene.add(particles)

      // Mouse parallax
      const onMouse = (e: MouseEvent) => {
        mouse.x = (e.clientX / window.innerWidth  - 0.5) * 2
        mouse.y = (e.clientY / window.innerHeight - 0.5) * 2
      }
      const onTouch = (e: TouchEvent) => {
        const t = e.touches[0]
        mouse.x = (t.clientX / window.innerWidth  - 0.5) * 2
        mouse.y = (t.clientY / window.innerHeight - 0.5) * 2
      }
      window.addEventListener('mousemove', onMouse, { passive: true })
      window.addEventListener('touchmove', onTouch, { passive: true })

      // Resize
      const onResize = () => {
        const w = window.innerWidth
        const h = window.innerHeight
        renderer.setSize(w, h)
        camera.aspect = w / h
        camera.updateProjectionMatrix()
      }
      window.addEventListener('resize', onResize)

      // Animate
      let t = 0
      const posArr = geo.attributes.position.array as Float32Array

      const animate = () => {
        animId = requestAnimationFrame(animate)
        t += 0.008

        for (let i = 0; i < COUNT; i++) {
          const i3 = i * 3
          const phase = phases[i]
          const speed = speeds[i]

          // Slow sine-wave float
          posArr[i3 + 1] += Math.sin(t * speed + phase) * 0.018
          posArr[i3]     += Math.cos(t * speed * 0.7 + phase) * 0.008

          // Very slow vertical drift
          posArr[i3 + 1] += 0.008

          // Wrap Y
          if (posArr[i3 + 1] > 60) posArr[i3 + 1] = -60
          if (posArr[i3 + 1] < -60) posArr[i3 + 1] = 60
        }
        geo.attributes.position.needsUpdate = true

        // Smooth camera parallax
        targetCamera.x += (mouse.x * 6 - targetCamera.x) * 0.04
        targetCamera.y += (-mouse.y * 4 - targetCamera.y) * 0.04
        camera.position.x = targetCamera.x
        camera.position.y = targetCamera.y

        // Very slow particle cloud rotation
        particles.rotation.y = Math.sin(t * 0.05) * 0.08
        particles.rotation.x = Math.sin(t * 0.03) * 0.04

        renderer.render(scene, camera)
      }

      animate()

      // Cleanup fn
      ;(canvas as any)._cleanup = () => {
        cancelAnimationFrame(animId)
        window.removeEventListener('mousemove', onMouse)
        window.removeEventListener('touchmove', onTouch)
        window.removeEventListener('resize', onResize)
        geo.dispose()
        mat.dispose()
        texture.dispose()
        renderer.dispose()
      }
    }

    init()

    return () => {
      const canvas = canvasRef.current
      if (canvas && (canvas as any)._cleanup) {
        (canvas as any)._cleanup()
      } else {
        cancelAnimationFrame(animId)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none'
      }}
    />
  )
}
