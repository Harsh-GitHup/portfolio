import Hero from '@/components/Hero'
import dynamic from 'next/dynamic'
import Contact from '@/components/Contact'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Loader from '@/components/Loader'
import LazySection from '@/components/LazySection'
import { ApiConsole } from '@/components/ApiConsole'
import { SystemArchitecture } from '@/components/SystemArchitecture'

// Client-side lazy loading with a loading component to show loader in SPA
const About = dynamic(() => import('@/components/About'), {
  ssr: false,
  loading: () => <Loader label="Loading about..." />,
})
const Skills = dynamic(() => import('@/components/Skills'), {
  ssr: false,
  loading: () => <Loader label="Loading skills..." />,
})
const Projects = dynamic(() => import('@/components/Projects'), {
  ssr: false,
  loading: () => <Loader label="Loading projects..." />,
})
const Resume = dynamic(() => import('@/components/Resume'), {
  ssr: false,
  loading: () => <Loader label="Loading resume..." />,
})

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <ApiConsole />
      <SystemArchitecture />
      <LazySection label="Loading about..."><About /></LazySection>
      <LazySection label="Loading skills..."><Skills /></LazySection>
      <LazySection label="Loading projects..."><Projects /></LazySection>
      <LazySection label="Loading resume..."><Resume /></LazySection>
      <Contact />
      <Footer />
    </main>
  )
}