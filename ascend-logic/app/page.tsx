import { Metadata } from 'next'
import Hero from '../components/home/Hero'
import Vision from '../components/home/Vision'
import Services from '../components/home/Services'
import Agent from '../components/home/Agent'
import Company from '../components/home/Company'
import News from '../components/home/News'
import Contact from '../components/home/Contact'
import Reveal from '../components/ui/Reveal'

export const metadata: Metadata = {
  title: 'AIの力で、すべての企業と個人の可能性を解き放つ。',
  description: '株式会社Ascend Logic（アセンドロジック） - オーダーメイドAI開発、プロセス自動化、データ分析、AI導入コンサルティング、自社プロダクト Ascend Agent（アセンドエージェント）。最先端のAIソリューションで企業の業務効率化・自動化を実現します。',
  keywords: 'アセンドロジック, 株式会社Ascend Logic, Ascend Logic, アセンドエージェント, アセンド・エージェント, Ascend Agent, AIソリューション, オーダーメイドAI開発, プロセス自動化, データ分析, AI導入コンサルティング, AI議事録, AIアシスタント',
}

export default function Home() {
  // ナンバリングはここの順序で動的に算出される (01 始まり)。
  const sections = [Vision, Services, Agent, Company, News, Contact]

  return (
    <>
      <Hero />
      {sections.map((Section, i) => (
        <Reveal key={i}>
          <Section index={i + 1} />
        </Reveal>
      ))}
    </>
  )
}
