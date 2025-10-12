import { Metadata } from 'next';
import Section from '../../components/ui/Section';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Service } from '../../types';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'サービス',
  description: 'Ascend Logicが提供するAIソリューション、プロセス自動化、データ分析サービスのご紹介',
};

export default function Services() {
  const services: Service[] = [
    {
      id: 1,
      title: 'オーダーメイドAI開発',
      description: '幅広い業界・ビジネス領域を対象に、SaaSなどの汎用ソリューションでは解決が難しい課題に対し、オーダーメイドAIの設計・開発を行います。最適なアーキテクチャとモデル選定を通じ、実用性の高いAIを構築します。',
      features: [
        'ビジネス課題分析と最適なAI技術選定',
        'データ収集・前処理・モデル構築',
        'システム統合とAPI開発',
        '継続的な精度改善と保守',
      ],
      icon: '01',
    },
    {
      id: 2,
      title: 'プロセス自動化',
      description: '反復的な業務プロセスをAIで自動化し、業務効率化とコスト削減を実現します。人間の判断が必要な複雑なプロセスも、AIの導入により大幅な効率化が可能です。',
      features: [
        '業務プロセス分析と自動化可能領域特定',
        'RPA開発と導入',
        '自然言語処理による文書処理自動化',
        '画像認識技術による検査・確認作業自動化',
      ],
      icon: '02',
    },
    {
      id: 3,
      title: 'データ分析・予測',
      description: '蓄積されたデータから価値ある洞察を抽出し、将来予測と意思決定をサポートします。膨大なデータを活用し、ビジネス課題を解決する具体的な示唆を得ることができます。',
      features: [
        'ビッグデータ分析基盤構築',
        '需要予測モデル開発',
        '異常検知システム構築',
        'ダッシュボード開発とデータ可視化',
      ],
      icon: '03',
    },
    {
      id: 4,
      title: 'AI導入コンサルティング',
      description: 'AIの導入戦略から人材育成まで、組織全体のAI活用能力向上を支援します。経営目標達成に向けた最適なAI活用ロードマップを策定します。',
      features: [
        'AI導入ロードマップ策定',
        'データ戦略コンサルティング',
        'AI人材育成プログラム',
        '経営層向けAIリテラシー研修',
      ],
      icon: '04',
    },
  ];

  // サービスごとの特徴
  const serviceFeatures = [
    [
      {
        id: '01',
        title: '最適なアーキテクチャ設計',
        description: '経験豊富なAIエンジニアが、最適なアーキテクチャを設計します。幅広い知識と経験を持つ弊社だからこそ、数あるアーキテクチャ・モデルの中から、精度・処理速度・拡張性を考慮した最適解を短時間で導きます。'
      },
      {
        id: '02',
        title: '最適なモデル選定・改善',
        description: '複数のプロトタイプを検証し、ニーズに最適なモデルを選定・チューニングします。仮運用を通して、モデルの精度向上、運用時の負荷削減を両立させ、実用性の高いAIへと進化させます。'
      },
      {
        id: '03',
        title: '現場定着をサポート',
        description: '現場で「使われるAI」になるよう、業務フロー適応やUI / UXの改善をお手伝いします。さらに、継続的に蓄積される運用データの活用により、導入後も更なるAIモデルの精度向上を実現します。'
      }
    ],
    [
      {
        id: '01',
        title: '業務プロセス分析',
        description: 'ビジネスアナリストとAIエンジニアが連携し、現行の業務プロセスを徹底的に分析。自動化による効果が高い領域を特定し、ROIを最大化する自動化計画を策定します。'
      },
      {
        id: '02',
        title: 'ハイブリッド型自動化',
        description: 'RPAとAIを組み合わせたハイブリッド型自動化を実現。既存システムとの統合性を重視し、運用コストを最小限に抑えつつ、高度な自動化を実現します。'
      },
      {
        id: '03',
        title: '段階的導入と継続的改善',
        description: '一気に全てを自動化するのではなく、段階的な導入計画を策定。パイロット運用の結果を反映させながら継続的に改善を行い、安定した運用を実現します。'
      }
    ],
    [
      {
        id: '01',
        title: 'データ収集・前処理の最適化',
        description: '分析に必要なデータの収集から前処理までを最適化。データの質と量を両立させ、分析精度を高めるための基盤を構築します。'
      },
      {
        id: '02',
        title: '高精度予測モデルの構築',
        description: '統計的手法と機械学習を組み合わせた高精度な予測モデルを構築。ビジネス特性に応じた最適なアルゴリズムを選定し、実用的な予測を実現します。'
      },
      {
        id: '03',
        title: '直感的なデータ可視化',
        description: '複雑なデータ分析結果を直感的に理解できるダッシュボードを開発。意思決定者がデータに基づいた判断を行えるよう、使いやすいインターフェースを設計します。'
      }
    ],
    [
      {
        id: '01',
        title: '経営戦略とAI戦略の統合',
        description: '企業の経営戦略とAI戦略を統合。経営目標達成に向けた具体的なAI活用ロードマップを策定し、投資対効果を最大化します。'
      },
      {
        id: '02',
        title: 'データガバナンス体制構築',
        description: 'AIの基盤となるデータガバナンス体制を構築。データの収集・管理・活用に関する方針と仕組みを整備し、持続可能なAI活用を支援します。'
      },
      {
        id: '03',
        title: 'AI人材育成プログラム',
        description: '組織内のAI人材を育成するためのプログラムを提供。エンジニアだけでなく、ビジネス部門や経営層までを対象とした、体系的な教育プログラムを実施します。'
      }
    ]
  ];

  return (
    <>
      <Section className="py-20 bg-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">サービス</h1>
          <p className="text-xl max-w-3xl">
            Ascend Logicでは、最先端のAI技術を活用した多様なサービスを提供しています。
            お客様のビジネス課題に合わせたソリューションをご提案します。
          </p>
        </div>
      </Section>

      {/* オーダーメイドAI開発 */}
      <section className="border-t border-b border-gray-200 py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12">
            <div className="text-indigo-600 mb-4 flex items-center">
              <div className="w-2 h-2 rounded-full bg-indigo-600 mr-2"></div>
              <span>01</span>
            </div>
            <h2 className="text-4xl font-bold mb-6">オーダーメイド<br />AI開発</h2>
            <p className="text-gray-600 mb-8">
              汎用AIソリューションでは解決できない高度なビジネス課題に対して、
              独自のAIシステムを設計・開発します。業界特性や業務フローを深く理解し、
              最先端のAI技術と実務知識を融合させた実用的なソリューションを提供します。
            </p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <div className="aspect-video bg-gray-100 rounded-lg shadow-lg overflow-hidden relative">
              <Image
                src="/images/ai-development.jpg" // 画像のパスを指定
                alt="オーダーメイドAI開発"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* オーダーメイドAI開発の特徴 */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold relative inline-block">
              独自のアプローチ
              <div className="absolute left-0 right-0 -bottom-4 h-0.5 bg-gray-200"></div>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="text-3xl font-bold mb-6">01</div>
              <h3 className="text-xl font-bold mb-4">革新的アーキテクチャ構築</h3>
              <p className="text-gray-600">
                経験豊富なAIアーキテクトが、ビジネス要件と技術的制約を考慮した最適なシステム設計を行います。
                複数のAIモデルの組み合わせや独自アルゴリズムの開発により、汎用AIでは実現できない高度な機能を実現します。
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-6">02</div>
              <h3 className="text-xl font-bold mb-4">精度と効率の最適化</h3>
              <p className="text-gray-600">
                貴社の独自データを活用した精度の高いAIモデルを構築。複数のプロトタイプ検証と徹底的なチューニングにより、
                処理速度・精度・リソース効率のバランスが取れた、コスト効率の高いシステムを実現します。
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-6">03</div>
              <h3 className="text-xl font-bold mb-4">ビジネス価値の創出</h3>
              <p className="text-gray-600">
                単なる技術導入ではなく、継続的なビジネス価値創出を重視。ユーザー体験の最適化と運用フローへの統合を徹底し、
                実際に「使われる」AIシステムを構築。導入後も継続的な改善サポートでROIを最大化します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* プロセス自動化 */}
      <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row-reverse items-center">
          <div className="md:w-1/2 md:pl-12">
            <div className="text-indigo-600 mb-4 flex items-center">
              <div className="w-2 h-2 rounded-full bg-indigo-600 mr-2"></div>
              <span>02</span>
            </div>
            <h2 className="text-4xl font-bold mb-6">プロセス自動化</h2>
            <p className="text-gray-600 mb-8">
              反復的な業務プロセスをAIで自動化し、業務効率化とコスト削減を実現します。
              人間の判断が必要な複雑なプロセスも、AIの導入により大幅な効率化が可能です。
              RPAとAIの組み合わせにより、高度な自動化を実現します。
            </p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <div className="aspect-video bg-gray-100 rounded-lg shadow-lg overflow-hidden relative">
              <Image
                src="/images/process-automation.jpg"
                alt="プロセス自動化"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* プロセス自動化の特徴 */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold relative inline-block">
              独自のアプローチ
              <div className="absolute left-0 right-0 -bottom-4 h-0.5 bg-gray-200"></div>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {serviceFeatures[1].map((feature) => (
              <div key={feature.id} className="text-center">
                <div className="text-3xl font-bold mb-6">{feature.id}</div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* データ分析・予測 */}
      <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12">
            <div className="text-indigo-600 mb-4 flex items-center">
              <div className="w-2 h-2 rounded-full bg-indigo-600 mr-2"></div>
              <span>03</span>
            </div>
            <h2 className="text-4xl font-bold mb-6">データ分析・予測</h2>
            <p className="text-gray-600 mb-8">
              蓄積されたデータから価値ある洞察を抽出し、将来予測と意思決定をサポートします。
              膨大なデータを活用し、ビジネス課題を解決する具体的な示唆を得ることができます。
              データの質と量に合わせた最適な分析手法を選定します。
            </p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <div className="aspect-video bg-gray-100 rounded-lg shadow-lg overflow-hidden relative">
              <Image
                src="/images/ai-development.jpg"
                alt="データ分析・予測"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* データ分析・予測の特徴 */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold relative inline-block">
              独自のアプローチ
              <div className="absolute left-0 right-0 -bottom-4 h-0.5 bg-gray-200"></div>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {serviceFeatures[2].map((feature) => (
              <div key={feature.id} className="text-center">
                <div className="text-3xl font-bold mb-6">{feature.id}</div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI導入コンサルティング */}
      <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row-reverse items-center">
          <div className="md:w-1/2 md:pl-12">
            <div className="text-indigo-600 mb-4 flex items-center">
              <div className="w-2 h-2 rounded-full bg-indigo-600 mr-2"></div>
              <span>04</span>
            </div>
            <h2 className="text-4xl font-bold mb-6">AI導入<br />コンサルティング</h2>
            <p className="text-gray-600 mb-8">
              AIの導入戦略から人材育成まで、組織全体のAI活用能力向上を支援します。
              経営目標達成に向けた最適なAI活用ロードマップを策定します。
              業界特性や組織文化を考慮した実践的なアドバイスを提供します。
            </p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <div className="aspect-video bg-gray-100 rounded-lg shadow-lg overflow-hidden relative">
              <Image
                src="/images/ai_consulting.jpg"
                alt="AI導入コンサルティング"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* AI導入コンサルティングの特徴 */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold relative inline-block">
              独自のアプローチ
              <div className="absolute left-0 right-0 -bottom-4 h-0.5 bg-gray-200"></div>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {serviceFeatures[3].map((feature) => (
              <div key={feature.id} className="text-center">
                <div className="text-3xl font-bold mb-6">{feature.id}</div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section className="py-20 bg-indigo-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">お客様に最適なAIソリューションをご提案します</h2>
          <p className="text-lg mb-10 max-w-3xl mx-auto">
            どのようなビジネス課題でも、まずはお気軽にご相談ください。
            専門のコンサルタントが貴社の状況をヒアリングし、最適なソリューションをご提案いたします。
          </p>
          <div className="flex justify-center gap-4">
            {/* <Button href="/contact">お問い合わせ</Button> */}
            <Button href="/request-documents" variant="outline">資料請求</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
