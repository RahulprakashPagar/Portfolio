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

    // Set every card to invisible + scaled down initially
    cards.forEach((card) => {
      card.style.opacity = '0'
      card.style.transform = 'scale(0.88) translateY(30px)'
      card.style.transition = 'none'
      card.style.willChange = 'opacity, transform'
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement

            // Small delay for natural feel
            const delay = 0.05

            requestAnimationFrame(() => {
              el.style.transition = `
                opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s,
                transform 0.65s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s
              `
              el.style.opacity = '1'
              el.style.transform = 'scale(1) translateY(0)'
            })

            observer.unobserve(el)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -30px 0px',
      }
    )

    cards.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return ref
}
