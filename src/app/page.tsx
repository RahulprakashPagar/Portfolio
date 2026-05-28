'use client'

import VideoIntro from '@/components/VideoIntro/VideoIntro'
import ProjectsSection from '@/components/ProjectsSection/ProjectsSection'
import StatsSection from '@/components/StatsSection/StatsSection'

export default function Home() {
  return (
    <main>
      <VideoIntro />
      <StatsSection />
      <ProjectsSection />
    </main>
  )
}
