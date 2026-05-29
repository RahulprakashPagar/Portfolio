'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function ScrollRevealWrapper({ children }: { children: React.ReactNode }) {
  const ref = useScrollReveal(0.1)
  return <div ref={ref}>{children}</div>
}
