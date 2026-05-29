'use client'

import VideoIntro from '@/components/VideoIntro/VideoIntro'
import WhoIAm from '@/components/Sections/WhoIAm'
import TechnicalSkills from '@/components/Sections/TechnicalSkills'
import Experience from '@/components/Sections/Experience'
import Education from '@/components/Sections/Education'
import ByTheNumbers from '@/components/Sections/ByTheNumbers'
import Projects from '@/components/Sections/Projects'
import Contact from '@/components/Sections/Contact'

export default function Home() {
  return (
    <main>
      <VideoIntro />
      <WhoIAm />
      <TechnicalSkills />
      <Experience />
      <Education />
      <ByTheNumbers />
      <Projects />
      <Contact />
    </main>
  )
}
