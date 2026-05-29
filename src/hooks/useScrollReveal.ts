'use client'

import { useEffect, useRef } from 'react'

export function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return

    // Find all direct card elements by data-reveal attribute
    const cards = Array.from(container.querySelectorAll<HTMLElement>('[data-reveal]'))

    // Set initial hidden state via inline styles (bypasses CSS module hashing)
    cards.forEach((card) => {
      card.style.opacity = '0'
      card.style.transform = 'translateY(52px) scale(0.97)'
      card.style.transition = 'none'
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            // Get stagger index among siblings
            const siblings = Array.from(
              el.parentElement?.querySelectorAll('[data-reveal]') ?? []
            )
            const idx = siblings.indexOf(el)
            const delay = idx * 0.06

            // Animate in via inline styles — no CSS class needed
            requestAnimationFrame(() => {
              el.style.transition = `opacity 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}s`
              el.style.opacity = '1'
              el.style.transform = 'translateY(0) scale(1)'
            })

            observer.unobserve(el)
          }
        })
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px',
      }
    )

    cards.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return ref
}
