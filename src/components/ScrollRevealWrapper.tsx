'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function ScrollRevealWrapper({ children }: { children: React.ReactNode }) {
  const ref = useScrollReveal()
  return <div ref={ref}>{children}</div>
}
