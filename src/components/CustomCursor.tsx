'use client'

import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef   = useRef<HTMLDivElement>(null)
  const ringRef  = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const dot  = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    // Hide on touch devices — custom cursor is desktop-only
    if (window.matchMedia('(hover: none)').matches) {
      dot.style.display  = 'none'
      ring.style.display = 'none'
      return
    }

    let mouseX = -100, mouseY = window.innerHeight / 2
    let ringX  = -100, ringY  = mouseY
    let raf: number
    let visible = false

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      if (!visible) {
        visible = true
        dot.style.opacity  = '1'
        ring.style.opacity = '1'
      }
    }

    const onLeave = () => {
      dot.style.opacity  = '0'
      ring.style.opacity = '0'
      visible = false
    }
    const onEnter = () => {
      dot.style.opacity  = '1'
      ring.style.opacity = '1'
      visible = true
    }

    const animate = () => {
      dot.style.transform  = `translate(${mouseX - 5}px, ${mouseY - 5}px)`
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12
      ring.style.transform = `translate(${ringX - 20}px, ${ringY - 20}px)`
      raf = requestAnimationFrame(animate)
    }

    document.addEventListener('mousemove',  onMove,  { passive: true })
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)

    raf = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(raf)
      document.removeEventListener('mousemove',  onMove)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
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
          border: '1.5px solid rgba(244, 161, 53, 0.6)',
          boxShadow: '0 0 12px rgba(244,161,53,0.2), inset 0 0 8px rgba(244,161,53,0.05)',
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
          background: '#F4A135',
          boxShadow: '0 0 10px rgba(244,161,53,0.95), 0 0 20px rgba(244,161,53,0.35)',
          pointerEvents: 'none',
          zIndex: 99999,
          opacity: 0,
          transition: 'opacity 0.3s ease',
          willChange: 'transform',
        }}
      />
      {/* cursor:none applied via globals.css */}
    </>
  )
}
