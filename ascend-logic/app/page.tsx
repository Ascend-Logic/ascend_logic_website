import { Metadata } from 'next';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import CaseStudyPreview from '../components/home/CaseStudyPreview';
import Section from '../components/ui/Section';
import { Button } from '../components/ui/Button';

export const metadata: Metadata = {
  title: 'AIによる業務革新',
  description: '最先端のAIソリューションで企業の業務効率化・自動化を実現します',
};

export default function Home() {
  return (
    <>
      <Hero
        title="AI時代の<br />ビジネス変革"
        subtitle="最先端のAIテクノロジーで、あなたのビジネスを次のレベルへ"
        ctaText="お問い合わせはこちら"
        ctaLink="/request-documents"
      />

      <Section className="py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">サービス</h2>
          <Services />
          <div className="text-center mt-10">
            <Button href="/services">サービス一覧を見る</Button>
          </div>
        </div>
      </Section>

      <Section className="py-20 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">導入事例</h2>
          <CaseStudyPreview />
          <div className="text-center mt-10">
            <Button href="/case-studies">すべての事例を見る</Button>
          </div>
        </div>
      </Section>

      <Section className="py-20 bg-indigo-900 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">AIの力で、ビジネスの可能性を広げましょう</h2>
          <p className="mb-10 max-w-2xl mx-auto">
            Ascend Logicは、最先端のAIテクノロジーを活用して、お客様のビジネス課題を解決します。
            まずはお気軽にお問い合わせください。
          </p>
          <div className="flex justify-center gap-4">
            <Button href="/request-documents" variant="white">お問い合わせ</Button>
            {/* <Button href="/request-documents" variant="outline">お問い合わせ</Button> */}
          </div>
        </div>
      </Section>
    </>
  );
}
