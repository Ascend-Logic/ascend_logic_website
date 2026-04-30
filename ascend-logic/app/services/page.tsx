import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageHero from '../../components/ui/PageHero';
import FadeIn from '../../components/ui/FadeIn';

export const metadata: Metadata = {
  title: 'サービス',
  description: 'Ascend Logicが提供するAIソリューション、プロセス自動化、データ分析サービスのご紹介',
};

export default function Services() {
  const services = [
    {
      number: '01',
      title: 'オーダーメイドAI開発',
      titleBreak: 'オーダーメイド\nAI開発',
      description: '汎用AIソリューションでは解決できない高度なビジネス課題に対して、独自のAIシステムを設計・開発します。業界特性や業務フローを深く理解し、最先端のAI技術と実務知識を融合させた実用的なソリューションを提供します。',
      image: '/images/ai-development.jpg',
      features: [
        { id: '01', title: '最適なアーキテクチャ設計', description: '経験豊富なAIエンジニアが、最適なアーキテクチャを設計します。幅広い知識と経験を持つ弊社だからこそ、数あるアーキテクチャ・モデルの中から、精度・処理速度・拡張性を考慮した最適解を短時間で導きます。' },
        { id: '02', title: '最適なモデル選定・改善', description: '複数のプロトタイプを検証し、ニーズに最適なモデルを選定・チューニングします。仮運用を通して、モデルの精度向上、運用時の負荷削減を両立させ、実用性の高いAIへと進化させます。' },
        { id: '03', title: '現場定着をサポート', description: '現場で「使われるAI」になるよう、業務フロー適応やUI / UXの改善をお手伝いします。さらに、継続的に蓄積される運用データの活用により、導入後も更なるAIモデルの精度向上を実現します。' },
      ],
    },
    {
      number: '02',
      title: 'プロセス自動化',
      titleBreak: 'プロセス自動化',
      description: '反復的な業務プロセスをAIで自動化し、業務効率化とコスト削減を実現します。人間の判断が必要な複雑なプロセスも、AIの導入により大幅な効率化が可能です。RPAとAIの組み合わせにより、高度な自動化を実現します。',
      image: '/images/process-automation.jpg',
      features: [
        { id: '01', title: '業務プロセス分析', description: 'ビジネスアナリストとAIエンジニアが連携し、現行の業務プロセスを徹底的に分析。自動化による効果が高い領域を特定し、ROIを最大化する自動化計画を策定します。' },
        { id: '02', title: 'ハイブリッド型自動化', description: 'RPAとAIを組み合わせたハイブリッド型自動化を実現。既存システムとの統合性を重視し、運用コストを最小限に抑えつつ、高度な自動化を実現します。' },
        { id: '03', title: '段階的導入と継続的改善', description: '一気に全てを自動化するのではなく、段階的な導入計画を策定。パイロット運用の結果を反映させながら継続的に改善を行い、安定した運用を実現します。' },
      ],
    },
    {
      number: '03',
      title: 'データ分析・予測',
      titleBreak: 'データ分析・予測',
      description: '蓄積されたデータから価値ある洞察を抽出し、将来予測と意思決定をサポートします。膨大なデータを活用し、ビジネス課題を解決する具体的な示唆を得ることができます。データの質と量に合わせた最適な分析手法を選定します。',
      image: '/images/ai-development.jpg',
      features: [
        { id: '01', title: 'データ収集・前処理の最適化', description: '分析に必要なデータの収集から前処理までを最適化。データの質と量を両立させ、分析精度を高めるための基盤を構築します。' },
        { id: '02', title: '高精度予測モデルの構築', description: '統計的手法と機械学習を組み合わせた高精度な予測モデルを構築。ビジネス特性に応じた最適なアルゴリズムを選定し、実用的な予測を実現します。' },
        { id: '03', title: '直感的なデータ可視化', description: '複雑なデータ分析結果を直感的に理解できるダッシュボードを開発。意思決定者がデータに基づいた判断を行えるよう、使いやすいインターフェースを設計します。' },
      ],
    },
    {
      number: '04',
      title: 'AI導入コンサルティング',
      titleBreak: 'AI導入\nコンサルティング',
      description: 'AIの導入戦略から人材育成まで、組織全体のAI活用能力向上を支援します。経営目標達成に向けた最適なAI活用ロードマップを策定します。業界特性や組織文化を考慮した実践的なアドバイスを提供します。',
      image: '/images/ai_consulting.jpg',
      features: [
        { id: '01', title: '経営戦略とAI戦略の統合', description: '企業の経営戦略とAI戦略を統合。経営目標達成に向けた具体的なAI活用ロードマップを策定し、投資対効果を最大化します。' },
        { id: '02', title: 'データガバナンス体制構築', description: 'AIの基盤となるデータガバナンス体制を構築。データの収集・管理・活用に関する方針と仕組みを整備し、持続可能なAI活用を支援します。' },
        { id: '03', title: 'AI人材育成プログラム', description: '組織内のAI人材を育成するためのプログラムを提供。エンジニアだけでなく、ビジネス部門や経営層までを対象とした、体系的な教育プログラムを実施します。' },
      ],
    },
  ];

  return (
    <>
      <PageHero
        titleEn="Services"
        titleJa="サービス"
        description="最先端のAI技術を活用した多様なサービスを提供しています。お客様のビジネス課題に合わせたソリューションをご提案します。"
      />

      {services.map((service, index) => (
        <div key={service.number}>
          {/* サービス紹介セクション */}
          <section className="border-t border-gray-200 py-20">
            <div className="max-w-[1200px] mx-auto px-6 md:px-10">
              <FadeIn>
                <div className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-10 md:gap-16`}>
                  <div className="md:w-1/2">
                    <span className="section-title-en text-sm text-gray-400 tracking-widest mb-3 block">{service.number}</span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 whitespace-pre-line">{service.titleBreak}</h2>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                  <div className="md:w-1/2">
                    <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden relative">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </section>

          {/* 特徴セクション */}
          <section className="py-20 bg-gray-50 border-t border-gray-200">
            <div className="max-w-[1200px] mx-auto px-6 md:px-10">
              <FadeIn>
                <h3 className="section-title-en text-center text-sm text-gray-400 tracking-widest mb-2">Approach</h3>
                <p className="text-center text-xl font-bold mb-14">独自のアプローチ</p>
              </FadeIn>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {service.features.map((feature, fIndex) => (
                  <FadeIn key={feature.id} delay={fIndex * 100}>
                    <div className="text-center">
                      <span className="section-title-en text-3xl font-bold text-gray-200 block mb-4">{feature.id}</span>
                      <h4 className="text-lg font-bold mb-4">{feature.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </section>
        </div>
      ))}

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]" />
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 text-center">
          <FadeIn>
            <h2 className="section-title-en text-2xl md:text-3xl text-white mb-4">Contact Us</h2>
            <p className="text-white/60 text-sm md:text-base max-w-2xl mx-auto mb-10 leading-relaxed">
              どのようなビジネス課題でも、まずはお気軽にご相談ください。
              専門のコンサルタントが貴社の状況をヒアリングし、最適なソリューションをご提案いたします。
            </p>
            <Link href="/request-documents" className="pill-btn !border-white/30 !text-white hover:!bg-white/10">
              お問い合わせ
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
