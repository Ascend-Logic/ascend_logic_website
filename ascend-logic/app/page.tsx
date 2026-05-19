import { Metadata } from 'next'
import Hero from '../components/home/Hero'
import Vision from '../components/home/Vision'
import Services from '../components/home/Services'
import Agent from '../components/home/Agent'
import Cases from '../components/home/Cases'
import Company from '../components/home/Company'
import News from '../components/home/News'
import Contact from '../components/home/Contact'
import Reveal from '../components/ui/Reveal'

export const metadata: Metadata = {
  title: 'AIの力で、すべての企業と個人の可能性を解き放つ。',
  description: 'Ascend Logic - オーダーメイドAI開発、プロセス自動化、データ分析、AI導入コンサルティング、自社プロダクト Ascend Agent。最先端のAIソリューションで企業の業務効率化・自動化を実現します。',
}

export default function Home() {
  return (
    <>
      <Hero />
      <Reveal>
        <Vision />
      </Reveal>
      <Reveal>
        <Services />
      </Reveal>
      <Reveal>
        <Agent />
      </Reveal>
      <Reveal>
        <Cases />
      </Reveal>
      <Reveal>
        <Company />
      </Reveal>
      <Reveal>
        <News />
      </Reveal>
      <Reveal>
        <Contact />
      </Reveal>
    </>
  )
}
