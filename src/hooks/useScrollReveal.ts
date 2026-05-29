'use client'

import { useEffect, useRef } from 'react'

export function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return

    const cards = Array.from(
      container.querySelectorAll<HTMLElement>('[data-reveal]')
    )

    const setHidden = (el: HTMLElement) => {
      el.style.transition = 'none'
      el.style.opacity = '0'
      el.style.transform = 'scale(0.88) translateY(28px)'
    }

    const setVisible = (el: HTMLElement) => {
      // Force reflow so transition fires after state reset
      void el.offsetHeight
      el.style.transition = 'opacity 0.6s cubic-bezier(0.16,1,0.3,1) 0.04s, transform 0.6s cubic-bezier(0.16,1,0.3,1) 0.04s'
      el.style.opacity = '1'
      el.style.transform = 'scale(1) translateY(0)'
    }

    // Start all hidden
    cards.forEach(setHidden)

    // Re-trigger animation every time card enters OR leaves viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(entry.target as HTMLElement)
          } else {
            // Reset when card scrolls out — so it re-animates next time
            setHidden(entry.target as HTMLElement)
          }
        })
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -20px 0px',
      }
    )

    cards.forEach((card) => observer.observe(card))
    return () => observer.disconnect()
  }, [])

  return ref
}
