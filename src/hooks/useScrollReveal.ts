'use client'

import { useEffect, useRef } from 'react'

/**
 * Attaches an IntersectionObserver to all .card elements inside the ref'd
 * container and adds the CSS class `visible` once they scroll into view.
 * The observer fires once per element (unobserves after triggering).
 */
export function useScrollReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return

    const cards = container.querySelectorAll<HTMLElement>('[data-reveal]')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            // stagger delay based on index within its parent wrapper
            const siblings = Array.from(el.parentElement?.querySelectorAll('[data-reveal]') ?? [])
            const idx = siblings.indexOf(el)
            el.style.animationDelay = `${idx * 0.08}s`
            el.classList.add('visible')
            observer.unobserve(el)
          }
        })
      },
      { threshold, rootMargin: '0px 0px -60px 0px' }
    )

    cards.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [threshold])

  return ref
}
