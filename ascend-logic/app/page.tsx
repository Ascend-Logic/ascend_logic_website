import { Metadata } from 'next';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import CaseStudyPreview from '../components/home/CaseStudyPreview';
import Section from '../components/ui/Section';
import FadeIn from '../components/ui/FadeIn';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AIによる業務革新',
  description: '最先端のAIソリューションで企業の業務効率化・自動化を実現します',
};

export default function Home() {
  return (
    <>
      <Hero />

      {/* Topics (導入事例 + お知らせ) */}
      <Section className="py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="section-title-en text-4xl font-bold">Topics</h2>
              <p className="text-gray-500 text-[13px] mt-1.5 font-medium">トピックス</p>
            </div>
          </FadeIn>
          <CaseStudyPreview />
          <FadeIn delay={300}>
            <div className="flex justify-center gap-5 mt-10">
              <Link href="/case-studies" className="pill-btn">
                導入事例一覧 <span className="arrow">›</span>
              </Link>
              <Link href="/news" className="pill-btn">
                お知らせ一覧 <span className="arrow">›</span>
              </Link>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* About (サステナビリティ風セクション) */}
      <Section className="py-20 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <FadeIn>
            <div className="text-center mb-12 relative">
              <h2 className="section-title-en text-4xl font-bold">About</h2>
              <p className="text-gray-500 text-[13px] mt-1.5 font-medium">私たちについて</p>
            </div>
          </FadeIn>
          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-3">
              <Link href="/about" className="grid-card group">
                <h3 className="section-title-en text-2xl">Mission</h3>
                <p className="text-xs text-gray-500 mt-1">企業理念</p>
                <span className="grid-card-arrow">›</span>
              </Link>
              <Link href="/about" className="grid-card group">
                <h3 className="section-title-en text-2xl">Company</h3>
                <p className="text-xs text-gray-500 mt-1">会社概要</p>
                <span className="grid-card-arrow">›</span>
              </Link>
              <Link href="/news" className="grid-card group">
                <h3 className="section-title-en text-2xl">News</h3>
                <p className="text-xs text-gray-500 mt-1">お知らせ</p>
                <span className="grid-card-arrow">›</span>
              </Link>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Services (ボーダーグリッド) */}
      <Section className="py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <FadeIn>
            <div className="text-center mb-10 relative">
              <h2 className="section-title-en text-4xl font-bold">Services</h2>
              <p className="text-gray-500 text-[13px] mt-1.5 font-medium">サービス</p>
              <Link href="/services" className="absolute right-0 top-1/2 -translate-y-1/2 text-2xl text-indigo-600 hover:text-indigo-800 transition-colors hidden md:block">
                ›
              </Link>
            </div>
          </FadeIn>
          <Services />
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-20 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-white">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 text-center">
          <FadeIn>
            <h2 className="section-title-en text-3xl md:text-4xl font-bold mb-4">Contact</h2>
            <p className="text-white/50 text-[13px] mb-8 font-medium">お問い合わせ</p>
            <p className="mb-10 max-w-xl mx-auto text-white/70 text-sm leading-relaxed">
              Ascend Logicは、最先端のAIテクノロジーを活用して、<br className="hidden md:block" />
              お客様のビジネス課題を解決します。まずはお気軽にご相談ください。
            </p>
            <Link href="/request-documents" className="pill-btn !border-white/30 !text-white hover:!bg-white/10">
              お問い合わせ <span className="arrow">›</span>
            </Link>
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
