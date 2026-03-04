import HeroV7 from '@/components/HeroV7-DynamicCards'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Timeline from '@/components/Timeline'
import MoreToExplore from '@/components/MoreToExplore'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <>
      <HeroV7 />
      <About />
      <Projects />
      <Skills />
      <Timeline />
      <MoreToExplore />
      <Contact />
    </>
  )
}
