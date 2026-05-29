'use client'

import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef   = useRef<HTMLDivElement>(null)
  const ringRef  = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const dot  = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mouseX = -100, mouseY = -100
    let ringX  = -100, ringY  = -100
    let raf: number

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const animate = () => {
      // Dot follows cursor instantly
      dot.style.transform  = `translate(${mouseX - 5}px, ${mouseY - 5}px)`

      // Ring follows with smooth lag
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12
      ring.style.transform = `translate(${ringX - 20}px, ${ringY - 20}px)`

      raf = requestAnimationFrame(animate)
    }

    const onEnter = () => {
      dot.style.opacity  = '1'
      ring.style.opacity = '1'
    }
    const onLeave = () => {
      dot.style.opacity  = '0'
      ring.style.opacity = '0'
    }

    // Scale ring on clickable elements
    const onDown = () => { ring.style.transform += ' scale(0.7)'; dot.style.transform += ' scale(1.5)' }
    const onUp   = () => {}

    window.addEventListener('mousemove',  onMove,  { passive: true })
    window.addEventListener('mouseenter', onEnter)
    window.addEventListener('mouseleave', onLeave)
    window.addEventListener('mousedown',  onDown)
    window.addEventListener('mouseup',    onUp)

    raf = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove',  onMove)
      window.removeEventListener('mouseenter', onEnter)
      window.removeEventListener('mouseleave', onLeave)
      window.removeEventListener('mousedown',  onDown)
      window.removeEventListener('mouseup',    onUp)
    }
  }, [])

  return (
    <>
      {/* Outer ring */}
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          top: 0, left: 0,
          width: 40, height: 40,
          borderRadius: '50%',
          border: '1.5px solid rgba(0, 229, 255, 0.65)',
          boxShadow: '0 0 12px rgba(0,229,255,0.25), inset 0 0 8px rgba(0,229,255,0.05)',
          pointerEvents: 'none',
          zIndex: 99999,
          opacity: 0,
          transition: 'opacity 0.3s ease',
          willChange: 'transform',
        }}
      />
      {/* Inner dot */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          top: 0, left: 0,
          width: 10, height: 10,
          borderRadius: '50%',
          background: '#00E5FF',
          boxShadow: '0 0 10px rgba(0,229,255,0.9), 0 0 20px rgba(0,229,255,0.4)',
          pointerEvents: 'none',
          zIndex: 99999,
          opacity: 0,
          transition: 'opacity 0.3s ease',
          willChange: 'transform',
        }}
      />
      {/* Hide default cursor globally */}
      <style>{`* { cursor: none !important; }`}</style>
    </>
  )
}
