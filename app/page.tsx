import CoreSkills from '@/components/CoreSkills'
import FeaturedTriPanel from '@/components/FeaturedTriPanel'
import Hero from '@/components/Hero'
import HomeMotion from '@/components/HomeMotion'
import HomeDemoReel from '@/components/HomeDemoReel'
import StudioHighlight from '@/components/StudioHighlight'

export default function Home() {
  return (
    <>
      <HomeMotion />
      <Hero />
      <div className="mx-auto w-full max-w-[1200px] px-6 md:px-10 lg:px-16">
        <CoreSkills />
        <HomeDemoReel />
        <FeaturedTriPanel />
        <StudioHighlight />
      </div>
    </>
  )
}
